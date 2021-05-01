import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback,
} from 'react';
import axios from 'axios';
import { Context } from '../../context';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Form, InputGroup, Button } from 'react-bootstrap';

const SearchForm = () => {
  const firstRender = useRef(true);
  const [state, setState] = useContext(Context);
  const [userInput, setUserInput] = useState('');
  const history = useHistory();

  /**
   * So that the input clears out when pressing on Esc key
   */
  const handleKeyPress = useCallback((event) => {
    if (event.keyCode === 27) {
      setUserInput('');
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress, false);

    // don't render if it is the first render
    // necessary because if not the component keeps sending requests of undefined to API
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    // searching the entered track in API and returning the result to dispatch so the state changes
    if (userInput.length !== 0) {
      axios
        .get(
          `https://mohammadreza-cors-everywhere.herokuapp.com/https://api.deezer.com/search?q=${userInput}`
        )
        .then((res) => {
          setState({
            ...state,
            search_res: res.data,
          });
        })
        .catch((err) => console.error(err));
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress, false);
    };
  }, [userInput, handleKeyPress]);

  const onChange = (e) => {
    setUserInput(e.target.value);
  };

  /**
   * redirect to search page if search button is clicked
   */
  const onSearch = () => {
    setUserInput('');
    history.push('/search');
  };

  return (
    <Form>
      <Form.Group className="mb-0">
        <InputGroup>
          <InputGroup.Prepend>
            <Button
              variant="light"
              style={{
                border: '1px solid #ced4da',
                borderRight: 'none',
                backgroundColor: '#fff',
                color: '#495057',
              }}
              onClick={onSearch}
            >
              <i className="fa fa-search" aria-hidden="true"></i>
            </Button>
          </InputGroup.Prepend>
          <Form.Control
            type="text"
            placeholder="Search..."
            name="userInput"
            value={userInput}
            onChange={onChange}
          />
        </InputGroup>
        <div className="input-group">
          <div
            className={`dropdown-menu w-100 text-center lead ${
              userInput ? 'show' : ''
            }`}
            style={{
              maxHeight: '200px',
              overflowY: 'auto',
              overflowX: 'hidden',
            }}
          >
            {state.search_res && state.search_res.data ? (
              state.search_res.data.map((track) => {
                return (
                  <Link
                    to={`/info/track/${track.id}`}
                    key={track.id}
                    className="dropdown-item"
                    onClick={() => setUserInput('')}
                  >
                    {track.artist.name} - {track.title}
                  </Link>
                );
              })
            ) : (
              <span className="dropdown-item">Loading...</span>
            )}
          </div>
        </div>
      </Form.Group>
    </Form>
  );
};

export default SearchForm;
