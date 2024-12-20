import Form from "./components/Form";
import Header from "./components/Header";



function App() {
  return (
    <div className="App">
      <Header/>
     <div className="items">
     <Form/>
     <input style = {{display: "none"}} id = "isSorted" value = "0"/>
     </div>
    </div>
  );
}

export default App;
