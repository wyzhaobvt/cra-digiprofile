const Experience = () => {
    return ( 
        <>
        <div className="div2" id="experience">
    <h3 >Professional Experience</h3>
    <p className="experience"><i>ABC Inc. (2005 to Present) -- San Jose, CA</i> <br></br>
    <i>ABC is a global tech company.</i> </p>
    <table cellPadding="15">
        <thead>
        <tr>
            <th>Role</th>
            <th>Duration</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td><b>Director of Software Development</b></td>
            <td>2010 to Present</td>
        </tr>
        <tr>
            <td><b>Senior Software Developer</b></td>
            <td>2008 to 2010</td>
        </tr>
        <tr>
            <td><b>Senior Software / Tester</b></td>
            <td>2004 to 2008</td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
            <td colSpan="2"><b>Advanced through several promotions, culminating in present director-level role overseeing firm's software development activities.</b></td>
        </tr>
        </tfoot>
    </table>
   

   </div>
    </>
     );
}
 
export default Experience;