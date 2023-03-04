

import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider,Link } from 'react-router-dom'
import './App.css'
import { Business } from './components/Buisness'
import { Entertainment } from './components/Entertainment'
import { Health } from './components/Health'
import { Home } from './components/Home'
import {Navbar} from './components/Navbar'
import { Science } from './components/Science'
import { Sports } from './components/Sports'
import { Technology } from './components/Technology'


export function App(props){
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
          <Route path='/' index element={<Home/>}/>
          <Route path='/business'  index element={<Business/>}/>
          <Route path='/sports'  index element={<Sports/>}/>
          <Route path='/entertainment'  index element={<Entertainment/>}/>
          <Route path='/health'  index element={<Health/>}/>
          <Route path='/science'  index element={<Science/>}/>
          <Route path='/technology'  index element={<Technology/>}/>
      </Route>
    )
  )
    
  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  );

}

const Root = ()=>{
  return (
    <> 
    <div>
    <Navbar/>
      <Link to="/"></Link> 
      <Link to="/business"></Link> 
    </div>
    <div>
      <Outlet/>
    </div>
    </>
  )
}


export default App;