import type { IComponentMetaEntity } from "../entity/i-component-meta-entity";
import { PropMeta } from "./prop-meta";

export class ComponentMeta {
  public static Create(): ComponentMeta {
    return new ComponentMeta();
  }

  public static FromEntity(entity: IComponentMetaEntity): ComponentMeta {
    const res = new ComponentMeta();
    res.fromEntity(entity);
    return res;
  }

  public static FromEntityList(entities: Array<IComponentMetaEntity>): Array<ComponentMeta> {
    return entities.map((entity) => this.FromEntity(entity));
  }

  public id: string;
  public name: string;
  public icon: string;
  public description: string;
  public tag: string;
  public propMetas: Array<PropMeta>;
  public slots: string;

  public constructor() {
    this.id = '';
    this.name = '';
    this.icon = '';
    this.description = '';
    this.tag = '';
    this.propMetas = new Array<PropMeta>();
    this.slots = '';
  }

  public get hasPropMetas(): boolean {
    return this.propMetas.length > 0;
  }

  public get isError(): boolean {
    return !this.name || !this.tag;
  }

  public get hasError(): boolean {
    return this.isError || this.propMetas.some(x => x.isError);
  }

  public fromEntity(entity: IComponentMetaEntity): void {
    this.id = entity.id;
    this.name = entity.name;
    this.icon = entity.icon ?? '';
    this.description = entity.description ?? '';
    this.tag = entity.tag;
    this.propMetas = PropMeta.FromEntityList(entity.propMetas);
    this.slots = entity.slots ?? '';
  }

  public addPropMeta(sibling?: PropMeta): void {
    const cur = PropMeta.Create();
    if (!sibling) {
      this.propMetas.push(cur);
    } else {
      let arr = this.propMetas;
      if (sibling.parent) arr = sibling.parent.children;
      const index = arr.findIndex(x => x === sibling);
      if( index === -1) return;
      cur.parent = sibling.parent;
      arr.splice(index + 1, 0, cur);
    }
  }

  public deletePropMeta(propMeta: PropMeta): void {
    let arr = this.propMetas;
    if (propMeta.parent) {
      arr = propMeta.parent.children;
    }
    const index = arr.findIndex(x => x === propMeta);
    if (index === -1) return;
    propMeta.parent = undefined;
    arr.splice(index, 1);
  }

  public addChildPropMeta(parent: PropMeta) {
    parent.add(PropMeta.Create());
  }
}