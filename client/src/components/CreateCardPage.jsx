import React, { useState } from 'react';
import axios from 'axios';

function CreateCardPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async e => {
    // e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/cards', { title, description });
      
      setTitle('');
      setDescription('');
      console.log(title)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='New-Card'>
      <h1>Create a New Card</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        <button type="submit">Create Card</button>
      </form>
    </div>
  );
}

export default CreateCardPage;
