import React from "react";
import "../stylesheets/Pokemon.scss";

/* class Pokemon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    console.log(this.props.types);
    return (
      <li className="card">
        <img src={this.props.image} alt={this.props.name} />
        <p>{this.props.name}</p>
        <p>{this.props.types.map(poder => {
          return (
            <ul>
              <li>{poder}</li>
            </ul>
          )
        })}</p>
      </li>

    );
  }
}

export default Pokemon; */

function Pokemon(props) {
  console.log(props);
  return (
    <li>
      <p>{props.name}</p>
      <img src={props.image} alt={props.name} />
      <p>{props.types}</p>
      <ul>
        {props.types.map(type => {
          return (
            <li>{type}</li>
          )
        })}
      </ul>
    </li>
  );
}

export default Pokemon;

