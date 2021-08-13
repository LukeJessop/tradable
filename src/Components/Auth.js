import {Component} from 'react';
import axios from 'axios'
import {loginUser} from '../redux/reducer'

class Auth extends Component {
    constructor(){
        super()
        this.state = {
            Username : '',
            Email : '', 
            Phone : '',
            Password: '',
            Confirm: '',
            MissingInput: false,

            loginUsername: '',
            loginEmail: '',
            loginPassword: ''
        }
        this.register = this.register.bind(this)
        this.emailOrUsername = this.emailOrUsername.bind(this)
        this.login = this.login.bind(this)
    }

    register(){
        const {Username, Email, Phone, Password, Confirm} = this.state
        if(Username === '' || Email === '' || Phone === '' || Password === ''|| Confirm === ''){
            this.setState({MissingInput: true})
        }else{
            axios.post('/auth/register', {Username, Email, Phone, Password})
            .then(res => {
                this.props.history.push('/yourprofile')
            })
        }
    }

    login(){
        if(this.state.loginEmail === ''){
            let usernameData = {loginUsername: this.state.loginUsername, loginPassword: this.state.loginPassword}
            axios.post('auth/username', usernameData)
            .then(res => {
                loginUser(res.data)
                this.props.history.push('/yourprofile')
            })
        }else if(this.state.loginUsername === ''){
            let emailData = {loginEmail: this.state.loginEmail, loginPassword: this.state.loginPassword}
            axios.post('auth/email', emailData)
            .then(res => {
                loginUser(res.data)
                this.props.history.push('/yourprofile')
            })
        }
    }


    emailOrUsername(input) { //determines weather the user is logging in with their username or their email.
        if(input.includes('@' && '.com')){
            this.setState({
                loginEmail: input,
                loginUsername: ''
            })
        }else if(!input.includes('@' && '.com')){
            this.setState({
                loginEmail: '',
                loginUsername: input
            })
        }
    }

    render(){
        return(
            <div className='authpage'>
                <div className='authbox'>
                    <div className='register'>
                        <div className='register2'>
                        <div style={{color: 'red', fontSize: '12px'}}>{this.state.MissingInput ? 'Please fill out all feilds with *': ''}</div>
                                <div className='required'>
                                    <input placeholder='* Username' onChange={(e)=>{this.setState({Username: e.target.value})}}/>
                                </div>
                            <br/>
                                <div>
                                    <input placeholder='* Email' onChange={(e)=>{this.setState({Email: e.target.value})}}/>
                                </div>
                            <br/>
                                <div>
                                    <input placeholder='* Phone #' onChange={(e)=>{this.setState({Phone: e.target.value})}}/>
                                </div>
                            <br/>
                                <div>
                                    <input type='password' placeholder='* Password' onChange={(e)=>{this.setState({Password: e.target.value})}}/>
                                </div>
                            <br/>
                                <div>
                                    <input type='password' placeholder='* Confirm Password' onChange={(e)=>{this.setState({Confirm: e.target.value})}}/>
                                </div>
                            <br/>
                            <button onClick={this.register}>Register</button>

                        </div>
                    </div>
                    <div className='login'>
                        <div className='login2'>
                            <input placeholder='Email or Username' onChange={e => this.emailOrUsername(e.target.value)}/>
                            <br/>
                            <input type='password' placeholder='Password' onChange={e => this.setState({loginPassword: e.target.value})}/>
                            <br/>
                            <button onClick={this.login}>Login</button>
                        </div>
                    </div>
                    
                </div>
            </div>
            )
    }
}
export default Auth