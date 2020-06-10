import React from 'react';
import axios from 'axios';
import { AuthContext } from './contexts';
import config from './config';
import { withApollo } from '@apollo/react-hoc';

const AppAuth = (props) => {

    const [auth, setAuth] = React.useState({ user: {}, is_self_registered: false });
    const [
        state,
        setState
    ] = React.useState({ isRefreshed: false });

    // Todo: Your Referesh API here

    React.useEffect(() => {

        async function fetchData() {
            if (localStorage.jwtToken) {
                axios({
                    url: `${config.api_url}/auth/refresh`,
                    method: "GET",
                    headers: {
                        Authorization: localStorage.jwtToken
                    }
                }).then(res => {
                    let token = res.data.auth_token;
                    
                    localStorage.setItem("jwtToken", token);

                    let is_self_registered = false;
                    if (res.data.user.role_type === "self" || localStorage.role == "self") {
                        is_self_registered = true
                    }
                    setAuth({ ...auth, user: res.data.user, is_self_registered });
                    setState({ isRefreshed: true })
                }).catch(res => {
                    localStorage.removeItem('jwtToken');
                    // window.location.reload(true)
                    setState({ isRefreshed: true })
                })
            } else {
                setState({ isRefreshed: true })
            }
        }
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
