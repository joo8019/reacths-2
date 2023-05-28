import { Component } from "react";
class firstform extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            department: "",
            rating: "",  //value lena chaiye toggle:"true"
            data: []
        }
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })

    }


    handleClick = () => {
        const obj = {
            name: this.state.name,
            department: this.state.department,
            rating: this.state.rating
        }
        this.state.data.push(obj);
        this.setState({ data: this.state.data, name: "", department: "", rating: "", })//toggle:"false"
        console.log(this.state.data);
    }

    render() {
        return (   //a?b:c
            <div id="form">
                <h1 className="head">Employee Feedback Form</h1>
                <div className="box">
                    <label> Name:</label>
                    <input id="nam" type="text" onChange={this.handleChange} name="name" placeholder="enter your name" value={this.state.name} /><br/>
                    <label>Department:</label>
                    <input id="dep" type="text" onChange={this.handleChange} name="department" placeholder="enter the department" value={this.state.department} /><br/>
                    <label> Rating:</label> 
                    <input id="rat" type="number" onChange={this.handleChange} name="rating" placeholder="enter the rating" value={this.state.rating} /><br/>


                    <button id="btn" onClick={this.handleClick}>click</button>
                </div>
<div className="boo"> 
                {this.state.data.map((item) => {
                    return (
                        <div className="box1">
                        <h2>Name: {item.name}| Department:{item.department} | Rating:{item.rating}</h2>
                      </div>

                    )
                })}
                </div>
            </div>
        )

    }
}



export default firstform;