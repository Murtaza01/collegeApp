import { useState } from "react";
import { authActions } from "../store/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const [enteredEmail, setEnteredEmail] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleFormSubmit(event) {
    event.preventDefault();

    if (enteredEmail === "hello") {
      dispatch(authActions.authorizeUser());
      navigate("stagepick");
    } else if (enteredEmail === "admin") {
      navigate("stages");
      dispatch(authActions.authorizeAdmin());
      dispatch(authActions.stage("stages"));
    }
  }

  function handleEmailInput(event) {
    const { value } = event.target;
    setEnteredEmail(value);
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <h1>Hello</h1>
      <input type="text" value={enteredEmail} onChange={handleEmailInput} />
      <button>Submit</button>
    </form>
  );
}
