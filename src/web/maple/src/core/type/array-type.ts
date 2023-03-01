import { Type } from "./type";

export class ArrayType extends Type {
  public static readonly Type: string = `array`;

  public items?: Type;

  public constructor() {
    super(ArrayType.Type);
  }

  public override isArray(): this is ArrayType {
    return true;
  }
}