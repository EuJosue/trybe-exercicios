import { screen } from '@testing-library/react';
import { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { actionChangeCounter, actionDecrementCounter, actionIncrementCounter } from './redux/actions';

class App extends Component {
  render() {
    const { dispatch, count } = this.props;
    return (
      <div className="App">
        <h1>Contador</h1>
        <h2 
          contentEditable
          suppressContentEditableWarning
          onInput={ () => {
            const h2 = screen.getByRole('heading', { level: 2 });
            dispatch(actionChangeCounter(h2.textContent))
          } }
        >
          { count }
        </h2>

        <button
          style={{ marginRight: '10px' }}
          type='button'
          onClick={() => {
            dispatch(actionDecrementCounter())
            this.updateCounter();
          }}
        >
          Decrementar
        </button>

        <button
          type='button'
          onClick={() => {
            dispatch(actionIncrementCounter())
            this.updateCounter();
          }}
        >
          Incrementar
        </button>
      </div>
    )
  };
}

const mapStateToProps = ({ counterReducer: { count } }) => ({
  count,
})

export default connect(mapStateToProps)(App);
