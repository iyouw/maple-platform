import { Type } from "../base/type";

export class ArrayType extends Type {
  public static readonly Type: string = `array`;

  public items?: Type;

  public constructor(name: string = ArrayType.Type) {
    super(name);
  }

  public override isArray(): this is ArrayType {
    return true;
  }
}