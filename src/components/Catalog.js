import axios from 'axios';
import React, { useState } from "react";


const Catalog = () => {

  const [id, setID] = useState();
  const [flower, setFlower] = useState([]);
  const [flowers, setFlowers] = useState([]);


  async function getFlower() {

    try {
      await axios.get(`/flowers/${id}`)
        .then((res) => {
          setFlower(res.data);
        });
    } catch (error) {
      alert("Something went wrong. Please try again")
    }
  }

  async function getFlowers() {

    try {
      await axios.get(`/flowers`)
        .then((res) => {
          setFlowers(res.data);
        });
    } catch (error) {
      alert("Something went wrong. Please try again")
    }
  }
  return (
    <>
      <form>
        <h1>You can get flower here</h1>
        <input type="text" required placeholder="Flower ID" value={id} onChange={(id) => setID(id.target.value)} />
        <button type="button" onClick={getFlower}>GET INFO</button>
      </form>
      <table>
          <th>id</th>
          <th>name</th>
          <th>quantity</th>
          <th>type</th>
          {
            flower.map((flower, index) => {
              return (
                <tr>
                  <td key={index}>{flower.id}</td>
                  <td key={index}>{flower.name}</td>
                  <td key={index}>{flower.quantity}</td>
                  <td key={index}>{flower.type}</td>
                </tr>
              )
            })
          }
        </table>
      <form>
        <h1>You can get all flowers here</h1>
        <button type="button" onClick={getFlowers}>GET INFO</button>
      </form>
     
     
        <table>
          <th>id</th>
          <th>name</th>
          <th>quantity</th>
          <th>type</th>
          {
            flowers.map((flower, index) => {
              return (
                <tr>
                  <td key={index}>{flower.id}</td>
                  <td key={index}>{flower.name}</td>
                  <td key={index}>{flower.quantity}</td>
                  <td key={index}>{flower.type}</td>
                </tr>
              )
            })
          }
        </table>
     
    </>
  )
}

export default Catalog
