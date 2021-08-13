import { render } from '@testing-library/react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

const YourProfile = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [pfp, setPfp] = useState('')
    const [phone, setPhone] = useState('')
    const [bio, setBio] = useState('')
    const [website, setWebsite] = useState('')
    const [showEmail, setShowEmail] = useState(false)
    const [showPhone, setShowPhone] = useState(false)
    const [editProfile, setEditProfile] = useState(false)
    useEffect(() => {
        axios.get('/api/user').then((res) => {
            const {username, email, pfp, phone, bio, website, showemail, showphone} = res.data
            setUsername(username)
            setEmail(email)
            setPfp(pfp)
            setPhone(phone)
            setBio(bio)
            setWebsite(website)
            setShowEmail(showemail)
            setShowPhone(showphone)
        })
    })
    const checkProfilePicture = (picture) => {
        if (picture === ''){
            return picture = 'https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg'
        }else{
            return picture
        }
    }
    const renderEmail = () => {
        if(showEmail === true){
            return(
                <div>{email}</div>
            )
        }
    }
    const renderPhone = () => {
        if(showPhone === true){
            return(
                <div>{phone}</div>
            )
        }
    }
    return(
        <div className='profile-container'>
            <div className='user-info'>
                <div className='user'>
                    <img className='pfp' src={checkProfilePicture(pfp)}/>
                    <div style={{paddingLeft: '10px'}}>
                        <div className='username'>{username}</div>
                        <div className='bio'>{bio}</div>
                    </div>
                </div>
                <div className="contact-info">
                    {renderEmail()}
                    <br/>
                    {renderPhone()}
                    <a href={website}>{website}</a>
                    <button onClick={() => {
                        if(editProfile === false){
                            setEditProfile(true)
                        }else{ 
                            setEditProfile(false)
                        }
                    }}>Edit Profile</button>
                </div>
            </div>
            {editProfile ? (
                <div className='edit-profile-container'>
                    <div className='input-container'>
                        <img src={pfp}/>
                        <input  type='file' placeholder="change Profile Picture"/>
                        <input placeholder="change Username"/>
                        <input placeholder="change Bio"/>
                        <input placeholder="change Email"/>
                        <input placeholder="change phone"/>
                        <input placeholder="change Website"/>
                        <div>
                            <input type='checkbox' onClick={() => renderEmail()}/>Show Email
                            <input type='checkbox' onClick={() => renderPhone()}/>Show Phone
                        </div>
                        <div>
                            <button>Save</button>
                            <button onClick={() => {
                                if(editProfile === true){
                                    setEditProfile(false)
                                }
                            }}>Cancel</button>
                        </div>
                    </div>
                </div>
            ) : null}
            {/* <div>
                <div>
                    <input placeholder='search'/>
                    <Link to='/postingitem'>CLICK HERE TO POST ITEM</Link>
                </div>
                <div>
                    <div>Item-list</div>
                    <div>hash-tag-tray</div>
                </div>
            </div> */}
        </div>
    )
}
export default YourProfile