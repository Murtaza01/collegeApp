import { useDispatch } from "react-redux";
import { useParams, Outlet } from "react-router-dom";
import { authActions } from "../store/auth";
import stagesData from "../assets/data/stages";
import NavigationBar from "../components/NavigationBar";
import ScrollToTop from "../util/ScrollToTop";

export default function RootPage() {
  const param = useParams();
  const dispatch = useDispatch();
  window.onpopstate = () => {
    dispatch(authActions.unAuthorize());
  };

  const selectedStage = stagesData[`${param.stage}`];
  return (
    <>
      <main className="min-h-screen  bg-gray-100">
        <NavigationBar />
        <ScrollToTop />
        <Outlet context={selectedStage} />
      </main>
    </>
  );
}


