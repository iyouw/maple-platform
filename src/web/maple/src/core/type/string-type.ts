import { Type } from "./type";

export class StringType extends Type {
  public static readonly Type: string = `string`;

  public constructor() {
    super(StringType.Type);
  }

  public override isString(): this is StringType {
    return true;
  }
}