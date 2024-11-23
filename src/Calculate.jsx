import React, { Component } from 'react'

export class calculate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: Math.floor(Math.random() * 10),
      num2: Math.floor(Math.random() * 10),
      score: 0,
      response: "",
      incorrect: false
    };
  }

  updateResponse = (event) => {
    this.setState({
      response: event.target.value,
    });
  };

  inputKeyPress = (event) => {
    if (event.key === "Enter") {
      const answer = parseInt(this.state.response);
      if (answer == this.state.num1 + this.state.num2) {
        this.setState((state) => ({
          score: this.state.score + 1,
          num1: Math.ceil(Math.random() * 10),
          num2: Math.ceil(Math.random() * 10),
          incorrect: false,
          response: "",
        }));
      } else {
          this.setState(
              {
                  response: "",
                incorrect: true,
              }
          )
      }
    }
  };

  renderProblem() {
    return (
      <div>
        <h1 className={this.state.incorrect ? "inorrect": ""}>
          {this.state.num1} + {this.state.num2}
        </h1>
        <input
          type="text"
          onChange={this.updateResponse}
          value={this.state.response}
          onKeyUp={this.inputKeyPress}
        />
        <h4>Scores: {this.state.score}</h4>
      </div>
    );
    }
    renderWin() {
        return (
            <div>
                <h1>Congratulation you have won this game</h1>
           </div> 
        )
    }

  render() {
    if (this.state.score == 5) {
      return this.renderWin();
    } else {
        return this.renderProblem()
    }
  }

   
}

export default calculate
