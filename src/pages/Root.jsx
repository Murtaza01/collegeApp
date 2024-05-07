import { Link, Outlet } from "react-router-dom";
import { authActions } from "../store/auth";
import { useDispatch, useSelector } from "react-redux";
export default function RootPage() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.isAuth);
  const stage = useSelector((state) => state.stage);

  return (
    <>
      {!isAuth && (
        <h1 onClick={() => dispatch(authActions.authorize())}>auth</h1>
      )}
      {isAuth && !stage && (
        <ul>
          <Link
            to="stage-1"
            onClick={() => dispatch(authActions.stage("stage-1"))}
          >
            Stage 1
          </Link>
          <Link>Stage 2</Link>
          <Link>Stage 3</Link>
          <Link>Stage 4</Link>
        </ul>
      )}
      {stage && <Outlet />}
    </>
  );
}
