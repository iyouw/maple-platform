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

  public constructor(
    id: string = '',
    name: string = '',
    icon: string = '',
    description: string = '',
    tag: string = '',
    slots: string = '',
    propMetas: Array<PropMeta> = new Array<PropMeta>()
  ) {
    this.id = id;
    this.name = name;
    this.icon = icon;
    this.description = description;
    this.tag = tag;
    this.slots = slots;
    this.propMetas = propMetas;
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
}