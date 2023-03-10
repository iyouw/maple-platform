import type { IPropMetaEntity } from "./i-prop-meta-entity";

export interface IComponentMetaEntity {
  id: string;
  name: string;
  icon?: string;
  description?: string;
  tag: string;
  slots?: string;
  propMetas: Array<IPropMetaEntity>;
}