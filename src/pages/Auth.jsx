import { useRef, useState } from "react";
import { authActions } from "../store/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkEmail } from "../util/checkEmail";
import { IoIosMail } from "react-icons/io";
import { IoAlertCircleOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";

export default function AuthPage() {
  const [validEmail, setValidEmail] = useState(true);
  const email = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { t } = useTranslation();
  const currentLang = localStorage.getItem("i18nextLng");
  function handleFormSubmit(event) {
    event.preventDefault();

    const emailValue = email.current.value.toLowerCase();
    const correctEmail = checkEmail(emailValue);

    if (emailValue === "admin") {
      dispatch(authActions.authorizeAdmin());
      dispatch(authActions.setStage("/All-Stages"));
      navigate("/All-Stages");
    } else if (!correctEmail) {
      setValidEmail(false);
      setTimeout(() => {
        setValidEmail(true);
      }, 5000);
    } else {
      dispatch(authActions.authorizeUser());
      navigate("/stagepick");
    }
  }
  return (
    <section className="center  h-screen  bg-gray-100 ">
      <div className="w-full center mx-2">
        <form
          onSubmit={handleFormSubmit}
          className="bg-white relative shadow-lg h-52 w-11/12 max-w-[400px] center flex-col   rounded-lg "
        >
          <div
            className={`bg-gray-200 ${
              !validEmail ? "border-[1px] border-rose-500" : ""
            }  px-2 py-1  rounded-md   w-11/12 max-w-80 center gap-1 `}
          >
            <span className="pr-1 border-r-[1px] border-black">
              <IoIosMail className="text-xl" />
            </span>
            <input
              placeholder="Enter Your Email"
              type="text"
              ref={email}
              className=" outline-none bg-transparent w-full"
            />
          </div>
          {!validEmail && (
            <p
              className={`text-rose-500 mt-2 center ${
                currentLang === "ar" ? "flex-row-reverse" : ""
              } gap-1 capitalize`}
            >
              <IoAlertCircleOutline className="text-lg " />
              {t("errorMessage")}
            </p>
          )}
          <button className="bg-stone-800 mt-8 capitalize text-white w-36 py-1 rounded-md">
            {t("submit")}
          </button>
        </form>
      </div>
    </section>
  );
}
