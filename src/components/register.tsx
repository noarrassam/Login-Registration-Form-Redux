import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ActionsTypes, { IActionType, IUserFormData } from "../actions/action";

// interface IUserFormData {
//   fname: string;
//   lname: string;
//   username: string;
//   gender: string;
//   role: string;
//   address: string;
//   email: string;
//   password: string;
//   repass: string;
// }

export default function Register() {
  const defaultData: IUserFormData = {
    fname: "",
    lname: "",
    username: "",
    gender: "",
    role: "",
    address: "",
    email: "",
    password: "",
    repass: "",
  };

  const dispatch: any = useDispatch();
  // const state: any = useSelector();
  const [formData, setFormData] = useState<IUserFormData>(defaultData);

  function handleOnChange(
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>
  ) {
    var name = e.target as HTMLInputElement;
    var value = e.target as HTMLInputElement;

    setFormData((prevState) => {
      return {
        ...prevState,
        [name.name]: value.value,
      };
    });
  }

  function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (formData.password !== formData.repass) {
      alert("Password does not match");
    } else {
      dispatch({ type: ActionsTypes.ADD_CONTACT, payload: formData });
      setFormData(defaultData);
    }
  }

  return (
    <div className="container border border-dark my-5">
      <div className="row my-3">
        <div className="col-lg-2">
          <form onSubmit={handleOnSubmit}>
            <label> Firstname: </label> <br />
            <input
              type="text"
              required
              name="fname"
              size={15}
              onChange={handleOnChange}
              value={formData.fname}
            />
            <br />
            <label>Lastname:</label>
            <br />
            <input
              type="text"
              required
              name="lname"
              size={15}
              onChange={handleOnChange}
              value={formData.lname}
            />
            <br />
            <label>Username:</label>
            <br />
            <input
              type="text"
              required
              name="username"
              onChange={handleOnChange}
              value={formData.username}
            />
            <br />
            <label>Gender:</label>
            <br />
            <input
              type="radio"
              name="gender"
              onChange={handleOnChange}
              value="Male"
            />{" "}
            Male <br />
            <input
              type="radio"
              name="gender"
              onChange={handleOnChange}
              value="Female"
            />{" "}
            Female <br />
            Email:
            <input
              type="email"
              required
              id="email"
              name="email"
              onChange={handleOnChange}
              value={formData.email}
            />{" "}
            Password:
            <input
              type="password"
              required
              id="password"
              name="password"
              onChange={handleOnChange}
              value={formData.password}
            />{" "}
            <br />
            Re-type password:
            <input
              type="password"
              required
              id="repass"
              name="repass"
              onChange={handleOnChange}
              value={formData.repass}
            />{" "}
            <textarea
              cols={80}
              rows={5}
              placeholder="Enter address"
              name="address"
              onChange={handleOnChange}
              value={formData.address}
              required
              className="my-2"
            ></textarea>{" "}
            <br />
            <button name="submit" value="Login" className="btn btn-primary">
              Submit
            </button>
          </form>{" "}
        </div>
      </div>
    </div>
  );
}
