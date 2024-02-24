import React from 'react'
import Hero from '../components/Hero'
import defaultBcg from '../images/defaultBcg.jpeg'
import {Link} from 'react-router-dom'


function DefaultPage() {
    return (
        <>
            <Hero img={defaultBcg} title="404" max="true"> 
            <h2 className="text-uppercase">Page Not Found</h2>
        <Link to="/"  className="main-link">return home </Link>
            </Hero>
        </>
    )
}

export default DefaultPage
