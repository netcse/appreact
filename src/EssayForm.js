import React from "react";

class EssayForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value : "Please Write an Essay about your Favourite Dom Element"
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert('An Essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay: <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="Submit" value="Submit"/>
            </form>
        )
    }

}

export default EssayForm;