import type { Template } from "./template";

export class App {
  public name?: string;

  public icon?: string;
  
  public description?: string;
  
  public templates?: Array<Template>;
}