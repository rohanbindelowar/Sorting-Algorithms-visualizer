import Form from "./components/Form";
import Header from "./components/Header";


function App() {
  return (
    <div className="App">
      <Header/>
      <Form/>
      <input style = {{display: "none"}} id = "isSorted" value = "0"/>
    </div>
  );
}

export default App;
