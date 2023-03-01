import { PropertyType } from "./property-type";
import { Type } from "./type/type";

export class ComponentType extends Type {
  public static readonly Type = `component-type`;

  public componentTag: string;

  public componentName: string;

  public componentIcon: string;

  public componentDescription: string;
  
  public props: Map<string| number, PropertyType>; 

  public constructor(tag: string, name: string, icon: string = '', description: string = '') {
    super(ComponentType.Type);
    this.componentTag = tag;
    this.componentName = name;
    this.componentIcon = icon;
    this.componentDescription = description;
    this.props = new Map<string | number, PropertyType>();
  }

  public addProp(name: string, type: Type = Type.None, required: boolean = false, defaultValue?: unknown): void {
    if (this.props.has(name)) return;
    const propertyType = new PropertyType(type, required, defaultValue);
    this.props.set(name, propertyType);
  }
}