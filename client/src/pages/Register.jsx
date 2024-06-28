import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerMiddleware } from "../actions/actionCreator";
import { ToastContainer, toast } from "react-toastify";
import { CLEAR_STATE } from "../actions/actionTypes";

function RegisterPage() {
  let initialState = {
    name: "",
    identity_number: "",
    email: "",
    date_of_birth: "",
  };

  let [userData, setUserData] = useState(initialState);

  const dispatch = useDispatch();

  const formHandler = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(registerMiddleware(userData));
  };

  const { registered } = useSelector((state) => state.register);

  useEffect(() => {
    if (registered.status === "SUCCESSFUL") {
      toast.success("Admin added");
      setUserData(initialState);
    }
  }, [registered]);

  // ERROR HANDLER
  const notify = (msg) => toast.error(msg);
  const { errorMessage } = useSelector((state) => state.register);

  useEffect(() => {
    if (errorMessage) {
      if (typeof errorMessage === "object") {
        errorMessage.forEach((err) => notify(err));
      } else {
        notify(errorMessage);
      }
    }
  }, [errorMessage]);

  // CLEAR STATE
  useEffect(() => {
    return () => {
      dispatch({ type: CLEAR_STATE });
    };
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="container col-4 border rounded shadow p-4 mt-5 content">
        <form className="bootstrap-form-with-validation">
          <h2 className="text-center" style={{ fontWeight: "bold" }}>
            Register
          </h2>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              className="form-control"
              type="text"
              name="name"
              value={userData.name}
              onChange={formHandler}
            />
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="identity_number">
              ID Number
            </label>
            <input
              id="identity_number"
              className="form-control"
              type="number"
              name="identity_number"
              value={userData.identity_number}
              onChange={formHandler}
            />
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              className="form-control"
              type="email"
              name="email"
              value={userData.email}
              onChange={formHandler}
            />
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="date_of_birth">
              Date of Birth
            </label>
            <input
              id="date_of_birth"
              className="form-control"
              type="date"
              name="date_of_birth"
              value={userData.date_of_birth}
              onChange={formHandler}
            />
          </div>
          <div className="form-group mb-3">
            <button
              className="btn btn-primary col-3"
              type="submit"
              style={{ background: "#2b2d42", borderColor: "#2b2d42" }}
              onClick={submitHandler}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default RegisterPage;
