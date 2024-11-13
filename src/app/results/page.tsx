import Form from "next/form"
import style from "./styles.module.scss"

const sample_data = {
    "firstName": "Brady",
    "lastName": "Bangasser",
    "alive": true,
    "shopsAtCostco": true,
    "fanOfTomHanks": true,
}

export default async function Results() {
    return (
        <div className={style.results}>
            <div className={style.stats}>
                <h1>Thanks for playing</h1>
                <hr />
                <h3>You got 2/2 questions correct!</h3>
                <h3>That&apos;s 100%</h3>
                <hr />
            </div>
            <div className={style.collected}>
                <h1>Data Collected</h1>
                <div style={{ textAlign: "left", width: "fit-content", margin: "auto" }}>
                    {Object.keys(sample_data).map(value => {
                        return (
                            <p key={value}>{value}: {JSON.stringify(sample_data[value])}</p>
                        )
                    })}
                </div>
            </div>
            <hr />
            <div className={`${style.tip}`}>
                <h2>Tip?</h2>
                <Form className={`${style.tipForm}`} action="/">
                    <input type="range" />
                </Form>
            </div>
        </div>
    )
}
