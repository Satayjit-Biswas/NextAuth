import { auth } from "@/firebase/firebase.auth";
import styles from "@/styles/Login.module.css";
import { GithubOutlined, GoogleOutlined } from "@ant-design/icons";
import { signIn } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";

const LoginPage = () => {
    const { handleSubmit, register } = useForm();
    const onSubmit = (data) => {createUserWithEmailAndPassword(data.email,data.password)};
    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const router = useRouter()

    if(user){
      router.push('/')

    }
    console.log(user);
    return (
        <div>
            <Head>
                <title>Next Login</title>
            </Head>
            <div className={styles.form}>
                <h3>LOGIN</h3>
                <div className={styles.social_icons}>
                    <GoogleOutlined
                        onClick={() => {
                            signIn("google", {
                                callbackUrl: "http://localhost:3000/",
                            });
                        }}
                    />
                    <GithubOutlined
                        onClick={() => {
                            signIn("github", {
                                callbackUrl: "http://localhost:3000/",
                            });
                        }}
                    />
                </div>
                <hr />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="">Your Email</label>
                    <input
                        {...register("email", {
                            required: "Required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address",
                            },
                        })}
                        type="email"
                    />
                    <label htmlFor="">Your Password</label>
                    <input
                        {...register("password", {
                            required: "Required",
                        })}
                        type="password"
                    />

                    {/* <input
                        {...register("password", { required: true })}
                        type="password"
                    /> */}
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
