import type { Component } from "./component";

export class Template {
  public id: string;
  public name: string;
  public icon: string;
  public description: string;

  public width: number;
  public height: number;

  public model: string;

  public readonly components: Array<Component>;

  public constructor(
    id: string = '',
    name: string = '', 
    icon: string = '', 
    description: string = '',
    width: number = 1920, 
    height: number = 1080,
    model: string = ''
  ) {
    this.id = id;
    this.name = name;
    this.icon = icon;
    this.description = description;

    this.width = width;
    this.height = height;

    this.model = model;

    this.components = this.parseModel();
  }


  protected parseModel(): Array<Component> {
    const res = new Array<Component>();

    return res;
  }
}