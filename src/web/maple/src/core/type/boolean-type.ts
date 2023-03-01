import { Type } from "./type";

export class BooleanType extends Type {
  public static readonly Type: string = `boolean`;

  public constructor() {
    super(BooleanType.Type);
  }

  public override isBoolean(): this is BooleanType {
    return true;
  }
}