import React ,{ Component} from 'react';
import  Ninjas  from "./Ninjas";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddNinjas from "./AddNinja";
class App extends Component{

    constructor(props)
    {
       super(props);
       this.state = {
           ninjas: [
               { id: "1", name: "Houssem" , age: "25", belt: "Black"},
               { id: "2", name: "OpenBee", age: "65", belt: "Green"},
               { id: "3", name: "Tchesy", age: "12", belt: "Red"}

           ]
       }
    }
    addNinja = (ninja)=>{
      ninja.id = Math.random();
      this.setState({
          ninjas : [...this.state.ninjas,ninja]
          }
      )
    };
    deleteNinja = (id)=>{
        console.log("Ninjas ID => "+id);
        this.setState({
            ninjas: [...this.state.ninjas.filter((ninja)=>{
               return ninja.id !== id;
            })]
        })
    };
    componentDidMount() {
        console.log("Component Dit Mount");
    };
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Compoenent updated => ");
        console.log(prevState,prevProps);
    };

    render() {
        return (
            <div className="App align-items-center">
                <h1>My first React-App</h1>
                <p className={"badge badge-primary d-flex justify-content-center"}>Welcome :D </p>
                <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/>
                <AddNinjas addNinja={this.addNinja}/>
            </div>
        );
    }


}

export default App;
