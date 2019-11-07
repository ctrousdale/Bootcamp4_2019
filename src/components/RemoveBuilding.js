import React from 'react';

class RemoveBuilding extends React.Component  {
  render()  {
    const {data, removedUpdate, selectedBuilding} = this.props;
    return (
      <div>
        <button onClick = {() => removedUpdate(selectedBuilding)}>
          <i>
            Delete
          </i>
        </button>
      </div>
    );
  }
}
export default RemoveBuilding;
