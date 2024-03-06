import { useState } from "react";

export default function StateUseWithFunction() {
  const [text, setText] = useState("hello this text is in lowercase");
  function updateData() {
    let newText = text.toUpperCase();
    setText(newText);
  }
  return (
    <div>
      <button onClick={updateData}>click here</button>
      <h1>{text}</h1>
    </div>
  );
}