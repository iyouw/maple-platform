import { Type } from "./type";

export class NumberType extends Type {
  public static readonly Type: string = `number`;

  public constructor() {
    super(NumberType.Type);
  }

  public override isNumber(): this is NumberType {
    return true;
  }
}