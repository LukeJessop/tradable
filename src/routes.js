import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './Components/Auth'
import OthersProfile from './Components/OthersProfile'
import PostingItem from './Components/PostingItem'
import TradeList from './Components/TradeList'
import TradeListItem from './Components/TradeListItem'
import YourProfile from './Components/YourProfile'

export default (
    <Switch>
        <Route exact path='/' component={Auth}/>
        <Route path='/yourprofile' component={YourProfile}/>
        <Route path='/postingitem' component={PostingItem}/>
        <Route path='/tradelist' component={TradeList}/>
        <Route path='/tradelistitem' component={TradeListItem}/>
        <Route path='/othersprofile' component={OthersProfile}/>
    </Switch>
)