import {Component} from "react";

class ErrorBoundry extends Component{
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        this.state({hasError: true})
    }

    render() {
        if (this.state.hasError){
            return <h1>Oopss</h1>
        }
        return this.state.children
    }

}

export default ErrorBoundry;