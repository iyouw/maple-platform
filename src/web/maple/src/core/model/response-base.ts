export interface ResponseBase<T = unknown> {
  code: number;
  msg: string;
  data: T
}