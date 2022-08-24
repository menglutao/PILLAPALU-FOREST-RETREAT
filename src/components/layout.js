import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle
  } from './layout.module.css'

const Layout = ({ pageTitle , children }) => {
    const data = useStaticQuery(graphql`
        query  {
            site {
                siteMetadata {
                title
                }
            }
        }
    `)
    //console.log(data); 
    return (
        <div className={container}> 
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
            <ul className={navLinks}>
                <li className={navLinkItem}>    
                    <Link to="/" className={navLinkText}>Home Page</Link>
                </li>
                <li className={navLinkItem}>
                    <Link to="/about" className={navLinkText}>About Us</Link>
                </li>
                <li className={navLinkItem}>
                    <Link to="/blog" className={navLinkText}>Blog</Link>
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



