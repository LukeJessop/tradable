import {Component} from 'react';
import {Link} from 'react-router-dom'
class TradeListItem extends Component {
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <div>
                hello world this is the TradeListItem page
                <Link to='/othersprofile'>CLICK HERE TO GO TO THEIR PROFILE</Link>
            </div>
        )
    }
}
export default TradeListItem