import React from "react";

class Subtract extends React.Component
{
    constructor()
    {
        super();
        this.state = {user:"Mr. Robot"};
    }

    render(){
        return<>
            <p>Name = {this.state.user}</p>
        </>
    }
}

export default Subtract;