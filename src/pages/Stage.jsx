import React from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { authActions } from "../store/auth";

export default function StagePage() {
  const navigate = useNavigate();
  const param = useParams();
  const dispatch = useDispatch();
  window.onpopstate = () => {
    dispatch(authActions.unAuthorize());
  };

  function handleClick() {
    dispatch(authActions.unAuthorize());
    navigate("/authorize");
  }
  return (
    <>
      <h1>{param.stage}</h1>
      <button onClick={handleClick}>Get Back</button>
    </>
  );
}
