

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

  public constructor(
    id: string = '',
    name: string = '',
    type: number = PropMetaType.String.value,
    required: boolean = false,
    children: Array<PropMeta> = new Array<PropMeta>(),
    isOpen: boolean = false
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.required = required;
    this.children = children;

    this.isOpen = isOpen;
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

  public addSibling(sibling?: PropMeta, root?: Array<PropMeta>) {
    const arr = this.parent?.children ?? root;
    if (!arr) return;
    const index = arr.findIndex((x) => x === this);
    if (index === -1) return;
    sibling ??= PropMeta.Create();
    sibling.parent = this.parent;
    sibling.parentId = this.parentId;
    arr.splice(index + 1, 0, sibling);
  }

  public addChild(child?: PropMeta) {
    child ??= PropMeta.Create();
    child.parent = this;
    child.parentId = this.id;
    this.children.push(child);
    this.isOpen = true;
  }

  public delete(root?: Array<PropMeta>) {
    const arr = this.parent?.children ?? root;
    if (!arr) return;
    const index = arr.findIndex((x) => x === this);
    if (index === -1) return;
    this.parent = undefined;
    this.parentId = undefined;
    arr.splice(index, 1);
  }

  public toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  public fromEntity(entity: IPropMetaEntity): void {
    this.id = entity.id;
    this.name = entity.name;
    this.type = entity.type;
    this.required = entity.required;
    this.parentId = entity.parentId;
  }
}