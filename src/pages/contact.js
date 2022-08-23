import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

// define your component
const Contact = () => {
    return (
       
            <Layout pageTitle = "Contact Us"> 
            
                <form   action="https://formspree.io/xqjqxqjq" method="POST">
                    <input type="text" name="name" placeholder="Name" />
                    <input type="email" name="email" placeholder="Email" />
                    <textarea name="message" placeholder="Message"></textarea>
                    <input type="submit" value="Send" />
                </form>
            </Layout>
    
    )
}

export const Head = () => <Seo title="Contact Us" />
export default Contact;
            
