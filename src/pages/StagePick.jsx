import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authActions } from "../store/auth";
import stagesData from "../assets/data/stages";
import { useTranslation } from "react-i18next";
import useLanguage from "../hooks/useLanguage";
import { getAuthStorage } from "../util/helpers";
import { redirect } from "react-router-dom";

export default function StagePickPage() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { headFont, paraFont } = useLanguage();
  const stagesArray = Object.keys(stagesData);
  const stages = stagesArray.slice(0, -1);

  function handleClick(stage) {
    dispatch(authActions.setStage(`/${stage}`));
    //dispatch(authActions.authorizeUser());
  }
  return (
    <section dir="ltr" className="h-screen center flex-col gap-10 ">
      <h1 className={`text-2xl ${headFont} capitalize`}>{t("whichStage")}</h1>
      <ul className="space-y-5">
        {stages.map((stage, index) => {
          return (
            <li key={stage} className="">
              <Link
                className={`clickEffect ${index === 0 || index === 1 ? "bg-accent" : " bg-gray-200"
                  }  text-neutral-900 shadow-md shadow-neutral-400 block w-52 
                capitalize rounded-sm text-center py-3  ${paraFont}`}
                to={index === 0 || index === 1 ? `/${stage}` : ""}
                onClick={() => handleClick(stage)}
              >
                {t(`${stage}`)}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export async function loader() {
  const storageData = await getAuthStorage()
  if (storageData) {
    const { user, admin } = storageData
    if (!user && !admin) {
      return redirect('/authorize')
    }
  } else {
    return redirect('/authorize')
  }
  return null;
}
