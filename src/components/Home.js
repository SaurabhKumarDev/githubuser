import React, { useEffect } from 'react'
import '../App.css'

function Home() {
    useEffect (()=>{
        localStorage.removeItem('NavbarRightText')
    },[])
    return (
        <div style={{ height: '80vh' }}>
            <div className='container d-flex justify-content-center gap-4 align-items-center h-100' id='flexInCols'>
                <img src='https://imgs.search.brave.com/LQCm0PnH_V9a1Yr4j-0PGUYbll8wGiUgZgtn8nW-0-w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jYW1v/LmdpdGh1YnVzZXJj/b250ZW50LmNvbS81/MGNmMzkxMjEyNzRi/M2RiMjJiZjFiZDcy/Y2JlMjVhZjkwNzhl/MDM3NDQxY2I1YjVi/ZGVmMWNjOWRjNWVi/MmY3LzY4NzQ3NDcw/NzMzYTJmMmY2MzY0/NmUyZTcyNjE3NzY3/Njk3NDJlNjM2ZjZk/MmY3MzY5NmU2NDcy/NjU3MzZmNzI2ODc1/NzMyZjYxNzc2NTcz/NmY2ZDY1MmY2NDM3/MzMzMDM1NjYzMzM4/NjQzMjM5NjY2NTY0/MzczODY2NjEzODM1/MzYzNTMyNjUzMzYx/MzYzMzY1MzEzNTM0/NjQ2NDM4NjUzODM4/MzIzOTJmNmQ2NTY0/Njk2MTJmNjI2MTY0/Njc2NTJlNzM3NjY3' alt='github' id='homeImg' style={{ width: "20rem" }} />
                <div id='homeText'>
                    <h5>Welcome to our website</h5>
                    <h1>Github User</h1>
                    <h5>In this website you can access the github user information</h5>
                </div>
            </div>
        </div>
    )
}

export default Home
