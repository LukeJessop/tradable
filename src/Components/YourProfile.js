import axios from 'axios';
import {Component} from 'react';
import {Link} from 'react-router-dom'
class YourProfile extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            email: '',
            profilePicture: '',
            phone: '',
            bio: '',
            website: '',
        }
    }
    componentDidMount(){
        
    }
    render(){
        return(
            <div>
                <div>
                    <img src='https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg'/>
                    <div>username</div>
                    <div>Email</div>
                    <div>Phone</div>
                    <div>Bio</div>
                    <a href={this.state.website}>Website</a>
                </div>
                <br/>
                <Link to='/postingitem'>CLICK HERE TO POST ITEM</Link>
            </div>
        )
    }
}
export default YourProfile