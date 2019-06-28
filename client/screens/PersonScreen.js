import React from 'react';
import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

export default class PersonScreen extends React.Component {

	static navigationOptions = {
		title: 'Bar Refaeli',
		headerStyle: {
		},
		headerTintColor: 'black',
		headerTitleStyle: {
			textAlign: 'center',
			flex: 1
		},
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.headerContainer}>

					<View style={styles.headerTextContainer}>


						<Text style={styles.headerText} style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20 }}>
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

					<Image
						style={styles.profileImage}
						source={require('../assets/images/maayan.jpg')}></Image>

				</View>



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
		height: 250,
		flexDirection: 'row',
		alignItems: 'center',
	},
	profileImage: {
		flex: 1,
		flexDirection: 'row',
	},
	headerTextContainer: {
		flex: 1,
		margin: 20,
	},
	headerText: {
		flex: 1
	}
});


