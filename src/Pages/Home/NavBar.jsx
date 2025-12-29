import { useState, useEffect } from "react";
/*use state is used to keep track of state of navbar i.e, if it is active or not */ 
import {Link} from "react-scroll";

function NavBar() {
    const [navActive, setNavActive] = useState(false); /*so that nav abr is not active by default*/
    const toggleNav = () =>{
        setNavActive(!navActive)
    }
    const closeMenu = () => {
        setNavActive(false)
    }
    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth <=500) {
                closeMenu();
            }
        }
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if(window.innerWidth <=1200) {
            closeMenu();
        }
    }, []);

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div>
                <a href = "/">
                    <img src = "./img/logo3.jpg" alt="Logoo"  width="50px" height="50px" />
                </a>
            </div>
            <a className={`nav__hamburger ${navActive ? "active" : ""}`}
            onClick={toggleNav}>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </a>
            <div className={`navbar--items ${navActive?"active":""}`}>
                <ul>
                    <li>
                        <Link onClick={closeMenu} activeClass="navbar--active-content"
                        spy ={true}
                        smooth = {true}
                        offset = {-70}
                        duration = {500}
                        to = "heroSection"
                        className = "navbar--content"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} activeClass="navbar--active-content"
                        spy ={true}
                        smooth = {true}
                        offset = {-70}
                        duration = {500}
                        to = "skillSection"
                        className = "navbar--content"
                        >
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} activeClass="navbar--active-content"
                        spy ={true}
                        smooth = {true}
                        offset = {-70}
                        duration = {500}
                        to = "work"
                        className = "navbar--content"
                        >
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} activeClass="navbar--active-content"
                        spy ={true}
                        smooth = {true}
                        offset = {-70}
                        duration = {500}
                        to = "MyPortfolio"
                        className = "navbar--content"
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <a
                            href="https://drive.google.com/file/d/1x19VQJhj42LOznCmwhNi-S9snjJktQWY/view?usp=sharing"  // Update this with the actual path to your PDF file
                            onClick={closeMenu}
                            className="navbar--content"
                            target="_blank"  // Open the link in a new tab/window
                            rel="noopener noreferrer"  // Recommended for security reasons
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
            {/*
            <Link onClick={closeMenu} 
            spy ={true}
            smooth = {true}
            offset = {-70}
            duration = {500}
            to = "Contact"
            className = "btn btn-primary">Contact Me</Link>
            */}
        </nav>
    );

}

export default NavBar;