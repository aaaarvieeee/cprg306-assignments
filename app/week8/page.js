"use client"
import { useUserAuth } from "./_utils/auth-context";

export default function LandingPage(){

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    async function handleLogin(){
        try{
            await gitHubSignIn();
        }
        catch(error){
            console.log(error);
        }
    }
     
    async function handleLogout() {
        try{
            await firebaseSignOut();
        }
        catch(error){
            console.log(error);
        }
    }

    return(
        <div>
            {user ? ( 
                <div>
                    <p> Welcome, {user.displayName} ({user.email}) </p>
                    <button onClick={handleLogout}>Logout</button>
                </div> 
                ) : (
                <button onClick={handleLogin}>Login</button>
                )}
        </div>
    )
}




