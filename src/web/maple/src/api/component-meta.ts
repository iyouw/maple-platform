import type { ComponentMeta } from "@/core/component-meta";
import type { ComponentMetaDetailResponse } from "@/model/component/component-meta-detail-response";
import type { ComponentMetaListResponse } from "@/model/component/component-meta-list-response";
import { transport } from "@/utils/transport"; 

export class ComponentMetaApi {
  public static async List(): Promise<Array<ComponentMeta>> {
    const url = 'componentMetas';
    const res = await transport.get<ComponentMetaListResponse>(url);
    return res.data.data;
  }

  public static async Detail(id: string): Promise<ComponentMeta> {
    const url = `componentMetas/${id}`;
    const res = await transport.get<ComponentMetaDetailResponse>(url);
    return res.data.data;
  }
}