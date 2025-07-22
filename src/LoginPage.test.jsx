import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginPage from './LoginPage';

describe('LoginPage', () => {
  test('renders login form', () => {
    render(<LoginPage />);
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByLabelText('Username:')).toBeInTheDocument();
    expect(screen.getByLabelText('Password:')).toBeInTheDocument();
    expect(screen.getByTestId('login-button')).toBeInTheDocument();
  });

  test('shows error if fields are empty', () => {
    render(<LoginPage />);
    fireEvent.click(screen.getByTestId('login-button'));
    expect(screen.getByTestId('error-message')).toHaveTextContent('Username and password are required.');
  });

  test('shows error for invalid credentials', () => {
    render(<LoginPage />);
    fireEvent.change(screen.getByTestId('username-input'), { target: { value: 'wrong' } });
    fireEvent.change(screen.getByTestId('password-input'), { target: { value: 'wrong' } });
    fireEvent.click(screen.getByTestId('login-button'));
    expect(screen.getByTestId('error-message')).toHaveTextContent('Invalid username or password.');
  });

  test('shows success for valid credentials', () => {
    render(<LoginPage />);
    fireEvent.change(screen.getByTestId('username-input'), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByTestId('password-input'), { target: { value: 'testpass' } });
    fireEvent.click(screen.getByTestId('login-button'));
    expect(screen.getByTestId('success-message')).toHaveTextContent('Login successful!');
  });
});
