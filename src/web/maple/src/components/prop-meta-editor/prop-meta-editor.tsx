
import type { PropMeta } from "@/core/view/prop-meta";
import { useComponentMetaStore } from "@/stores/component-meta";
import { createSpaceM } from "@/utils/space";
import { defineComponent } from "vue";
import { PropMetaType } from "@/core/prop-meta-type";
import { storeToRefs } from "pinia";



const [ bem, name ] = createSpaceM('prop-meta-editor');

export default defineComponent({
  name,
  setup(){
    const options = PropMetaType.ToOptions();

    const { componentMeta } = storeToRefs(useComponentMetaStore());

    const onAdd = () => componentMeta.value.addPropMeta();

    const onAddSibling = (item: PropMeta) => componentMeta.value.addPropMeta(item);

    const onDelete = (item: PropMeta) => componentMeta.value.deletePropMeta(item);

    const onAddChild = (item: PropMeta) => componentMeta.value.addChildPropMeta(item);

    const onToggleOpen = (item: PropMeta) => item.isOpen = !item.isOpen;

    const renderPlaceholder = () => {
      if (componentMeta.value.hasPropMetas) return;
      return (
        <div class={bem('placeholder')} >
          <div class={bem('placeholder-container')} onClick={ onAdd }>
            <icon-plus size="50" />
            <span class="h-m-t-20">AddPropMeta</span>
          </div>
        </div>
      )
    };

    const renderPropMetas = () => {
      if (!componentMeta.value.hasPropMetas) return;
      return componentMeta.value.propMetas.map((propMeta) => renderItem(propMeta));
    };

    const renderPrefix = (item: PropMeta) => (
      <div class={ bem('item-prefix', { open: item.isOpen }) } onClick={() => onToggleOpen(item)}>
        { item.isComplex && item.hasChildren && <icon-caret-right /> }
      </div>
    );

    const renderName = (item: PropMeta) => (
      <div class={ bem('item-name') }>
        <h-input vModel={ item.name } placeholder="please enter prop name"  error={ item.isError }/>
      </div>
    );

    const renderRequired = (item: PropMeta) => (
      <div class={ bem('item-required')}>
        <h-checkbox vModel={ item.required } />
      </div>
    );

    const renderType = (item: PropMeta) => {
      const opts = options.map(option => (
        <h-option value={ option.value }>{option.title}</h-option>
      ));
      return (
        <div class={ bem('item-type') }>
          <h-select vModel={ item.type }>{ opts }</h-select>
        </div>
      );
    };
  
    const renderAction = (item: PropMeta) => (
      <div class={ bem('item-action') }>
        <h-space>
          <icon-plus onClick={() => onAddSibling(item) }/>
          <icon-delete onClick = { () => onDelete(item) }/>
          { item.isComplex && <icon-branch onClick= { () => onAddChild(item) }/> }
        </h-space>
      </div>
    );

    const renderChildren = (item: PropMeta) => {
      if (!item.isOpen) return;
      return item.children.map((child) => renderItem(child));
    };

    const renderItem = (item: PropMeta) => (
      <div class={ bem('item') }>
        <div class={ bem('item-header') }>
          { renderPrefix(item) }
          { renderName(item) }
          { renderRequired(item) }
          { renderType(item) }
          { renderAction(item) }
        </div>
        <div class={ bem('item-body') }>
          { renderChildren(item) }
        </div>
      </div>
    );

    return () => (
      <div class={bem()}>
        {renderPlaceholder()}
        {renderPropMetas()}
      </div>
    )
  }
})