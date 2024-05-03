// import React, { useState } from 'react'
// import './Login.css'
// import { useNavigate } from 'react-router-dom';


// export const Signup = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   })

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//     console.log(name, value);
//   }

//   const Signup1 = (event) => {
//     const data = {
//       username: formData.name,
//       email: formData.email,
//       password: formData.password
//     }
//     event.preventDefault();
//     // Signup1();
//     console.log(formData);
//     if(!data.username || !data.email || !data.password){
//       alert("please fill in all fields")
//     }
    
//     fetch("http://localhost:8080/form/signup", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/Json'
//       },
//       body:JSON.stringify(data)
//     })
//     .then((response)=>{
//       console.log("response",response);

//       if(response.status===200){
//       console.log("datareceived",response);
//       alert("signup seccessfully");
//       navigate("/login");
//       }
//     }).catch(error=>{
//       console.log("error",error);
//     })
//   }

//   return (
//     <div>

//       <form onSubmit={Signup1}>
//         <h1>Signup Form</h1>
//         <label htmlFor="">username</label>
//         <input type="text" name='name' value={formData.name} onChange={handleChange} />
//         <br /><br />

//         <label htmlFor="">emailId</label>
//         <input type="text" name='email' value={formData.email} onChange={handleChange} />
//         <br /><br />

//         <label htmlFor="">password</label>
//         <input type="password" name='password' value={formData.password} onChange={handleChange} />
//         <br /><br />

//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   )
// }





import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name,value);
    setFormData({ ...formData, [name]: value });
  };

  const Signup1 = (event) => {
    event.preventDefault();

    const data = {
      username: formData.name,
      email: formData.email,
      password: formData.password
    };

    if (!data.username || !data.email || !data.password) {
      alert("Please fill in all fields.");
      return; // Don't proceed with signup if fields are missing
    }

    fetch("http://localhost:8080/form/signup", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => {
      console.log("response", response);
      if (response.status === 201) {
        console.log("data received", response);
        alert("Signup successful");
        navigate("/login");
      } else {
        alert("Signup failed. Please try again.");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Signup failed. Please try again later.");
    });
  };

  return (
    <div>
      <form onSubmit={Signup1}>
        <h1>Signup Form</h1>
        <label htmlFor="name">Username</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        <br /><br />

        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} />
        <br /><br />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
        <br /><br />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};
