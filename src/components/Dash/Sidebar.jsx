import React from 'react'
import sidebarStyle from "./Sidebar.module.css"
import { useState } from 'react'
import {
    Link
} from "react-router-dom";

const myPosts = ["warX", "Block solve", "suduko"]

const postData = [
    {

    "_id": "651d7d1d1079ee209906957d",
    "user": "651d2bc7196b4e64c8eac476",
    "repoName": "GameSliders",
    "gameBudget": 500,

    "gmDetails": {
        "thumbUp": 0,
        "gameDesc": "This is a game project.",
        "timeDur": "50 days",
        "teamSize": 20,
        "techStack": ["Unity", "Java"]
    },

    "reviewSec": [
        {
            "rDevName": "Vivek Dhir",
            "rReply": "Unity used with wgl",
            'rThumbsUp': 5,
            "rDesc": "What techstacks were used",
            "_id": "651d7d1d1079ee209906957e"
        },


        {
            "rDevName": "Harshit Kaushik",
            "rReply": "Yes",
            "rThumbsUp": 0,
            "rDesc": "Is it python project",
            "_id": "651d7d1d1079ee209906957f",
            "date": "2023-10-04T14:56:29.593+00:00"
        }
    ]
}
,

{

    "_id": "651d7d1d1079ee209906957g",
    "user": "651d2bc7196b4e64c8eac476",
    "repoName": "BlockSolve",
    "gameBudget": 10000,

    "gmDetails": {
        "thumbUp": 0,
        "gameDesc": "Welcome to my block solve game project.",
        "timeDur": "50 days",
        "teamSize": 30,
        "techStack": ["Unity", "Java"]
    },

    "reviewSec": [
        {
            "rDevName": "Alok",
            "rReply": "Thanks",
            'rThumbsUp': 5,
            "rDesc": "Nice game",
            "_id": "651d7d1d1079ee209906957e"
        },


        {
            "rDevName": "Aman",
            "rReply": "Yes",
            "rThumbsUp": 0,
            "rDesc": "Is it works in Browser only",
            "_id": "651d7d1d1079ee209906957f",
            "date": "2023-10-04T14:56:29.593+00:00"
        }
    ]
},
{
    "_id": "651d7d1d1079ee209906957h",
    "user": "651d2bc7196b4e64c8eac477",
    "repoName": "SpaceAdventure",
    "gameBudget": 15000,

    "gmDetails": {
        "thumbUp": 10,
        "gameDesc": "Embark on an epic space adventure!",
        "timeDur": "60 days",
        "teamSize": 25,
        "techStack": ["Unity", "C#"]
    },

    "reviewSec": [
        {
            "rDevName": "Eva",
            "rReply": "Thank you!",
            "rThumbsUp": 8,
            "rDesc": "Awesome game with stunning graphics!",
            "_id": "651d7d1d1079ee209906957i"
        },


        {
            "rDevName": "John",
            "rReply": "No, it also works on mobile.",
            "rThumbsUp": 2,
            "rDesc": "Is it only for PC?",
            "_id": "651d7d1d1079ee209906957j",
            "date": "2023-10-05T10:30:45.593+00:00"
        }
    ]
},

]

const Sidebar = (props) => {
    
    const handleOnclickLink = (index)=>{
        // if(index === 0){
            props.setRevSection(postData[index].reviewSec) 
            props.setGameSection(postData[index])
        // }
    }
    // const [props.setsideState, setprops.setsideState] = useState(1)
    return (
        <nav className={sidebarStyle.sideMenu3} tabindex="0">
            <div className="sideMenuDiv3"></div>
            <ul className={sidebarStyle.sideBarUl3}>
                <header className={sidebarStyle.sideBarLi3}>
                    <img className={sidebarStyle.sideBarStyleImg} src="https://media.istockphoto.com/id/1253989842/vector/ninja-esport.jpg?s=612x612&w=0&k=20&c=LNKGnkfK38hgnTv27PjZlLFD54twHaPoc8PHr4ACjRo=" />
                    <h2>HackX</h2>
                </header>
                {
                    myPosts.map((i, index) => {
                        return <Link tabindex="0" onClick={(()=>{handleOnclickLink(index)})} className={`${sidebarStyle.sideBarLi3}`}><span>{i}</span></Link>
                    })
                }
                
            </ul>
        </nav>
    )
}

export default Sidebar