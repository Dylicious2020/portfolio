import { Link } from "react-router";



function NavigationBar(props) {

    function handleClick(e) {
        props.setPage(e.target.innerHTML.toLowerCase());
    }

    return (
        <div className='headerContainer'>
            <div className='choiceContainer' style={{display: 'block', marginTop: '40px'}}>
            <Link className='link' to='/' style={{textDecoration: (props.page === 'home') ? 'underline' : ''}} onClick={(e) => handleClick(e)}>Home</Link>
            <Link className='link' to='/about' style={{textDecoration: (props.page === 'about') ? 'underline' : ''}} onClick={(e) => handleClick(e)}>About</Link>
            <Link className='link' to='/contact' style={{textDecoration: (props.page === 'contact') ? 'underline' : ''}} onClick={(e) => handleClick(e)}>Contact</Link>
            <Link className="link" to='/projects' style={{textDecoration: (props.page === 'projects') ? 'underline' : ''}} onClick={(e) => handleClick(e)}>Projects</Link>
            </div> <br></br>
    
      </div>
    )
}

export default NavigationBar