export class App {
  public id: string;
  public name: string;
  public icon: string;
  public description: string;

  public constructor(
    id: string = '',
    name: string = '',
    icon: string = '',
    description: string = ''
  ) {
    this.id = id;
    this.name = name;
    this.icon = icon;
    this.description = description;
  }
}