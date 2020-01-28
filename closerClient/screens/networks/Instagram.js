import React from 'react';
import {
    Image,
    View,
    Button,
    Alert
} from 'react-native';
import { FlatList } from 'react-native'

const name = 'maayan';
const instagramPostsData = [
        {
            "name": "Proxima Midnight",
            "src": require('../../assets/images/mocks/social/instagram/'+name+'/1.jpg')
        },
        {
            "name": "Ebony Maw",
            "src": require('../../assets/images/mocks/social/instagram/'+name+'/2.jpg')
        },
        {
            "name": "Black Dwarf",
            "src": require('../../assets/images/mocks/social/instagram/'+name+'/3.jpg')
        },
        {
            "name": "Ebony Maw4",
            "src": require('../../assets/images/mocks/social/instagram/'+name+'/4.jpg')
        },
        {
            "name": "Black Dwarf5",
            "src": require('../../assets/images/mocks/social/instagram/'+name+'/5.jpg')
        },
        {
            "name": "Proxima Midnight6",
            "src": require('../../assets/images/mocks/social/instagram/'+name+'/6.jpg')
        },
        {
            "name": "Ebony Maw7",
            "src": require('../../assets/images/mocks/social/instagram/'+name+'/7.jpg')
        },
        {
            "name": "Black Dwa3rf",
            "src": require('../../assets/images/mocks/social/instagram/'+name+'/8.jpg')
        },
        {
            "name": "Ebony M3aw",
            "src": require('../../assets/images/mocks/social/instagram/'+name+'/9.jpg')
        },
        {
            "name": "Black 2Dwarf",
            "src": require('../../assets/images/mocks/social/instagram/'+name+'/10.jpg')
        },
        {
            "name": "Proxima M6idnight",
            "src": require('../../assets/images/mocks/social/instagram/'+name+'/11.jpg')
        },
        {
            "name": "Ebony Ma7w",
            "src": require('../../assets/images/mocks/social/instagram/'+name+'/12.jpg')
        },
        {
            "name": "Black Dw8arf",
            "src": require('../../assets/images/mocks/social/instagram/'+name+'/13.jpg')
        },
        {
            "name": "Eb2ony Maw",
            "src": require('../../assets/images/mocks/social/instagram/'+name+'/14.jpg')
        },
        {
            "name": "Black Dw2arf",
            "src": require('../../assets/images/mocks/social/instagram/'+name+'/15.jpg')
        },
        {
            "name": "Ebony Ma7w",
            "src": require('../../assets/images/mocks/social/instagram/'+name+'/16.jpg')
        },
        {
            "name": "Black Dw8arf",
            "src": require('../../assets/images/mocks/social/instagram/'+name+'/17.jpg')
        },
        {
            "name": "Eb2ony Maw",
            "src": require('../../assets/images/mocks/social/instagram/'+name+'/18.jpg')
        },
        {
            "name": "Black Dw2arf",
            "src": require('../../assets/images/mocks/social/instagram/'+name+'/19.jpg')
        },
        {
            "name": "Black Dwa3rf",
            "src": require('../../assets/images/mocks/social/instagram/'+name+'/8.jpg')
        },
        {
            "name": "Ebony M3aw",
            "src": require('../../assets/images/mocks/social/instagram/'+name+'/9.jpg')
        },
        {
            "name": "Black 2Dwarf",
            "src": require('../../assets/images/mocks/social/instagram/'+name+'/10.jpg')
        },
        {
            "name": "Proxima M6idnight",
            "src": require('../../assets/images/mocks/social/instagram/'+name+'/11.jpg')
        },
        {
            "name": "Ebony Ma7w",
            "src": require('../../assets/images/mocks/social/instagram/'+name+'/12.jpg')
        },
        {
            "name": "Black Dw8arf",
            "src": require('../../assets/images/mocks/social/instagram/'+name+'/13.jpg')
        },
        {
            "name": "Eb2ony Maw",
            "src": require('../../assets/images/mocks/social/instagram/'+name+'/14.jpg')
        },
        {
            "name": "Black Dw2arf",
            "src": require('../../assets/images/mocks/social/instagram/'+name+'/15.jpg')
        }
    ];

export default class Instagram extends React.Component {
    render() {
        return (
            <View>
                <FlatList
                    data= {instagramPostsData}
                    renderItem={({ item, index }) => (
                        <View style={{ flex: 1, flexDirection: 'column', margin: 1 }} key={item.name + item.src}>
                            <Image style={{ justifyContent: 'center', alignItems: 'center', height: 130, width: 130 }} source={item.src} />
                        </View>
                    )}
                    numColumns={3}
                />
                <View style={{position: 'absolute',width:"100%", bottom:0, backgroundColor: 'white', padding: 6}}>
                    <Button
                        title="Follow on Instagram"
                        color="#ff4d79"
                        style={{alignSelf: 'stretch',width:"100%",height: 80}}
                        onPress={() => Alert.alert('Successfully sent a friend request!')}
                    />
                </View>
            </View>

        );
    }
}