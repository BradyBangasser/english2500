import style from "./styles.module.scss"

export default function Incorrect() {
    return (
        <div className={style.incorrect}>
            <h1>That&apos;s Incorrect</h1>
            <h3>Here&apos;s Why</h3>
            <p>A little bit of information here about why...</p>
        </div>
    )
}