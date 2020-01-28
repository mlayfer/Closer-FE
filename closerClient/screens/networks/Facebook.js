import React from 'react';
import {
    Image,
    StyleSheet,
    Platform,
    Button,
    ScrollView,
    Text,
    Dimensions,
    Alert,
    View
} from 'react-native';
import * as Icon from '@expo/vector-icons';

export default class Facebook extends React.Component {

    state = {
        info: this.props.info ? this.props.info : {}
    }

    render() {

        const win = Dimensions.get('window');
        const imageStyles = StyleSheet.create({
            image: {
                flex: 1,
                alignSelf: 'stretch',
                width: win.width,
                height: win.height/2
            }
        });

        const name = 'maayan';
        const image1 = '../../assets/images/mocks/social/facebook/'+name+'/1.jpg';
        const image2 = '../../assets/images/mocks/social/facebook/'+name+'/2.jpg';
        const image3 = '../../assets/images/mocks/social/facebook/'+name+'/3.jpg';
        const image4 = '../../assets/images/mocks/social/facebook/'+name+'/4.jpg';
        const image5 = '../../assets/images/mocks/social/facebook/'+name+'/5.jpg';
        const image6 = '../../assets/images/mocks/social/facebook/'+name+'/6.jpg';
        const image7 = '../../assets/images/mocks/social/facebook/'+name+'/7.jpg';
        const image8 = '../../assets/images/mocks/social/facebook/'+name+'/8.jpg';

        const facebookPostsData = [
            {
                imageSrc: require(image1),
                likes: 11,
                with: ['Poli Layfer', 'Chai Layfer'],
                location: 'LalaLand',
                time: 'Yesterday at 21:37',
                hashtags: '#kamea #mea #mea'
            }, {
                imageSrc: require(image2),
                likes: 421,
                with: ['Poli Layfer', 'Chai Layfer'],
                location: 'North Macedonia',
                time: 'Yesterday at 06:37',
                hashtags: '#lala #land #friends'
            }, {
                imageSrc: require(image3),
                likes: 33,
                with: ['Benzema', 'Chai Layfer'],
                location: 'LalaLand',
                time: 'Tomorrow at 21:37',
                hashtags: '#football #is #life'
            }, {
                imageSrc: require(image4),
                likes: 34,
                with: ['Poli Layfer', 'Chai Layfer'],
                location: 'LalaLand',
                time: 'Yesterday at 14:37',
                hashtags: '#lala #land #friends'
            }, {
                imageSrc: require(image5),
                likes: 270,
                with: ['Poli Layfer', 'Asi Tubi'],
                location: 'Brazil',
                time: '2 weeks ago at 21:22',
                hashtags: '#lala #land #friends'
            },{
                imageSrc: require(image6),
                likes: 11,
                with: ['Poli Layfer', 'Chai Layfer'],
                location: 'LalaLand',
                time: 'Yesterday at 21:37',
                hashtags: '#kamea #mea #mea'
            }, {
                imageSrc: require(image7),
                likes: 421,
                with: ['Poli Layfer', 'Chai Layfer'],
                location: 'North Macedonia',
                time: 'Yesterday at 06:37',
                hashtags: '#lala #land #friends'
            }, {
                imageSrc: require(image8),
                likes: 33,
                with: ['Benzema', 'Chai Layfer'],
                location: 'LalaLand',
                time: 'Tomorrow at 21:37',
                hashtags: '#football #is #life'
            }
        ];



        const facebookPosts = facebookPostsData.map((post, index) =>
            <View key={post.time+post.imageSrc} style={{ marginTop: 20, backgroundColor: 'white' }}>
                <View style={{ marginLeft: 15, marginRight: 15, marginTop: 12 }}>
                    <View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Image
                                source={require('../../assets/images/mocks/profilePics/maayan.jpg')}
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
                    <Image style={imageStyles.image} resizeMode={'contain'} source={post.imageSrc} />
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
            <View>
                <ScrollView style={{ backgroundColor: 'lightgray' }}>
                    {facebookPosts}
                </ScrollView>
                <View style={{position: 'absolute',width:"100%", bottom:0, backgroundColor: 'white', padding: 6}}>
                    <Button
                        title="Add as friend on Facebook"
                        color="#ff4d79"
                        style={{alignSelf: 'stretch',width:"100%",height: 80}}
                        onPress={() => Alert.alert('Successfully sent a friend request!')}
                    />
                </View>
            </View>
        );
    }
}