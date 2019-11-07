import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      updatedData: this.props.data
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
	this.setState({
		filterText: value
	});
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
	this.setState({
		selectedBuilding: id
	});
  }

  removedUpdate(id) {
    this.setState({
      updatedData: this.state.updatedData.filter(
        building => {
          return building.id !== id
        }
      )
    })
  }

  addedUpdate(code, name, latitude, longitude, address) {
    const id = this.state.updatedData.length + 1;
    const building = {
      id: id,
      code: code,
      name: name,
      coordinates: {
        latitude:parseFloat(latitude),
        longitude:parseFloat(longitude)
      },
      address: address
    };
    this.setState({
      updatedData: this.state.updatedData.concat(building)
    })
  }

  render() {

    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search
        //Add data:
          filterText = {this.state.filterText}
          filterUpdate = {this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    //This data field needs to be updated dynamically:
                    data={this.state.updatedData}
                    //Pass in additional data:
                    filterText = {this.state.filterText}
                    selectedUpdate = {this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding
                data = {this.state.updatedData}
                selectedBuilding = {this.state.selectedBuilding}
              />
              <RemoveBuilding
                data = {this.props.data}
                selectedBuilding = {this.state.selectedBuilding}
                removedUpdate = {this.removedUpdate.bind(this)}
              />
              <AddBuilding
                addedUpdate = {this.addedUpdate.bind(this)}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
