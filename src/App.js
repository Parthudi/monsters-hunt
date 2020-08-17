import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list'
import SearchBox from './components/search-box/search-box'
//import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
    state = {
          monsters : [],
          searchMonster : ''
    }
  
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users').then((response) => {
         return response.json()}).then((user) => {
           return   this.setState({ monsters : user})
          })
  }

 changeMonster = (event) => {
    this.setState({
        searchMonster :  event.target.value
    })
    
  }

  render() {
    const {monsters,  searchMonster} = this.state
    const filteredMonsters = monsters.filter((monster) => {
     return monster.name.toLowerCase().includes(searchMonster.toLocaleLowerCase())
    })
    return (
      <div className="App">
            <h1>  Monsters Rolodex   </h1>
            <SearchBox  placeholder='Search Monsters'  handleChange={(event) => this.changeMonster(event)}/>
            <CardList monsters={filteredMonsters} /> 
      </div>
    );
  }
}

export default App;
