import Form from "next/form"
import style from "./styles.module.scss"
export default function Home() {
    function FormInput({ label, name, placeholder }: { label: string, name: string, placeholder?: string }) {
        return (
            <div className={style.formInput}>
                <p>{label}: </p>
                <input name={name} placeholder={placeholder} required />
            </div>
        )
    }

    return (
        <div>
            <Form action="/questions" className={style.onboardingForm}>
                <FormInput name="firstName" label="First Name" placeholder="Connor" />
                <FormInput name="lastName" label="Last Name" placeholder="Tynan" />
                <FormInput name="email" label="Email" placeholder="ctynan@microsocks.com" />
                <input type="submit" value="Let's Start" />
            </Form>
        </div>
    )
}