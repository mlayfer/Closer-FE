import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    Text,
    View
} from 'react-native';

import * as Icon from '@expo/vector-icons';

const facebookPostsData = [
    {
        imageSrc: 'https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-9/60614659_2391033464250213_7216725662185291776_o.jpg?_nc_cat=111&_nc_ht=scontent.fhfa2-2.fna&oh=f7e8d6b6ff9993191cfad1a80e4aa71d&oe=5D9F6873',
        likes: 11,
        with: ['Poli Layfer', 'Chai Layfer'],
        location: 'LalaLand',
        time: 'Yesterday at 21:37',
        hashtags: '#kamea #mea #mea'
    }, {
        imageSrc: 'https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-9/57414161_10156981564038604_4829267515454521344_o.jpg?_nc_cat=110&_nc_ht=scontent.fhfa2-2.fna&oh=ec02eaf63d007fc465b117dfa3c34452&oe=5D51892F',
        likes: 421,
        with: ['Poli Layfer', 'Chai Layfer'],
        location: 'North Macedonia',
        time: 'Yesterday at 06:37',
        hashtags: '#lala #land #friends'
    }, {
        imageSrc: 'https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-9/53788212_10216813694249042_3989231084121358336_o.jpg?_nc_cat=107&_nc_ht=scontent.fhfa2-2.fna&oh=8adf61235625d85bd549baf38f1cb279&oe=5D8ABE34',
        likes: 33,
        with: ['Benzema', 'Chai Layfer'],
        location: 'LalaLand',
        time: 'Tomorrow at 21:37',
        hashtags: '#football #is #life'
    }, , {
        imageSrc: 'https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-9/37550526_482839262178144_6710232048847552512_o.jpg?_nc_cat=106&_nc_ht=scontent.fhfa2-2.fna&oh=c95901c077c3f1fbce40dbcbbc666a5a&oe=5D9D9312',
        likes: 34,
        with: ['Poli Layfer', 'Chai Layfer'],
        location: 'LalaLand',
        time: 'Yesterday at 14:37',
        hashtags: '#lala #land #friends'
    }, {
        imageSrc: 'https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.0-9/35893239_1916696245017273_3206625001260187648_o.jpg?_nc_cat=100&_nc_ht=scontent.fhfa2-2.fna&oh=bafa04fc92c6c1e7eea177376e88a187&oe=5D9AD1E7',
        likes: 270,
        with: ['Poli Layfer', 'Asi Tubi'],
        location: 'Brazil',
        time: '2 weeks ago at 21:22',
        hashtags: '#lala #land #friends'
    },
];

export default class Facebook extends React.Component {
    render() {
        const facebookPosts = facebookPostsData.map((post) =>
            <View key={post.time} style={{ marginTop: 20, backgroundColor: 'white' }}>
                <View style={{ marginLeft: 15, marginRight: 15, marginTop: 12 }}>
                    <View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Image
                                source={require('../../assets/images/maayan.jpg')}
                                style={{ height: 26, width: 26, borderRadius: 50, marginTop: 6, marginRight: 10 }}
                            />
                            <Text style={{ width: 330 }}>
                                <Text style={{ fontWeight: 'bold' }}>Maayan Layfer</Text> is with <Text style={{ fontWeight: 'bold' }}>{post.with[0]}</Text> and <Text style={{ fontWeight: 'bold' }}>{post.with[1]}</Text> in <Text style={{ fontWeight: 'bold' }}>{post.location}</Text>
                            </Text>
                            <Icon.Ionicons
                                name={Platform.OS === 'ios' ? 'ios-more' : 'md-more'}
                                size={26}
                                style={{ marginBottom: 0 }}
                                color={'darkgray'}
                            />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 10, color: 'darkgray' }}>{post.time} &#183; {post.location} &#183;</Text>
                            <Icon.Ionicons
                                name={Platform.OS === 'ios' ? 'ios-people' : 'md-people'}
                                size={16}
                                style={{ marginBottom: 0, marginLeft: 10 }}
                                color={'darkgray'}
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>{post.hashtags}</Text>
                    </View>
                </View>
                <View>
                    <Image style={{ justifyContent: 'center', alignItems: 'center', height: 330 }} source={{ uri: post.imageSrc }} />
                </View>
                <View style={{ marginLeft: 15, marginRight: 15, marginBottom: 12, marginTop: 5 }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Icon.Ionicons
                            name={Platform.OS === 'ios' ? 'ios-thumbs-up' : 'md-thumbs-up'}
                            size={20}
                            style={{ marginBottom: 0, marginRight: 5 }}
                            color={'#8b9dc3'}
                        />
                        <Text>You, Him and {post.likes} others</Text>
                    </View>
                </View>
            </View>
        );

        return (
            <ScrollView style={{ backgroundColor: 'lightgray' }}>
                {facebookPosts}
            </ScrollView>
        );
    }
}