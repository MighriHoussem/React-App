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
    render() {
        return (
            <div className="App align-items-center">
                <h1>My first React-App</h1>
                <p className={"badge badge-primary d-flex justify-content-center"}>Welcome :D </p>
                <Ninjas ninjas={this.state.ninjas}/>
                <AddNinjas/>
            </div>
        );
    }


}

export default App;
