import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/Seo'


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <h3>WELCOME TO PILLAPALU FOREST RETREAT</h3>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/mainpage2.webp"
      />
      <p> Pillapalu Forest Retreat is an ideal location your for company or group trainings, seminars, and other events.</p>
      <p>See you soon in Pillapalu! Escape from the city...</p>
    </Layout>
  )
}
export const Head = () => <Seo title = "Home Page"/>
export default IndexPage;