import React, { useState } from "react";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.password || !formData.email) {
      return dispatch(signInFailure("please fill out all fields."));
    }
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className="mt-20 p-3 flex flex-col w-80 m-auto">
      <form
        className=" flex flex-col gap-4 border-solid border-2 form register__form p-5"
        onSubmit={handleSubmit}
      >
        <div>
          <Label value="Your email" />
          <TextInput
            type="email"
            placeholder="Enter Your email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <Label value="Your password" />
          <TextInput
            type="password"
            placeholder="************"
            id="password"
            onChange={handleChange}
          />
        </div>
        <Button
          type="submit"
          className="w-60 m-auto"
          disabled={loading}
        >
          {loading ? (
            <>
              <Spinner size="sm" />
              <span className="pl-3">loading....</span>
            </>
          ) : (
            "Sign in"
          )}
        </Button>
      </form>

      <div className="flex gap-2 text-sm mt-5 m-auto">
        <span>Dont have an account?</span>
        <Link to="/Register" className="text-blue-500">
          Sign Up
        </Link>
      </div>
      {errorMessage && (
        <Alert className="mt-5" color="failure">
          {errorMessage}
        </Alert>
      )}
    </div>
  );
}
