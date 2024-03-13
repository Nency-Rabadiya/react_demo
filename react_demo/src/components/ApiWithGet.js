import { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';

const ApiWithGet = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://gorest.co.in/public/v2/users")
      .then(result => result.json())
      .then(response => setData(response));
  }, [])

  return (
    <>
      <h3>API with GET</h3>

      <Table >
        <tbody>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Status</th>
          </tr>
          {data.map((item) =>
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>{item.status}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  )
}
export default ApiWithGet;