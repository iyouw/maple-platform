import type { ComponentType } from "./component-type";

export class Component {
  public type?: ComponentType;
  public props?: Record<string | number, unknown>;
  public style?: Record<string | number, string>;
}