import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authActions } from "../store/auth";

const Stages = ["First-Stage", "Second-Stage", "Third-Stage", "Fourth-Stage"];

export default function StagePickPage() {
  const dispatch = useDispatch();

  function handleClick(stage) {
    dispatch(authActions.setStage(`/${stage}`));
    dispatch(authActions.authorizeUser());
  }
  return (
    <section dir="ltr" className="h-screen center flex-col gap-10 ">
      <h1 className="text-2xl">Which Stage Are You?</h1>
      <ul className="space-y-5">
        {Stages.map((stage) => {
          return (
            <li key={stage} className="">
              <Link
                className=" btnStyle shadow-md shadow-neutral-400 block w-52 capitalize text-center py-3 "
                to={`/${stage}`}
                onClick={() => handleClick(stage)}
              >
                {stage}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
