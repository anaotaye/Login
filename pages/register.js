import Head from "next/head";
import Link from "next/link";
import { Form, Button, Alert } from "react-bootstrap";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutate } from "restful-react";

const Register = () => {
  const [info, setInfo] = useState();
  const {
    mutate: registerUser,
    loading,
    error,
  } = useMutate({
    verb: "POST",
    path: "register",
  });
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setInfo();
    registerUser(data).then((_) =>
      setInfo("Please visit your email address and activate your account")
    );
  };

  return (
    <>
      <Head>
        <title>SignUp Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
        <div className="w-[70%] max-w-2xl bg-green-500 text-white rounded-2xl rounded-br-2xl p-10">
          <h1 className="text-3xl font-bold mb-2">Sign Up!</h1>
          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <p className="mb-6">Fill in the following details</p>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formUsername">
              <div className="bg-gray-100 w-[80%] p-2 flex items-center rounded-md mb-3 text-green-500">
                <BsPerson className="text-green-500 m-2" />
                <Form.Control
                  {...register("username", { required: "Required" })}
                  name="username"
                  type="text"
                  placeholder="Enter username"
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
            </Form.Group>

            <Form.Group controlId="formEmail">
              <div className="bg-gray-100 w-[80%] p-2 flex items-center rounded-md mb-3 text-green-500">
                <FaRegEnvelope className="text-green-500 m-2" />
                <Form.Control
                  {...register("email", { required: "Required" })}
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
            </Form.Group>

            <Form.Group controlId="formPassword">
              <div className="bg-gray-100 w-[80%] p-2 flex items-center rounded-md mb-3 text-green-500">
                <MdLock className="text-green-500 m-2" />
                <Form.Control
                  {...register("password", { required: "Required" })}
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
            </Form.Group>
            <div className="flex justify-between w-full mb-7">
              <label for="remember" className="flex items-center text-xs">
                <input type="checkbox" name="remember" className="mr-1" />
                Remember me
              </label>
            </div>

            {info && <Alert variant="success">{info}</Alert>}
            {error && <Alert variant="danger">{error?.data}</Alert>}
            <Button
              disabled={loading}
              variant="primary"
              type="submit"
              className="border-2 border-white rounded-full mt-2 px-10 py-2 font-semibold hover:bg-white hover:text-green-500"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Register;
