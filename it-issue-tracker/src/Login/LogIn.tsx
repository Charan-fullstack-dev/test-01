import { useState } from "react";
import { Navbar } from "../Home/Navbar";


export const LogIn = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');




    const handleLogIn = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const response = await fetch("http://localhost:9090/user", {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + btoa(`${userName}:${password}`)
            },
        });
        if (response.ok) {
            alert("Login successful..!");
           // history.push('/');
        }else{
            alert("Bad credentials..!")
        }
    }

    return (
        <div>            
            <Navbar />
       
        <div className="flex justify-center items-center h-screen bg-gray-100"> {/* Use h-screen to take up full height */}
            <div className="w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <form onSubmit={handleLogIn}>
                    <div className="mb-4">
                        <label htmlFor="userName" className="block text-gray-700 font-semibold mb-2">User Name</label>
                        <input type="text" id="userName" className="px-3 py-2 border border-gray-300 rounded w-full"
                            value={userName} onChange={(event) => setUserName(event.target.value)} required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                        <input type="password" id="password" className="px-3 py-2 border border-gray-300 rounded w-full"
                            value={password} onChange={(event) => setPassword(event.target.value)} required />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-black text-white py-2 px-4 rounded" type="submit">Log in</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
}
