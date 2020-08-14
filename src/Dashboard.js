import React, { Component } from 'react'
import {GoogleLogout} from 'react-google-login';

export class Dashboard extends Component {
    constructor(props) { 
        super(props);
         this.state = { name: '', 
         tokenValid: false,
         accessToken: '',
          }
          this.logout =  this.logout.bind(this);
          this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
    }
         
       
    logout(response) {
        debugger
        console.log("Logged out")
        this.setState(state => ({
           tokenValid: true,
           accessToken: ''
         }));   
         this.props.history.push('/Loginbygoogle')
     }
     
     handleLogoutFailure (response) {
       alert('Failed to log out')
     }
      
    
    componentDidMount() {
      
        const data = JSON.parse(sessionStorage.getItem('userData'));
        this.setState({name: data.data.name})
    }
 
    render() {
  
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 btn btn-info">
                        Welcome to Dashboard
                   </div>
                </div>
                <div className="row">
                    <div className="col-sm-3"> Welcome : {this.state.name} </div>
                    <div className="col-sm-9"></div>
                    {/* <div className="col-sm-4"></div> */}
                </div>
            <GoogleLogout
                clientId="164300566674-vijpjm8oh12tj1tq9m5r7f8p5gub21ph.apps.googleusercontent.com"
                buttonText='Logout'
                onLogoutSuccess={ this.logout }
                onFailure={ this.handleLogoutFailure }>
            </GoogleLogout>
            </div>
        )
    }
} export default Dashboard
