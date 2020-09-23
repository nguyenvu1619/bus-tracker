const axios = require('axios')
const fs = require('fs-extra')

const fetchPattern =async () => {
    const routes = fs.readJSONSync('./data/route.json')
    const test = routes.data[0]
    const pattern = await axios.get(`http://www.ctabustracker.com/bustime/api/v2/getpatterns?key=4mV3yityLKdShxUcZD4duyHnZ&rt=${test.rt}&tmres=s&format=json`)
    console.log(pattern.data['bustime-response'].ptr)
}

// fetchPattern()
fs.writeJsonSync('./data/test.json',{data:([
    {
        "pid": 6351,
        "ln": 21060.0,
        "rtdir": "Southbound",
        "pt": [
            {
                "seq": 1,
                "lat": 41.878011999999,
                "lon": -87.640008000001,
                "typ": "S",
                "stpid": "67",
                "stpnm": "Jackson & Canal",
                "pdist": 0.0
            },
            {
                "seq": 2,
                "lat": 41.878022,
                "lon": -87.639152,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 3,
                "lat": 41.878034000001,
                "lon": -87.638543,
                "typ": "S",
                "stpid": "14461",
                "stpnm": "Jackson & Riverside",
                "pdist": 288.0
            },
            {
                "seq": 4,
                "lat": 41.878069,
                "lon": -87.638058,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 5,
                "lat": 41.878071,
                "lon": -87.635559,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 6,
                "lat": 41.878079999999,
                "lon": -87.635448999999,
                "typ": "S",
                "stpid": "68",
                "stpnm": "Jackson & Franklin",
                "pdist": 1251.0
            },
            {
                "seq": 7,
                "lat": 41.8781,
                "lon": -87.633044,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 8,
                "lat": 41.878105999999,
                "lon": -87.632957999999,
                "typ": "S",
                "stpid": "69",
                "stpnm": "Jackson & Financial Place",
                "pdist": 1939.0
            },
            {
                "seq": 9,
                "lat": 41.878143,
                "lon": -87.629628,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 10,
                "lat": 41.878101000001,
                "lon": -87.629455999998,
                "typ": "S",
                "stpid": "70",
                "stpnm": "Jackson & Dearborn",
                "pdist": 2858.0
            },
            {
                "seq": 11,
                "lat": 41.878159,
                "lon": -87.628013,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 12,
                "lat": 41.878127999999,
                "lon": -87.627899000001,
                "typ": "S",
                "stpid": "71",
                "stpnm": "Jackson & State",
                "pdist": 3285.0
            },
            {
                "seq": 13,
                "lat": 41.878238,
                "lon": -87.625413,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 14,
                "lat": 41.878208,
                "lon": -87.625511,
                "typ": "S",
                "stpid": "72",
                "stpnm": "Jackson & Wabash (Garland)",
                "pdist": 3992.0
            },
            {
                "seq": 15,
                "lat": 41.878242,
                "lon": -87.624438,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 16,
                "lat": 41.876409,
                "lon": -87.624394,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 17,
                "lat": 41.876492,
                "lon": -87.624312999999,
                "typ": "S",
                "stpid": "73",
                "stpnm": "Michigan & Van Buren/Congress",
                "pdist": 4937.0
            },
            {
                "seq": 18,
                "lat": 41.875256,
                "lon": -87.624237,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 19,
                "lat": 41.87476,
                "lon": -87.624268,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 20,
                "lat": 41.874752000001,
                "lon": -87.624275000001,
                "typ": "S",
                "stpid": "1586",
                "stpnm": "Michigan & Harrison",
                "pdist": 5572.0
            },
            {
                "seq": 21,
                "lat": 41.873543,
                "lon": -87.624184,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 22,
                "lat": 41.873421,
                "lon": -87.624184000001,
                "typ": "S",
                "stpid": "1587",
                "stpnm": "Michigan & Balbo",
                "pdist": 6059.0
            },
            {
                "seq": 23,
                "lat": 41.873211,
                "lon": -87.624077,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 24,
                "lat": 41.872261,
                "lon": -87.624046,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 25,
                "lat": 41.872135,
                "lon": -87.624053999998,
                "typ": "S",
                "stpid": "1588",
                "stpnm": "Michigan & 8th Street",
                "pdist": 6533.0
            },
            {
                "seq": 26,
                "lat": 41.872087,
                "lon": -87.623907,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 27,
                "lat": 41.870528,
                "lon": -87.623922,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 28,
                "lat": 41.870439999999,
                "lon": -87.623921999999,
                "typ": "S",
                "stpid": "1589",
                "stpnm": "Michigan & 9th Street",
                "pdist": 7179.0
            },
            {
                "seq": 29,
                "lat": 41.868963,
                "lon": -87.623922,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 30,
                "lat": 41.868922999999,
                "lon": -87.623938,
                "typ": "S",
                "stpid": "1590",
                "stpnm": "Michigan & 11th Street",
                "pdist": 7734.0
            },
            {
                "seq": 31,
                "lat": 41.868708,
                "lon": -87.623812,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 32,
                "lat": 41.86793,
                "lon": -87.623812,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 33,
                "lat": 41.867588,
                "lon": -87.623938,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 34,
                "lat": 41.866872,
                "lon": -87.62397,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 35,
                "lat": 41.866762,
                "lon": -87.623969999999,
                "typ": "S",
                "stpid": "1591",
                "stpnm": "Michigan & Roosevelt",
                "pdist": 8537.0
            },
            {
                "seq": 36,
                "lat": 41.865585,
                "lon": -87.623987,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 37,
                "lat": 41.865530000001,
                "lon": -87.623987000001,
                "typ": "S",
                "stpid": "1592",
                "stpnm": "Michigan & 13th Street",
                "pdist": 8988.0
            },
            {
                "seq": 38,
                "lat": 41.865219,
                "lon": -87.624152,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 39,
                "lat": 41.863903,
                "lon": -87.624147,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 40,
                "lat": 41.863907,
                "lon": -87.624137999998,
                "typ": "S",
                "stpid": "1593",
                "stpnm": "Michigan & 14th Street",
                "pdist": 9621.0
            },
            {
                "seq": 41,
                "lat": 41.860051,
                "lon": -87.624037,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 42,
                "lat": 41.859974999999,
                "lon": -87.624033,
                "typ": "S",
                "stpid": "1595",
                "stpnm": "Michigan & 16th Street",
                "pdist": 11024.0
            },
            {
                "seq": 43,
                "lat": 41.859823,
                "lon": -87.623922,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 44,
                "lat": 41.85771,
                "lon": -87.623922,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 45,
                "lat": 41.85763,
                "lon": -87.624049999999,
                "typ": "S",
                "stpid": "1596",
                "stpnm": "Michigan & 18th Street",
                "pdist": 11902.0
            },
            {
                "seq": 46,
                "lat": 41.857463,
                "lon": -87.623907,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 47,
                "lat": 41.855325,
                "lon": -87.623875,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 48,
                "lat": 41.855253,
                "lon": -87.623857999999,
                "typ": "S",
                "stpid": "1597",
                "stpnm": "Michigan & Cullerton",
                "pdist": 12782.0
            },
            {
                "seq": 49,
                "lat": 41.854165,
                "lon": -87.623827,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 50,
                "lat": 41.854045000001,
                "lon": -87.623843000001,
                "typ": "S",
                "stpid": "1598",
                "stpnm": "Michigan & 21st Street",
                "pdist": 13222.0
            },
            {
                "seq": 51,
                "lat": 41.852512,
                "lon": -87.62378,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 52,
                "lat": 41.852462999999,
                "lon": -87.623795000001,
                "typ": "S",
                "stpid": "1599",
                "stpnm": "Michigan & Cermak",
                "pdist": 13799.0
            },
            {
                "seq": 53,
                "lat": 41.852337,
                "lon": -87.623858,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 54,
                "lat": 41.851328,
                "lon": -87.623827,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 55,
                "lat": 41.851295,
                "lon": -87.623826999999,
                "typ": "S",
                "stpid": "16014",
                "stpnm": "Michigan & 23rd Street",
                "pdist": 14230.0
            },
            {
                "seq": 56,
                "lat": 41.84954,
                "lon": -87.623827,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 57,
                "lat": 41.849459999999,
                "lon": -87.623827,
                "typ": "S",
                "stpid": "17243",
                "stpnm": "Michigan & 24th Street",
                "pdist": 14900.0
            },
            {
                "seq": 58,
                "lat": 41.849173,
                "lon": -87.623715,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 59,
                "lat": 41.84725,
                "lon": -87.623715,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 60,
                "lat": 41.847226999999,
                "lon": -87.623715,
                "typ": "S",
                "stpid": "1602",
                "stpnm": "Michigan & 25th Street",
                "pdist": 15717.0
            },
            {
                "seq": 61,
                "lat": 41.846885,
                "lon": -87.623668,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 62,
                "lat": 41.845478,
                "lon": -87.623668,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 63,
                "lat": 41.845343,
                "lon": -87.623636999999,
                "typ": "S",
                "stpid": "1603",
                "stpnm": "Michigan & 26th Street",
                "pdist": 16409.0
            },
            {
                "seq": 64,
                "lat": 41.843253,
                "lon": -87.623588,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 65,
                "lat": 41.843109999999,
                "lon": -87.623588,
                "typ": "S",
                "stpid": "1604",
                "stpnm": "Michigan & 28th Street",
                "pdist": 17226.0
            },
            {
                "seq": 66,
                "lat": 41.842157,
                "lon": -87.623542,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 67,
                "lat": 41.841823,
                "lon": -87.623588,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 68,
                "lat": 41.841774999999,
                "lon": -87.623588,
                "typ": "S",
                "stpid": "1605",
                "stpnm": "Michigan & 29th Street",
                "pdist": 17715.0
            },
            {
                "seq": 69,
                "lat": 41.84083,
                "lon": -87.623508,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 70,
                "lat": 41.84048,
                "lon": -87.623557,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 71,
                "lat": 41.840454999999,
                "lon": -87.623557000001,
                "typ": "S",
                "stpid": "1606",
                "stpnm": "3000 S Michigan",
                "pdist": 18196.0
            },
            {
                "seq": 72,
                "lat": 41.83808,
                "lon": -87.623493,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 73,
                "lat": 41.838,
                "lon": -87.623493000001,
                "typ": "S",
                "stpid": "1607",
                "stpnm": "Michigan & 31st Street",
                "pdist": 19094.0
            },
            {
                "seq": 74,
                "lat": 41.8363,
                "lon": -87.623462,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 75,
                "lat": 41.836188000001,
                "lon": -87.623461999999,
                "typ": "S",
                "stpid": "1608",
                "stpnm": "Michigan & 32nd Street",
                "pdist": 19756.0
            },
            {
                "seq": 76,
                "lat": 41.834535,
                "lon": -87.623398,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 77,
                "lat": 41.83442,
                "lon": -87.62333,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 78,
                "lat": 41.834422999999,
                "lon": -87.623397999998,
                "typ": "S",
                "stpid": "1609",
                "stpnm": "Michigan & 33rd Street",
                "pdist": 20423.0
            },
            {
                "seq": 79,
                "lat": 41.83442,
                "lon": -87.62333,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 80,
                "lat": 41.83288,
                "lon": -87.62329,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 81,
                "lat": 41.832722999999,
                "lon": -87.623349999998,
                "typ": "S",
                "stpid": "1610",
                "stpnm": "Michigan & 34th Street",
                "pdist": 21060.0
            }
        ]
    },
    {
        "pid": 8085,
        "ln": 23342.0,
        "rtdir": "Northbound",
        "pt": [
            {
                "seq": 1,
                "lat": 41.831133,
                "lon": -87.621553,
                "typ": "S",
                "stpid": "15314",
                "stpnm": "Indiana & 35th Street",
                "pdist": 0.0
            },
            {
                "seq": 2,
                "lat": 41.83142,
                "lon": -87.62178,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 3,
                "lat": 41.83291,
                "lon": -87.6218,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 4,
                "lat": 41.832985000001,
                "lon": -87.621791999998,
                "typ": "S",
                "stpid": "1560",
                "stpnm": "Indiana & 34th Street",
                "pdist": 573.0
            },
            {
                "seq": 5,
                "lat": 41.83297,
                "lon": -87.6218,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 6,
                "lat": 41.83482,
                "lon": -87.621825,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 7,
                "lat": 41.834931999999,
                "lon": -87.621856999999,
                "typ": "S",
                "stpid": "16119",
                "stpnm": "Indiana & 33rd Boulevard",
                "pdist": 1292.0
            },
            {
                "seq": 8,
                "lat": 41.836324,
                "lon": -87.621849,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 9,
                "lat": 41.836467000001,
                "lon": -87.621839999999,
                "typ": "S",
                "stpid": "1562",
                "stpnm": "Indiana & 32nd Street",
                "pdist": 1851.0
            },
            {
                "seq": 10,
                "lat": 41.837205,
                "lon": -87.621903,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 11,
                "lat": 41.83819,
                "lon": -87.621872,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 12,
                "lat": 41.838278000001,
                "lon": -87.621872,
                "typ": "S",
                "stpid": "1563",
                "stpnm": "Indiana & 31st Street",
                "pdist": 2512.0
            },
            {
                "seq": 13,
                "lat": 41.838428,
                "lon": -87.621903,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 14,
                "lat": 41.838572,
                "lon": -87.622063,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 15,
                "lat": 41.838628,
                "lon": -87.622317,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 16,
                "lat": 41.838643,
                "lon": -87.622698,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 17,
                "lat": 41.8387,
                "lon": -87.622873,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 18,
                "lat": 41.838795,
                "lon": -87.623017,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 19,
                "lat": 41.83897,
                "lon": -87.623143,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 20,
                "lat": 41.840535,
                "lon": -87.623207,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 21,
                "lat": 41.840607000001,
                "lon": -87.623207,
                "typ": "S",
                "stpid": "1564",
                "stpnm": "3000 S Michigan",
                "pdist": 3586.0
            },
            {
                "seq": 22,
                "lat": 41.841775,
                "lon": -87.623255,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 23,
                "lat": 41.841927,
                "lon": -87.623238000001,
                "typ": "S",
                "stpid": "1565",
                "stpnm": "Michigan & 29th Street",
                "pdist": 4069.0
            },
            {
                "seq": 24,
                "lat": 41.84261,
                "lon": -87.623302,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 25,
                "lat": 41.843675,
                "lon": -87.62327,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 26,
                "lat": 41.843722,
                "lon": -87.623287,
                "typ": "S",
                "stpid": "1566",
                "stpnm": "Michigan & 28th Street",
                "pdist": 4725.0
            },
            {
                "seq": 27,
                "lat": 41.845892,
                "lon": -87.623335,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 28,
                "lat": 41.845947,
                "lon": -87.623335,
                "typ": "S",
                "stpid": "1567",
                "stpnm": "Michigan & 26th Street",
                "pdist": 5536.0
            },
            {
                "seq": 29,
                "lat": 41.84675,
                "lon": -87.623493,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 30,
                "lat": 41.84733,
                "lon": -87.623542,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 31,
                "lat": 41.847378,
                "lon": -87.623542000001,
                "typ": "S",
                "stpid": "1568",
                "stpnm": "Michigan & 25th Street",
                "pdist": 6063.0
            },
            {
                "seq": 32,
                "lat": 41.847695,
                "lon": -87.62362,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 33,
                "lat": 41.849348,
                "lon": -87.623668,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 34,
                "lat": 41.849460000001,
                "lon": -87.623668000001,
                "typ": "S",
                "stpid": "15313",
                "stpnm": "Michigan & 24th Street",
                "pdist": 6826.0
            },
            {
                "seq": 35,
                "lat": 41.849753,
                "lon": -87.62362,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 36,
                "lat": 41.851288,
                "lon": -87.623668,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 37,
                "lat": 41.851367000001,
                "lon": -87.623668000002,
                "typ": "S",
                "stpid": "1570",
                "stpnm": "Michigan & 23rd Street",
                "pdist": 7525.0
            },
            {
                "seq": 38,
                "lat": 41.851542,
                "lon": -87.623715,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 39,
                "lat": 41.853235,
                "lon": -87.623715,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 40,
                "lat": 41.853387,
                "lon": -87.623668000001,
                "typ": "S",
                "stpid": "15312",
                "stpnm": "Michigan & Cermak",
                "pdist": 8266.0
            },
            {
                "seq": 41,
                "lat": 41.85453,
                "lon": -87.623715,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 42,
                "lat": 41.854555,
                "lon": -87.623811999999,
                "typ": "S",
                "stpid": "1573",
                "stpnm": "Michigan & 21st Street",
                "pdist": 8712.0
            },
            {
                "seq": 43,
                "lat": 41.854728,
                "lon": -87.623875,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 44,
                "lat": 41.855652,
                "lon": -87.623858,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 45,
                "lat": 41.855769999999,
                "lon": -87.623858000001,
                "typ": "S",
                "stpid": "1574",
                "stpnm": "Michigan & Cullerton",
                "pdist": 9158.0
            },
            {
                "seq": 46,
                "lat": 41.858162,
                "lon": -87.623907,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 47,
                "lat": 41.858193,
                "lon": -87.623858000002,
                "typ": "S",
                "stpid": "1575",
                "stpnm": "Michigan & 18th Street",
                "pdist": 10048.0
            },
            {
                "seq": 48,
                "lat": 41.858218,
                "lon": -87.62397,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 49,
                "lat": 41.860412,
                "lon": -87.623987,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 50,
                "lat": 41.860474999999,
                "lon": -87.623970000002,
                "typ": "S",
                "stpid": "14760",
                "stpnm": "Michigan & 16th Street",
                "pdist": 10904.0
            },
            {
                "seq": 51,
                "lat": 41.860979,
                "lon": -87.623938,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 52,
                "lat": 41.864302,
                "lon": -87.624038,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 53,
                "lat": 41.864364999999,
                "lon": -87.624044999999,
                "typ": "S",
                "stpid": "18318",
                "stpnm": "Michigan & 14th Street",
                "pdist": 12323.0
            },
            {
                "seq": 54,
                "lat": 41.866108,
                "lon": -87.624075,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 55,
                "lat": 41.866165,
                "lon": -87.624082000001,
                "typ": "S",
                "stpid": "1579",
                "stpnm": "Michigan & 13th Street",
                "pdist": 12979.0
            },
            {
                "seq": 56,
                "lat": 41.868073,
                "lon": -87.624018,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 57,
                "lat": 41.867912999999,
                "lon": -87.623987,
                "typ": "S",
                "stpid": "1580",
                "stpnm": "Michigan & Roosevelt",
                "pdist": 13729.0
            },
            {
                "seq": 58,
                "lat": 41.868947,
                "lon": -87.62397,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 59,
                "lat": 41.869097999999,
                "lon": -87.623970000001,
                "typ": "S",
                "stpid": "1581",
                "stpnm": "Michigan & 11th Street",
                "pdist": 14154.0
            },
            {
                "seq": 60,
                "lat": 41.870267,
                "lon": -87.62397,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 61,
                "lat": 41.870392999999,
                "lon": -87.623986999998,
                "typ": "S",
                "stpid": "1582",
                "stpnm": "Michigan & 9th Street",
                "pdist": 14627.0
            },
            {
                "seq": 62,
                "lat": 41.871602,
                "lon": -87.624018,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 63,
                "lat": 41.871728000001,
                "lon": -87.624018000001,
                "typ": "S",
                "stpid": "1583",
                "stpnm": "Michigan & 8th Street",
                "pdist": 15115.0
            },
            {
                "seq": 64,
                "lat": 41.873477,
                "lon": -87.624065,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 65,
                "lat": 41.87344,
                "lon": -87.62414,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 66,
                "lat": 41.873443999999,
                "lon": -87.624106999999,
                "typ": "S",
                "stpid": "1584",
                "stpnm": "Michigan & Balbo",
                "pdist": 15788.0
            },
            {
                "seq": 67,
                "lat": 41.875465,
                "lon": -87.624176,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 68,
                "lat": 41.87553,
                "lon": -87.624184000002,
                "typ": "S",
                "stpid": "14485",
                "stpnm": "Michigan & Ida B. Wells",
                "pdist": 16548.0
            },
            {
                "seq": 69,
                "lat": 41.875638,
                "lon": -87.624018,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 70,
                "lat": 41.876442,
                "lon": -87.624018,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 71,
                "lat": 41.876545,
                "lon": -87.624018,
                "typ": "S",
                "stpid": "75",
                "stpnm": "Michigan & Van Buren",
                "pdist": 16940.0
            },
            {
                "seq": 72,
                "lat": 41.87776,
                "lon": -87.62405,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 73,
                "lat": 41.878873,
                "lon": -87.624177,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 74,
                "lat": 41.879358,
                "lon": -87.624177,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 75,
                "lat": 41.879555,
                "lon": -87.624628,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 76,
                "lat": 41.879591,
                "lon": -87.62561,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 77,
                "lat": 41.879586,
                "lon": -87.625792,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 78,
                "lat": 41.879580000001,
                "lon": -87.625972999998,
                "typ": "S",
                "stpid": "77",
                "stpnm": "Adams & Wabash",
                "pdist": 18482.0
            },
            {
                "seq": 79,
                "lat": 41.879501,
                "lon": -87.627897,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 80,
                "lat": 41.879490999999,
                "lon": -87.628092999999,
                "typ": "S",
                "stpid": "4732",
                "stpnm": "Adams & State",
                "pdist": 19048.0
            },
            {
                "seq": 81,
                "lat": 41.879497,
                "lon": -87.6286,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 82,
                "lat": 41.879495,
                "lon": -87.628747,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 83,
                "lat": 41.879495,
                "lon": -87.628894,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 84,
                "lat": 41.87947,
                "lon": -87.630555,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 85,
                "lat": 41.87947,
                "lon": -87.630624,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 86,
                "lat": 41.879466,
                "lon": -87.630919,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 87,
                "lat": 41.879456999999,
                "lon": -87.631083000002,
                "typ": "S",
                "stpid": "17046",
                "stpnm": "Adams & Clark",
                "pdist": 19873.0
            },
            {
                "seq": 88,
                "lat": 41.879457,
                "lon": -87.631387,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 89,
                "lat": 41.879457,
                "lon": -87.631436,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 90,
                "lat": 41.879421,
                "lon": -87.634086,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 91,
                "lat": 41.879227000001,
                "lon": -87.633827,
                "typ": "S",
                "stpid": "80",
                "stpnm": "Adams & Wells",
                "pdist": 20732.0
            },
            {
                "seq": 92,
                "lat": 41.879406,
                "lon": -87.635138,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 93,
                "lat": 41.879406,
                "lon": -87.635285,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 94,
                "lat": 41.879404,
                "lon": -87.635432,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 95,
                "lat": 41.879404,
                "lon": -87.63558,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 96,
                "lat": 41.879402,
                "lon": -87.635727,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 97,
                "lat": 41.879402,
                "lon": -87.635874,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 98,
                "lat": 41.879177,
                "lon": -87.636101,
                "typ": "S",
                "stpid": "1108",
                "stpnm": "Adams & S. Wacker",
                "pdist": 21221.0
            },
            {
                "seq": 99,
                "lat": 41.879365,
                "lon": -87.637623,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 100,
                "lat": 41.879365,
                "lon": -87.637771,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 101,
                "lat": 41.879363,
                "lon": -87.637918,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 102,
                "lat": 41.879363,
                "lon": -87.638065,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 103,
                "lat": 41.879345,
                "lon": -87.639238,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 104,
                "lat": 41.879288,
                "lon": -87.639435,
                "typ": "S",
                "stpid": "12713",
                "stpnm": "Adams & Canal",
                "pdist": 22134.0
            },
            {
                "seq": 105,
                "lat": 41.879336,
                "lon": -87.639856,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 106,
                "lat": 41.879336,
                "lon": -87.640003,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 107,
                "lat": 41.879334,
                "lon": -87.64015,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 108,
                "lat": 41.879334,
                "lon": -87.640297,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 109,
                "lat": 41.879332,
                "lon": -87.640445,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 110,
                "lat": 41.879332,
                "lon": -87.640592,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 111,
                "lat": 41.879323,
                "lon": -87.641029,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 112,
                "lat": 41.879191,
                "lon": -87.641141,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 113,
                "lat": 41.878244,
                "lon": -87.641136,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 114,
                "lat": 41.878146,
                "lon": -87.64112,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 115,
                "lat": 41.878029,
                "lon": -87.641003,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 116,
                "lat": 41.877995,
                "lon": -87.640906,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 117,
                "lat": 41.878,
                "lon": -87.640006,
                "typ": "W",
                "pdist": 0.0
            },
            {
                "seq": 118,
                "lat": 41.878011999999,
                "lon": -87.640008000001,
                "typ": "S",
                "stpid": "67",
                "stpnm": "Jackson & Canal",
                "pdist": 23342.0
            }
        ]
    }
].map(item => item.pt.map(itemm => [itemm.lon, itemm.lat])).flat())})
