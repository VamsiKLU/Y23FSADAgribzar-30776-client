import React, { useState } from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Link,
  Alert,
  IconButton,
  TextField,
  Paper,
  Typography,
  Box,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';

function CustomEmailField({ value, onChange }) {
  return (
    <TextField
      label="Email"
      name="email"
      type="email"
      value={value}
      onChange={onChange}
      size="small"
      required
      fullWidth
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircle fontSize="inherit" />
          </InputAdornment>
        ),
      }}
    />
  );
}

function CustomPasswordField({ value, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <FormControl fullWidth variant="outlined" size="small" required>
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'} // Password visibility toggle
        value={value}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  );
}

export default function SlotsSignIn({ onSignIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();
    // Example: Simple validation for demo purposes
    if (email === 'admin@example.com' && password === 'password') {
      onSignIn('admin'); // Notify App of successful login and role
      navigate('/'); // Redirect to home after login
    } else if (email === 'vamsi@gmail.com' && password === 'vamsi123') {
      onSignIn('user');
      navigate('/');
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        width: 400,
        margin: '50px auto',
        padding: 4,
        borderRadius: 2,
        backgroundColor: '#f5f5f5',
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Sign In
      </Typography>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      <form onSubmit={handleSignIn}>
        <Box sx={{ mb: 2 }}>
          <CustomEmailField value={email} onChange={(e) => setEmail(e.target.value)} />
        </Box>
        <Box sx={{ mb: 2 }}>
          <CustomPasswordField value={password} onChange={(e) => setPassword(e.target.value)} />
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          sx={{ my: 2 }}
        >
          Log In
        </Button>
      </form>
      <Link
        href="/signup"
        onClick={(e) => {
          e.preventDefault();
          navigate('/signup');
        }}
        variant="body2"
      >
        Don't have an account? Sign Up
      </Link>
    </Paper>
  );
}
