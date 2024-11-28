// src/App.jsx
import React, { useState } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Container, Button } from "@mui/material";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Button
        variant="outlined"
        fullWidth
        onClick={() => setIsLogin(!isLogin)}
        sx={{ mb: 3 }}
      >
        {isLogin ? "Switch to Sign Up" : "Switch to Login"}
      </Button>
      {isLogin ? <Login /> : <Signup />}
    </Container>
  );
};

export default App;
