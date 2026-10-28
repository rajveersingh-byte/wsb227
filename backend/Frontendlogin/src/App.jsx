import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Page from './page';
import Login from './Login';
import ProtectedRoutes from './comman/ProtectedRoutes';
import Checkout from './Checkout';


export default function App() {

  return (
    <>  

      <Routes>
        <Route path='/' element={<Page/>} />
        <Route path='/login' element={<Login/>} />

        <Route element={<ProtectedRoutes/>}>
            <Route path='/checkout' element={<Checkout/>} />
        </Route>

      </Routes>
      
    </>
  )
}
