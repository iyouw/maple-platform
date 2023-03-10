import type { ComponentMeta } from "./view/component-meta";

export class Component {
  public meta: ComponentMeta;
  public props?: Record<string | number, unknown>;
  public style?: Record<string | number, string>;
  public children: Array<Component>;

  public constructor(meta: ComponentMeta, props?: Record<string | number, unknown>, style?: Record<string | number, string>, children?: Array<Component>) {
    this.meta = meta;
    this.props = props;
    this.style = style;
    this.children = children ?? new Array<Component>();
  }

  public add(child: Component): void {
    this.children.push(child);
  }

  public remove(child: Component): void {
    const index = this.children.findIndex(x => x === child);
    if (index === -1) return;
    this.children.splice(index, 1);
  }
}