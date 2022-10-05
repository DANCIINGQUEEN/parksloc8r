/*GET home page 2017125009 박지웅 37.5851502221631, 126.97237158156358*/
const homeList = (req, res) => {
    res.render('locations-list', {
            title: 'list 2017125009 박지웅',
            pageHeader: {
                title: 'Loc8r',
                strapline: 'Find places to work with wifi near you! 2017125009 박지웅'
            },
            sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work \
            when out and about. Perhaps with coffee, cake or pint? \
            Let Loc8r help you find the place you're looking for.",
            locations: [
                {
                    name: 'Starcups',
                    address: '서울시특별시 종로구 창의문로 26',
                    rating: 3,
                    facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                    distance: '100m'
                },
                {
                    name: 'Cafe Hero',
                    address: '서울시특별시 종로구 창의문로 21',
                    rating: 4,
                    facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                    distance: '200m'
                },
                {
                    name: 'Burger Queen',
                    address: '서울시특별시 종로구 자하문로 23',
                    rating: 2,
                    facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                    distance: '250m'
                },
            ]
        }
    )
}
/*GET location info page 2017125009 박지웅*/
const locationInfo = (req, res) => {
    res.render('location-info', {
            title: 'Starcups',
            pageHeader: {title: 'Starcups'},
            sidebar: {
                context:'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
                callToAction:`If you've been and you like it or if you don't please leave a review to help other people just like you.`
            },
            location:
                {
                    name: 'Starcup',
                    address: '서울시특별시 종로구 창의문로 26',
                    rating: 3,
                    facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                    coords: {lat: 37.5851502221631, lng: 126.97237158156358},
                    openingTimes: [{
                        days: 'Monday - Friday',
                        opening: '7:00am',
                        closing: '7:00pm',
                        closed: false
                    }, {
                        days: 'Saturday',
                        opening: '8:00am',
                        closing: '5:00pm',
                        closed: false
                    }, {
                        days: 'Sunday',
                        closed: true
                    }
                    ],
                    reviews: [
                        {
                            author: '박지웅',
                            rating: 5,
                            timestamp: '16 July 2022',
                            reviewText: `짱짱굿`
                        },
                        {
                            author: 'Charlie Chaplin',
                            rating: 3,
                            timestamp: '16 July 2022',
                            reviewText: `It was okay. Coffee wasn't great, but the wifi was fast.`
                        }
                    ]
                }

        }
    )

}

/*GET add review page*/
const addReview = (req, res) => {
    res.render('location-review-form', {
        title:'Review Starcups on Loc8r',
        pageHeader:{title:'Review Starcup'}
    })
}

module.exports = {
    homeList,
    locationInfo,
    addReview
}

