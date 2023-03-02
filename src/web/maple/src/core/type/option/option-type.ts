import { Type } from "../base/type";
import { Option } from "./option";

export class OptionType extends Type {
  public static readonly Type = 'option';

  public readonly options: Array<Option>;

  public constructor(name: string = OptionType.Type) {
    super(name);
    this.options = new Array<Option>();
  }

  public override isOption(): this is OptionType {
    return true;
  }

  public add(name: string, value: string | number): void {
    if (this.options.some(o => o.name === name)) return;
    const option = new Option(name, value);
    this.options.push(option);
  }

  public remove(name: string): void {
    const index = this.options.findIndex(o => o.name === name);
    if (index === -1) return;
    this.options.splice(index, 1);
  }
}