import {Link} from 'react-router-dom';

function Contact(props) {
    return (
        <div>
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

export default Contact