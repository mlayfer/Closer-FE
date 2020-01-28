import React from 'react';
import {
    Image,
    ScrollView,
    Text,
    Button,
    Alert,
    View,
} from 'react-native';

const twitterData = [
    {
        imageSrc: 'https://pbs.twimg.com/profile_images/1149520881/______1221_400x400.jpg',
        name: 'Maayan Layfer',
        nickname: '@Layfer24',
        date: '15 Feb 2015',
        message: 'What a great app Closer is!'
    },
    {
        imageSrc: 'https://pbs.twimg.com/profile_images/1149520881/______1221_400x400.jpg',
        name: 'Maayan Layfer',
        nickname: '@Layfer24',
        date: '15 Feb 2015',
        message: 'This is unacceptable behavior that I had to endure last night. I was kicked out and called racial slurs by my Airbnb host. I am extremely livid. @airbnb needs to fix this! We deserve better! “Which one of the monkeys are going to sleep on the couch?”'
    },
    {
        imageSrc: 'https://pbs.twimg.com/profile_images/1149520881/______1221_400x400.jpg',
        name: 'Maayan Layfer',
        nickname: '@Layfer24',
        date: '15 Feb 2015',
        message: '"Good things come to those who wait" is such an incomplete, passive and misleading expression.'
    },
    {
        imageSrc: 'https://pbs.twimg.com/profile_images/1149520881/______1221_400x400.jpg',
        name: 'Maayan Layfer',
        nickname: '@Layfer24',
        date: '15 Feb 2015',
        message: 'I really like Closer, what do you think? Isnt it the greatest?'
    },
    {
        imageSrc: 'https://pbs.twimg.com/profile_images/1149520881/______1221_400x400.jpg',
        name: 'Maayan Layfer',
        nickname: '@Layfer24',
        date: '15 Feb 2015',
        message: 'Bla bla and some other staff'
    },
    {
        imageSrc: 'https://pbs.twimg.com/profile_images/1149520881/______1221_400x400.jpg',
        name: 'Maayan Layfer',
        nickname: '@Layfer24',
        date: '15 Feb 2015',
        message: 'You can put another blank transparent view upon tablayout until your requirement fulfill. When you need to enable/show the tabs then just hide the blank view.'
    },
    {
        imageSrc: 'https://pbs.twimg.com/profile_images/1149520881/______1221_400x400.jpg',
        name: 'Maayan Layfer',
        nickname: '@Layfer24',
        date: '15 Feb 2015',
        message: 'A magic trick! In that sample code I disabling all tabs. If you need disable second and third tab, check "index" in a cycle and disable if you need'
    }
];

export default class Twitter extends React.Component {
    render() {
        const twitterPosts = twitterData.map((post) =>
            <View key={post.message} style={{ marginTop: 6 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={{ uri: post.imageSrc }}
                        style={{ height: 40, width: 40, borderRadius: 50, marginTop: 6, marginRight: 10, marginLeft: 10 }}
                    />
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 16, fontWeight: '500' }}>{post.name} </Text>
                            <Text style={{ fontSize: 14, color: 'gray' }}>{post.nickname} &#183;</Text>
                            <Text style={{ fontSize: 14, color: 'gray' }}>{post.date}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 14 }}>{post.message}</Text>
                        </View>
                    </View>
                </View>

                <View
                    style={{
                        borderBottomColor: 'lightgray',
                        borderBottomWidth: 1,
                        marginBottom: 6,
                        marginTop: 6
                    }}
                />
            </View>
        );
        return (
            <View>
                <ScrollView>
                    {twitterPosts}
                </ScrollView>
                <View style={{position: 'absolute',width:"100%", bottom:0, backgroundColor: 'white', padding: 6}}>
                    <Button
                        title="Add as friend on Twitter"
                        color="#ff4d79"
                        style={{alignSelf: 'stretch',width:"100%",height: 80}}
                        onPress={() => Alert.alert('Successfully sent a friend request!')}
                    />
                </View>
            </View>
        );
    }
}