import React from 'react'
import Robot from "../assets/robot.gif"

export default function Welcome({currentUser}) {
  return (
    <div>
        <img src={Robot} alt="welcome" />
        <h1>
            Welcome, <span>{currentUser.username}!</span>
        </h1>
        <h3>Please select a chat to start Messaging.</h3>
    </div>
  )
}
