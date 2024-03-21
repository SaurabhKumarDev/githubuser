import React, { useEffect, useState } from 'react'
import '../../App.css'
import { Link } from 'react-router-dom';

function User() {

    const [user, setUser] = useState([]);
    const [userRepo, setUserRepo] = useState([])
    const date = new Date()
    useEffect(() => {
        const userUrl = localStorage.getItem('userProfile');
        const userRepo = localStorage.getItem('userRepo');

        const fetchUser = async () => {
            const fetchUrlData = await fetch(userUrl);
            const response = await fetchUrlData.json();
            setUser(response);
        }
        const fetchUserRepo = async () => {
            const fetchUrlData = await fetch(userRepo);
            const response = await fetchUrlData.json()
            setUserRepo(response);
        }
        fetchUser();
        fetchUserRepo();
        localStorage.removeItem('NavbarRightText')
    }, [])

    const [copied, setCopied] = useState(false);
    const [copyText, setCopyText] = useState("");
    const copy = () => {
        navigator.clipboard.writeText(copyText)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 1500); // Reset copied state after 1.5 seconds
            })
            .catch(err => console.error('Failed to copy text: ', err));
    };

    return (
        <div className='container d-flex justify-content-around mt-5 userFlex'>
            {user ? <div className="width100">
                <div className='userPosition' style={{}}>
                    <img src={user.avatar_url} draggable="false" alt='User Icon' style={{ height: "12rem", width: "12rem", borderRadius: "50%", border: "2px solid black", padding: "2px", marginBottom: "15px" }} />
                    <h3 className='text-left'>{user.login}</h3>
                    <h5 style={{ opacity: "0.5" }} className='text-left' title='Name'>{user.name}</h5>
                    <p>{user.bio === null ? "" : user.bio}</p>
                    <p><i className="fa fa-group" style={{ marginRight: "3px" }}></i>{user.followers} follower {user.following} following</p>
                    <p>{user.company}</p>
                    {user.location ? <p><i class='fa fa-map'></i> {user.location}</p> : ""}
                    <p><i class="fa fa-clock-o"></i> {`${date.getHours()}:${date.getMinutes()}`}</p>
                    <p>Created at : {new Date(user.created_at).getFullYear()} Year</p>
                </div>
            </div>
                :
                ""
            }
            <div className="userRepoWidth">
                {userRepo.length ? userRepo.map((repo) => {
                    return <div style={{ border: "2px solid black", padding: "15px", borderRadius: "15px" }} key={repo.id} className='mb-4'>
                        <h4 className='text-primary mb-3' title={repo.full_name}>{repo.name}</h4>
                        <p className='my-2'>Created : {repo.created_at} Updated : {repo.updated_at}</p>
                        <p className='my-2'>Description : {repo.description ? repo.description : "NA"}</p>
                        <p className='my-2'>Topics : {repo.topics.length ? <span>{repo.topics.map((topic) => { return `#${topic} ` })}</span> : "NA"}</p>
                        <p className='my-2'>Default Branch : {repo.default_branch}</p>
                        <div className='d-flex flex-wrap gap-3 mt-3'>
                            <a href={repo.html_url} className='btn btn-outline-primary' rel='noreferrer' target='_blank' title='Original website'>Github Repo</a>
                            <p onClick={() => { copy(); setCopyText(repo.clone_url) }} title='Just click to copy the link for cloning this repository in your IDE' className='btn btn-outline-primary m-0'>Clone website in IDE</p>
                            {repo.homepage ? <a href={repo.homepage} rel='noreferrer' target='_blank' className='btn btn-outline-primary'>Live Website</a> : ""}
                            <Link to='/follower' onClick={() => localStorage.setItem("userFollower", user.followers_url)} className='btn btn-outline-primary'>Follower</Link>
                        </div>
                    </div>
                })
                    :
                    <div>Apologies, but there was an error preventing me from fetching the user's repository and profile information.</div>
                }
            </div>
        </div>
    )
}

export default User