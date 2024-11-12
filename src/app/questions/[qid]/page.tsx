import { useRouter } from "next/router"

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
    console.log(questions, questions.length)

    if (qid >= questions.length) {
        return (
            <h1>No</h1>
            )
    }

    return (
        <div>
            <h1>{questions[qid].question}</h1>
            {questions[qid].answers.map(answer => {
                return (
                    <div key={answer.answer}>
                        <h2>{answer.answer}</h2>
                    </div>
                )
            })}
        </div>
    )
}
