import {Link} from 'react-router-dom';

function About(props) {
    return (
        <div>
            <div className='customCursor' style={{backgroundColor: '#353935', width: '10px', height: '10px', marginLeft: `${props.mouseX}px`, marginTop: `${props.mouseY}px`}}></div>
          <div className='headerContainer'>
            <div className='choiceContainer' style={{display: 'block', marginTop: '40px'}}>
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/about'>About</Link>
            <Link className='link' to='/contact'>Contact</Link>
            </div> <br></br>
    
      </div>
      <div className='bodyContainer'>
    
      </div>
      </div>
      );
}

export default About