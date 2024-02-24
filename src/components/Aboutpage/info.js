import React from 'react'
import Title from '../title'
import aboutBcg from '../../images/aboutBcg.jpeg'


function info() {
    return (
        <section className="py-5">
            <div className="container"> 
            <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
<img src={aboutBcg} className="img-fluid img-thumbnail"  alt="about company" style={{background: "var(--darkGrey)"}}/>

        </div>
                    <div className="col-10 mx-auto col-md-6 my-3">


                        <Title title="About Us" center>

                        </Title>
                        <p className="text-lead text-muted my-3">Realizing tangible outcomes for our clients through provocative
                             thinking and transformative insights, In India offers a wide range of services 
                             spanning strategy,
                             consulting, digital, technology and operations. </p>
                        <p className="text-lead text-muted my-3">Realizing tangible outcomes for our clients through provocative
                        thinking and transformative insights, In India offers a wide range of services
                        spanning strategy,
                             consulting, digital, technology and operations. </p>

                             <button className="main-link" type="button" style={{margin:"2rem"}}>
                                More Info
                             </button>

                    </div>

            </div>
            </div>
            

        </section>
   
    )
}

export default info
