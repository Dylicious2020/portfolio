import {Link} from 'react-router-dom';

function Sidebar(props) {
    return (
        <div className={`sidebar ${props.sidebarIsOpen ? 'open' : ''}`} style={{justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
      <div className='xContainer' style={{marginLeft: '78%', marginTop: '-620px', height: '6%', position: 'fixed'}} onClick={() => props.setSidebarIsOpen(!props.sidebarIsOpen)}>
      <div className='thl1' style={{width: '50px', height: '1px', backgroundColor: '#f1eee6', margin: '15px 0', transform: 'rotate(45deg)'}}></div>
      <div className='thl2' style={{width: '50px', height: '1px', backgroundColor: '#f1eee6', margin: '-15px 0', transform: 'rotate(-45deg)'}}></div>
      </div>
      <div className='optionContainer'>
        
        <Link  to='/' className='option' onClick={() => props.setSidebarIsOpen(false)}>Home</Link> <br/>
        <Link to='/about' className='option' onClick={() => props.setSidebarIsOpen(false)}>About</Link> <br/>
        <Link to='/contact' className='option' onClick={() => props.setSidebarIsOpen(false)}>Contact</Link> <br/>
      </div>
    </div>
    )
}

export default Sidebar