import { useState } from "react";

export default function SignUp() {

    const [userName, setUserName]= useState('');
    const [password, setPassword]= useState('');
    const [confirmPassword, setConfirmPassword]= useState('');
    const [role, setRole] = useState('')
    const [userNameError, setUserNameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError]= useState(false);
    const [roleError, setRoleError]= useState(false);

    async function handleSave(event: { preventDefault: () => void; }){
        event.preventDefault();

       // const apiUrl = process.env.REACT_APP_API_URL;

        if(userName.trim() === ''){
            setUserNameError(true);
        }else{
            setUserNameError(false);
        }
         if(password.trim() === '') {
            setPasswordError(true);
        }else{
            setPasswordError(false);
        }
        
        if(confirmPassword.trim() === ''){
            setConfirmPasswordError(true);
        }else{
            setConfirmPasswordError(false);
        }

        if(role.trim() === ''){
            setRoleError(true);
        }else{
            setRoleError(false);
        }

        if(userName){
            const response = await fetch("http://localhost:9090/api/saveSignUp", {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({userName,password,confirmPassword,role})
            })
            if(response.ok){
                alert(" Record Saved Successfuly..!");
            }else{
                alert("Something Went Wrong..!");
            }
        }
    }

    return(

        <div className="flex justify-center items-center">
            <form action="#">
                <div className="flex flex-col mt-8">
                    <label htmlFor="userName" className={"font-semibold capitalize"}>User Name</label>
                    <input type="text" className={userNameError ? "py-2 px-2 rounded-md mt-2 border border-red-500" : "py-2 px-2  border rounded-md mt-2 border-stone-400"}
                    value={userName}
                    onChange={(event) => {
                        setUserName(event.target.value); setUserNameError(false)}} 
                    />
                    {
                        userNameError && (<p className="text-red-500">Please enter user name!</p>)
                    }
                </div>
                <div className="flex flex-col mt-4">
                    <label htmlFor="userName" className={"font-semibold capitalize"}>Password</label>
                    <input type="password" className={passwordError ? "py-2 px-2 rounded-md mt-2 border border-red-500" : "py-2 px-2 rounded-md mt-2 border border-stone-400"}
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value);
                        setPasswordError(false);
                    }} 
                    />
                    {
                        passwordError && (<p className="text-red-500">Please enter Password!</p>)
                    }
                </div>
                <div className="flex flex-col mt-4">
                    <label htmlFor="userName" className={"font-semibold capitalize"}>Confirm Password</label>
                    <input type="password" className={confirmPasswordError ? "py-2 px-2 rounded-md mt-2 border border-red-500" : "py-2 px-2 rounded-md mt-2 border border-stone-400"}
                    value={confirmPassword}
                    onChange={(event) => {
                        setConfirmPassword(event.target.value);
                        setConfirmPasswordError(false);
                    }}
                    />
                    {
                        confirmPasswordError && (<p className="text-red-500">Please enter Confirm password!</p>)
                    }
                </div>
                <div className="flex flex-col mt-3">
                    <label htmlFor="role" className={"font-semibold capitalize"}>Role</label>
                    <input type="text" className={confirmPasswordError ? "py-2 px-2 rounded-md mt-2 border border-red-500" : "py-2 px-2 rounded-md mt-2 border border-stone-400"}
                        onChange={(event) => {
                        setRole(event.target.value);
                        setRoleError(false);
                    }}
                    value={role}
                     />
                     {
                        roleError && (<p className="text-red-500">Please enter role..!</p>)
                     }
                </div>
                <div>
                    <button className="py-2 px-4 bg-black text-white rounded-md mt-3" type="button" onClick={handleSave}>Save</button>
                </div>
                <div>
                    <button className="px-3 py-2 border mt-4 rounded-md bg-black text-white">Log in</button>
                </div>
                
            </form>
           
        </div>
    );
}