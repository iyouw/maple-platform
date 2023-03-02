export class Option {
  public readonly name: string;
  public readonly value: string | number;

  public constructor(name: string, value: string | number) {
    this.name = name;
    this.value = value;
  }
}