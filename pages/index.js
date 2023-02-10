import Head from "next/head";
import {
  FaFacebookF,
  FaLinkedin,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";
import { Form, Row, Col, Button, Alert } from "react-bootstrap";
import { MdLock } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useMutate } from "restful-react";
import { useRouter } from "next/router";
import Link from "next/link";

const Home = () => {
  const router = useRouter();
  const {
    mutate: login,
    loading,
    error,
  } = useMutate({
    verb: "POST",
    path: "welcome",
  });
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    login(data).then((_) => router.push("/welcome"));
  };

  return (
    <>
      <Head>
        <title>Login Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="bg-white rounded-2xl shadow-2xl flex w-[85%] max-w-4xl">
            {/* Sign In section */}
            <div className="w-3/5 p-5">
              <h1 className="text-3xl font-bold text-green-500">
                Sign in to Account
              </h1>
              <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>

              {/* Social Media Links */}
              <div className="flex justify-center my-2">
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaFacebookF className="text-sm" />
                </a>
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaGoogle />
                </a>
              </div>
              <p className="text-gray-400 my-3">or use your email account</p>
              <div className="flex flex-col items-center ">
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group controlId="formBasicEmail">
                    <div className="bg-gray-100 w-64 p-2 flex items-center rounded-md mb-3">
                      <FaRegEnvelope className="text-gray-400 m-2" />
                      <Form.Control
                        {...register("email", { required: "Required" })}
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        className="bg-gray-100 outline-none text-sm flex-1"
                      />
                    </div>
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <div className="bg-gray-100 w-64 p-2 flex items-center rounded-md mb-3">
                      <MdLock className="text-gray-400 m-2" />
                      <Form.Control
                        {...register("password", { required: "Required" })}
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="bg-gray-100 outline-none text-sm flex-1"
                      />
                    </div>
                  </Form.Group>
                  {error && <Alert variant="danger">{error?.data}</Alert>}
                  <div className="flex justify-between w-64 mb-5">
                    <label
                      htmlFor="remember"
                      className="flex items-center text-xs"
                    >
                      <input type="checkbox" name="remember" className="mr-1" />
                      Remember me
                    </label>
                  </div>
                  <Button
                    disabled={loading}
                    variant="primary"
                    type="submit"
                    className="border-2 text-green-500 border-green-500 rounded-full px-10 py-2 font-semibold hover:bg-green-500 hover:text-white"
                  >
                    Log In
                  </Button>
                </Form>
              </div>
            </div>

            {/* Sign up section */}
            <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
              <h1 className="text-3xl font-bold mb-2">Hello, Friend!</h1>
              <div className="border-2 w-10 border-white inline-block mb-2"></div>
              <p className="mb-10">
                Fill up your personal information and start your journey with
                us.
              </p>

              <Link
                href="/register"
                className="border-2 border-white rounded-full px-10 py-2 font-semibold hover:bg-white hover:text-green-500"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
