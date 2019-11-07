import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const {data, selectedBuilding} = this.props
		const buildingInfo = data.filter(
			building =>	{
				//filtered data handling:
				return building.id === selectedBuilding
			}
		).map(
			building => {
				let coordinate, address = '';
				//Ensure proper data is entered (coordinates must be defined)
				if (typeof building.coordinates !== 'undefined' && !isNaN(building.coordinates.latitude) && !isNaN(building.coordinates.longitude))	{
					coordinate = building.coordinates.latitude + ',' + building.coordinates.longitude;
				}
				//If data is invalid, leave blank
				else {
					coordinate = '';
				}
				if (building.address !== '' && typeof building.address !== 'undefined')	{
					address = building.address;
				}
				else {
					address = '';
				}
				//Finally, return the values
				return(
					<div>
						<p>
							Code: {building.code}
						</p>
						<p>
							Name: {building.name}
						</p>
						<p>
							Coordinates: {coordinate}
						</p>
						<p>
							Address: {address}
						</p>
					</div>
				);
			}
		)
		return (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i>
					<div>
						{buildingInfo}
					</div>
				</p>
			</div>
		);
	}
}
export default ViewBuilding;
