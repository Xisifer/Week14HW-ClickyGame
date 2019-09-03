import React, { Component } from "react";
import CharCard from "./components/CharCard/CharCard.js"
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import chars from "./chars.json";

class App extends Component {
  // Setting this.state.chars to the chars json array
  state = {
    // Create an array storing the ID of all clicked characters
    clickedChars: [],
    // set the player's Score
    score: 0,
    // set the player's High Score
    highScore: 0,
    // Initialize and import the chars array
    chars: chars
  };
  


  clickChecker = id => {
    // Pseudocode Time!!:
    // When the image is clicked, we need to...

    // Check whether or not the character's id is located in the clickedChars array (aka, it has already been clicked)
    if (this.state.clickedChars.indexOf(id) !== -1) {
      // If it HAS been clicked before, then...

      // Reset Score back to 0
      this.setState({ score: 0 })
      // Shake the screen?

      // Change the text to say the user guessed wrong

      // Clear the clickedChars array
      this.setState({ clickedChars: [] })
    }
    // If it HAS NOT been clicked before, then...
    else {
      // Add the current char into the "memory" of which chars have or have not been clicked
      const clickedChars = this.state.clickedChars.concat(id) // here, we use .concat to take the clickedChars array and insert the ID of what we just clicked on, WITHOUT modifying the original array. This makes it so that we don't lose the previous "memory" of what previous chars have been clicked. 

      // Next, take our new clickedChars that we just defined, and setState it back into the State of the page.
      this.setState({ clickedChars: clickedChars });
      // Increase Score by 1
      this.setState({ score: this.state.score + 1 });
      console.log("The new clickedChars array is now: " + this.state.clickedChars);
      console.log("The new score is now: " + this.state.score);
      console.log("The new highScore is now: " + this.state.highScore);
    }
    // Check whether this increase will be greater than the current Top Score
    if (this.state.score > this.state.highScore) {
      // If yes, then increase Top Score to match the score
      this.setState({ highScore: this.state.highScore + 1 });
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

        <div id="topbar">
          <div>
            <h1>Character Clicker!</h1>
            <br></br>
            <p>
                Click on a character to earn a point!
                However, if you click on that character again, you lose!
                How many can you keep in your head at once? Give it a try and find out!
            </p>
          </div>
        </div>


        {this.state.chars.map(char => (
          <CharCard
            clickChecker={this.clickChecker}
            id={char.id}
            key={char.id}
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