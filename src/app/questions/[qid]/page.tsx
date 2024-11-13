import style from "./styles.module.scss"
import Answer from "./Answer.tsx"

export interface IAnswer {
    correct: boolean
    answer: string
    image?: string
}

interface Question {
    question: string
    answers: IAnswer[]
}

const questions: Question[] = [{
    question: "This is an example question",
    answers: [{
         correct: false,
         answer: "Example answer 0"
    }, {
         correct: false,
         answer: "Example Answer 1",
    }, {
         correct: false,
         answer: "Example Answer 2"
    }, {
         correct: false,
         answer: "Example Answer 3"
    }]
}, {
    question: "Tom Hanks Pictures?",
    answers: [{
         correct: false,
         answer: "Hank 0",
         image: "https://i0.wp.com/bamfstyle.com/wp-content/uploads/2022/01/GreyhoundHanks-MAIN1.jpg?w=525&ssl=1"
    }, {
         correct: false,
         answer: "Hank 1",
         image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/02/06/09/Tom-Hanks-Wilson.jpg",
    }]
}]


export default async function Question({ params } : { params: Promise< { qid: string }> }) {
    const qid = parseInt((await params).qid);


    if (typeof(qid) !== "number" || Number.isNaN(qid) || qid >= questions.length) {
        return (
            <h1>No</h1>
            )
    }

    return (
        <div className={style.question}>
            <h1>{questions[qid].question}</h1>
            <div className={style.answers}>
                {questions[qid].answers.map(answer => {
                    return <Answer key={answer.answer} answer={answer} />
                })}
            </div>
        </div>
    )
}
