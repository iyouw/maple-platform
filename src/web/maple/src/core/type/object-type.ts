import { Type } from "./type";

export class ObjectType extends Type {
  public static readonly Type: string = `object`;

  public readonly properties: Map<string | number, Type>;

  public constructor() {
    super(ObjectType.Type);
    this.properties = new Map<string | number, Type>();
  }

  public override isObject(): this is ObjectType {
    return true;
  }

  public addProperty(name: string, type: Type): void {
    if (this.properties.has(name)) return;
    this.properties.set(name, type);
  }
}