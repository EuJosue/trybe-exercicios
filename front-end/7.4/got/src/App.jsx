import { Component } from "react";
import { connect } from "react-redux";
import fetchCharacterGoT from "./redux/actions";

class App extends Component {
  state = {
    allCharacters: [
      'Daenerys Targaryen',
      'Jaime Lannister',
      'Jon Snow',
      'Varys',
      'Tyrion Lannister',
      'Sandor Clegane',
      'Tormund',
      'Davos Seaworth',
      'Brienne of Tarth',
      'Arya Stark',
    ],
    inputCharacterName: '',
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCharacterGoT('Jon Snow'))
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { allCharacters, inputCharacterName } = this.state;
    const {
      dispatch,
      isFetching,
      fetchedCharacter: {
        name,
        gender,
        culture,
        born,
        died,
        titles,
        aliases,
      },
      errorMessage,
    } = this.props;

    return (
      <div className="App">
        {isFetching
          ? <p>Loading...</p>
          : (<>
            <input 
              type="text" 
              placeholder="Jon Snow" 
              list="characters"
              name="inputCharacterName"
              value={ inputCharacterName }
              onChange={ this.handleChange }
            />
            <datalist id="characters">
              {
                allCharacters.map((name, index) => (
                  <option key={ `${name}${index}` } value={ name } />
                ))
              }
            </datalist>
            <button
              onClick={ () => dispatch(fetchCharacterGoT(inputCharacterName)) }
            >
              Search
            </button>
          { name ?
            <div>
              <h2>{ name }</h2>

              { Boolean(titles.length) &&
                  <div>
                    <h3>{ titles.length === 1 ? 'Title' : 'Titles' }</h3>
                    {
                      titles.map((title, index) => (
                        <h4 key={ `${name}title${index}` }>
                          { title }
                        </h4>
                      ))
                    }
                  </div>
              }

              { culture && <h3>{ `Culture: ${ culture }` }</h3> }
              { gender && <h3>{ `Gender: ${ gender }` }</h3> }
              { born && <h3>{ `Born: ${ born }` }</h3> }
              { died && <h3>{ `Died: ${ died }` }</h3> }
              { Boolean(aliases.length) &&
                  <div>
                    <h3>{ aliases.length === 1 ? 'Alias' : 'Aliases' }</h3>
                    {
                      aliases.map((alias, index) => (
                        <h4 key={`${alias}${index}`} style={ { paddingRight: '10px' } }>{ alias }</h4>
                    ))
                  }
                  </div>
              }
            </div>
            : <p>{ `Deu ruim! ${errorMessage}` }</p>
          }
        </>)}
      </div>
    );
  }
}

const mapStateToProps = ({ gotReducer }) => ({
  ...gotReducer,
});

export default connect(mapStateToProps)(App);
