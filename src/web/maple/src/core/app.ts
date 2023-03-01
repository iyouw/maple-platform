import type { Page } from "./page";

export class App {
  public icon?: string;
  public name?: string;
  public description?: string;
  public version?: string;

  public versions?: Array<string>;

  public pages?: Array<Page>;
}