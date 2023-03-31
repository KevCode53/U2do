export type workspacesModel = {
  id:number,
  name: string,
  create: string,
  update: string,
  create_by: number,
  colaborators: number[],
  lists: [],
  style: styleWorkspaceModel
}

export interface styleWorkspaceModel {
  background: string,
  backgroundImage?: string,
  backgroundPosition?: string,
  backgroundSize?: string,
}