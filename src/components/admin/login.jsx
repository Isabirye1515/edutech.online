import React, { useState } from "react";
import { Button, Column, Grid, TextInput } from "@carbon/react";
import { Formik, Form } from "formik";

const Login = () => {
  const [account, setAccount] = useState(false); // fixed spelling

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    useName: "",
    role: "",
    passWord: "",
  });

  const [login, setLogin] = useState({
    useName: "",
    passWord: "",
  });

  // Toggle between login/register
  const handleAccount = () => {
    setAccount((prev) => !prev);
  };

  // Generic handler for registration form
  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => ({ ...prevData, [name]: value }));
  };

  // Generic handler for login form
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async () => {
    
    try {
      const response = await fetch("http://localhost:5000/api/users/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (!response.ok) throw new Error("Failed to create account");
      const result = await response.json();
      console.log("User created:", result);
      alert("Account created successfully!");
      setAccount(true); // switch to login after registration
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  const handleLogin = async () => {

    try {
      const response = await fetch("http://localhost:5000/api/users/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(login),
      });

      if (!response.ok) throw new Error("Invalid credentials");
      const result = await response.json();

      // Optional: save token
      localStorage.setItem("token", result.token);
      console.log("Logged in:", result);
      alert("Logged in successfully!");
      window.location.href = "/home"
    } catch (error) {
      console.error(error);
      alert("Login failed!");
    }
  };

  return (
    <Grid style={{marginTop:"3rem",  alignContent:"center"}}>
    
      <Column lg={4} md={6} sm={4}>
        {!account ? (
          <>
            <h2>Login</h2>
            <Formik initialValues={login} onSubmit={handleLogin}>
              <Form className="flex flex-col gap-4 p-4 max-w-sm mx-auto">
                <TextInput
                  id="userName"
                  name="useName"
                  labelText="Username"
                  value={login.useName}
                  onChange={handleLoginChange}
                />
                <TextInput
                  id="passWord"
                  name="passWord"
                  labelText="Password"
                  type="password"
                  value={login.passWord}
                  onChange={handleLoginChange}
                />
                <Button type="submit" style={{margin:"5px"}} >Login</Button>
              </Form>
            </Formik>

            <p className="mt-4">
              Don’t have an account?{" "}
              <Button kind="ghost" onClick={handleAccount}>
                Create Account
              </Button>
            </p>
          </>
        ) : (
          <>
            <h2>Create Account</h2>
            <Formik initialValues={user} onSubmit={handleSubmit}>
              <Form className="flex flex-col gap-4 p-4 max-w-sm mx-auto">
                <TextInput
                  id="firstName"
                  name="firstName"
                  labelText="First Name"
                  value={user.firstName}
                  onChange={handleUserChange}
                />
                <TextInput
                  id="lastName"
                  name="lastName"
                  labelText="Last Name"
                  value={user.lastName}
                  onChange={handleUserChange}
                />
                <TextInput
                  id="middleName"
                  name="middleName"
                  labelText="Middle Name"
                  value={user.middleName}
                  onChange={handleUserChange}
                />
                <TextInput
                  id="userName"
                  name="useName"
                  labelText="Username"
                  value={user.useName}
                  onChange={handleUserChange}
                />
                <TextInput
                  id="role"
                  name="role"
                  labelText="Role"
                  value={user.role}
                  onChange={handleUserChange}
                />
                <TextInput
                  id="passWord"
                  name="passWord"
                  labelText="Password"
                  type="password"
                  value={user.passWord}
                  onChange={handleUserChange}
                />
                <Button type="submit">Register</Button>
              </Form>
            </Formik>

            <p className="mt-4">
              Already have an account?{" "}
              <Button kind="ghost" style={{margin:"5px"}} onClick={handleAccount}>
                Login
              </Button>
            </p>
          </>
        )}
      </Column>
      
    </Grid>
  );
};

export default Login;
