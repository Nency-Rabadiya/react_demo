import React from 'react';
const ArrayWithList = () => {
  const studentData = ["Nency", "Lipsa", "Isha", "Vidhi", "Grinal"];
  const studentDetail = [{ name: "Nency", email: "nency@gmail.com" }]
  return (
    <>
      {
        studentData.map((data, i) => <p key={i}>{data}</p>)
      }
      {
        studentDetail.map((data, i) => <p key={i}>name : {data.name}, email : {data.email}</p>)
      }
    </>
  )
}
export default ArrayWithList;