"use client"

import style from "./styles.module.scss"

export default function Answer({ answer }) {

    function action(h) {
        console.log(h)
    }

    return (
        <div className={style.answer}>
            <button onClick={action}>{answer.answer}</button>
        </div>
    )
}
