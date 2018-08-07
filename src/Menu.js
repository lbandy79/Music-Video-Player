import React from 'react';

export class Menu extends React.Component {
  
constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);
}

handleClick(e) {
  var text = e.target.value;
  this.props.chooseVideo(text);
}
  
  render() {
    return (
      <form onClick = { this.handleClick }>
        <input type="radio" name="src" value="one" /> Obsession      
        <input type="radio" name="src" value="two" /> White Knuckles
        <input type="radio" name="src" value="three" /> The One Moment
        <input type="radio" name="src" value="four" /> The Writing's on the Wall
        <input type="radio" name="src" value="five" /> Upside Down Inside Out
        <input type="radio" name="src" value="six" /> I Won't Let You Down
        <input type="radio" name="src" value="seven" /> Here It Goes Again
        <input type="radio" name="src" value="eight" /> This Too Shall Pass
      </form>
    );
  }
}