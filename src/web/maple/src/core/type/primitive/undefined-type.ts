import { Type } from "../base/type";

export class UndefinedType extends Type {
  public static readonly Type: string = `undefined`;

  public constructor() {
    super(UndefinedType.Type);
  }

  public override isUndefined(): this is UndefinedType {
    return true;
  }
}