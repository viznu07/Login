import React from 'react';
import { Alert } from './components';
import { SnackBarContext } from './contexts'
import { alertProps } from './utils';

class AppAlert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            severity: alertProps.severity.success,
            msg: '',
            vertical: alertProps.vertical.top,
            horizontal: alertProps.horizontal.center,
        }
    }

    close = () => {
        this.setState({
            open: false,
            severity: alertProps.severity.success,
            msg: '',
            vertical: alertProps.vertical.top,
            horizontal: alertProps.horizontal.center,
        })
    }

    set = (props) => {
        this.setState({ ...props })
    }

    render() {
        return (
            <SnackBarContext.Provider value={{
                ...this.state, onclose: this.close,
                setSnack: this.set
            }} >
                {this.state.open ? <Alert {...this.state} onclose={this.close} /> : ''}
                {this.props.children}
            </SnackBarContext.Provider>
        )
    }
}

export default AppAlert;