/*GET home page 2017125009 박지웅 37.5851502221631, 126.97237158156358*/
const request = require('request')
const apiOptions = {
    server: 'http://localhost:3000'  //개발 환경
}
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://parksloc8r.herokuapp.com/'
}   //api콜을 해야 하는 모든 컨트롤러에서 어떤 환겨인지 확인하는 일을 피하도록 하기 위해
// 컨트롤러 파일의 상단에 한번만 디폴트 설정 옵션을 설정.
const homeList = (req, res) => {
    const path = '/api/locations'
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
        qs: {
            // lng: 126.9731253695056,
            // lat: 37.58801220390208,
            // maxDistance: 200000
            lng:1,
            lat:1,
            maxDistance:0.002
        }
    }
    request(
        requestOptions,
        (err, {statusCode}, body) => {
            let data = []
            if (statusCode === 200 && body.length) {

                data = body.map((item) => {
                    item.distance = formatDistance(item.distance)
                    return item
                })
            }
            renderHomepage(req, res, body)
        }
    )
}
const formatDistance = (distance) => {
    let thisDistance = 0
    let unit = 'm'
    if (distance > 1000) {
        thisDistance = parseFloat(distance / 1000).toFixed(1)
        unit = 'km'
    } else {
        thisDistance = Math.floor(distance)
    }
    return thisDistance + unit
}
const renderHomepage = (req, res, responseBody) => {
    let message=null
    if(!(responseBody instanceof Array)){
        message="API lookup error"
        responseBody=[]
    }else{
        if(!responseBody.length){
            message='No places found nearby'
        }
    }
    res.render('locations-list', {
            title: 'list 2017125009 박지웅',
            pageHeader: {
                title: 'Loc8r',
                strapline: 'Find places to work with wifi near you! 2017125009 박지웅'
            },
            sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work \
            when out and about. Perhaps with coffee, cake or pint? \
            Let Loc8r help you find the place you're looking for.",
            locations: responseBody,
            message
        }
    )
}


/*GET location info page 2017125009 박지웅*/
const locationInfo = (req, res) => {
    res.render('location-info', {
            title: 'Starcups',
            pageHeader: {title: 'Starcups'},
            sidebar: {
                context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
                callToAction: `If you've been and you like it or if you don't please leave a review to help other people just like you.`
            },
            location:
                {
                    name: 'Starcup',
                    address: '서울시특별시 종로구 창의문로 26',
                    rating: 3,
                    facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                    coords: {lat: 37.5851, lng: 126.9723},
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
        title: 'Review Starcups on Loc8r',
        pageHeader: {title: 'Review Starcup'}
    })
}

module.exports = {
    homeList,
    locationInfo,
    addReview
}

