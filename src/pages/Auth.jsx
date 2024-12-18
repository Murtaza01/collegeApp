import { useRef, useState, useEffect } from "react";
import { authActions } from "../store/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkEmail } from "../util/helpers";
import { IoIosMail } from "react-icons/io";
import { IoAlertCircleOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import useLanguage from "../hooks/useLanguage";

let firstRun = true;
export default function AuthPage() {

  const [validEmail, setValidEmail] = useState(true);
  const email = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { headFont } = useLanguage();

  useEffect(() => {
    if (firstRun) {
      async function defaultLang() {
        await i18n.changeLanguage("ar");
        document.body.dir = "rtl";
      }
      defaultLang();
    }
    firstRun = false;
  }, []);

  function handleFormSubmit(event) {
    event.preventDefault();
    const emailValue = email.current.value.toLowerCase();
    const correctEmail = checkEmail(emailValue);
    if (emailValue === "admin") {
      dispatch(authActions.authorizeAdmin());
      dispatch(authActions.setStage("/all-stages"));
      navigate("/all-stages");
    } else if (!correctEmail) {
      setValidEmail(false);
      setTimeout(() => {
        setValidEmail(true);
      }, 5000);
    } else {
    dispatch(authActions.authorizeUser());
      setTimeout(()=>{
     return navigate("/stagepick");
      },300)
    }
  }
  return (
    <section dir="ltr" className="center  h-screen  bg-gray-100 ">
      <div className="w-full center mx-2">
        <form
          onSubmit={handleFormSubmit}
          className="bg-white relative shadow-lg h-52 w-11/12 max-w-[400px] center flex-col   rounded-lg "
        >
          <div
            className={`bg-gray-200 ${
              !validEmail ? "border-[1px] border-red-500" : ""
            }  px-2 py-1  rounded-md   w-11/12 max-w-80 center gap-1 `}
          >
            <span className="border-r-[1px] pr-1 border-black">
              <IoIosMail className="text-xl " />
            </span>
            <input
              placeholder="Enter Your College Email"
              type="text"
              ref={email}
              className="outline-none bg-transparent w-full"
            />
          </div>
          {!validEmail && (
            <p className="text-red-500 mt-2 center  gap-1 capitalize">
              <IoAlertCircleOutline className="text-lg " />
              {t("errorMessage")}
            </p>
          )}
          <button
            className={`clickEffect ${headFont} mt-8  rounded-md capitalize text-neutral-600
           bg-accent shadow-neutral-500 px-5 py-1 shadow-sm`}
          >
            {t("submit")}
          </button>
        </form>
      </div>
    </section>
  );
}
