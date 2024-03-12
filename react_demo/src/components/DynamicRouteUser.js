import { useParams } from 'react-router-dom'

const DynamicRouteUser = (props) => {
  const { id, name, email } = useParams();
  console.log(id)
  return (
    <>
      <h1>User id : {id} name :{name} email : {email}</h1>
    </>
  )
}

export default DynamicRouteUser;