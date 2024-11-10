import Form from "next/form"
import style from "./styles.module.scss"

export default async function Results() {
    return (
        <div>
            <div className="glitch">
                Data 🥳
            </div>
            <div className={`${style.tip}`}>
                <h2>Tip?</h2>
                <Form className={`${style.tipForm}`}>
                    <button>10%</button>
                    <button>15%</button>
                    <button>20%</button>
                </Form>
            </div>
        </div>
    )
}
