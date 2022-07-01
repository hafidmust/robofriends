import React, {useState, useEffect } from "react";
// import { robots } from "../robots";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import './App.css'
import Scroll from "../components/Scroll";
// import ErrorBoundry from "../components/ErrorBoundry";
function App() {
    // constructor() {
    //     super();
    //     this.state = {
    //         robots : robots,
    //         searchField : ""
    //     }
    // }

    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');

    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    }
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                return response.json()
            })
            .then(result => {
                setRobots(result)
            })
    },[])
    // componentDidMount() {

    // }


    // const { robots, searchField } = this.state
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return !robots.length ?
        <h1>Loading</h1> : (
            <div className={"tc"}>
                <h1 className={"f1"}>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>

                    <CardList robots={filteredRobots} />

                </Scroll>
            </div>
        );

}

export default App