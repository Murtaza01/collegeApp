import { useDispatch } from "react-redux";
import { useParams, useNavigate, Outlet } from "react-router-dom";
import { authActions } from "../store/auth";
import { Link } from "react-router-dom";
import { stages } from "../assets/data/stages";

export default function StagePage() {
  const navigate = useNavigate();
  const param = useParams();
  const dispatch = useDispatch();

  window.onpopstate = () => {
    dispatch(authActions.unAuthorize());
  };

  const selectedStage = stages[`${param.stage}`];

  function handleClick() {
    dispatch(authActions.unAuthorize());
    navigate("/authorize");
  }
  return (
    <>
      <h1>{param.stage}</h1>
      <Link to="books">Books</Link>
      <button onClick={handleClick}>Get Back</button>
      <Outlet context={selectedStage} />
    </>
  );
}
