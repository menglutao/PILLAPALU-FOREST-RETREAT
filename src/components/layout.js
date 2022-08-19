import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
  } from './layout.module.css'

const Layout = ({ pageTitle , children }) => {
    return (
        <div className={container}> 
            <ul className={navLinks}>
                <li className={navLinkItem}>    
                    <Link to="/" className={navLinkText}>Home Page</Link>
                </li>
                <li className={navLinkItem}>
                    <Link to="/about" className={navLinkText}>About Us</Link>
                </li>
                <li className={navLinkItem}>
                    <Link to="/contact" className={navLinkText}>Contact Us</Link>
                </li>
            </ul>

            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )

}

export default Layout;



