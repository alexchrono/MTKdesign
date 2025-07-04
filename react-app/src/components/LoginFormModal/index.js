import React, { useState } from "react";
import { useModal } from "../../context/Modal";
import GoogleAuthButton from '../GoogleAuthButton'
import "./LoginForm.css";

function LoginFormModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();
  const [waiting,setWaiting]=useState(false)

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // const data = await dispatch(login(email, password));
    // if (data) {
    //   setErrors(data);
    // } else {
    //     closeModal()
    // }
    return 7
  };



  return (
    <>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Log In</button>
        <GoogleAuthButton setWaiting={setWaiting}/>
      </form>
    </>
  );
}

export default LoginFormModal;
