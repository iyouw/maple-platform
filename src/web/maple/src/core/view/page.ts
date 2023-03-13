import { Template } from "./template";

export class Page extends Template {
  public static Create(): Page {
    return new Page();
  }

  public constructor() {
    super();
  }
}