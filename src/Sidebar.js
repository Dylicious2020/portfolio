import {Link} from 'react-router-dom';

function Sidebar(props) {

  console.log(props.page);
  function handleClick(e) {
    props.setSidebarIsOpen(false);
    props.setPage(e.target.innerHTML.toLowerCase());
  }
    return (
        <div className={`sidebar ${props.sidebarIsOpen ? 'open' : ''}`} style={{justifyContent: 'center', alignItems: 'center'}}>
      <div className='xContainer' style={{marginLeft: '80%', marginTop: '-620px', height: '6%', position: 'fixed'}} onClick={() => props.setSidebarIsOpen(!props.sidebarIsOpen)}>
      <div className='thl1' style={{width: '50px', height: '1px', backgroundColor: '#f1eee6', margin: '15px 0', transform: 'rotate(45deg)'}}></div>
      <div className='thl2' style={{width: '50px', height: '1px', backgroundColor: '#f1eee6', margin: '-15px 0', transform: 'rotate(-45deg)'}}></div>
      </div>
      <div className='optionContainer'>
        
        <Link  to='/' style={{textDecoration: (props.page === 'home') ? 'underline' : ''}} className='option' onClick={(e) => handleClick(e)}>Home</Link> <br/>
        <Link to='/about' style={{textDecoration: (props.page === 'about') ? 'underline' : ''}} className='option' onClick={(e) => handleClick(e)}>About</Link> <br/>
        <Link to='/contact' style={{textDecoration: (props.page === 'contact') ? 'underline' : ''}} className='option' onClick={(e) => handleClick(e)}>Contact</Link> <br/>
        <Link to='/projects' style={{textDecoration: (props.page === 'projects') ? 'underline' : ''}} className='option' onClick={(e) => handleClick(e)}>Projects</Link> <br/>
      </div>
    </div>
    )
}

export default Sidebar