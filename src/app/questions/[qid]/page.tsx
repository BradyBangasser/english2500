import { useRouter } from "next/router"
import style from "./styles.module.scss"
import Answer from "./Answer.tsx"

interface Answer {
    correct: bool
    answer: string
}

interface Question {
    question: string
    answers: Answer[]
}

const questions: Question[] = [{
    question: "AHHHHHHHHHHHH",
    answers: [{
         correct: false,
         answer: "0"
    }, {
         correct: false,
         answer: "1",
    }, {
         correct: false,
         answer: "2"
    }, {
         correct: false,
         answer: "3"
    }]
}]


export default async function Question({ params } : { params: Promise< { qid: string }> }) {
    const qid = (await params).qid;
    function action(h) {
        console.log(h)

    }

    if (qid >= questions.length) {
        return (
            <h1>No</h1>
            )
    }

    return (
        <div className={style.question}>
            <h1>{questions[qid].question}</h1>
            <div className={style.answers}>
                {questions[qid].answers.map(answer => {
                    return <Answer answer={answer} />
                })}
            </div>
        </div>
    )
}
