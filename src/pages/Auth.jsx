import { useRef, useState } from "react";
import { authActions } from "../store/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const [validEmail, setValidEmail] = useState(true);
  const email = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleFormSubmit(event) {
    event.preventDefault();

    const emailValue = email.current.value;
    const correctEmail = emailValue.includes("@") && emailValue.includes("edu");

    if (emailValue === "admin") {
      dispatch(authActions.authorizeAdmin());
      dispatch(authActions.stage("/stages"));
      navigate("/stages");
    } else if (!correctEmail) {
      setValidEmail(false);
    } else {
      dispatch(authActions.authorizeUser());
      navigate("/stagepick");
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h1>Hello</h1>
      <input type="text" ref={email} />
      {!validEmail && <p> please enter a correct email</p>}
      <button>Submit</button>
    </form>
  );
}
