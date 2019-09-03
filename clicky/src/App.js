import React, { Component } from "react";
import CharCard from "./components/CharCard/CharCard.js"
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import chars from "./chars.json";

class App extends Component {
  // Setting this.state.chars to the chars json array
  state = {
    chars
  };
  // state = chars[Math.floor(Math.random()*chars.length)];

  removeChar = id => {
    // Filter this.state.chars for chars with an id not equal to the id being removed
    const chars = this.state.chars.filter(char => char.id !== id);
    // Set this.state.chars equal to the new chars array
    this.setState({ chars });
  }

  // Simple test function to see whether functions are being called successfully via the OnClick
  alerter() {
    alert("FUNCTION CALLED SUCCESSFULLY");
  }

  clickChecker() {
    // Pseudocode Time!!:
    // let chars = this.state.chars;
    let score = 0;
    let highScore = 0;
    // When the image is clicked, we need to...
    
    // Create an array storing the ID of all clicked characters
    let clickedChars = [];
    // Check whether or not the character's id is located in the clickedChars array (aka, it has already been clicked)
    if (clickedChars.indexOf(chars.id)) {
    // If it HAS been clicked before, then...
    
    // Reset Score back to 0
      score = 0;
    // Shake the screen?

    // Change the text to say the user guessed wrong
      
    // Clear the clickedChars array
    clickedChars = [];
    }
    // If it HAS NOT been clicked before, then...
    else {
      // Add the current char into the "memory" of which chars have or have not been clicked
      clickedChars.push(this.state.char.id)
      // Increase Score by 1
      score++;
    }
    // Check whether this increase will be greater than the current Top Score
    if (score > highScore) {
      // If yes, then increase Top Score to match the score
      highScore++;
      // If no.....do nothing?
    }
    // Change the text to say that the user guessed right
    
    // After checking those, then...
    // Randomize/re-shuffle the position of the character cards
    
  }





  // Map over this.state.chars and render a CharCard component for each char object
  render() {
    return (
      <Wrapper>
        <Title>chars List</Title>
        {this.state.chars.map(char => (
          <CharCard
            clickChecker={this.clickChecker}
            id={char.id}
            // key={char.id}
            name={char.name}
            image={char.image}
            // occupation={char.occupation}
            // location={char.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;