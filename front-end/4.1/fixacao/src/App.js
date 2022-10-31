import { Component } from "react";
import People from "./components/People";
import './App.css';

class App extends Component {
  state = {
    loading: true,
    lastPeople: {},
  }

  fetchPeople = () => {
    this.setState({
      loading: true,
    }, () => {
      fetch('https://api.randomuser.me/')
        .then((data) => data.json())
        .then((json) => {
          this.setState({
            lastPeople: json.results[0],
            loading: false,
          })
        })
    })
  };

  componentDidMount() {
    this.fetchPeople()
  }

  shouldComponentUpdate() {
    const { loading, lastPeople } = this.state;
    if (!loading) {
      const { dob: { age } } = lastPeople;
      if (age < 50) return false
    }
    return true
  }

  render() {
    const { loading, lastPeople } = this.state;
    return (
      <div className="App">
        <div>{loading ? 'Carregando...' : <People people={lastPeople} />}</div>
        <button onClick={ this.fetchPeople }>Refresh</button>
      </div>
    );
  }
}

export default App;
