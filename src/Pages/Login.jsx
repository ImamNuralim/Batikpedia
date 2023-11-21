import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/Auth";
import { useNavigate } from "react-router-dom";

export default function Login(){
   const {setIsLoggedIn, isLoggedIn} = useContext(AuthContext);
    const [correctAuth, setCorrectAuth] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(username === "admin" && password === "admin"){
            setIsLoggedIn(true);
            localStorage.setItem('isLoggedIn', JSON.stringify(true));
            navigate("/");
        }
        else {
            setCorrectAuth(false)
            setIsLoggedIn(false)
        }
    }

    if(isLoggedIn){
        navigate("/")
    }
    return(
        <div>
            {!isLoggedIn ?
            <>
                <div class="flex flex-col items-center justify-center px-6 py-8">
                    <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
                        BatikPedia    
                    </a>
                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            {
                                
                            }
                            {!correctAuth && <p class="text-red-500">Wrong username or password</p>}
                            {
                                
                            }
                            <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Username</label>
                                    {

                                    }
                                    <input onChange={(e) => setUsername(e.target.value)} type="username" name="username" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required={true}/>
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    {

                                    }
                                    <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true}/>
                                </div>
                                <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
            : null}
        </div>
    )
}