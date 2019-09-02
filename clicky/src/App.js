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

  // clickChecker() {
  //   // Pseudocode Time!!:
  //   const score = 0;
  //   const highScore = 0;
  //   // When the image is clicked, we need to...
    
  //   // Create an array storing the ID of all clicked characters
  //   const clickedChars = [];
  //   // Check whether or not the character's id is located in the clickedChars array (aka, it has already been clicked)
  //   // If it HAS been clicked before, then...
      
  //   //   Reset Score back to 0
  //   score = 0;
  //   //   Shake the screen?
  //   //   Change the text to say the user guessed wrong
  //   //   Clear the clickedChars array
  //   // If it HAS NOT been clicked before, then...
  //   //   Add the current char into the "memory" of which chars have or have not been clicked
  //   //   Increase Score by 1
  //   //   Check whether this increase will be greater than the current Top Score
  //   //     If yes, then increase Top Score
  //   //     If no.....do nothing?
  //   //   Change the text to say that the user guessed right
  //   // After checking those, then...
  //   //   Randomize/re-shuffle the position of the character cards
    
  // }





  // Map over this.state.chars and render a CharCard component for each char object
  render() {
    return (
      <Wrapper>
        <Title>chars List</Title>
        {this.state.chars.map(char => (
          <CharCard
            removeChar={this.removeChar}
            id={char.id}
            key={char.id}
            name={char.name}
            image={char.image}
            occupation={char.occupation}
            location={char.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;