import { Type } from "../base/type";

export class NumberType extends Type {
  public static readonly Type: string = `number`;

  public constructor(name: string = NumberType.Type) {
    super(name);
  }

  public override isNumber(): this is NumberType {
    return true;
  }
}