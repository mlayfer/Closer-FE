import React from 'react';
import Masonry from 'react-native-masonry';
import {
	View
} from 'react-native';

const pinterestPostsData = [
    { uri: 'https://www.gannett-cdn.com/presto/2018/11/28/USAT/be8fec7b-17f2-4050-a10f-03ab06e69896-AP_England_Croatia_Nations_League_Soccer.jpg?crop=2147,1208,x0,y1&width=3200&height=1680&fit=bounds' },
    { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7N_LeVmjCFMhBNqgFkX8r1pZp-d9SgH1nQyap1zLTJ3Ac1Y9s' },
    { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn_l8N7c78soZ4L1p1YtM4zAgmYVNkv-2qB2v6cGRZ8mtqTD64' },
    { uri: 'https://theathletic.com/app/themes/athletic/assets/img/promos/league-15-cta-bg.jpg' },
    { uri: 'https://thespun.com/wp-content/uploads/2018/05/GettyImages-687190078-775x465.jpg' },
    { uri: 'https://www.abc.net.au/news/image/8416644-3x2-340x227.jpg' },
    { uri: 'https://www.theolympus.net/wp-content/uploads/2017/11/soccer_generic.jpg' },
    { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1FhHrCVrxQ2sSNHWsoIYLYvSqHn5BMuWFD-ZHZuRMmsyQq75s' },
    { uri: 'https://cdn.vox-cdn.com/thumbor/7Ns0FCrBg75EXpbNdYTE5N0ptKk=/0x0:1414x911/1400x933/filters:focal(594x343:820x569):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/63999753/mess.0.jpg' },
    { uri: 'https://i.guim.co.uk/img/media/1af5f9719987f0423fbbbd5b820122bd5a89c1e7/0_157_2000_1246/master/2000.jpg?width=700&quality=85&auto=format&fit=max&s=7e50c1f04a9071bd20a5aba528eaca02' },
    { uri: 'https://www.gannett-cdn.com/-mm-/a6b138d9855fd575b22baf95cf9c15b84a5c2965/c=0-96-962-640/local/-/media/2016/11/03/TXNMGroup/Alamogordo/636137941242533743-SoccerStockPhoto.jpg?width=3200&height=1680&fit=crop' },
    { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7AkR1TcVbRW6_gBevZfDU8Crq_Wui3IAifJu0lO09c_0YH4EZVA' },
    { uri: 'https://www.soccer.com/wcm/connect/5f0b0e03-9c96-40f6-a0bc-0c830df30e31/17390_SIDEKICKS-2UP-MEGAMENU.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-5f0b0e03-9c96-40f6-a0bc-0c830df30e31-mm9SgnZ' },
    { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfeH063BjMVjoIimGsuxef-O3HpATxMrR2_NgDs6bOgPqAnZpg' },
    { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQStIHEE8WToocxgPO40Wa6W9Mhyqu5nVN9ZpCi88eRv1eDDnp1' },
    { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxR1iB7vYJHXBCpsW3kcHtLa3oeZn5knxSay8bV5PyTN8sCdbS' },
    { uri: 'https://media.ussportscamps.com/media/images/soccer/_1024x600_crop_center-center_100_none/nike-soccer-camps-hero-image-fun-1024-684_190102_153325.jpg' },
    { uri: 'https://img.purch.com/rc/300x200/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA2MS83NzEvb3JpZ2luYWwvQnViYmxlLVNvY2Nlci5qcGc=' }
];

export default class Pinterest extends React.Component {
    render() {
        return (
            <View></View>
            // <Masonry
            //     sorted // optional - Default: false
            //     columns={2} // optional - Default: 2
            //     bricks={pinterestPostsData} />
        );
    }
}