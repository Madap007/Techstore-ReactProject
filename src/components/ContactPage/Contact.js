import React from 'react'
import Title from '../title'
function Contact() {
    return (
     <section className="py-5">
         <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="Contact Us"></Title>
                    <form className="mt-5">
        {/* first */}

        <div className="form-group">
        <input type="text" name="first" className="form-control" placeholder="messi"/>

         <input type="email" name="email" className="form-control" placeholder="email@email.com" />

        <input type="text" name="subject" className="form-control" placeholder="subject" />

        </div>

        <div className="form">
             <textarea name="messsage" className="form-control" rows="10" placeholder="hello there"> 

             </textarea>

        </div>
{/* submit */}
<div className="form-group mt-3">
<input type="submit" value="Send" className="form-control bg-primary text-white" />
</div>
            </form>

        </div>
         </div>
     </section>
    )
}

export default Contact
