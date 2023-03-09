import { EnumClass } from "@linker-design/utils";

export class PropMetaType extends EnumClass {
  public static readonly Boolean = new PropMetaType("boolean", 1);
  public static readonly Number = new PropMetaType("number", 2);
  public static readonly String = new PropMetaType("string", 3);
  public static readonly Array = new PropMetaType("array", 4);
  public static readonly Object = new PropMetaType("object", 5);
}