import React from 'react';
import {
    Image,
    Text,
    View,
    Button,
    ScrollView,
    Alert
} from 'react-native';

const name = 'maayan';

const linkedInExperienceData = [
    {
        imageSrc: require('../../assets/images/mocks/social/linkedin/'+name+'/qognify.png'),
        position: 'Frontend Developer',
        company: 'Qognify',
        startDate: 'Feb 2019',
        endDate: 'Present',
        period: '5 mos',
        location: 'Raanana'
    },
    {
        imageSrc: require('../../assets/images/mocks/social/linkedin/'+name+'/ebay.png'),
        position: 'Frontend Developer',
        company: 'eBay',
        startDate: 'Feb 2019',
        endDate: 'Present',
        period: '5 mos',
        location: 'Natanya'
    },
    {
        imageSrc: require('../../assets/images/mocks/social/linkedin/'+name+'/hp.png'),
        position: 'Mobile Developer',
        company: 'HP',
        startDate: 'Feb 2019',
        endDate: 'Present',
        period: '5 mos',
        location: 'Haifa'
    },
    {
        imageSrc: require('../../assets/images/mocks/social/linkedin/'+name+'/clicktale.png'),
        position: 'QA',
        company: 'ClickTale',
        startDate: 'Feb 2019',
        endDate: 'Present',
        period: '5 mos',
        location: 'Ramat-Gan'
    },
    {
        imageSrc: require('../../assets/images/mocks/social/linkedin/'+name+'/ibm.png'),
        position: 'Control room activator',
        company: 'IBM',
        startDate: 'Oct 2011',
        endDate: 'Dec 2013',
        period: '2 yrs 3 mos',
        location: 'Haifa'
    }
];
const linkedInEducationData = [
    {
        imageSrc: require('../../assets/images/mocks/social/linkedin/'+name+'/openuni.png'),
        Institue: 'The Open University',
        title: 'M.BA Buisness administration',
        startDate: '1018',
        endDate: '2022'
    },
    {
        imageSrc: require('../../assets/images/mocks/social/linkedin/'+name+'/haifauni.jpg'),
        Institue: 'University of Haifa',
        title: 'B.Sc Computer Science',
        startDate: '2011',
        endDate: '2015'
    },
    {
        imageSrc: require('../../assets/images/mocks/social/linkedin/'+name+'/haifauni.jpg'),
        Institue: 'University of Haifa',
        title: 'B.Sc Information Systems',
        startDate: '2011',
        endDate: '2015'
    },
    {
        imageSrc: require('../../assets/images/mocks/social/linkedin/'+name+'/technion.jpg'),
        Institue: 'Technion',
        title: 'Pre-Academic',
        startDate: '2000',
        endDate: '2011'
    }
];

export default class LinkedIn extends React.Component {
    render() {
        const linkedInJobsPosts = linkedInExperienceData.map((post) =>
            <View key={post.company}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={post.imageSrc}
                        style={{ height: 40, width: 40, marginTop: 6, marginRight: 10, marginLeft: 10 }}
                    />
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 16, fontWeight: '500' }}>{post.position}</Text>
                        <Text style={{ fontSize: 14 }}>{post.company}</Text>
                        <Text style={{ fontSize: 14 }}>{post.startDate} - {post.endDate} &#183; {post.period}</Text>
                        <Text style={{ fontSize: 14 }}>{post.location}</Text>
                    </View>
                </View>
                <View
                    style={{
                        borderBottomColor: 'lightgray',
                        borderBottomWidth: 1,
                        marginBottom: 10,
                        marginTop: 25
                    }}
                />
            </View>
        );
        const linkedInEducationPosts = linkedInEducationData.map((post) =>
            <View key={post.title}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={post.imageSrc}
                        style={{ height: 40, width: 40, marginTop: 6, marginRight: 10, marginLeft: 10 }}
                    />
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 16, fontWeight: '500' }}>{post.Institue}</Text>
                        <Text style={{ fontSize: 14 }}>{post.title}</Text>
                        <Text style={{ fontSize: 14 }}>{post.startDate} - {post.endDate}</Text>
                    </View>
                </View>
                <View
                    style={{
                        borderBottomColor: 'lightgray',
                        borderBottomWidth: 1,
                        marginBottom: 10,
                        marginTop: 25
                    }}
                />
            </View>
        );
        return (
            <View>
                <ScrollView>
                    <Text style={{ marginTop: 15, marginBottom: 15, marginLeft: 10, fontSize: 16 }}>Experience</Text>
                    {linkedInJobsPosts}
                    <Text style={{ marginTop: 15, marginBottom: 15, marginLeft: 10, fontSize: 16 }}>Education</Text>
                    {linkedInEducationPosts}
                </ScrollView>
                <View style={{position: 'absolute',width:"100%", bottom:0, backgroundColor: 'white', padding: 6}}>
                    <Button
                        title="Make a connection in LinkedIn"
                        color="#ff4d79"
                        style={{alignSelf: 'stretch',width:"100%",height: 80}}
                        onPress={() => Alert.alert('Successfully sent a friend request!')}
                    />
                </View>
            </View>
        );
    }
}