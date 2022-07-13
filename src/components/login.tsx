import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  username: string;
  password?: string;
}

const Login = () => {
  const navigate = useNavigate();
  const users: any = useSelector((state: any) => state.registerReducer);
  const [state, setState] = useState<LoginProps>({
    username: "",
    password: "",
  });

  function handleFormOnChange(e: React.FormEvent<HTMLInputElement>) {
    var name = e.target as HTMLInputElement;
    var value = e.target as HTMLInputElement;
    setState((prevState) => {
      return {
        ...prevState,
        [name.name]: value.value,
      };
    });
  }

  function onValidation(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(users.loggedInUser);
    if (state.username === "" || state.password === "") {
      alert("Empty Username or Password");
    } else {
      users.loggedInUser = -1;
      users.users.forEach((item: any, i: number) => {
        if (
          item.username === state.username &&
          item.password === state.password
        ) {
          users.loggedInUser = i;
          navigate("./profile", { replace: true });
        }
      });
    }
  }

  return (
    <div className="container border border-dark my-5">
      <div className="row my-5 justify-content-center">
        <div className="col-lg-2">
          <form onSubmit={onValidation}>
            <label className="form-label">
              Username:
              <input
                type="text"
                name="username"
                onChange={handleFormOnChange}
                value={state.username}
              />
            </label>
            <label className="form-label">
              Password:
              <input
                type="password"
                name="password"
                onChange={handleFormOnChange}
                value={state.password}
              />
            </label>
            <button
              type="submit"
              name="login"
              value="Login"
              className="btn btn-primary"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
