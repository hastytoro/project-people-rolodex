import React from 'react';
import './App.css';
import { CardList } from './components/card-list/CardList';
import { SearchBox } from './components/search-box/SearchBox';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      people: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ people: users }));
  }

  handleChange = (e) => this.setState({ searchField: e.target.value });

  // ...
  render() {
    const { people, searchField } = this.state;
    const filteredPeople = people.filter((person) =>
      person.name.toLowerCase().includes(searchField.toLowerCase()),
    );
    return (
      <div className="App">
        <h1>People Rolodex</h1>
        <SearchBox
          placeholder="search people"
          handleChange={this.handleChange}
        />
        <CardList people={filteredPeople} />
      </div>
    );
  }
}

export default App;
