import { useContext, useEffect } from "react"
import { AuthContext } from "../Provider/Auth";
import { useNavigate } from "react-router-dom";
import Card from "../Component/Card";
import { BatikData } from "../Provider/Batik";

export default function Home() {
    const {isLoggedIn}= useContext(AuthContext);
    const {Batik} = useContext(BatikData);
    const navigate = useNavigate();

    useEffect(() => {
        if(!isLoggedIn){
            navigate("/login")
        }
    }, [isLoggedIn])
    return (
        <div>
            {

            }
            {isLoggedIn ? 
            <>
                <div className="flex flex-wrap place-content-center gap-10">
                    {
                        
                    }
                {Batik.map((item) => (
                    <Card key={item.id} {...item}/>
                ))}
                </div>
            </>
            : <h1>please Log In</h1>}
            
        </div>
    )
}