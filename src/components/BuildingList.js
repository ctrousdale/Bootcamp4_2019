import React from 'react';

class BuilingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText, selectedUpdate } = this.props;

		const buildingList = data
			.filter(directory => {
				return (
				//If the name or the code exist, return
				directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 ||
				directory.code.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
				)
			})
			.map(directory => {
			return (
				<tr key={directory.id}>
					<button onClick = {() => selectedUpdate(directory.id)}>
						<td>{directory.code} </td>
						<td>{directory.name} </td>
					</button>
				</tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
