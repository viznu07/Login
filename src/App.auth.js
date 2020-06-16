import React from 'react';
import axios from 'axios';
import { AuthContext } from './contexts';
import config from './config';
import { withApollo } from '@apollo/react-hoc';
import { networkCall } from './networkcall';
import { netWorkCallMethods, localStorageKeys } from './utils';

class AppAuth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            isRefreshed: false
        }
    }

    componentDidMount() {
        this.refreshAPI();
    }

    refreshAPI() {
        if (localStorage.getItem(localStorageKeys.auth_token)) {
            /* networkCall(                
                `${config.api_url}/auth/refresh`, //Your refresh API End Point
                
                netWorkCallMethods.get, //Mention your HTTP Method (GET,POST,PUT,UPDATE,DELETE) using the 
                                        //until variable networkCallMethod 

                null, //Request Body If any

                null, //Addition Header If any

                true  //If true it adds Authorization key to the existing header with token from localstorage 
            ).then(res => {
                let token = 'token';

                //TODO: Save your token to the token variable
                token = res.data.auth_token;

                //TODO: Save the token to the localstorage if you want the user 
                localStorage.setItem(localStorageKeys.auth_token, token);

                this.setState({
                    // TODO: Save the user detail here
                    user: res.data.user,
                    isRefreshed: true
                })
            }).catch(res => {
                //Authorized token removing the current token from local storage.
                localStorage.removeItem(localStorageKeys.auth_token);
                this.setState({
                    isRefreshed: true
                })
            })*/
        } else {
            this.setState({
                isRefreshed: true
            })
        }
    }

    render(){
        return (
            <div>
                {
                    this.state.isRefreshed ?
                        <AuthContext.Provider value={{user:this.state.user,setAuth: this.setState} }>
                            {props.children}
                        </AuthContext.Provider>
                        : <p>Your Loader Here...</p>
                }
            </div>    
        )
    }
}

const AppAuth = (props) => {

    const [auth, setAuth] = React.useState({ user: {}, is_self_registered: false });
    const [
        state,
        setState
    ] = React.useState({ isRefreshed: false });

    // Todo: Your Referesh API here

    React.useEffect(() => {

        async function
            fetchData();
    }, [state.isRefreshed])

    return (
        <div>
            {
                state.isRefreshed ?
                    <AuthContext.Provider value={{ ...auth, setAuth }}>
                        {props.children}
                    </AuthContext.Provider>
                    : <img src="/images/loader.svg" className={"full_loading"} alt="loader" width="80px" style={{ marginTop: '48vh', marginLeft: '50%', outline: "none" }} />
            }
        </div>

    )
}

export default withApollo(AppAuth);
