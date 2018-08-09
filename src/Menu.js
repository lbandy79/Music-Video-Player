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
        <div className="form-group">
        <label className="radio-inline">
          <input type="radio" name="src" value="one" /> Obsession 
        </label>
        <label className="radio-inline">     
          <input type="radio" name="src" value="two" /> White Knuckles
        </label>
        <label className="radio-inline">
          <input type="radio" name="src" value="three" /> The One Moment
        </label>
        <label className="radio-inline">
          <input type="radio" name="src" value="four" /> The Writing's on the Wall
        </label>
        <label className="radio-inline">
          <input type="radio" name="src" value="five" /> Upside Down Inside Out
        </label>
        <label className="radio-inline">
          <input type="radio" name="src" value="six" /> I Won't Let You Down
        </label>
        <label className="radio-inline">
          <input type="radio" name="src" value="seven" /> Here It Goes Again
        </label>
        <label className="radio-inline">
          <input type="radio" name="src" value="eight" /> This Too Shall Pass
        </label>
        </div>
      </form>
    );
  }
}