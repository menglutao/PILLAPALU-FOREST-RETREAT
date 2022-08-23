import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/Seo'

const About = () => {
    return (
        <Layout pageTitle = "About Us"> 
            <StaticImage
                alt="woods"
                src="../images/aboutus.webp"
            />
            <p> We are a small family business run by Birgit (Estonian) and Robin (English).<br></br>Local community suppliers and partners help us deliver nature-friendly products and services.
<br></br>Volunteers from around the world help us develop the facilities too.</p>
        </Layout>
    )
}

export const Head = () => <Seo title="About Us" />

export default About;