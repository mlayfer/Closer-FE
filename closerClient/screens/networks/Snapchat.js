import React from 'react';
import Story from 'react-native-story';
import {
    Button,
    Alert,
    View
} from 'react-native';

const stories = [
    {
        id: "4",
        source: require("../../assets/images/story1.jpg"),
        user: "Ugur Erdal",
        avatar: require("../../assets/images/mocks/profilePics/maayan.jpg")
    },
    {
        id: "2",
        source: require("../../assets/images/story2.png"),
        user: "Mustafa",
        avatar: require("../../assets/images/mocks/profilePics/maayan.jpg")
    },
    {
        id: "5",
        source: require("../../assets/images/story1.jpg"),
        user: "Emre Yilmaz",
        avatar: require("../../assets/images/mocks/profilePics/maayan.jpg")
    },
    {
        id: "3",
        source: require("../../assets/images/story4.jpg"),
        user: "Cenk Gun",
        avatar: require("../../assets/images/mocks/profilePics/maayan.jpg")
    },
];

export default class Snapchat extends React.Component {

    // static navigationOptions = {
    //     swipeEnabled: false,
    // }

    render() {
        return (
            <View>
            <Story
                unPressedBorderColor="#e95950"
                pressedBorderColor="#ebebeb"
                stories={stories}
            />
            <View style={{position: 'absolute',width:"100%", bottom:0, backgroundColor: 'white', padding: 6}}>
                <Button
                    title="Add as friend on Snapchat"
                    color="#ff4d79"
                    style={{alignSelf: 'stretch',width:"100%",height: 80}}
                    onPress={() => Alert.alert('Successfully sent a friend request!')}
                />
            </View>
        </View>
        );
    }
}