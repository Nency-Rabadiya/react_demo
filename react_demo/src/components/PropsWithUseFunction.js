const PropsWithFunction = (props) => {
  return (
    <div style={{ backgroundColor: "pink" }}>
      <h4>Topic-name : {props.topic} , use : {props.use}</h4>
    </div>
  );
}

export default PropsWithFunction;