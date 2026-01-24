import './App.css';
import Header from "./Mycomponents/header";
import {Todos} from "./Mycomponents/Todos";
import {Footer} from "./Mycomponents/Footer";

function App() {
  return (
    <>
      <Header title="Todos List" searchbar={true}/>
      <Todos/>
      <Footer/>
    </>

  );
}

export default App;
