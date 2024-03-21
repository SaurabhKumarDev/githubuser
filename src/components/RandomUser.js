import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function RandomUser() {
    const [randomUser, setRandomUser] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://api.github.com/users')
                if (response.status === 200) {
                    const data = await response.json();
                    setRandomUser(data)
                } else {
                    console.error(`Some server error occured, Status: ${response.status}`);
                }
            } catch (error) {
                console.error("Error occured while fetching the api", error);
            }
        }
        fetchUsers()
        localStorage.removeItem('userProfile')
        localStorage.removeItem('userRepo')
        localStorage.removeItem('userFollower')
        localStorage.removeItem('userFollowing')
        localStorage.removeItem('NavbarRightText')
    }, [])

    return (<>
        <div className='container mt-5'>
            {
                randomUser.length ? randomUser.map((user) => {
                    return <div className="card mb-3 d-flex flex-row" key={user.id}>
                        <img src={user.avatar_url} className="card-img-top" id='randomWidth' style={{ height: "auto" }} alt="..." />
                        <div className="card-body">
                            <p className="card-title"><strong>Username : </strong>
                                <Link to='/user' onClick={() => { localStorage.setItem('userProfile', user.url); localStorage.setItem('userRepo', user.repos_url) }} className="text-dark" style={{ textDecoration: "none" }}>
                                    {user.login}
                                </Link>
                            </p>
                            <p className="card-text"><strong>User ID : </strong>{user.id}</p>
                            <p className="card-text"><strong>Type : </strong>{user.type}</p>
                            <p className="card-text"><strong>Follower : </strong>NA &nbsp;&nbsp;&nbsp;<strong>Following : </strong>NA</p>
                            <p className="card-text d-flex gap-4 flex-wrap">
                                <span>
                                    <a href={user.html_url} className='btn btn-outline-primary py-1 px-3'>Github Profile</a>
                                </span>
                                <span>
                                    <Link to='/follower' onClick={() => localStorage.setItem('userFollower', user.followers_url)} className='py-1 px-3 btn btn-outline-primary'>Followers</Link>
                                </span>
                                <span>
                                    <Link to='/following' onClick={() => localStorage.setItem('userFollowing', user.followings_url)} className='py-1 px-3 btn btn-outline-primary'>Followings</Link>
                                </span>
                            </p>
                        </div>
                    </div>
                })
                    :
                    <div>Sorry but some error occured while Fetching the github user</div>
            }
        </div>
    </>
    )
}

export default RandomUser