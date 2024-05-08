import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../store/auth";

export default function StagePickPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleClick() {
    // dispatch(authActions.stage("/"));
    navigate("/");
  }
  return (
    <ul>
      <a onClick={handleClick}>Stage 1</a>
      <Link>Stage 2</Link>
      <Link>Stage 3</Link>
      <Link>Stage 4</Link>
    </ul>
  );
}
