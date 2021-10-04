import React, { useEffect } from 'react';
import { Header } from './components/header/header';
import { Notes } from './components/notes/notes';
import './semantic-ui-css/semantic.min.css';
import { useDispatch } from 'react-redux';
import { addNote } from './redux/actions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addNote());
  }, []);
  return (
    <div
      className="App"
      style={{ backgroundColor: '#212121', minHeight: '100vh' }}>
      <Header />
      <Notes />
    </div>
  );
}

export default App;
