import type { IComponentMetaEntity } from "@/core/entity/i-component-meta-entity";
import type { ResponseBase } from "../response-base";

export interface ComponentMetaListResponse extends ResponseBase<Array<IComponentMetaEntity>> {
  
}