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

const stories = [
	{
	  id: "4",
	  source: require("../assets/images/story1.jpg"),
	  user: "Ugur Erdal",
	  avatar: require("../assets/images/maayan.jpg")
	},
	{
	  id: "2",
	  source: require("../assets/images/story2.png"),
	  user: "Mustafa",
	  avatar: require("../assets/images/maayan.jpg")
	},
	{
	  id: "5",
	  source: require("../assets/images/story1.jpg"),
	  user: "Emre Yilmaz",
	  avatar: require("../assets/images/maayan.jpg")
	},
	{
	  id: "3",
	  source: require("../assets/images/story4.jpg"),
	  user: "Cenk Gun",
	  avatar: require("../assets/images/maayan.jpg")
	},
  ];
