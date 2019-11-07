import React from 'react';

class AddBuilding extends React.Component {
  //Draw to screen:
  render()  {
    const {addedUpdate} = this.props;
    return(
      <div>
        <i>
          Enter building properties below:
        </i>
        <form>
          <input
            type = "text"
            placeholder = "Enter code"
            ref = {(code) => this.code = code}
          />
        </form>
        <form>
          <input
            type = "text"
            placeholder = "Enter name"
            ref = {(name) => this.name = name}
          />
        </form>
        <form>
          <input
            type = "text"
            placeholder = "Enter latitude"
            ref = {(latitude) => this.latitude = latitude}
          />
        </form>
        <form>
          <input
            type = "text"
            placeholder = "Enter longitude"
            ref = {(longitude) => this.longitude = longitude}
          />
        </form>
        <form>
          <input
            type = "text"
            placeholder = "Enter address"
            ref = {(address) => this.address = address}
          />
        </form>
        {''}
        <button onClick = {() => addedUpdate(
          this.code.value,
          this.name.value,
          this.latitude.value,
          this.longitude.value,
          this.address.value
        )}>
          <i>
            Submit
          </i>
        </button>
      </div>
    );
  }
}

//For App.js import statement:
export default AddBuilding;
