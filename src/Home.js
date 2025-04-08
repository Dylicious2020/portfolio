import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <div className='headerContainer'>
        <div className='choiceContainer' style={{display: 'block', marginTop: '40px'}}>
        <Link className="link" to='/' style={{textDecoration: 'underline'}}>Home</Link>
        <Link className="link" to='/about'>About</Link>
        <Link className='link' to='/contact'>Contact</Link>
        </div> <br></br>
  <h1 style={{fontSize: '100px', fontWeight: '100', marginLeft: '5%', letterSpacing: '5px'}}>DYLAN WATSON</h1>
  </div>
  <div className='bodyContainer'>

  </div>
  </div>
  );
}

  export default Home