import { useRouter } from "next/router"

export default async function Question({ params } : { params: Promise< { qid: string }> }) {
    const qid = (await params).qid;
    return (
        <div>
            <h1>Question: {qid}</h1>
        </div>
    )
}
