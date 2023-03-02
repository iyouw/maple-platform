import { Type } from "../base/type";

export class StringType extends Type {
  public static readonly Type: string = `string`;

  public constructor(name: string = StringType.Type) {
    super(name);
  }

  public override isString(): this is StringType {
    return true;
  }
}