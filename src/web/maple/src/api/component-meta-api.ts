import type { IComponentMetaEntity } from "@/core/entity/i-component-meta-entity";
import type { ComponentMetaDetailResponse } from "@/core/model/component-meta/i-component-meta-detail-response";
import type { ComponentMetaListResponse } from "@/core/model/component-meta/i-component-meta-list-response";
import type { ResponseBase } from "@/core/model/response-base";
import type { ComponentMeta } from "@/core/view/component-meta";
import { getTransport } from "@/utils/transport"; 

export class ComponentMetaApi {
  public static async List(): Promise<Array<IComponentMetaEntity>> {
    const url = 'componentMetas';
    const res = await getTransport().get<ComponentMetaListResponse>(url);
    return res.data.data;
  }

  public static async Detail(id: string): Promise<IComponentMetaEntity> {
    const url = `componentMetas/${id}`;
    const res = await getTransport().get<ComponentMetaDetailResponse>(url);
    return res.data.data;
  }

  public static async Add(componentMeta: ComponentMeta): Promise<boolean> {
    const url = `componentMetas`;
    const res = await getTransport().post<ResponseBase<boolean>>(url, componentMeta);
    return res.data.data;
  }

  public static async Update(componentMeta: ComponentMeta): Promise<boolean> {
    const url = `componentMetas/update`;
    const res = await getTransport().post<ResponseBase<boolean>>(url, componentMeta);
    return res.data.data;
  }
}