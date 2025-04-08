import {Link} from 'react-router-dom';

function About(props) {
    return (
        <div>
          <div className='headerContainer'>
            <div className='choiceContainer' style={{display: 'block', marginTop: '40px'}}>
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/about' style={{textDecoration: 'underline'}}>About</Link>
            <Link className='link' to='/contact'>Contact</Link>
            <Link className="link" to='/projects'>Projects</Link>
            </div> <br></br>
    
      </div>
      <div className='bodyContainer'>
    
      </div>
      </div>
      );
}

export default About