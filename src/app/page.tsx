import Image from "next/image";
import Form from "next/form";
import style from "./page.module.scss"

export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center">
        <div className="glitch">
            <h2>Welcome To The</h2>
            <h1>Data Game</h1>
        </div>
        <div className="flex justify-center flex-col items-center">
            <Form className={style.signinForm} >
                <label>First Name</label>
                <input placeholder="John" />
                <label>Last Name</label>
                <input placeholder="Doe" />
                <label>Email</label>
                <input type="email" placeholder="john.doe@microsocks.org" />
                <button>Submit</button>
                <hr />
                <h2>Or</h2>
                <hr />
                <label>First Name</label>
                <input placeholder="John" />
                <button>Continue as Guest</button>
            </Form>
        </div>
    </div>
  );
}
