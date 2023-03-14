import { Template } from "./template";

export class Page extends Template {
  public static Create(): Page {
    return new Page();
  }

  public constructor(
    id: string = '',
    name: string = '', 
    icon: string = '', 
    description: string = '',
    width: number = 1920, 
    height: number = 1080,
    model: string = ''
  ) {
    super(id,name,icon,description, width, height, model);
  }
}