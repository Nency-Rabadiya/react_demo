const SendDataChildToParent = (props) => {
  const send = "Child to parent";
  return (
    <>
      <button onClick={() => props.alert(send)} >send</button>
    </>
  )
}

export default SendDataChildToParent;