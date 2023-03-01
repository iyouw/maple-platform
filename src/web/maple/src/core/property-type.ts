import { Type } from "./type/type";


export class PropertyType extends Type {
  public static readonly Type = `component-property-type`;

  public required: boolean;

  public defaultValue?: unknown;

  public type: Type;

  public constructor(type: Type = Type.None, required: boolean = false, defaultValue?: unknown) {
    super(PropertyType.Type);
    this.type = type;
    this.required = required;
    this.defaultValue = defaultValue;
  }
}