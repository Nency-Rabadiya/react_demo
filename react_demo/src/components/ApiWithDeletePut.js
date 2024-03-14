import { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';

const ApiWithDeletePut = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    userList()
  }, [])

  const userList = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(result => {
        result.json()
          .then(response => {
            setData(response)
            setTitle(response[0].title)
            setBody(response[0].body)
          })
      })
  }

  const deleteUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
      }).then(result => result.json()
        .then(response => {
          console.log("response", response)
          userList()
        }));
  }

  const updateUser = (id) => {
    setData(data)
    setTitle(data[id - 1].title)
    setBody(data[id - 1].body)
    setUserId(data[id - 1].id)
  }

  const updateData = () => {
    let formData = { userId, title, body };
    fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`,
      {
        method: "PUT",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      .then((result) => {
        result.json()
          .then((response) => {
            console.log("response", response)
            userList()
          })
      })
  }

  return (
    <div>
      <h3>API with Delete</h3>
      <Table >
        <tbody>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Delete</th>
          </tr>
          {data.map((item) =>
            <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
              <button onClick={() => deleteUser(item.id)}>Delete</button>
              <button onClick={() => updateUser(item.id)}>Update</button>
            </tr>
          )}
        </tbody>
      </Table>
      <div >
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" value={body} onChange={(e) => setBody(e.target.value)} />
        <button onClick={() => updateData()}>update</button>
      </div>
    </div>
  )
}

export default ApiWithDeletePut;