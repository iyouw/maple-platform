import type { Component } from "./component";

export class Page {
  public name?: string;
  public description?: string;

  public url?: string;

  public width?: number;
  public height?: number;

  public components?: Array<Component>; 
}