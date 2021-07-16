import {Component} from 'react';
import {Link} from 'react-router-dom'

class TradeList extends Component {
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <div>
                hello world this is the TradeList page
                <Link to='/tradelistitem'>CLICK HERE OPEN TRADE ITEM</Link>
            </div>
        )
    }
}
export default TradeList