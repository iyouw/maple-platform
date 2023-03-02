import type { OptionType } from "../option/option-type";
import { ArrayType } from "../primitive/array-type";
import { BooleanType } from "../primitive/boolean-type";
import { NumberType } from "../primitive/number-type";
import { ObjectType } from "../primitive/object-type";
import { StringType } from "../primitive/string-type";
import { UndefinedType } from "../primitive/undefined-type";

export abstract class Type {
  public static readonly Undefined = new UndefinedType();

  public static readonly Boolean = new BooleanType();

  public static readonly Number = new NumberType();

  public static readonly String = new StringType();

  public static readonly Array = new ArrayType();

  public static readonly Object = new ObjectType();

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

  public isOption(): this is OptionType {
    return false;
  }
}