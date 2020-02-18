import React, {Component} from "react";

class AddNinja extends  Component
{
    constructor(props)
    {
        super(props);
        this.state ={
            name : null,
            age: null,
            belt: null,
            submit: null
        }
    }
    handleSubmit = (event)=>
    {
        event.preventDefault();
        if(this.state.name !== null && this.state.age != null && this.state.belt != null)
        this.setState({
            submit : true
        });
        console.log(this.state);
    };
    handleChange= (event)=>
    {
       event.preventDefault();
       this.setState({
           [event.target.id] : event.target.value
       });
       //console.log(this.state);
    };
    render()
    {
        return (
            <div className=" text-center ">
                <form className={"form-group"} onSubmit={this.handleSubmit}>
                    {this.state.submit? <div className="alert alert-success" role="alert">User Saved with Success</div> : null}
                    <div>
                        <label htmlFor="name" className="col-1">Name: </label>
                        <input type={"text"} className={"col-sm-2"} placeholder={"Name"} id={"name"} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor={"age"} className="col-1">Age: </label>
                        <input type={"number"} className="col-sm-2" placeholder={"Age"} id={"age"} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor={"belt"} className="col-1">Age: </label>
                        <input type={"text"} className="col-sm-2" placeholder={"Belt"} id={"belt"} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <input type="submit" value="Save" className="text-center btn btn-success col-1 button"/>
                    </div>
                </form>

            </div>
        );
    }
}

export default AddNinja;