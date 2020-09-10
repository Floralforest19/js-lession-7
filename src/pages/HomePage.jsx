import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export default function HomePage() {
    const { firstName, setFirstName, lastName, setLastName } = useContext(UserContext)
    return (
        <div>
            <h1> HomePage </h1>
            <input onChange={(event) => setFirstName(event.target.value)} placeholder="First Name"/>
            <input onChange={(event) => setLastName(event.target.value)}placeholder="Last Name"/>
            <button>Save</button>
            <p> Firstname: {firstName} </p>
            <p> Lastname: {lastName}  </p>
        </div>
    )
}
