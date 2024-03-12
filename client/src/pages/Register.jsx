import React, { useState } from "react";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [ErrorMessage, setErrorMessage] = useState(null);
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password || !formData.email) {
      return setErrorMessage("please fill out all fields.");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/Login");
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  return (
    <div className="mt-20 p-3 flex flex-col w-80 m-auto">
      <form
        className=" flex flex-col form register__form border"
        onSubmit={handleSubmit}
      >
        <div>
          <Label value="Your username" />
          <TextInput
            type="text"
            placeholder="Enter Your username"
            id="username"
            onChange={handleChange}
          />
        </div>
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
            placeholder="Enter Your password"
            id="password"
            onChange={handleChange}
          />
        </div>
        <Button
         
          type="submit"
          className="w-60 m-auto mt-5"
          disabled={Loading}
        >
          {Loading ? (
            <>
              <Spinner size="sm" />
              <span className="pl-3">loading....</span>
            </>
          ) : (
            "Sign Up"
          )}
        </Button>
      </form>

      <div className="flex gap-2 text-sm mt-5 m-auto">
        <span>Have an account?</span>
        <Link to="/Login" className="text-blue-500">
          Sign In
        </Link>
      </div>
      {ErrorMessage && (
        <Alert className="mt-5" color="failure">
          {ErrorMessage}
        </Alert>
      )}
    </div>
  );
}
