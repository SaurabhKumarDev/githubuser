import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Search() {
    const navigate = useNavigate();
    const [user, setUser] = useState("");

    const handleOnchange = (event) => {
        setUser(event.target.value)
    };

    useEffect(() => {
        localStorage.removeItem('userProfile')
        localStorage.removeItem('userRepo')
    }, [])

    const fetchUser = async () => {
        try {
            const userProfile = `https://api.github.com/users/${user}`;
            const userRepo = `https://api.github.com/users/${user}/repos`;
            localStorage.setItem("userProfile", userProfile);
            localStorage.setItem("userRepo", userRepo);
            navigate("/user")
            localStorage.removeItem('NavbarRightText')
        } catch (error) {
            console.error("Sorry, but some error occurred while fetching the user data for GitHub");
        }
    }
    return (
        <div className='container d-flex justify-content-center align-items-center w-100' style={{ height: "80vh" }}>
            <div className='py-3 px-4' style={{ border: "2px solid #dcd5d5", borderRadius: "15px", width: "max-content", backgroundColor: "#dcd5d5" }}>
                <form onSubmit={fetchUser}>
                    <input type='text' onChange={handleOnchange} value={user} style={{ outline: "none", border: "1px dashed #a4a4a4", width: "20rem" }} className=' rounded p-2 bg-transparent' placeholder='username' required />
                    <button type='submit' className='py-2 px-3 rounded btn btn-outline-success'><i className="fa fa-search"></i></button>
                </form>
            </div>
        </div>
    )
}

export default Search
