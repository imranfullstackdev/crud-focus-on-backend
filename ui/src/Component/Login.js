import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate=useNavigate()
  const { name, email, password } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const body = { data };
    const postdata = await fetch(`http://localhost:8000/api/v1/post`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body.data),
    });
    console.log(postdata);
    navigate('/ViewUser')
  };
  return (
    <form onSubmit={submitHandler}>
      <label>NAME</label>
      <input type="text" value={name} name="name" onChange={changeHandler} />
      <br />
      <label>email</label>
      <input type="email" value={email} name="email" onChange={changeHandler} />
      <br />
      <label>password</label>
      <input
        type="text"
        value={password}
        name="password"
        onChange={changeHandler}
      />
      <br />
      <button>submit</button>
    </form>
  );
};

export default Login;
