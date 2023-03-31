import { useEffect, useState } from "react";
import { workspacesModel } from "models/workspaces.models";
import { workspaces } from "../../utilities/data";
import { useParams } from "react-router-dom";

const index = () => {
  const [Workspace, setWorkspace] = useState<workspacesModel>()
  const params = useParams()
  console.log(params)

  const getWorkspace = ():workspacesModel|undefined => {
    const {id} = params
    const space = workspaces.find(workspace => workspace.id === parseInt(id))
    return space
  }

  useEffect(()=>{
    setWorkspace(getWorkspace())
  },[])

  return (
    <div className="title">
      <h2>WorkSpace: {Workspace?.name}</h2>
    </div>
  );
}

export default index;