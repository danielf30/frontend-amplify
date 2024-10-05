import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí llamarás al API Gateway para enviar los datos
    console.log('Form data:', formData);
  };

  return (
    <div className="App">
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Mensaje:</label>
          <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
