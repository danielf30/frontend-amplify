import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'; // Importa estilos de Amplify para que los estilos de Cognito sean aplicados
import './custom-styles.css';

Amplify.configure(awsconfig);

const App = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      nombre,
      correo,
      mensaje
    };

    try {
      const response = await fetch('https://tu-api-gateway-url.amazonaws.com/dev/formulario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Datos enviados con éxito');
      } else {
        console.log('Error al enviar los datos');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="container mt-5">
          <div className="card mx-auto" style={{ maxWidth: '500px' }}>
            <div className="card-body">
              <button onClick={signOut} className="btn btn-secondary mb-3">Cerrar Sesión</button>
              <h2>Formulario de Contacto</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Nombre:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group mt-3">
                  <label>Correo Electrónico:</label>
                  <input
                    type="email"
                    className="form-control"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group mt-3">
                  <label>Mensaje:</label>
                  <textarea
                    className="form-control"
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary mt-4 w-100">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </Authenticator>
  );
};

export default App;
