import { useDispatch } from "react-redux";
import { useParams, useNavigate, Outlet } from "react-router-dom";
import { authActions } from "../store/auth";
import stagesData from "../assets/data/stages";
import NavigationBar from "../components/NavigationBar";

export default function StagePage() {
  const navigate = useNavigate();
  const param = useParams();
  const dispatch = useDispatch();

  window.onpopstate = () => {
    dispatch(authActions.unAuthorize());
  };

  const selectedStage = stagesData[`${param.stage}`];

  function handleClick() {
    dispatch(authActions.unAuthorize());
    navigate("/authorize");
  }
  return (
    <>
      <NavigationBar />
      <h1>{param.stage}</h1>

      <button onClick={handleClick}>Get Back</button>
      <Outlet context={selectedStage} />
    </>
  );
}
