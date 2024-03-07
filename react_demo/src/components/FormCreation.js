import React, { useState } from "react";
const FormCreation = () => {
  const [name, setName] = useState("");
  const [option, setOption] = useState("");
  const [termsCondition, setTermsCondition] = useState(false);

  const noReload = (event) => {
    console.log(name, option, termsCondition);
    event.preventDefault();
  }
  return (
    <div style={{ border: "2px solid black", height: "300px", width: "300px", margin: "auto" }}>
      <form onSubmit={noReload}>
        <h3>FORM</h3>
        <input type="text" placeholder="Enter some text" onChange={(event) => setName(event.target.value)} />
        <br /><br />
        <select onChange={(event) => setOption(event.target.value)} >
          <option>Select option</option>
          <option>Computer</option>
          <option>Electrical</option>
          <option>Civil</option>
          <option>Automobile</option>
        </select>
        <br /><br />
        <input type="checkbox" onChange={(event) => setTermsCondition(event.target.checked)} /><span>Terms and conditions</span>
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default FormCreation;