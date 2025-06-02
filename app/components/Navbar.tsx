import SmallButton from "./SmallButton";

export default function Navbar () {
    return(
        <div className="flex justify-around items-center">
            <div>LOGO</div>
            <div className="flex justify-around">
                
                    <li className="list-none mx-2">products</li>
                    <li className="list-none mx-2">documentation</li>
                    <li className="list-none mx-2">pricing</li>
                
            </div>
            <div>
                <SmallButton name="sign up"/>
                <SmallButton name="login"/>
            </div>
        </div>
    )
}