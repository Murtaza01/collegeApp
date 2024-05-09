import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authActions } from "../store/auth";

const stages = ["stage1", "stage2", "stage3", "stage4"];

export default function StagePickPage() {
  const dispatch = useDispatch();
  function handleClick(stage) {
    dispatch(authActions.stage(`/${stage}`));
  }
  return (
    <ul>
      {stages.map((stage) => {
        return (
          <li key={stage}>
            <Link to={`/${stage}`} onClick={() => handleClick(stage)}>
              {stage}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
