import { connect } from "react-redux";
import { fetchDogImage } from "./redux/actions";

function App(props) {
  const { dispatch, isFetching, imageURL, errorMessage } = props;

  return (
    <div className="App">
      {isFetching
        ? <p>Loading...</p>
        : (<>
          <button
            type="button"
            onClick={() => dispatch(fetchDogImage())}
          >
            New Dog
          </button>
          {imageURL &&
            <img
              src={ imageURL }
              alt='Random dog'
            />
          }
          { errorMessage &&
            <p>Deu ruim!</p>
          }
        </>)
      }
    </div>
  );
}

const mapToStateProps = ({ dogReducer }) => ({
  ...dogReducer,
});

export default connect(mapToStateProps)(App);
