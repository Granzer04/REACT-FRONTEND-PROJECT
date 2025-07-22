import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    // Sanitize input to prevent XSS
    const sanitizedUsername = username.replace(/[^a-zA-Z0-9_@.]/g, '');
    const sanitizedPassword = password.replace(/[^a-zA-Z0-9!@#$%^&*()_+=-]/g, '');
    // Basic validation
    if (!sanitizedUsername || !sanitizedPassword) {
      setError('Username and password are required.');
      return;
    }
    // TODO: Replace with real backend authentication
    setError('Authentication not implemented. Please connect to a backend API.');
// Demo login removed. Implement real authentication with a backend API.
  };

  return (
    <div style={{
      maxWidth: 400,
      margin: 'auto',
      padding: 20,
      background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
      borderRadius: 16,
      boxShadow: '0 4px 24px rgba(0,0,0,0.08)'
    }}>
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="Logo" style={{ width: 64, height: 64, marginBottom: 8 }} />
        <h2 style={{ fontFamily: 'Segoe UI', color: '#333' }}>Login</h2>
      </div>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', marginBottom: 4, color: '#555' }}>Username:</label>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            data-testid="username-input"
            style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc' }}
            autoComplete="off"
            inputMode="text"
            aria-label="Username"
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', marginBottom: 4, color: '#555' }}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            data-testid="password-input"
            style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc' }}
            autoComplete="new-password"
            aria-label="Password"
          />
        </div>
        <button
          type="submit"
          data-testid="login-button"
          style={{
            width: '100%',
            padding: 10,
            borderRadius: 6,
            border: 'none',
            background: '#61dafb',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 16,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(97,218,251,0.15)'
          }}
        >
          Login
        </button>
      </form>
      {error && <div style={{ color: 'red', marginTop: 16, textAlign: 'center' }} data-testid="error-message">{error}</div>}
      {success && <div style={{ color: 'green', marginTop: 16, textAlign: 'center' }} data-testid="success-message">Login successful!</div>}
    </div>
  );
};

export default LoginPage;
