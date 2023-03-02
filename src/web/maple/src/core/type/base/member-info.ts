import type { Type } from "./type";

export class MemberInfo {
  public readonly name: string | number;

  public readonly type: Type

  public constructor(name: string | number, type: Type) {
    this.name = name;
    this.type = type;
  }
}