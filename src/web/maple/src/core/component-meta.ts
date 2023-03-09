import type { PropMeta } from "./prop-meta";

export class ComponentMeta {
  public id: string;
  public name: string;
  public icon: string;
  public description: string;

  public tag: string;
  public propMetas: Array<PropMeta>;

  public slots: Array<string>;

  public constructor(
    id: string = '',
    name: string = '', 
    tag: string = '', 
    propMetas: Array<PropMeta> = new Array<PropMeta>, 
    slots: Array<string> = new Array<string>, 
    icon: string = '', 
    description: string = '') 
  {
    this.id = id;
    this.name = name;
    this.tag = tag;
    this.propMetas = propMetas;

    this.slots = slots;
    this.icon = icon;
    this.description = description;
  }
}