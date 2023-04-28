import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { logMouseCoordinates, logKeyboardEvents } from "t-mouse";


function ListPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('http://localhost:3000/users');
      setUsers(result.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('http://localhost:3000/users');
      setUsers(result.data);
    }
    fetchData();
  }, [users]);;


  logMouseCoordinates();
  logKeyboardEvents();
 

  return (
    <div className="list-page">
      <h1 className="page-title">Liste des utilisateurs</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AddItemPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();
  
    // Créer l'objet de l'utilisateur à ajouter avec un nouvel ID unique
    const newItem = { id: uuidv4(), name, email };
    try {
      const result = await axios.post('http://localhost:3000/users', newItem);
      console.log(result.data);
      setName('');
      setEmail('');
      // Afficher le message de confirmation
      setShowSuccessMessage(true);
    } catch (error) {
      console.log(error);
    }
  };
  


  return (
    <div className="add-item-page">
      <h1 className="page-title">Ajouter un utilisateur</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={event => setName(event.target.value)}
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-button">Ajouter</button>
      </form>
      {showSuccessMessage && (
        <div className="success-message">
          L'élément a été ajouté avec succès..
        </div>
      )}
    </div>
  );
}




function App() {
  return (
    <div className="container">
      <ListPage />
      <AddItemPage />
    </div>
  );
}

export default App
