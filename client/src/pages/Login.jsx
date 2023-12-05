import Header from "../components/header"

export default function LoginPage(){
    return(
        <>
             <Header
             //To DO: add below in code...
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
                />
            
        </>
    )
}