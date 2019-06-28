import React from 'react';
import {
    Image,
    Text,
    View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const linkedInExperienceData = [
    {
        imageSrc: 'https://media.licdn.com/dms/image/C510BAQFhdRoC3VVvtQ/company-logo_400_400/0?e=1568246400&v=beta&t=yNJuQXiGwTiszOKkyTLn6Tp-FGU7Um3B-m8s42J88l0',
        position: 'Frontend Developer',
        company: 'Qognify',
        startDate: 'Feb 2019',
        endDate: 'Present',
        period: '5 mos',
        location: 'Raanana'
    },
    {
        imageSrc: 'https://media.licdn.com/dms/image/C4D0BAQHXGxuLfDlrnw/company-logo_400_400/0?e=1568246400&v=beta&t=Qy8EWvWmR5dgIiKtjMUW6-VK6V2LoeVSf_VLW5VaU_w',
        position: 'Frontend Developer',
        company: 'eBay',
        startDate: 'Feb 2019',
        endDate: 'Present',
        period: '5 mos',
        location: 'Natanya'
    },
    {
        imageSrc: 'https://media.licdn.com/dms/image/C4D0BAQHT3VaXTZuxiQ/company-logo_400_400/0?e=1568246400&v=beta&t=UK9ww9LWY7cY4DJIWpiF8xSGyYs8ueHm-iXKCZOlTAI',
        position: 'Mobile Developer',
        company: 'HP',
        startDate: 'Feb 2019',
        endDate: 'Present',
        period: '5 mos',
        location: 'Haifa'
    },
    {
        imageSrc: 'https://media.licdn.com/dms/image/C560BAQEclbXZ26a0mQ/company-logo_400_400/0?e=1568246400&v=beta&t=L1FO_rHoyxsSCvVaAWLXX0_cnJUzjU8I58wNE3tOAfA',
        position: 'QA',
        company: 'ClickTale',
        startDate: 'Feb 2019',
        endDate: 'Present',
        period: '5 mos',
        location: 'Ramat-Gan'
    },
    {
        imageSrc: 'https://media.licdn.com/dms/image/C4E0BAQF-hKjHQHNBQg/company-logo_400_400/0?e=1568246400&v=beta&t=c5XAEgUu_-Xui1HBY2wViQ4tsATiIVxsOXRWysKlZ1k',
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
        imageSrc: 'https://media.licdn.com/dms/image/C560BAQHx2YcqXFxglQ/company-logo_400_400/0?e=1568246400&v=beta&t=PX44MYQcHaayntNevx9eO35fXHWYac__q67QJd3BCqU',
        Institue: 'The Open University',
        title: 'M.BA Buisness administration',
        startDate: '1018',
        endDate: '2022'
    },
    {
        imageSrc: 'https://media.licdn.com/dms/image/C4E0BAQE8ABBsYjrAiA/company-logo_400_400/0?e=1568246400&v=beta&t=kwdf9kbIGk9cz_7negYWaKPJGUFjalDEVmEtX5FEYPw',
        Institue: 'University of Haifa',
        title: 'B.Sc Computer Science',
        startDate: '2011',
        endDate: '2015'
    },
    {
        imageSrc: 'https://media.licdn.com/dms/image/C4E0BAQE8ABBsYjrAiA/company-logo_400_400/0?e=1568246400&v=beta&t=kwdf9kbIGk9cz_7negYWaKPJGUFjalDEVmEtX5FEYPw',
        Institue: 'University of Haifa',
        title: 'B.Sc Information Systems',
        startDate: '2011',
        endDate: '2015'
    },
    {
        imageSrc: 'https://media.licdn.com/dms/image/C4D0BAQG12formuFdJg/company-logo_400_400/0?e=1568246400&v=beta&t=FsO1AEpDI_o0m5TxDBrxVocnPteMhS0pUsyO-FIINfk',
        Institue: 'Technion',
        title: 'Pre-Academic',
        startDate: '2000',
        endDate: '2011'
    }
];

export default class LinkedIn extends React.Component {
    render() {
        const linkedInJobsPosts = linkedInExperienceData.map((post) =>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={{ uri: post.imageSrc }}
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
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={{ uri: post.imageSrc }}
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
            <ScrollView>
                <Text style={{ marginTop: 15, marginBottom: 15, marginLeft: 10, fontSize: 16 }}>Experience</Text>
                {linkedInJobsPosts}
                <Text style={{ marginTop: 15, marginBottom: 15, marginLeft: 10, fontSize: 16 }}>Education</Text>
                {linkedInEducationPosts}
            </ScrollView>
        );
    }
}