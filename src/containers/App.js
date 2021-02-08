import React, { Component } from 'react'
import CardList from '../components/CardList'
import Search from '../components/Search'
import './App.css'
import Scroll from '../components/Scroll'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ robots: data })
      })
      .catch((err) => console.log(err))
  }

  onsearchchange = (e) => {
    this.setState({ searchfield: e.target.value })
  }

  render() {
    const { robots, searchfield } = this.state
    const filterRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return !robots.length ? (
      <h3 className="red">Loading...</h3>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <Search searchChange={this.onsearchchange} />
        <Scroll>
          <CardList robots={filterRobots} />
        </Scroll>
      </div>
    )
  }
}

export default App
