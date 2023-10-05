import React from 'react'
import sidebarStyle from "./Sidebar.module.css"
import { useState } from 'react'
import {
    Link
} from "react-router-dom";

const myPosts = ["warX", "Block solve", "suduko"]



const Sidebar = (props) => {
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
                    myPosts.map((i) => {
                        return <Link tabindex="0" className={`${sidebarStyle.sideBarLi3}`}><span>{i}</span></Link>
                    })
                }
                
            </ul>
        </nav>
    )
}

export default Sidebar