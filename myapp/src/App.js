import React, { useState } from "react";
// import axios from "axios";

const App = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [user, setUser] = useState()

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const user = { username, password };
//     // send the username and password to the server
//     const response = await axios.post(
//       "http://blogservice.herokuapp.com/api/login",
//       user
//     );
//     // set the state of the user
//     setUser(response.data)
//     // store the user in localStorage
//     localStorage.setItem('user', response.data)
//     console.log(response.data)
//   };

// // if there's a user show the message below
//   if (user) {
//     return <div>{user.name} is loggged in</div>;
//   }

//   // if there's no user, show the login form
//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="username">Username: </label>
//       <input
//         type="text"
//         value={username}
//         placeholder="enter a username"
//         onChange={({ target }) => setUsername(target.value)}
//       />
//       <div>
//         <label htmlFor="password">password: </label>
//         <input
//           type="password"
//           value={password}
//           placeholder="enter a password"
//           onChange={({ target }) => setPassword(target.value)}
//         />
//       </div>
//       <button type="submit">Login</button>
//     </form>
//   );
};


// const axios = require('axios');

// async function makeGetRequest() {

//   let res = await axios.get('http://127.0.0.1:8000/api/user/');

//   let data = res.data;
//   console.log(data);
// }

// makeGetRequest();
// const cors=require("cors");
// const corsOptions ={
//    origin:'*', 
//    credentials:true,            //access-control-allow-credentials:true
//    optionSuccessStatus:200,
// }

// App.use(cors(corsOptions)) // Use this after the variable declaration


const axios = require('axios');

async function makeGetRequest() {

  let payload = { username: 'John', password: 'gardener' };

  let res = await axios.post('http://127.0.0.1:8000/api/register/', payload);

    let data = res.data;
    console.log(data);
}

makeGetRequest();

export default App;