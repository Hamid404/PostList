import React from "react";

class MyComponent extends React.Component{

    state = {
        counter : 1
    }

    increaseCounter=()=>{
        console.log("counter1 clicked");
        this.setState({
            counter : this.state.counter+1
        })
    }
      render() {
          return (
              <div>
                  <h3>{this.state.counter}</h3>
                  <button onClick={this.increaseCounter} >increase counter</button>
              </div>
          )
      }
}

export default MyComponent;