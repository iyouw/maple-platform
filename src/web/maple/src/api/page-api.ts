import type { IPageEntity } from "@/core/entity/i-page-entity";
import type { ResponseBase } from "@/core/model/response-base";
import type { Page } from "@/core/view/page";
import { getTransport } from "@/utils/transport"; 

export class PageApi {
  public static async List(appId:string): Promise<Array<IPageEntity>> {
    const url = `apps/${appId}/pages`;
    const res = await getTransport().get<ResponseBase<Array<IPageEntity>>>(url);
    return res.data.data;
  }

  public static async Detail(id: string): Promise<IPageEntity> {
    const url = `pages/${id}`;
    const res = await getTransport().get<ResponseBase<IPageEntity>>(url);
    return res.data.data;
  }

  public static async CreateOrUpdate(page: Page): Promise<string> {
    const url = `pages`;
    const res = await getTransport().post<ResponseBase<string>>(url, page);
    return res.data.data;
  }

  public static async Delete(id: string): Promise<boolean> {
    const url = `pages/delete/${id}`;
    const res = await getTransport().post<ResponseBase<boolean>>(url);
    return res.data.data;
  }
}