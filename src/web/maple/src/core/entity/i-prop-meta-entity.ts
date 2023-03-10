export interface IPropMetaEntity {
  id: string;
  name: string;
  type: number;
  required: boolean;
  parentId?: string;
  componentMetaId: string;
}