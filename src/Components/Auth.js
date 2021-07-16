import {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

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
    }

    register(){
        const {Username, Email, Phone, Password} = this.state
        if(Username === '' || Email === '' || Phone === '' || Password === ''){
            this.setState({MissingInput: true})
        }else{
            axios.post('/auth/register', {Username, Email, Phone, Password})
            .then(res => {
                this.props.history.push('/yourprofile')
            })
        }
    }

    login(){ //TODO: figure out how you can identify weather email or username is being used in the back end :)
        if(this.state.loginEmail === ''){

            axios.post('auth/loginusername', (this.state.loginUsername, this.state.loginPassword))
            .then(res => {
                this.props.history.push('/yourprofile')
            })
        }else if(this.state.loginUsername != ''){
            axios.post('auth/loginemail', (this.state.loginEmail, this.state.loginPassword))
            .then(res => {
                this.props.history.push('/yourprofile')
            })
        }
    }


    emailOrUsername(input) { //sorts out weather the user is using their username to sign in or their email to sign in.
        if(input.includes('@' && '.com')){
            this.setState({
                loginEmail: input
            })
        }else{
            this.setState({
                loginUsername: input
            })
        }
        console.log(this.state.loginEmail, 'email')
        console.log(this.state.loginUsername, 'user')
    }

    render(){
        return(
            <div className='authpage'>
                <div className='authbox'>
                    <div className='register'>
                        <div className='register2'>
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
                            <button onClick={this.login()}>Login</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default Auth