import { workspacesModel, styleWorkspaceModel } from "models/workspaces.models"

export const users = [
  {id: 1, username: "pepito", email: "pepito@example.com", avatar:"https://robohash.org/pepito"},
  {id: 2, username: "jacinto23", email: "jacinto23@example.com", avatar:"https://robohash.org/jacinto23"},
  {id: 3, username: "el_mariano", email: "el_mariano@example.com", avatar:"https://robohash.org/el_mariano"},
  {id: 4, username: "xavier_ex", email: "xavier_ex@example.com", avatar:"https://robohash.org/xavier_ex"},
  {id: 5, username: "beast5", email: "beast5@example.com", avatar:"https://robohash.org/beast5"},
  {id: 6, username: "pickles123", email: "pickles123@example.com", avatar:"https://robohash.org/pickles123"},
  {id: 7, username: "mr_roboto", email: "mr_roboto@example.com", avatar:"https://robohash.org/mr_roboto"},
  {id: 8, username: "dangerX", email: "dangerX@example.com", avatar:"https://robohash.org/dangerX"},
  {id: 9, username: "natanael", email: "natanael@example.com", avatar:"https://robohash.org/natanael"},
  {id: 10, username: "anuel_AAA", email: "anuel_AAA@example.com", avatar:"https://robohash.org/anuel_AAA"},
]

export const todos = [
  {id: 1, text: 'Cortar cebolla', complete: false},
  {id: 2, text: 'Comprar pan', complete: false},
  {id: 3, text: 'Recojer la basura', complete: false},
  {id: 4, text: 'Caminar 10 metros', complete: false},
  {id: 5, text: 'Saltar la cuerda', complete: false},
  {id: 6, text: 'Lavar el carro', complete: false},
  {id: 7, text: 'Limpiar la computadora', complete: false},
  {id: 8, text: 'Cortar cebolla', complete: false},
  {id: 9, text: 'Comprar pan', complete: false},
  {id: 10, text: 'Recojer la basura', complete: false},
  {id: 11, text: 'Caminar 10 metros', complete: false},
  {id: 12, text: 'Saltar la cuerda', complete: false},
  {id: 13, text: 'Lavar el carro', complete: false},
  {id: 14, text: 'Limpiar la computadora', complete: false},
  {id: 15, text: 'Cortar cebolla', complete: false},
  {id: 16, text: 'Comprar pan', complete: false},
  {id: 17, text: 'Recojer la basura', complete: false},
  {id: 18, text: 'Caminar 10 metros', complete: false},
  {id: 19, text: 'Saltar la cuerda', complete: false},
  {id: 20, text: 'Lavar el carro', complete: false},
  {id: 21, text: 'Limpiar la computadora', complete: false},
]

export const DefaultStyles:styleWorkspaceModel = {
  background: 'linear-gradient(45deg, rgba(254,120,120,1) 0%, rgba(0,212,255,1) 100%)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
}

export const workspaces:workspacesModel[] = [
  {
    id: 0,
    name:"Test",
    create: "31-03-2023",
    update: "31-03-2023",
    create_by: 5,
    colaborators:[3,1,7,10],
    lists: [],
    style: DefaultStyles
  },
  {
    id: 1, name:"XD",
    create: "29-03-2023",
    create_by: 5,
    colaborators:[],
    lists: [],
    style: {
      backgroundColor: '#143575',
      backgroundImage: 'url(https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29ya3xlbnwwfHwwfHw%3D&w=1000&q=80)',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }
  },
  {
    id: 3, name:"Mods",
    create: "16-03-2023",
    update: "16-03-2023",
    create_by: 5,
    colaborators:[],
    lists: [],
    style: {
      background: '#f56476',
      backgroundImage: 'url(https://wallpaperaccess.com/full/3708811.jpg)',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }
  },
  {
    id: 4, name:"Test",
    create: "31-03-2023",
    update: "31-03-2023",
    create_by: 8,
    colaborators:[3,1,7,10],
    lists: [],
    style: {
      background: '#ccc',
    }
  },
]