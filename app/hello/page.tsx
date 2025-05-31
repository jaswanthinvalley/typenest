import SmallButton from "../components/SmallButton";
import { SmallCard } from "../components/SmallCard";

export default function hello() {
    return(
        <div className="flex flex-col">
            <div className=" align-top flex justify-center my-2">
                welcome to the todo list application
            </div>
            <div>
                <input type="text" placeholder="enter the todo" className="border-black justify-center align-middle" />
                <SmallButton name="add to do"/>
                <SmallCard heading="welcomne to next js" subheading="kljhskljhfajkshfkjsdhfskdjfhsdkjfhsdfkjh" image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Golden_retriever_eating_pigs_foot.jpg/500px-Golden_retriever_eating_pigs_foot.jpg"/>
            </div>
            <div>

            </div>
        </div>
    )
}