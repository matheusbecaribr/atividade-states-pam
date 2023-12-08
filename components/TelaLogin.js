import React, { useState } from 'react';

const CustomLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === '' || password === '') {
      alert('Por favor, preencha ambos os campos.');
    } else {
      alert(`Login: ${username}, Senha: ${password}`);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Acesso ao Sistema</h2>
      <div style={styles.inputContainer}>
        <label style={styles.label}>Nome de Usuário:</label>
        <input
          style={styles.input}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div style={styles.inputContainer}>
        <label style={styles.label}>Senha:</label>
        <input
          style={styles.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button style={styles.button} onClick={handleLogin}>
        Entrar
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '16px',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    margin: '16px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '24px',
    color: '#007bff',
    fontFamily: 'Arial, sans-serif',
  },
  label: {
    fontSize: '18px',
    color: '#3498db',
    fontFamily: 'Arial, sans-serif',
  },
  inputContainer: {
    marginBottom: '12px',
  },
  input: {
    height: '40px',
    borderColor: '#bdc3c7',
    borderWidth: '1px',
    marginBottom: '12px',
    padding: '8px',
    borderRadius: '4px',
    color: '#333',
    backgroundColor: '#ecf0f1',
    width: '100%',
    fontFamily: 'Arial, sans-serif',
  },
  button: {
    backgroundColor: '#3498db',
    padding: '10px',
    borderRadius: '4px',
    color: '#fff',
    cursor: 'pointer',
    fontFamily: 'Arial, sans-serif',
  },
};

export default CustomLogin;
