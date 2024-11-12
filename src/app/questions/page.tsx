"use client"

interface FAQQuestion {
    question: string
    answer: string
}

const faqQuestions: FAQQuestion[] = [
    {
        question: "Why do sites collect my data?",
        answerHTML: "Nothing is free, websites need to be hosted on a computer somewhere, often through a cloud provider such as AWS or Azure. These platforms are not cheap and cost increases as your web traffic increases. Developers of websites that offer their services for free still need a way to pay for that, the two most common ways to do that are ads and data collection.",
    }
]

export default function Question() {
    window.onkeypress = (event) => {
        if (event.keyCode !== 0x0D) return
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                    console.log(pos)
                },
                (err) => {
                    console.log(err)
                }
            )
        } else {

        }
    }

    return (
        <div className={``}>
            <h1>Welcome to the Data Game</h1>
            <h3>The only online game that admits to stealing your data</h3>

            <p>The goal of this game is to reach the end of this site without letting it steal data</p>
            <div>
            </div>

            <h1>Press Enter to Begin</h1>
        </div>
        )
}
