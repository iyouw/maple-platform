import type { ComponentMeta } from "./component-meta";

export class Component {
  public readonly meta: ComponentMeta;

  public propData: Record<string, unknown>;

  public styleData: Record<string, unknown>;

  public children: Array<Component>;

  public slot: string;

  public constructor(
    meta: ComponentMeta,
    propData: Record<string, unknown> = {},
    styleData: Record<string, unknown> = {},
    children: Array<Component> = new Array<Component>,
    slot: string = ''
  ) {
    this.meta = meta;
    this.propData = propData;
    this.styleData = styleData;
    this.children = children;
    this.slot = slot;
  }
}