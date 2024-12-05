// // src/App.jsx
// import React, { useState } from "react";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import { Container, Button } from "@mui/material";

// const App = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   return (
//     <Container maxWidth="sm" sx={{ mt: 5 }}>
//       <Button
//         variant="outlined"
//         fullWidth
//         onClick={() => setIsLogin(!isLogin)}
//         sx={{ mb: 3 }}
//       >
//         {isLogin ? "Switch to Sign Up" : "Switch to Login"}
//       </Button>
//       {isLogin ? <Login /> : <Signup />}
//     </Container>
//   );
// };

// export default App;


const App = () => {
  return (
    <div>
      <div>
        <img src="public\kv1kjh8g_queen-elizabeth-time-magazine-cover-650_625x300_08_September_22.avif" alt="" />
      </div>
      <h2> Name: Queen Elizabeth II</h2>
      <h3> Rating: 10/10</h3>
      <p>
        The Queen is the head of state of the UK and 15 other Commonwealth realms. The elder daughter of King George VI and Queen Elizabeth, she was born in 1926 and became queen in 1952. She is the longest-reigning monarch in British history.
      </p>
    </div>
  );
}

export default App;