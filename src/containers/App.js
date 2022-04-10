import {Component} from "react";
import {robots} from "../robots";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import './App.css'
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
class App extends Component{
    constructor() {
        super();
        this.state = {
            robots : robots,
            searchField : ""
        }
    }

    onSearchChange = (event) =>{
        this.setState({searchField: event.target.value})
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response =>{
                return response.json()
            })
            .then(result =>{
                this.setState({robots: result})
            })
    }

    render() {
        const {robots, searchField} = this.state
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return !robots.length ? <h1>Loading</h1> : (
            <div className={"tc"}>
                <h1 className={"f1"}>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>

                        <CardList robots={filteredRobots}/>

                </Scroll>
            </div>
        )
    }
}

export default App