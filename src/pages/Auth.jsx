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
    <section className="center h-screen ">
      <div className="w-full center mx-2">
        <form
          onSubmit={handleFormSubmit}
          className="bg-gray-300 relative shadow-md h-52 w-11/12 max-w-[400px] center flex-col   rounded-lg "
        >
          <div
            className={`bg-white ${
              !validEmail ? "border-[1px] border-red-400" : ""
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
            <p className="text-red-500 mt-2  center gap-2 capitalize">
              <IoAlertCircleOutline className="text-lg " />
              please enter a correct email
            </p>
          )}
          <button className="bg-black mt-5 text-white w-36 py-1 rounded-md">
            {t("greeting")}
          </button>
        </form>
      </div>
    </section>
  );
}
