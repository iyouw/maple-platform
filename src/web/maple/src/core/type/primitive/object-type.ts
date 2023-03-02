import { MemberInfo } from "../base/member-info";
import { Type } from "../base/type";

export class ObjectType extends Type {
  public static readonly Type: string = `object`;

  public readonly members: Map<string | number, MemberInfo>;

  public constructor(name: string = ObjectType.Type) {
    super(name);
    this.members = new Map<string | number, MemberInfo>();
  }

  public override isObject(): this is ObjectType {
    return true;
  }

  public add(name: string | number, type: Type): void {
    if (this.members.has(name)) return;
    const member = new MemberInfo(name, type);
    this.members.set(name, member);
  }

  public remove(name: string | number): void {
    this.members.delete(name);
  }

  public change(name: string | number, type: Type): void {
    if (!this.members.has(name)) return;
    const member = new MemberInfo(name, type);
    this.members.set(name, member);
  }

  public has(name: string | number): boolean {
    return this.members.has(name);
  }

  public get(name: string | number): MemberInfo | undefined {
    return this.members.get(name);
  }

  public getMemberNames(): Iterable<string | number> {
    return this.members.keys();
  }
}