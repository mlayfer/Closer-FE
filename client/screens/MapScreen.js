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
		markers: []
	};

	componentDidMount() {
		// axios.get('http://localhost:3000/users/')
 
		fetch('http://localhost:3000/users/')
		  .then((response) => alert(response));

		this._getLocationAsync();
		// return fetch('https://facebook.github.io/react-native/movies.json')
		//   .then((response) => response.json())
		//   .then((responseJson) => {

		// 	this.setState({
		// 	  isLoading: false,
		// 	  dataSource: responseJson.movies,
		// 	}, function(){

		// 	});

		//   })
		//   .catch((error) =>{
		// 	console.error(error);
		//   });
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

		this.setState(previousState => (
			{
				markers: [{
					title: 'Maayan Layfer',
					coordinates: this.state.location.coords,
					profileImgSource: require('../assets/images/maayan.jpg')
				},
				{
					title: 'Poli Layfer',
					coordinates: {
						latitude: parseFloat(this.state.location.coords.latitude)-0.00038,
						longitude: parseFloat(this.state.location.coords.longitude)+0.00011,
					},
					profileImgSource: require('../assets/images/poli.jpg')
				}, 
				{
					title: 'Chai Layfer',
					coordinates: {
						latitude: parseFloat(this.state.location.coords.latitude)-0.0004,
						longitude: parseFloat(this.state.location.coords.longitude)-0.0002,
					},
					profileImgSource: require('../assets/images/chai.jpg')
				}, 
				{
					title: 'Asi Tobi',
					coordinates: {
						latitude: parseFloat(this.state.location.coords.latitude)+0.0001,
						longitude: parseFloat(this.state.location.coords.longitude)+0.0006,
					},
					profileImgSource: require('../assets/images/AsiTubi.jpg')
				}]
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
					region={{ latitude: this.state.location.coords.latitude, longitude: this.state.location.coords.longitude, latitudeDelta: 0.002, longitudeDelta: 0.002 }}
					onRegionChange={this._handleMapRegionChange}
					latitudeDelta={0.002} longitudeDelta={0.002}
				>
					{this.state.markers.map(marker => (
						<MapView.Marker
							key="12493"
							coordinate={marker.coordinates}
							title={marker.title}
							description="12493 Connections">
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