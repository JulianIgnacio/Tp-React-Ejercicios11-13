import Titulos from './Components/Titulos';
import Container from './Components/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useEffect,useState } from 'react';


const App = () => {
  const [Noticia ,setNoticia] = useState({});

  useEffect (()=> {
    ConsultarApi();
  },[]);

  const ConsultarApi = async () =>{
    const respuesta = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-05-06&sortBy=publishedAt&apiKey=API_KEY');
    const datos = await respuesta.json();
    setNoticia(datos[0])
  }
  return (
    <>
    <Titulos/>
    <Container/>
    </>
  )
}

export default App;
