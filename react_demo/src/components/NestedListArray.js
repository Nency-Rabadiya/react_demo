import React from 'react';
import { Table } from 'react-bootstrap';

const NestedListArray = () => {
  const personDetails = [
    {
      name: "Nency", email: "nency@gmail.com", address: [
        { houseNum: "305", city: "Surat", country: "India" },
        { houseNum: "306", city: "Surat", country: "India" },
        { houseNum: "307", city: "Surat", country: "India" }
      ]
    },
    {
      name: "Lipsa", email: "lipsa@gmail.com", address: [
        { houseNum: "40", city: "Surat", country: "India" },
        { houseNum: "41", city: "Surat", country: "India" },
        { houseNum: "42", city: "Surat", country: "India" },
      ]
    }
  ]
  return (
    <>
      <Table variant='dark' hover >
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
          </tr>
          {
            personDetails.map((data) =>
              <tr>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>
                  <Table variant='light' striped>
                    <tbody>
                      {
                        data.address.map((item) =>
                          <tr>
                            <td>{item.houseNum}</td>
                            <td>{item.city}</td>
                            <td>{item.country}</td>
                          </tr>
                        )
                      }
                    </tbody>
                  </Table>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </>
  )
}

export default NestedListArray;