import React, { Component } from 'react'
// import FacebookLogin from 'react-facebook-login';
import {GoogleLogin} from 'react-google-login';
import { Redirect } from 'react-router-dom';
import axios from 'axios'
export class Loginbygoogle extends Component {
    constructor(props) {
        super(props);
        this.state = {
        tokenValid: false,
        accessToken: ''
        };
        // this.signup = this
        //   .signup
        //   .bind(this);
       
    }

    async componentDidMount() {
   
        try{ 
          if(!GoogleLogin){
            const  GoogleLogin= await import('react-google-login')
          }

        }
        catch(e){
          console.log (e);
    
        }
    
    }

    async signup(res) {
            const googleresponse = {
            Name: res.profileObj.name,
            email: res.profileObj.email,
            token: res.googleId,
            Image: res.profileObj.imageUrl,
            ProviderId: 'Google'
            };
            
            debugger;
            if(res.accessToken){
                this.setState(state => ({
                  tokenValid: true,
                  accessToken: res.accessToken
                }));
            // using promise based library to invoke post api to sign up user
                await axios.post('https://localhost:44385/Api/Login/SocialmediaData', googleresponse,{headers: {
                    'Authorization': `token ${this.state.accessToken}`}
                  })
                    .then((result)=> {
                        let responseJson = result;
                        sessionStorage.setItem("userData", JSON.stringify(result));
                  debugger
                        this.props.history.push('/Dashboard')
                    })
                    .catch((error)=> {
                        console.log(error);
                    });
                }
    };
    render() {
        
        const responseGoogle = (response) => {
            console.log(response);
            var res = response.profileObj;
            console.log(res);
            debugger;
            this.signup(response);
        }
        return (
                 < div className = "App" >
                    < div className = "row" >
                        < div className = "col-sm-12 btn btn-info" >
                           Login With Google Using ReactJS
                        </div >
                     </div >
                           < div className = "row" >
                              < div style={{ 'paddingTop': "20px" }} className = "col-sm-12" >
                                < div className = "col-sm-4" ></div>
                                    < div className = "col-sm-4" >
                                        
                                        < GoogleLogin
                                        clientId = "164300566674-vijpjm8oh12tj1tq9m5r7f8p5gub21ph.apps.googleusercontent.com"
                                        buttonText = "Login with Google"
                                        onSuccess = { responseGoogle }
                                        onFailure={responseGoogle} >
                                        </GoogleLogin >
                                    
                                    </div >
                                < div className = "col-sm-4" ></div >
                            </div >
                        </div >
                  </div >
    )
  }
}
export default Loginbygoogle