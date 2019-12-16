import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Button,
} from 'react-native';
import LinkedInModal from 'react-native-linkedin';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {

        const signWithNetwork = () => {
            this.props.navigation.navigate('Map');
        };

        const getUser = ({ access_token }) => {
            console.log(access_token);
            return fetch('https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,profilePicture,maidenName,headline,localizedHeadline)', {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + access_token,
                },
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson);
                    alert('First name: ' + responseJson.firstName.localized.en_US + '\n' +
                        'Last name: ' + responseJson.lastName.localized.en_US + '\n' +
                        'User ID: ' + responseJson.id + '\n' +
                        'Profile pic: ' + JSON.stringify(responseJson.profilePicture)
                    );
                    this.props.navigation.navigate('Map');
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <View style={styles.logoContainer}>
                        <Image source={require('../assets/images/logo.png')} />
                        <Text style={styles.subHeader}>Choose the first network you connect with</Text>
                    </View>
                    <View style={styles.iconsContainer}>
                        <TouchableOpacity onPress={signWithNetwork}>
                            <Image source={require('../assets/images/facebook.png')} style={styles.iconImage} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={signWithNetwork}>
                            <Image source={require('../assets/images/instagram.png')} style={styles.iconImage} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={signWithNetwork}>
                            <Image source={require('../assets/images/twitter.png')} style={styles.iconImage} />
                        </TouchableOpacity>
                        <LinkedInModal
                            ref={ref => {
                                this.modal = ref
                            }}
                            clientID="78n3ozcx052nuh"
                            clientSecret="8xSYjJww5fTvQfri"
                            permissions={['r_liteprofile', 'r_basicprofile', 'r_emailaddress', 'w_member_social']}
                            linkText=""
                            redirectUri="https://www.linkedin.com/uas/oauth2/authorization?response_type=code"
                            onSuccess={data => getUser(data)}
                        />
                        <TouchableOpacity onPress={() => this.modal.open()}>
                            <Image source={require('../assets/images/linkedin.png')} style={styles.iconImage} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={signWithNetwork}>
                            <Image source={require('../assets/images/snapchat.png')} style={styles.iconImage} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    button: {
        height: 50,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    homeContainer: {
        marginTop: 10
    },
    logoContainer: {
        marginTop: 90,
        paddingBottom: 120,
        paddingLeft: 50,
        paddingRight: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingLeft: 50,
        paddingRight: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconImage: {
        width: 100,
        height: 100
    },
    subHeader: {
        color: 'red',
        fontSize: 22,
        textAlign: 'center',
        paddingTop: 20,
        lineHeight: 27
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});

