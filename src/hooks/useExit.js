import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../store/auth";

export default function useExit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return () => {
    dispatch(authActions.unAuthorize());
    navigate("/authorize");
  };
}
