import React from "react";
import "./style.css";

function CharCard(props) {
  return (
    


    <React.Fragment>
    <div className="card">

      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>

      {/* <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Address:</strong> {props.location}
          </li>
        </ul>        
      </div> */}
      {/* Inserting props.id as an argument for the RemoveChar function, so we can specifically tell it which ID to be removing, i.e. the thing we just clicked on */}
      <span onClick={() => props.removeChar(props.id)} className="remove">𝘅</span>
    </div>
  </React.Fragment>
  );
}

export default CharCard;
