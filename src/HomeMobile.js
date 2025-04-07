import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';

function HomeMobile(props) {
    return (
      <div>
        <div className='customCursor' style={{backgroundColor: props.sidebarIsOpen ? '#f1eee6' :'#353935', width: '10px', height: '10px', marginLeft: `${props.mouseX}px`, marginTop: `${props.mouseY}px`}}></div>
        <div className='headerContainer'>
        <div className='thlContainer' style={{marginLeft: '85%', marginTop: '22px'}} onClick={() => props.setSidebarIsOpen(!props.sidebarIsOpen)}>
      <div className='thl1' style={{width: '50px', height: '1px', backgroundColor: '#353935', margin: '10px 0'}}></div>
      <div className='thl2' style={{width: '50px', height: '1px', backgroundColor: '#353935', margin: '10px 0'}}></div>
      <div className='thl3' style={{width: '50px', height: '1px', backgroundColor: '#353935', margin: '10px 0'}}></div>
    </div>
    <h1 style={{color: '#353935', fontSize: '100px', fontWeight: '100', marginLeft: '5%', letterSpacing: '5px'}}>DYLAN WATSON</h1>
    </div>
    <Sidebar sidebarIsOpen={props.sidebarIsOpen} setSidebarIsOpen={props.setSidebarIsOpen}/>
  
  
      </div>
    )
  }

  export default HomeMobile