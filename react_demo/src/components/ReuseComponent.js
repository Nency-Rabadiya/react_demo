import ReuseCompo from "./ReuseCompo";

const ReuseComponent = () => {
  const user = [
    { name: "Nency", email: "nency@gmail.com", address: "Surat" },
    { name: "Lipsa", email: "lipsa@gmail.com", address: "Surat" }
  ]
  return (
    <>
      {
        user.map((data) =>
          <ReuseCompo item={data} />
        )
      }
    </>
  )
}
export default ReuseComponent;