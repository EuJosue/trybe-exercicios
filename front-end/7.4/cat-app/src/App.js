import { connect } from "react-redux";
import fetchCatImage from "./redux/actions";

function App(props) {
  const { catImage, dispatch, errorMessage, isFetching } = props;
  return (
    <div className="App">
      {isFetching
        ? <p>Loading...</p>
        : (
          <>
            <button 
              type="button"
              onClick={ () => dispatch(fetchCatImage()) }
            >
              New Cat
            </button>
            { catImage &&
              <img src={ catImage } alt="Random cat" />
            }
            { errorMessage &&
              <p>Deu ruim!</p>
            }
          </>
        )
      }
    </div>
  );
}

const mapStateToProps = ({ catReducer }) => ({
  ...catReducer,
});

export default connect(mapStateToProps)(App);
