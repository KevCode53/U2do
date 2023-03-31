import { useEffect, useState } from "react";
import { workspaces } from "../../utilities/data";
import { workspacesModel } from "models/workspaces.models";
import { Link } from "react-router-dom";

import styles from './styles.module.css'

const index = () => {
  const [myWorkspaces, setMyWorkspaces] = useState<Array<workspacesModel>>([])

  useEffect(()=> {
    const list = workspaces.filter(workspace => workspace.create_by === 1)
    setMyWorkspaces(list)
  },[])

  console.log(myWorkspaces)


  return (
    <div className={styles.pageWorkspaces}>
      <div className="title">
        <h2>Your Workspaces</h2>
      </div>
      <div className={styles.containerMyWorkspaces}>
        {myWorkspaces.length >= 1
        ?myWorkspaces.map(workspace => (
            <Link
              key={workspace.id}
              to={`${workspace.id}`}
            >
              <div
                style={workspace.style}
                className={styles.workspace}
              >
                <h4>{workspace.name}</h4>
              </div>
            </Link>
          ))
        : (
          <button>
            <div
              className={styles.workspace}
            >
              <h4>Create</h4>
            </div>
          </button>
        )
      }
      </div>
    </div>
  );
}

export default index;