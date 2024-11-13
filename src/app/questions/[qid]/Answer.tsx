"use client"

import style from "./styles.module.scss"
import { Answer } from "./page.tsx";
import Image from "next/image"

export default function Answer({ answer } : { answer: Answer }) {

    function action(h: any) {

    }

    function AnswerImage() {
        if (answer.image) {
            return <Image src={answer.image} alt={`${answer.answer} image`} width="100" height="100" style={{ margin: "auto"}} />
        } else {
            return (<div></div>)
        }
    }

    return (
        <div className={style.answer}>
            <button onClick={action}>
                <div>
                    <AnswerImage />
                    <p>{answer.answer}</p>
                </div>
            </button>
        </div>
    )
}
