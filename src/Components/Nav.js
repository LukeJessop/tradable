import {Component} from 'react';
import {Link, useLocation} from 'react-router-dom'
function Nav(){
    const location = useLocation()
    if(location.pathname === '/'){<div>this is nav</div>}else{
        return(
            <div className='navbar2'>
                <Link to='/tradelist'><img className='logo' src='tradable.png'/></Link>

                <div className='buttoncontainer'>
                    <Link to='/yourprofile'> <button className='navbutton'>Your Profile</button> </Link>
                    <Link to='/tradelist'> <button className='navbutton'>Trade List</button> </Link>
                    <Link to='/'> <button className='navbutton'>Log out</button> </Link>
                </div>
            </div>
        )
    }
    return(
        <div className='navbar'>
            <img className='logo2' src='tradable.png'/>
        </div>
    )
}
export default Nav