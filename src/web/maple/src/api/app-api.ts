import type { IAppEntity } from "@/core/entity/i-app-entity";
import type { IPageEntity } from "@/core/entity/i-page-entity";
import type { ResponseBase } from "@/core/model/response-base";
import { getTransport } from "@/utils/transport";
import type { App } from "vue";

export class AppApi {
  public static async List(): Promise<Array<IAppEntity>> {
    const url = `apps`;
    const res = await getTransport().get<ResponseBase<Array<IPageEntity>>>(url);
    return res.data.data;
  }

  public static async Detail(id: string): Promise<IAppEntity> {
    const url = `apps/${id}`;
    const res = await getTransport().get<ResponseBase<IAppEntity>>(url);
    return res.data.data;
  }

  public static async Delete(id: string): Promise<boolean> {
    const url = `apps/delete/${id}`;
    const res = await getTransport().post<ResponseBase<boolean>>(url);
    return res.data.data;
  }

  public static async CreateOrUpdate(app: App): Promise<string> {
    const url = `apps`;
    const res = await getTransport().post<ResponseBase<string>>(url, app);
    return res.data.data;
  }
}