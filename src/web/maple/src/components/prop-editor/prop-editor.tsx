import { PropMeta } from "@/core/prop-meta";
import { PropMetaType } from "@/core/prop-meta-type";
import { createSpaceM } from "@/utils/space";
import { defineComponent } from "vue";

const [ bem, name ] = createSpaceM('prop-meta-editor');

export default defineComponent({
  name,
  props:{
    item:{
      required: true,
      type: PropMeta
    }
  },
  setup(props){
    const options = PropMetaType.ToOptions();

    const renderPrefix = (item: PropMeta) => (
      <div class={ bem('prefix') }>
        { item.type === PropMetaType.Object.value && <icon-caret-right /> }
      </div>
    );

    const renderName = (item: PropMeta) => (
      <div class={ bem('name') }>
        <h-input vModel={ item.name } placeholder="please enter prop name" />
      </div>
    );

    const renderRequired = (item: PropMeta) => (
      <div class={ bem('required')}>
        <h-checkbox vModel={ item.required } />
      </div>
    )

    const renderType = (item: PropMeta) => (
      <div class={ bem('type') }>
        <h-select vModel={ item.type }>
          {
            options.map(option => (
              <h-option value={ option.value }>{option.title}</h-option>
            ))
          }
        </h-select>
      </div>
    );

    const renderAction = (item: PropMeta) => (
      <div class={ bem('action') }>
        <h-space>
          <icon-plus />
          <icon-delete />
          { item.type === PropMetaType.Object.value && <icon-branch /> }
        </h-space>
      </div>
    );

    const renderChildren = (item: PropMeta) => {
      return item.children.map((child) => renderItem(child));
    };

    const renderItem = (item: PropMeta) => (
      <div class={ bem() }>
        <div class={ bem('header') }>
          { renderPrefix(item) }
          { renderName(item) }
          { renderRequired(item) }
          { renderType(item) }
          { renderAction(item) }
        </div>
        <div class={ bem('body') }>
          { renderChildren(item) }
        </div>
      </div>
    );

    return () => renderItem(props.item)
  }
})