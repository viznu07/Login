import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { localStorageKeys } from '../../utils';
import { withRouter } from 'react-router-dom';
import routes from '../../router/routes';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message: 'You are in Home page.',
            loggingOut : false
        }
    }

    logOut = () => {
        this.setState({
            loggingOut: true
        }, () => {
            setTimeout(() => {
                localStorage.removeItem(localStorageKeys.auth_token)
                this.props.history.push(routes.login)
            }, 5000);
        })
    }

    componentDidMount(){
        if(!localStorage.getItem(localStorageKeys.auth_token)){
            this.props.history.push(routes.login);
        }
    }
    
    render(){

        const {
            message,
            loggingOut
        } = this.state;

        return <div>
            <Typography>
                {message}
            </Typography>
            <Button
                color="secondary"
                variant="outlined"
                disabled={loggingOut}
                onClick={this.logOut}
            >
                {`${loggingOut ? 'Logging Out...' : 'Log Out'}`}
            </Button>
        </div>
    }
}

export default withRouter(Home);