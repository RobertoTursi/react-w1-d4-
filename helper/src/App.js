import 'bootstrap/dist/css/bootstrap.min.css'; //per installare bootstrap
import './App.css';
import CustomNav from './components/CustomNav';
import Home from './components/Home';
import ReservationForm from './components/ReservationForm';
import ReservationList from './components/ReservationList';


//per installare bootstrap scrivere nel terminale: npm i boostrap@5.2.3
// per installare react bootstap react scrivere nel terminale: npm i react-bootstrap
function App() {
  return (
    <>
      <CustomNav claim="Best pasta in town" />
      <ReservationList />
      <ReservationForm />
      <Home />
    </>
      
  );
}

export default App;
