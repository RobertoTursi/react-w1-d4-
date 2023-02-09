import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import history from "./data/history.json"


import BookList from './components/BookList';

function App() {
  return (
    <>

      <BookList array= {history}/>
    </>
  );
}

export default App;


