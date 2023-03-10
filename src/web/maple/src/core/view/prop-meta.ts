

import { Tree } from "@/utils/tree";
import type { IPropMetaEntity } from "../entity/i-prop-meta-entity";
import { PropMetaType } from "../prop-meta-type";

export class PropMeta {
  public static Create(): PropMeta {
    return new PropMeta();
  }

  public static FromEntityList(entities: Array<IPropMetaEntity>): Array<PropMeta> {
    const res = entities.map((entity) => this.FromEntity(entity));
    Tree.Composite(res);
    return res;
  }

  public static FromEntity(entity: IPropMetaEntity): PropMeta {
    const res = new PropMeta();
    res.fromEntity(entity);
    return res;
  }

  public id: string;

  public name: string;

  public type: number;

  public required: boolean;

  public readonly children: Array<PropMeta>;

  public parentId?: string;

  public parent?: PropMeta;

  // view 
  public isOpen: boolean;

  public constructor() {
    this.id = '';
    this.name = '';
    this.type = PropMetaType.String.value;
    this.required = false;
    this.children = new Array<PropMeta>();

    this.isOpen = true;
  }

  public get isComplex(): boolean {
    return this.type === PropMetaType.Object.value || this.type === PropMetaType.Array.value;
  }

  public get hasChildren(): boolean {
    return this.children.length > 0;
  }

  public get isError(): boolean {
    return !this.name;
  }

  public add(meta: PropMeta): void {
    if (this.children.some(x => x === meta)) return;
    this.isOpen = true;
    meta.parent = this;
    this.children.push(meta);
  }

  public remove(name: string): void {
    const index = this.children.findIndex(x => x.name === name);
    if (index === -1) return;
    this.children.splice(index, 1);
  }

  public fromEntity(entity: IPropMetaEntity): void {
    this.id = entity.id;
    this.name = entity.name;
    this.type = entity.type;
    this.required = entity.required;
    this.parentId = entity.parentId;
  }
}