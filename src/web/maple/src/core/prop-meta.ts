import type { PropMetaType } from "./prop-meta-type";

export class PropMeta {
  public name: string;

  public type: PropMetaType;

  public required: boolean;

  public defaultValue?: unknown;

  public readonly children: Array<PropMeta>;

  public constructor(name: string, type: PropMetaType, required: boolean, defaultValue?: unknown) {
    this.name = name;
    this.type = type;
    this.required = required;
    this.defaultValue = defaultValue;

    this.children = new Array<PropMeta>();
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