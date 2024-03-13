import { useState } from "react"

const ApiWithPost = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [active, setActive] = useState("");

  const saveDetail = () => {
    let formData = { name, email, gender, active };
    fetch("https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
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
          })
      })
  }

  return (
    <>
      <h1>Form</h1>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option>select gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>
      <select value={active} onChange={(e) => setActive(e.target.value)}>
        <option>select</option>
        <option>Active</option>
        <option>Not-active</option>
      </select>
      <button onClick={saveDetail}>Save</button>
    </>
  )
}

export default ApiWithPost;