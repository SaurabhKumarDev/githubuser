import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Follower() {
    const [follower, setFollower] = useState([]);
    const [bio, setBio] = useState("NA");
    useEffect(() => {
        const fetchFollower = async () => {
            try {
                const url = localStorage.getItem('userFollower');
                const fetchData = await fetch(url);
                const response = await fetchData.json()
                if (response.status !== 200) {
                    console.error("Soory but some server error occured");
                }
                setFollower(response);
            } catch (error) {
                console.error("Soory but some error occured while we preocess fetching the follower");
            }
        }
        fetchFollower();
        localStorage.setItem('NavbarRightText',"Follower")
    }, [])
    return (
        <div className='container d-flex flex-wrap justify-content-around'>
            {follower.map((currentFollower) => {
                return <div className='my-5'>
                    <div className="card" style={{ width: "18rem" }}>
                        <p className='position-absolute bg-danger text-light fw-5 rounded px-3 cursor-pointer' title='User id, Like Sr.no' >{currentFollower.id}</p>
                        <img src={currentFollower.avatar_url} draggable="false" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to='/user' onClick={() => {
                                    localStorage.setItem('userProfile', currentFollower.url);
                                    localStorage.setItem('userRepo', currentFollower.repos_url);
                                }}
                                    className='text-light-emphasis'
                                    style={{ textDecoration: "none" }}
                                    title='Click me to get more information'
                                >
                                    {currentFollower.login}
                                </Link>
                            </h5>
                            <a href={currentFollower.html_url} className="btn btn-primary w-100">GitHub Repo</a>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Follower