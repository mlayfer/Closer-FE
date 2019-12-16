import React from 'react';
import {
	Image,
	Platform,
	StyleSheet,
	View,
} from 'react-native';

import TabBarIcon from '../components/TabBarIcon';

import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';

export default class MapScreen extends React.Component {

	state = {
		locationResult: null,
		location: { coords: {} },
		markers: [],
		users: []
	};

	componentDidMount() {
		const { navigation } = this.props;
		console.log(this.props.navigation.state.params);

		// console.log(JSON.stringify(navigation.getParam('responseJson')));
		// console.log(navigation.getParam('responseJson').firstName.localized.en_US);
		// const newUser= {
		// 		"firstname":"Maayan",
		// 		"lastname":"Layfer",
		// 		"email":"a@somthing1.com",
		// 		"platforms":[
		// 		   {
		// 			"type":8,
		// 			"platformdata":
		// 				{
		// 					"username": this.props.navigation.state.params.firstName.localized.en_US,
		// 					"nickname":this.props.navigation.state.params.lastName.localized.en_US,
		// 					"profilePic": JSON.stringify(this.props.navigation.state.params.profilePicture)
		// 				}
		// 		   }
		// 		]
		//	  };

		fetch('http://localhost:8080/users')
		.then(response => response.json())
		.then(json => {
			console.log(JSON.stringify(json))
			this.setState({
				users: json		
			})
		})
		.catch(function(error) {
			console.log('There has been a problem with your fetch operation: ' + error.message);
			throw error;
		});

		// fetch('http://localhost:8080/register', {
		// 	method: 'post',
		// 	body: JSON.stringify(newUser)
		//   }).then(function(response) {
		// 	return response.json();
		//   }).then(function(data) {
		// 	console.log(data);
		// })
		// .catch(function(error) {
		// 	console.log('There has been a problem with your fetch operation: ' + error.message);
		// 	throw error;
		// });

		
		// fetch('http://localhost:8080/users/b59af6b3-84e0-472f-9253-905b2b375ff7', {
		// 	method: 'delete'
		// 	}).then(function(response) {
		// 	return response.json();
		//   }).then(function(data) {
		// 	console.log(data);
		// })
		// .catch(function(error) {
		// 	console.log('There has been a problem with your fetch operation: ' + error.message);
		// 	throw error;
		// });

		this._getLocationAsync();
	}


	_getLocationAsync = async () => {
		let { status } = await Permissions.askAsync(Permissions.LOCATION);
		if (status !== 'granted') {
			this.setState({
				locationResult: 'Permission to access location was denied',
				location,
			});
		}

		let location = await Location.getCurrentPositionAsync({});
		this.setState({ locationResult: JSON.stringify(location), location, });

		var imagesArr = [
			'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
			'data:image/jpeg;base64,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', 
			'https://s3.amazonaws.com/tinycards/image/a9e4e38ba4bcaf18065a1c05743806f8',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5RqzJ4fxCE1f0OLAlUIRUuLuCnlCBNiZFyZzXL1oXnAFFewVsNw&s',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkVmARRcgdKttb83X4ptJ27YnEVNVUFLKhdyW7JBmcqfoVEHxf&s',
			'https://realsport101.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-05-at-16.33.52-496x500.png',
			'https://img.etimg.com/thumb/msid-71630390,width-480,height-360,imgsize-323270,resizemode-4/the-perfect-face.jpg',
			'http://facelab.org/People/images/smile/Jaimie.jpg',
			'https://secure.gravatar.com/avatar/6d4d24b12c84be6eecddf121bc3fee48?s=400&d=mm&r=g',
			'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/post-dermaplaning-ipl-jpg-1561614849.jpg?crop=1xw:0.75xh;center,top&resize=480:*',
			'https://cdn.pocket-lint.com/r/s/320x/assets/images/142207-phones-feature-what-is-apple-face-id-and-how-does-it-work-image1-5d72kjh6lq.jpg?v1'
		];   

		let markersData = [];
		for (let i=0; i<this.state.users.length; i++) {
			markersData.push({
				identifier: this.state.users[i].identifier,
				title: this.state.users[i].firstname +' '+ this.state.users[i].lastname,
				coordinates: {
					latitude: parseFloat(this.state.location.coords.latitude)-i/13200,
					longitude: parseFloat(this.state.location.coords.longitude)+i/9007,
				},
				profileImgSource: {uri: imagesArr[Math.floor(Math.random() * imagesArr.length)]},
				connections: i*18 + ' connections'
			});
		}

		this.setState(previousState => (
			{
				markers: markersData
			}
		))
	};

	static navigationOptions = {
		title: 'My area',
		headerRight: (
			<TabBarIcon
				focused='black'
				name={Platform.OS === 'ios' ? 'ios-paper-plane' : 'md-paper-plane'}
			/>
		),
		headerStyle: {
			paddingStart: 40,
			paddingEnd: 20
		},
		headerTintColor: 'black',
		headerTitleStyle: {
			paddingStart: 80,
			textAlign: 'center',
			flex: 1
		},
	};

	render() {

		const enterPerson = (e) => {
			e.preventDefault();
			this.props.navigation.navigate('Person');
		};

		return (
			<View style={styles.container}>
				<MapView
					style={styles.map}
					region={{ 
						latitude: this.state.location.coords.latitude ? this.state.location.coords.latitude : 0, 
						longitude: this.state.location.coords.longitude ? this.state.location.coords.longitude : 0, 
						latitudeDelta: 0.002, 
						longitudeDelta: 0.002 }}
					onRegionChange={this._handleMapRegionChange}
					latitudeDelta={0.002} longitudeDelta={0.002}
				>
					{this.state.markers.map(marker => (
						<MapView.Marker
							key={marker.identifier}
							coordinate={marker.coordinates}
							title={marker.title}
							description={marker.connections}>
							<Image
								onPress={enterPerson}
								source={marker.profileImgSource}
								style={{ height: 50, width: 50, borderRadius: 50 }}
							/>
						</MapView.Marker>
					))}
				</MapView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
	chatButton: {
		position: 'absolute',
		color: 'black'
	}
});