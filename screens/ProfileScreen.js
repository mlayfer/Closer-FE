import React from 'react';
import {
	Image,
	StyleSheet,
	Text,
	View,
	Dimensions,
	Alert
} from 'react-native';
import { Button } from 'react-native-elements';


import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import Facebook from './networks/Facebook';
import Instagram from './networks/Instagram';
import LinkedIn from './networks/LinkedIn';
import Snapchat from './networks/Snapchat';
// import Youtube from './networks/Youtube';
import Twitter from './networks/Twitter';
import Pinterest from './networks/Pinterest';

export default class ProfileScreen extends React.Component {

	static navigationOptions = ({ navigation }) => ({
		title: navigation.getParam('name') ? navigation.getParam('name') : 'My profile',
		headerTintColor: 'black',
		headerTitleStyle: {
			textAlign: 'center',
			flex: 1
		},
	})

	state = {
		index: 0,
		routes: [
			{ key: 'facebook', image: require('../assets/images/icons/facebook.png') },
			{ key: 'instagram', image: require('../assets/images/icons/instagram.png') },
			{ key: 'linkedin', image: require('../assets/images/icons/linkedin.png') },
			{ key: 'snapchat', image: require('../assets/images/icons/snapchat.png') },
			// { key: 'youtube', image: require('../assets/images/icons/youtube-BW.png'), enabled: false },
			{ key: 'twitter', image: require('../assets/images/icons/twitter.png') },
			// { key: 'pinterest', image: require('../assets/images/icons/pinterest-BW.png'), enabled: false },
			{ key: 'tiktok', image: require('../assets/images/icons/tiktok-BW.png'), enabled: false },
		],
	};

	render() {

		const FirstRoute = () => (<Facebook name={this.props.navigation.getParam('name')} info={briefInfo} />);
		const SecondRoute = () => (<Instagram name={this.props.navigation.getParam('name')} info={briefInfo} />);
		const ThirdRoute = () => (<LinkedIn name={this.props.navigation.getParam('name')} info={briefInfo} />);
		const ForthRoute = () => (<Snapchat name={this.props.navigation.getParam('name')} info={briefInfo} />);
		// const FifthRoute = () => (<Youtube name={this.props.navigation.getParam('name')} info={briefInfo} />);
		const SixthRoute = () => (<Twitter name={this.props.navigation.getParam('name')} info={briefInfo} />);
		// const SeventhRoute = () => (<Pinterest name={this.props.navigation.getParam('name')} info={briefInfo} />);
		const EightRoute = () => (<Pinterest name={this.props.navigation.getParam('name')} info={briefInfo} />);

		let briefInfo = {};
		switch (this.props.navigation.getParam('name')) {
			case 'Maayan Layfer':
				briefInfo = {
					age: 31,
					from: 'Hadera',
					status: 'Married',
					occupation: 'Front End developer',
					title: 'B.Sc Computer science',
					profilePic: require('../assets/images/mocks/profilePics/maayan.jpg'),
					id: 'maayan'
				}
				break;
			case 'Poli Layfer':
				briefInfo = {
					age: 24,
					from: 'Hadera',
					status: 'Married',
					occupation: '-',
					title: 'Student',
					profilePic: require('../assets/images/mocks/profilePics/poli.jpg'),
					id: 'poli'
				}
				break;
			case 'Nizan Uzan':
				briefInfo = {
					age: 24,
					from: 'Kfar-Saba',
					status: 'In a relationship',
					occupation: 'Back End developer',
					title: '-',
					profilePic: require('../assets/images/mocks/profilePics/nizan.jpg'),
					id: 'nizan'
				}
				break;
			case 'Elina Frayerman':
				briefInfo = {
					age: 30,
					from: 'Netanya',
					status: 'Married',
					occupation: 'Product manager',
					title: '-',
					profilePic: require('../assets/images/mocks/profilePics/elina.jpg'),
					id: 'elina'
				}
				break;
			case 'Ortal Livyatan':
				briefInfo = {
					age: 29,
					from: 'Ramat-Gan',
					status: 'Single',
					occupation: 'Analyst',
					title: 'B.Sc Industrial engineering',
					profilePic: require('../assets/images/mocks/profilePics/ortal.jpg'),
					id: 'ortal'
				}
				break;
			case 'Nati Bodinger':
				briefInfo = {
					age: 34,
					from: 'Raanana',
					status: 'Single',
					occupation: 'UX designer',
					title: '-',
					profilePic: require('../assets/images/mocks/profilePics/nati.jpg'),
					id: 'nati'
				}
				break;
			default:
				briefInfo = {
					age: 31,
					from: 'Hadera',
					status: 'Married',
					occupation: 'Front End developer',
					title: 'B.Sc Computer science',
					profilePic: require('../assets/images/mocks/profilePics/maayan.jpg'),
					id: 'maayan'
				}
		}

		return (

			<View style={styles.container}>

				<View style={{height: 150, flexDirection: 'row'}}>
					<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
						<Image
							style={styles.profileImage}
							source={briefInfo.profilePic}>
						</Image>
					</View>
					<View style={{flex: 2, marginTop: 10}}>
						<View style={{flexDirection: 'row'}}>
							<View style={{flex: 3}}>
								<Text>
									Age: {briefInfo.age}
								</Text>
								<Text>
									From: {briefInfo.from}
								</Text>
								<Text>
									Status: {briefInfo.status}
								</Text>
								<Text>
									Occupation: {briefInfo.occupation}
								</Text>
								<Text>
									Title: {briefInfo.title}
								</Text>
							</View>
							<View style={{flex: 2, flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-start', marginRight: 5}}>
								<View style={{flexDirection: 'row'}}>
									<Text style={{ fontWeight: 'bold' }}>2,351</Text>
									<Image source={require('../assets/images/stars/stars-02.png')} style={{ height: 18, width: 18 }}></Image>
								</View>
								<View>
									<Button
										buttonStyle={{height: 30, fontSize: 8, fontWeight: 'normal', marginTop: 5}}
										title="Reach out"
										type="solid"
									/>
								</View>
							</View>
						</View>
					</View>
				</View>

				<TabView
					// swipeEnabled={(this.state.index == 3) ? false : true}
					navigationState={this.state}
					renderScene={SceneMap({
						facebook: FirstRoute,
						instagram: SecondRoute,
						linkedin: ThirdRoute,
						snapchat: ForthRoute,
						// youtube: FifthRoute,
						twitter: SixthRoute,
						// pinterest: SeventhRoute,
						tiktok: EightRoute
					})}
					onIndexChange={index => this.setState({ index })}
					initialLayout={{ width: Dimensions.get('window').width }}
					renderTabBar={props =>
						<TabBar
							{...props}
							onTabPress={({ route, preventDefault }) => {
								// if (route.key === 'youtube') {
								// 	preventDefault();
								// }
								// if (route.key === 'pinterest') {
								// 	preventDefault();
								// }
								if (route.key === 'tiktok') {
									preventDefault();
								}
							}}
							indicatorStyle={{ backgroundColor: 'blue' }}
							style={{ backgroundColor: 'white' }}
							labelStyle={{ color: 'black', fontSize: 9 }}
							tabStyle={{ padding: 0 }}
							renderIcon={({ route }) => (
								<Image
									style={styles.tabImage}
									source={route.image}>
								</Image>
							)}
						/>
					}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	profileImage: {
		height: 120,
		width: 120,
		borderRadius: 60
	},
	tabImage: {
		height: 50,
		width: 50
	}
});


