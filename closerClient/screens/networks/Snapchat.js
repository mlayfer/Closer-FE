import React from 'react';
import Story from 'react-native-story';

const stories = [
    {
        id: "4",
        source: require("../../assets/images/story1.jpg"),
        user: "Ugur Erdal",
        avatar: require("../../assets/images/maayan.jpg")
    },
    {
        id: "2",
        source: require("../../assets/images/story2.png"),
        user: "Mustafa",
        avatar: require("../../assets/images/maayan.jpg")
    },
    {
        id: "5",
        source: require("../../assets/images/story1.jpg"),
        user: "Emre Yilmaz",
        avatar: require("../../assets/images/maayan.jpg")
    },
    {
        id: "3",
        source: require("../../assets/images/story4.jpg"),
        user: "Cenk Gun",
        avatar: require("../../assets/images/maayan.jpg")
    },
];

export default class Snapchat extends React.Component {
    render() {
        return (
            <Story
                unPressedBorderColor="#e95950"
                pressedBorderColor="#ebebeb"
                stories={stories}
            />
        );
    }
}