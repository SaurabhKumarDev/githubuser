import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Following() {
    const [following, setFollowing] = useState([]);
    useEffect(() => {
        const fetchFollowing = async () => {
            try {
                const url = localStorage.getItem('userFollowing');
                const fetchData = await fetch(url);
                const response = await fetchData.json()
                if (response.status !== 200) {
                    console.error("Soory but some server error occured, Check status code");
                }
                setFollowing(response);
            } catch (error) {
                console.error("Soory but some error occured while we preocess fetching the following");
            }
        }
        fetchFollowing();
        localStorage.setItem('NavbarRightText', "Followings")
    }, [])
    return (
        <div className='container mt-5 d-flex flex-wrap justify-content-around'>
            {following.length ? following.map((currentFollowing) => {
                return <div className='my-5'>
                    <div className="card" style={{ width: "18rem" }}>
                        <p className='position-absolute bg-danger text-light fw-5 rounded px-3 cursor-pointer' title='User id, Like Sr.no' >{currentFollowing.id}</p>
                        <img src={currentFollowing.avatar_url} draggable="false" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to='/user' onClick={() => {
                                    localStorage.setItem('userProfile', currentFollowing.url);
                                    localStorage.setItem('userRepo', currentFollowing.repos_url);
                                }}
                                    className='text-light-emphasis'
                                    style={{ textDecoration: "none" }}
                                    title='Click me to get more information'
                                >
                                    {currentFollowing.login}
                                </Link>
                            </h5>
                            <a href={currentFollowing.html_url} className="btn btn-primary w-100">GitHub Repo</a>
                        </div>
                    </div>
                </div>
            })
                :
                <p>Not Found</p>
            }
        </div>
    )
}

export default Following