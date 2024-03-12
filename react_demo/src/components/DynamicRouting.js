import { Link, Route, Routes } from 'react-router-dom'
import DynamicRouteUser from './DynamicRouteUser';

const DynamicRouting = () => {
  let users = [
    { id: 1, name: "Nency", email: "nency@gmail.com" },
    { id: 2, name: "Lipsa", email: "lipsa@gmail.com" },
    { id: 3, name: "John", email: "john@gmail.com" },
    { id: 4, name: "Peter", email: "peter@gmail.com" },
    { id: 5, name: "Sam", email: "sam@gmail.com" },
  ];

  return (
    <div>
      <h2>Dynamic Routing</h2>
      {
        users.map((item) => <Link to={"/user/" + item.id + "/" + item.name + "/" + item.email}><p>{item.name}</p></Link>)
      }
      <Routes>
        <Route path='/user/:id/:name/:email' element={<DynamicRouteUser />}></Route>
      </Routes>
    </div>
  )
}
export default DynamicRouting;