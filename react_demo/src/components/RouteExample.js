import { Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import PageNotFound from './PageNotFound'
const RouteExample = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </>
  )
}


export default RouteExample;