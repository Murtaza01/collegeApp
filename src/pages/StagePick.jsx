import { Link } from "react-router-dom";
import { authActions } from "../store/auth";

export default function StagePickPage() {
  return (
    <ul>
      <Link to="stage1" onClick={() => dispatch(authActions.stage("stage-1"))}>
        Stage 1
      </Link>
      <Link>Stage 2</Link>
      <Link>Stage 3</Link>
      <Link>Stage 4</Link>
    </ul>
  );
}
