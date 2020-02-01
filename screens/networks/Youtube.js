import React from 'react';
import {
    Text,
    Alert,
    Button,
    ScrollView,
    View
} from 'react-native';

export default class Youtube extends React.Component {
    render() {
        return (
            <View>
                <ScrollView>
                    <Text>I'm youtube</Text>
                </ScrollView>
                <View style={{position: 'absolute',width:"100%", bottom:0, backgroundColor: 'white', padding: 6}}>
                    <Button
                        title="Add as friend on Youtube"
                        color="#ff4d79"
                        style={{alignSelf: 'stretch',width:"100%",height: 80}}
                        onPress={() => Alert.alert('Successfully sent a friend request!')}
                    />
                </View>
            </View>
        );
    }
}