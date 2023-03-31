
import Navbar from '../Navbar'
import { ReactNode } from 'react';

const index = ({children}:{children:ReactNode}) => {
  return (
    <>
      <Navbar />
      <main className="">
        <div className="ghostHeader"></div>
        {children}
      </main>
    </>
  );
}

export default index;