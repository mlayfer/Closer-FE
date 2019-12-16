import React from 'react';
import {
	Image,
	StyleSheet,
	Text,
	View,
	Dimensions
} from 'react-native';

import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import Facebook from './networks/Facebook';
import Instagram from './networks/Instagram';
import LinkedIn from './networks/LinkedIn';
import Snapchat from './networks/Snapchat';
import Youtube from './networks/Youtube';
import Twitter from './networks/Twitter';
import Pinterest from './networks/Pinterest';

const FirstRoute = () => (<Facebook />);
const SecondRoute = () => (<Instagram />);
const ThirdRoute = () => (<LinkedIn />);
const ForthRoute = () => (<Snapchat />);
const FifthRoute = () => (<Youtube />);
const SixthRoute = () => (<Twitter />);
const SeventhRoute = () => (<Pinterest />);

export default class ProfileScreen extends React.Component {

	static navigationOptions = {
		title: 'My profile',
		headerStyle: {
		},
		headerTintColor: 'black',
		headerTitleStyle: {
			textAlign: 'center',
			flex: 1
		},
	};

	state = {
		index: 0,
		routes: [
			{ key: 'first', image: require('../assets/images/facebook.png') },
			{ key: 'second', image: require('../assets/images/instagram.png') },
			{ key: 'third', image: require('../assets/images/linkedin.png') },
			{ key: 'forth', image: require('../assets/images/snapchat.png') },
			{ key: 'fifth', image: require('../assets/images/youtube.png') },
			{ key: 'sixth', image: require('../assets/images/twitter.png') },
			{ key: 'seventh', image: require('../assets/images/pinterest.png') },
		],
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.headerContainer}>
					<Image
						style={styles.profileImage}
						source={require('../assets/images/maayan.jpg')}>
					</Image>
					<View style={styles.headerTextContainer}>
						<Text style={styles.headerText} style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 6 }}>
							Maayan Layfer
						</Text>
						<Text style={styles.headerText}>
							Age: 30
						</Text>
						<Text style={styles.headerText}>
							From: Haderah
						</Text>
						<Text style={styles.headerText}>
							Status: Married
						</Text>
						<Text style={styles.headerText}>
							Occupation: Front End developer
						</Text>
					</View>
				</View>
				<TabView
					navigationState={this.state}
					renderScene={SceneMap({
						first: FirstRoute,
						second: SecondRoute,
						third: ThirdRoute,
						forth: ForthRoute,
						fifth: FifthRoute,
						sixth: SixthRoute,
						seventh: SeventhRoute
					})}
					onIndexChange={index => this.setState({ index })}
					initialLayout={{ width: Dimensions.get('window').width }}
					renderTabBar={props =>
						<TabBar
							{...props}
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
	headerContainer: {
		height: 130,
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 8,
		marginBottom: 8
	},
	profileImage: {
		height: 100,
		width: 100,
		borderRadius: 50,
		marginStart: 20,
		marginEnd: 20
	},
	headerTextContainer: {
		flex: 1,
		margin: 5,
	},
	headerText: {
		flex: 1
	},
	scene: {
		flex: 0.9,
	},
	tabImage: {
		height: 50,
		width: 50
	}
});


