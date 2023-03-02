import type { PropMeta } from "./prop-meta";

export class ComponentMeta {
  public name: string;
  public icon?: string;
  public description?: string;

  public tag: string;
  public propMetas?: Array<PropMeta>;

  public slots?: Array<string>;

  public constructor(name: string, tag: string, propMetas?: Array<PropMeta>, slots?: Array<string>, icon?: string, description?: string) {
    this.name = name;
    this.tag = tag;
    this.propMetas = propMetas;

    this.slots = slots;
    this.icon = icon;
    this.description = description;
  }
}