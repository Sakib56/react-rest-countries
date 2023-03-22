import './App.css';
import Countries from './Components/countries/countries';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}


/* function LoadCountries(){
  const [countries,setCountries] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data => setCountries(data))
  },[])
  return(
    <div>
      <h1>ALL countries here</h1>
      {
        countries.map(country=> <ShowCountries name={country.name.common} population={country.population}></ShowCountries>)
      }
      
    </div>
  )
}
function ShowCountries(props){
  return(
    <div>
      <h1>Name:{props.name}</h1>
      <h2>Population:{props.population}</h2>
    </div>
  )
} */

export default App;
