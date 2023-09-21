import { useState } from "react";
const ContactForm = () => {
    const [value,setValue] = useState('')
    let handleChange=(e)=>{
        setValue(e.target.value)
    }
    return ( <>
        <div className="my-4" id='contactForm' >
        <h3>Submit the form below to contact me</h3>
        <form className='ms-2' method="post">
        <label htmlFor="name">Name:</label> <br/>
        <input type="text" name="name" id="name" size="42" required/><br/>
        <label htmlFor="message">Message:</label> <br/>
        <textarea type="text" name="message" id="message" value={value} onChange={handleChange} rows="5" cols="41"> </textarea><br/>
        <input type="submit"/>
        </form>
        </div>
        </>
     );
}
 
export default ContactForm;