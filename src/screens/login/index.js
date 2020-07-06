import React from 'react';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { localStorageKeys } from './../../utils'
import routes from '../../router/routes';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggingIn: false
        }
    }

    logIn = () => {
        this.setState({
            isLoggingIn: true
        }, () => {
            setTimeout(() => {
                localStorage.setItem(localStorageKeys.auth_token,'token');
                this.props.history.push(routes.home)
            }, 5000);
        })
    }

    componentDidMount(){
        if(localStorage.getItem(localStorageKeys.auth_token)){
            this.props.history.push(routes.home);
        }
    }

    render() {

        const {
            isLoggingIn
        } = this.state;

        return <Button
            onClick={this.logIn}
            variant="contained"
            disabled={isLoggingIn}            
        >
            {`${isLoggingIn ? 'Logging In...' : 'LogIn'}`}
        </Button>
    }
}

export default withRouter(Login)