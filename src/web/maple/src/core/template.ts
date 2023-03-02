import type { Component } from "./component";

export class Template {
  public name: string;
  public icon: string;

  public description?: string;

  public width: number;
  public height: number;

  public components: Array<Component>; 

  public constructor(name: string, icon: string, width: number, height: number, description?: string, components?: Array<Component>) {
    this.name = name;
    this.icon = icon;
    this.description = description;

    this.width = width;
    this.height = height;

    this.components = components ?? new Array<Component>();
  }

  public add(component: Component): void {
    this.components.push(component);
  }

  public remove(component: Component): void {
    const index = this.components.findIndex(x => x === component);
    if (index === -1) return;
    this.components.splice(index, 1);
  }
}