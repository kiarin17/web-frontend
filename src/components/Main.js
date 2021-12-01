import axios from "axios";
import React, { useState } from "react";


const Main = () => {

  const [id, setID] = useState();

  const [name, setName] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [type, setType] = useState([]);


  async function add_flower(add_flower) {
    add_flower.preventDefault();
    try {
      await axios.post("/flowers", { name, quantity, type })
      alert(`${name} added successfully`)
    } catch (err) {
      console.log(err);
      alert('Error')
    }
  }


  async function delete_flower() {
    try {
      await axios.delete(`/flowers/${id}`)
      alert(`Запись с ID: ${id} удалена`)
    } catch (err) {
      alert("Цветков с таким ID нет")
    }
  }

  async function update_flower(update_flower) {
    update_flower.preventDefault();
    try {
      await axios.put(`/flowers/${id}`, { name, quantity, type })
      alert(`Запись с ID: ${id} обновлена`)
    } catch (error) {
      alert('Error')
    }
  }
  return (
    <div className="forms">
      <form>
        <h1>You can delete info about flower here</h1>
        <input type="text" required placeholder="Flower ID" value={id} onChange={(id) => setID(id.target.value)} />
        <button type="button" onClick={delete_flower}>delete info about flower</button>
      </form>

      <form onSubmit={add_flower}>
        <h1>You can add flower here</h1>
        <input type="text" required placeholder="Name" value={name} onChange={(add_flower) => setName(add_flower.target.value)} />
        <input type="text" required placeholder="Quantity" value={quantity} onChange={(add_flower) => setQuantity(add_flower.target.value)} />
        <input type="text" required placeholder="Type" value={type} onChange={(add_flower) => setType(add_flower.target.value)} />
        <button type="submit">add flower</button>
      </form>

      <form >
        <h1>You can update info about flower here</h1>
        <input type="text" required placeholder="Flower ID" value={id} onChange={(id) => setID(id.target.value)} />
        <input type="text" required placeholder="Name" value={name} onChange={(add_flower) => setName(add_flower.target.value)} />
        <input type="text" required placeholder="Quantity" value={quantity} onChange={(add_flower) => setQuantity(add_flower.target.value)} />
        <input type="text" required placeholder="Type" value={type} onChange={(add_flower) => setType(add_flower.target.value)} />
        <button type="button" onClick={update_flower}>Update info about flower</button>
      </form>
    </div>

  )
}

export default Main
