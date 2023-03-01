import type { ArrayType } from "./array-type";
import type { BooleanType } from "./boolean-type";
import type { NumberType } from "./number-type";
import type { ObjectType } from "./object-type";
import type { StringType } from "./string-type";
import { UndefinedType } from "./undefined-type";

export abstract class Type {
  public static readonly None = new UndefinedType();

  public readonly name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public isUndefined(): this is UndefinedType {
    return false;
  }

  public isString(): this is StringType {
    return false;
  }

  public isNumber(): this is NumberType {
    return false;
  }

  public isBoolean(): this is BooleanType {
    return false;
  }

  public isArray(): this is ArrayType {
    return false;
  }

  public isObject(): this is ObjectType {
    return false;
  }
}