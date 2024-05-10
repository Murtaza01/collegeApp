import { useRef, useState } from "react";
import { authActions } from "../store/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkEmail } from "../util/checkEmail";
// import { IoIosMail } from "react-icons/io";
// import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function AuthPage() {
  const [validEmail, setValidEmail] = useState(true);
  const email = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleFormSubmit(event) {
    event.preventDefault();

    const emailValue = email.current.value.toLowerCase();
    const correctEmail = checkEmail(emailValue);

    if (emailValue === "admin") {
      dispatch(authActions.authorizeAdmin());
      dispatch(authActions.setStage("/stages"));
      navigate("/stages");
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
          className="bg-gray-300 relative h-52 w-11/12 max-w-[400px] center flex-col   rounded-lg "
        >
          <div className="bg-white px-2 py-1 rounded-md w-11/12 max-w-80 center gap-1 ">
            <span>{/* <IoIosMail /> */}X</span>
            <input
              placeholder="Enter Your College Email"
              type="text"
              ref={email}
              className=" outline-none bg-white w-full"
            />
            <span className="bg-black rounded-sm center">
              {/* <FaRegArrowAltCircleRight /> */}X
            </span>
          </div>

          <button className="bg-black mt-5 text-white w-36 py-1 rounded-md">
            Submit
          </button>
          {!validEmail && (
            <p className="text-red-500 absolute bottom-3 left-[25%]">
              please enter a correct email
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
