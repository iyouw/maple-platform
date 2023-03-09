import { PropMetaType } from "./prop-meta-type";

export class PropMeta {
  public name: string;

  public type: number;

  public required: boolean;

  public readonly children: Array<PropMeta>;

  public readonly parent?: PropMeta;

  public constructor(name: string = '', type: number = PropMetaType.Boolean.value, required: boolean = false, parent?: PropMeta) {
    this.name = name;
    this.type = type;
    this.required = required;

    this.children = new Array<PropMeta>();

    this.parent = parent;
  }

  public get isObject(): boolean {
    return this.type === PropMetaType.Object.value;
  }

  public add(meta: PropMeta): void {
    if (this.children.some(x => x.name === meta.name)) return;
    this.children.push(meta);
  }

  public remove(name: string): void {
    const index = this.children.findIndex(x => x.name === name);
    if (index === -1) return;
    this.children.splice(index, 1);
  }
}