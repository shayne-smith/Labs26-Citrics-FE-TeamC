import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch
} from "react-router-dom";
import axios from "axios";

import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";

import { Login, Home } from "./components/pages/Login";

import "antd/dist/antd.less";
import "./index.css";

import { NotFoundPage } from "./components/pages/NotFound";
import { ExampleListPage } from "./components/pages/ExampleList";
import { ProfileListPage } from "./components/pages/ProfileList";
import { HomePage } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { ExampleDataViz } from "./components/pages/ExampleDataViz";
import { DataViz } from "./components/pages/DataViz";
import { LoadingComponent } from "./components/common";
import { AdvancedSearch } from "./components/pages/AdvancedSearch";

import { CityContext } from "./contexts/CityContext";

import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

function App() {
  const [comparisonList, setComparisonList] = useState([]);

  // state for cities data
  const [cities, setCities] = useState([]);
  const [housing, setHousing] = useState([]);
  const [weather, setWeather] = useState([]);
  const [jobs, setJobs] = useState([]);

  const [suggestions] = useState([
    "Alpharetta, GA",
    "Atlanta, GA",
    "Brookhaven, GA",
    "Johns Creek, GA",
    "Marietta, GA",
    "Roswell, GA",
    "Sandy Springs, GA",
    "Savannah, GA",
    "Smyrna, GA",
    "South Fulton, GA",
    "Stonecrest, GA",
    "Valdosta, GA",
    "Warner Robins, GA",
    "Allentown, PA",
    "Bethlehem, PA",
    "Erie, PA",
    "Harrisburg, PA",
    "Philadelphia, PA",
    "Pittsburgh, PA",
    "Reading, PA",
    "Scranton, PA",
    "Allen, TX",
    "Amarillo, TX",
    "Arlington, TX",
    "Austin, TX",
    "Baytown, TX",
    "Brownsville, TX",
    "Bryan, TX",
    "Carrollton, TX",
    "Cedar Park, TX",
    "College Station, TX",
    "Conroe, TX",
    "Corpus Christi, TX",
    "Dallas, TX",
    "DeSoto, TX",
    "Denton, TX",
    "Edinburg, TX",
    "El Paso, TX",
    "Euless, TX",
    "Fort Worth, TX",
    "Frisco, TX",
    "Galveston, TX",
    "Garland, TX",
    "Georgetown, TX",
    "Grand Prairie, TX",
    "Grapevine, TX",
    "Harlingen, TX",
    "Houston, TX",
    "Irving, TX",
    "Killeen, TX",
    "Laredo, TX",
    "League City, TX",
    "Leander, TX",
    "Lewisville, TX",
    "Little Elm, TX",
    "Longview, TX",
    "Lubbock, TX",
    "Mansfield, TX",
    "McAllen, TX",
    "McKinney, TX",
    "Mesquite, TX",
    "Midland, TX",
    "Mission, TX",
    "Missouri City, TX",
    "New Braunfels, TX",
    "North Richland Hills, TX",
    "Pasadena, TX",
    "Pflugerville, TX",
    "Pharr, TX",
    "Plano, TX",
    "Port Arthur, TX",
    "Richardson, TX",
    "Round Rock, TX",
    "Rowlett, TX",
    "San Angelo, TX",
    "San Antonio, TX",
    "Sugar Land, TX",
    "Temple, TX",
    "Texas City, TX",
    "Tyler, TX",
    "Victoria, TX",
    "Waco, TX",
    "Wichita Falls, TX",
    "Alameda, CA",
    "Alhambra, CA",
    "Aliso Viejo, CA",
    "Anaheim, CA",
    "Antioch, CA",
    "Arcadia, CA",
    "Bakersfield, CA",
    "Baldwin Park, CA",
    "Bellflower, CA",
    "Berkeley, CA",
    "Brentwood, CA",
    "Buena Park, CA",
    "Burbank, CA",
    "Camarillo, CA",
    "Carlsbad, CA",
    "Carson, CA",
    "Cathedral City, CA",
    "Chico, CA",
    "Chino Hills, CA",
    "Chino, CA",
    "Chula Vista, CA",
    "Citrus Heights, CA",
    "Clovis, CA",
    "Colton, CA",
    "Concord, CA",
    "Corona, CA",
    "Costa Mesa, CA",
    "Cupertino, CA",
    "Daly City, CA",
    "Davis, CA",
    "Delano, CA",
    "Diamond Bar, CA",
    "Downey, CA",
    "Dublin, CA",
    "Eastvale, CA",
    "El Cajon, CA",
    "El Monte, CA",
    "Elk Grove, CA",
    "Encinitas, CA",
    "Escondido, CA",
    "Fairfield, CA",
    "Folsom, CA",
    "Fontana, CA",
    "Fountain Valley, CA",
    "Fremont, CA",
    "Fresno, CA",
    "Fullerton, CA",
    "Gardena, CA",
    "Gilroy, CA",
    "Glendora, CA",
    "Hanford, CA",
    "Hawthorne, CA",
    "Hayward, CA",
    "Hemet, CA",
    "Hesperia, CA",
    "Highland, CA",
    "Huntington Beach, CA",
    "Huntington Park, CA",
    "Indio, CA",
    "Inglewood, CA",
    "Irvine, CA",
    "Jurupa Valley, CA",
    "La Habra, CA",
    "La Mesa, CA",
    "Laguna Niguel, CA",
    "Lake Elsinore, CA",
    "Lake Forest, CA",
    "Lancaster, CA",
    "Livermore, CA",
    "Lodi, CA",
    "Long Beach, CA",
    "Los Angeles, CA",
    "Lynwood, CA",
    "Madera, CA",
    "Manteca, CA",
    "Menifee, CA",
    "Merced, CA",
    "Milpitas, CA",
    "Mission Viejo, CA",
    "Modesto, CA",
    "Montebello, CA",
    "Monterey Park, CA",
    "Moreno Valley, CA",
    "Mountain View, CA",
    "Napa, CA",
    "National City, CA",
    "Newport Beach, CA",
    "Norwalk, CA",
    "Novato, CA",
    "Oakland, CA",
    "Oceanside, CA",
    "Ontario, CA",
    "Orange, CA",
    "Oxnard, CA",
    "Palm Desert, CA",
    "Palmdale, CA",
    "Palo Alto, CA",
    "Paramount, CA",
    "Perris, CA",
    "Petaluma, CA",
    "Pico Rivera, CA",
    "Pittsburg, CA",
    "Placentia, CA",
    "Pleasanton, CA",
    "Pomona, CA",
    "Porterville, CA",
    "Rancho Cordova, CA",
    "Rancho Cucamonga, CA",
    "Redding, CA",
    "Redlands, CA",
    "Redondo Beach, CA",
    "Redwood City, CA",
    "Rialto, CA",
    "Riverside, CA",
    "Rocklin, CA",
    "Rosemead, CA",
    "Roseville, CA",
    "Sacramento, CA",
    "Salinas, CA",
    "San Bernardino, CA",
    "San Buenaventura (Ventura), CA",
    "San Clemente, CA",
    "San Diego, CA",
    "San Francisco, CA",
    "San Jose, CA",
    "San Leandro, CA",
    "San Marcos, CA",
    "San Mateo, CA",
    "San Rafael, CA",
    "San Ramon, CA",
    "Santa Ana, CA",
    "Santa Barbara, CA",
    "Santa Clara, CA",
    "Santa Clarita, CA",
    "Santa Cruz, CA",
    "Santa Maria, CA",
    "Santa Monica, CA",
    "Santa Rosa, CA",
    "Santee, CA",
    "Simi Valley, CA",
    "South Gate, CA",
    "South San Francisco, CA",
    "Stockton, CA",
    "Sunnyvale, CA",
    "Temecula, CA",
    "Thousand Oaks, CA",
    "Torrance, CA",
    "Tracy, CA",
    "Tulare, CA",
    "Turlock, CA",
    "Tustin, CA",
    "Union City, CA",
    "Upland, CA",
    "Vacaville, CA",
    "Vallejo, CA",
    "Victorville, CA",
    "Visalia, CA",
    "Vista, CA",
    "Walnut Creek, CA",
    "Watsonville, CA",
    "West Covina, CA",
    "West Sacramento, CA",
    "Whittier, CA",
    "Alexandria, VA",
    "Chesapeake, VA",
    "Harrisonburg, VA",
    "Lynchburg, VA",
    "Newport News, VA",
    "Norfolk, VA",
    "Portsmouth, VA",
    "Richmond, VA",
    "Roanoke, VA",
    "Suffolk, VA",
    "Virginia Beach, VA",
    "Albuquerque, NM",
    "Las Cruces, NM",
    "Rio Rancho, NM",
    "Santa Fe, NM",
    "Albany, NY",
    "Buffalo, NY",
    "Mount Vernon, NY",
    "New Rochelle, NY",
    "New York City, NY",
    "Rochester, NY",
    "Schenectady, NY",
    "Syracuse, NY",
    "Utica, NY",
    "White Plains, NY",
    "Akron, OH",
    "Canton, OH",
    "Cincinnati, OH",
    "Cleveland, OH",
    "Columbus, OH",
    "Dayton, OH",
    "Elyria, OH",
    "Hamilton, OH",
    "Kettering, OH",
    "Lorain, OH",
    "Parma, OH",
    "Toledo, OH",
    "Arvada, CO",
    "Aurora, CO",
    "Boulder, CO",
    "Broomfield, CO",
    "Centennial, CO",
    "Colorado Springs, CO",
    "Commerce City, CO",
    "Denver, CO",
    "Grand Junction, CO",
    "Greeley, CO",
    "Lakewood, CO",
    "Longmont, CO",
    "Loveland, CO",
    "Pueblo, CO",
    "Thornton, CO",
    "Westminster, CO",
    "Augusta, ME",
    "Auburn, WA",
    "Bellevue, WA",
    "Bellingham, WA",
    "Burien, WA",
    "Everett, WA",
    "Federal Way, WA",
    "Kennewick, WA",
    "Kent, WA",
    "Kirkland, WA",
    "Lacey, WA",
    "Marysville, WA",
    "Olympia, WA",
    "Pasco, WA",
    "Redmond, WA",
    "Renton, WA",
    "Richland, WA",
    "Sammamish, WA",
    "Seattle, WA",
    "Shoreline, WA",
    "Spokane Valley, WA",
    "Spokane, WA",
    "Tacoma, WA",
    "Vancouver, WA",
    "Asheville, NC",
    "Burlington, NC",
    "Charlotte, NC",
    "Durham, NC",
    "Fayetteville, NC",
    "Gastonia, NC",
    "Greensboro, NC",
    "Greenville, NC",
    "High Point, NC",
    "Kannapolis, NC",
    "Raleigh, NC",
    "Rocky Mount, NC",
    "Winston Salem, NC",
    "Apple Valley, MN",
    "Blaine, MN",
    "Brooklyn Park, MN",
    "Burnsville, MN",
    "Coon Rapids, MN",
    "Duluth, MN",
    "Eagan, MN",
    "Eden Prairie, MN",
    "Edina, MN",
    "Lakeville, MN",
    "Maple Grove, MN",
    "Minneapolis, MN",
    "Minnetonka, MN",
    "Plymouth, MN",
    "Saint Cloud, MN",
    "Saint Paul, MN",
    "Woodbury, MN",
    "Appleton, WI",
    "Eau Claire, WI",
    "Green Bay, WI",
    "Janesville, WI",
    "Kenosha, WI",
    "La Crosse, WI",
    "Madison, WI",
    "Milwaukee, WI",
    "Oshkosh, WI",
    "Racine, WI",
    "Waukesha, WI",
    "West Allis, WI",
    "Apopka, FL",
    "Boca Raton, FL",
    "Bonita Springs, FL",
    "Boynton Beach, FL",
    "Bradenton, FL",
    "Cape Coral, FL",
    "Clearwater, FL",
    "Coconut Creek, FL",
    "Coral Springs, FL",
    "Daytona Beach, FL",
    "Deerfield Beach, FL",
    "Delray Beach, FL",
    "Deltona, FL",
    "Doral, FL",
    "Fort Lauderdale, FL",
    "Fort Myers, FL",
    "Gainesville, FL",
    "Hialeah, FL",
    "Hollywood, FL",
    "Homestead, FL",
    "Jacksonville, FL",
    "Kissimmee, FL",
    "Lakeland, FL",
    "Largo, FL",
    "Lauderhill, FL",
    "Margate, FL",
    "Melbourne, FL",
    "Miami Beach, FL",
    "Miami Gardens, FL",
    "Miami, FL",
    "Miramar, FL",
    "North Miami, FL",
    "North Port, FL",
    "Ocala, FL",
    "Orlando, FL",
    "Palm Bay, FL",
    "Palm Beach Gardens, FL",
    "Palm Coast, FL",
    "Pensacola, FL",
    "Pinellas Park, FL",
    "Plantation, FL",
    "Pompano Beach, FL",
    "Port Orange, FL",
    "Port Saint Lucie, FL",
    "Saint Petersburg, FL",
    "Sanford, FL",
    "Sarasota, FL",
    "Sunrise, FL",
    "Tallahassee, FL",
    "Tamarac, FL",
    "Tampa, FL",
    "West Palm Beach, FL",
    "Weston, FL",
    "Ann Arbor, MI",
    "Battle Creek, MI",
    "Dearborn Heights, MI",
    "Dearborn, MI",
    "Detroit, MI",
    "Farmington Hills, MI",
    "Flint, MI",
    "Grand Rapids, MI",
    "Kalamazoo, MI",
    "Kentwood, MI",
    "Lansing, MI",
    "Livonia, MI",
    "Novi, MI",
    "Pontiac, MI",
    "Rochester Hills, MI",
    "Royal Oak, MI",
    "Saint Clair Shores, MI",
    "Southfield, MI",
    "Sterling Heights, MI",
    "Taylor, MI",
    "Troy, MI",
    "Warren, MI",
    "Westland, MI",
    "Annapolis, MD",
    "Baltimore, MD",
    "Bowie, MD",
    "Frederick, MD",
    "Gaithersburg, MD",
    "Rockville, MD",
    "Ames, IA",
    "Ankeny, IA",
    "Cedar Rapids, IA",
    "Council Bluffs, IA",
    "Davenport, IA",
    "Des Moines, IA",
    "Dubuque, IA",
    "Iowa City, IA",
    "Sioux City, IA",
    "Waterloo, IA",
    "West Des Moines, IA",
    "Anderson, IN",
    "Bloomington, IN",
    "Carmel, IN",
    "Elkhart, IN",
    "Evansville, IN",
    "Fishers, IN",
    "Fort Wayne, IN",
    "Gary, IN",
    "Greenwood, IN",
    "Hammond, IN",
    "Indianapolis, IN",
    "Kokomo, IN",
    "Mishawaka, IN",
    "Muncie, IN",
    "Noblesville, IN",
    "South Bend, IN",
    "Terre Haute, IN",
    "West Lafayette, IN",
    "Boston, MA",
    "Brockton, MA",
    "Cambridge, MA",
    "Chicopee, MA",
    "Fall River, MA",
    "Framingham, MA",
    "Haverhill, MA",
    "Lowell, MA",
    "Lynn, MA",
    "Malden, MA",
    "Methuen Town, MA",
    "New Bedford, MA",
    "Newton, MA",
    "Peabody, MA",
    "Quincy, MA",
    "Revere, MA",
    "Somerville, MA",
    "Taunton, MA",
    "Waltham, MA",
    "Weymouth Town, MA",
    "Baton Rouge, LA",
    "Bossier City, LA",
    "Kenner, LA",
    "Lafayette, LA",
    "Lake Charles, LA",
    "New Orleans, LA",
    "Shreveport, LA",
    "Boise, ID",
    "Caldwell, ID",
    `Coeur d'Alene, ID`,
    "Idaho Falls, ID",
    "Meridian, ID",
    "Nampa, ID",
    "Pocatello, ID",
    "Twin Falls, ID",
    "Blue Springs, MO",
    "Florissant, MO",
    "Jefferson City, MO",
    "Joplin, MO",
    "Kansas City, MO",
    `Lee's Summit, MO`,
    `O'Fallon, MO`,
    "Saint Charles, MO",
    "Saint Joseph, MO",
    "Saint Louis, MO",
    "Saint Peters, MO",
    "Springfield, MO",
    "Bismarck, ND",
    "Grand Forks, ND",
    "Birmingham, AL",
    "Dothan, AL",
    "Hoover, AL",
    "Huntsville, AL",
    "Mobile, AL",
    "Montgomery, AL",
    "Tuscaloosa, AL",
    "Billings, MT",
    "Great Falls, MT",
    "Helena, MT",
    "Missoula, MT",
    "Berwyn, IL",
    "Champaign, IL",
    "Chicago, IL",
    "Decatur, IL",
    "Des Plaines, IL",
    "Elgin, IL",
    "Evanston, IL",
    "Joliet, IL",
    "Naperville, IL",
    "Rockford, IL",
    "Springfield, IL",
    "Waukegan, IL",
    "Wheaton, IL",
    "Bentonville, AR",
    "Conway, AR",
    "Fort Smith, AR",
    "Jonesboro, AR",
    "Little Rock, AR",
    "North Little Rock, AR",
    "Rogers, AR",
    "Springdale, AR",
    "Beaverton, OR",
    "Bend, OR",
    "Corvallis, OR",
    "Gresham, OR",
    "Hillsboro, OR",
    "Medford, OR",
    "Portland, OR",
    "Salem, OR",
    "Tigard, OR",
    "Bayonne, NJ",
    "Camden, NJ",
    "Clifton, NJ",
    "East Orange, NJ",
    "Elizabeth, NJ",
    "Hoboken, NJ",
    "Jersey City, NJ",
    "New Brunswick, NJ",
    "Newark, NJ",
    "Passaic, NJ",
    "Paterson, NJ",
    "Perth Amboy, NJ",
    "Plainfield, NJ",
    "Trenton, NJ",
    "Vineland, NJ",
    "Bartlett, TN",
    "Chattanooga, TN",
    "Clarksville, TN",
    "Franklin, TN",
    "Hendersonville, TN",
    "Johnson City, TN",
    "Kingsport, TN",
    "Knoxville, TN",
    "Memphis, TN",
    "Murfreesboro, TN",
    "Nashville, TN",
    "Avondale, AZ",
    "Buckeye, AZ",
    "Casa Grande, AZ",
    "Chandler, AZ",
    "Flagstaff, AZ",
    "Glendale, AZ",
    "Goodyear, AZ",
    "Lake Havasu City, AZ",
    "Maricopa, AZ",
    "Mesa, AZ",
    "Peoria, AZ",
    "Phoenix, AZ",
    "Scottsdale, AZ",
    "Surprise, AZ",
    "Tempe, AZ",
    "Tucson, AZ",
    "Casper, WY",
    "Cheyenne, WY",
    "Charleston, WV",
    "Charleston, SC",
    "Columbia, SC",
    "North Charleston, SC",
    "Rock Hill, SC",
    "Carson City, NV",
    "Henderson, NV",
    "Las Vegas, NV",
    "North Las Vegas, NV",
    "Reno, NV",
    "Sparks, NV",
    "Broken Arrow, OK",
    "Edmond, OK",
    "Lawton, OK",
    "Midwest City, OK",
    "Moore, OK",
    "Norman, OK",
    "Oklahoma City, OK",
    "Stillwater, OK",
    "Tulsa, OK",
    "Bridgeport, CT",
    "Bristol, CT",
    "Danbury, CT",
    "Hartford, CT",
    "Meriden, CT",
    "Milford city (bala, CT",
    "Milford, CT",
    "New Britain, CT",
    "New Haven, CT",
    "Stamford, CT",
    "Waterbury, CT",
    "West Haven, CT",
    "Bowling Green, KY",
    "Frankfort, KY",
    "Owensboro, KY",
    "Dover, DE",
    "Cranston, RI",
    "Pawtucket, RI",
    "Providence, RI",
    "Warwick, RI",
    "Concord, NH",
    "Manchester, NH",
    "Nashua, NH",
    "Gulfport, MS",
    "Jackson, MS",
    "Southaven, MS",
    "Grand Island, NE",
    "Lincoln, NE",
    "Omaha, NE",
    "Herriman, UT",
    "Layton, UT",
    "Lehi, UT",
    "Logan, UT",
    "Millcreek, UT",
    "Ogden, UT",
    "Orem, UT",
    "Saint George, UT",
    "Salt Lake City, UT",
    "Sandy, UT",
    "South Jordan, UT",
    "Taylorsville, UT",
    "West Valley City, UT",
    "Lawrence, KS",
    "Lenexa, KS",
    "Manhattan, KS",
    "Olathe, KS",
    "Overland Park, KS",
    "Shawnee, KS",
    "Topeka, KS",
    "Wichita, KS",
    "Juneau, AK",
    "Honolulu, HI",
    "Montpelier, VT",
    "Pierre, SD",
    "Rapid City, SD",
    "Sioux Falls, SD",
    "Washington, DC"
  ]);
  const [result, setResult] = useState([]);
  const [covid, setCovid] = useState([]);
  // const [image, setImage] = useState();

  const [cityImages, setCityImages] = useState({});

  // state for infinite scroll
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const [isComparing, setIsComparing] = useState(false);
  const [showLimitError, setShowLimitError] = useState(false);
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.

  const baseURL = "https://c-ds-driftly.citrics.dev";
  const history = useHistory();

  useEffect(() => {
    // getCityData();
    getHousingData();
    getWeatherData();
    getJobsData();
    getCovidData();
  }, []);

  // const checkComparisonListLength = () => {
  //   if (comparisonList.length === 0) {
  //     setIsComparing(false);
  //   }
  // };

  useEffect(() => {
    const checkComparisonListLength = () => {
      if (comparisonList.length === 0) {
        setIsComparing(false);
      }
    };
    checkComparisonListLength();
  }, [comparisonList.length]);

  useEffect(() => {
    const loadCities = async () => {
      setLoading(true);
      const newCities = await getCityData(page);
      setCities(prev => [...prev, ...newCities]);
      setLoading(false);
    };

    window.addEventListener("scroll", handleScroll);
    loadCities();
  }, [page]);

  const getCityData = async page => {
    const res = await (
      await fetch(
        `https://citrics-c-api.herokuapp.com/cities?page=${page}&limit=6`
      )
    ).json();
    return res.data;
  };

  const handleScroll = e => {
    // const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;

    if (scrollHeight - scrollTop === clientHeight) {
      setPage(prev => prev + 1);
    }
  };

  // const getCityData = () =>
  //   axios
  //     .get("https://citrics-c-api.herokuapp.com/cities")
  //     .then(res => {
  //       console.log(res.data);
  //       setCities(res.data);

  //       // console.log("running getCityData()");  runs 1 time
  //     })
  //     .catch(err => console.log(err));

  const extractCityImages = cityData => {
    const updateCityImage = city => {
      const location = city.location.slice(-2);
      const image = city.image;

      setCityImages(cityImages => ({
        ...cityImages,
        [location]: image
      }));
    };

    cityData.map(city => {
      updateCityImage(city);
    })``;
  };

  const getHousingData = () =>
    axios
      .get(`${baseURL}/housing`)
      .then(res => {
        setHousing(JSON.parse(res.data));
        // console.log("running getHousingData()"); // runs 1 time
      })
      .catch(err => console.log(err));

  const getJobsData = () =>
    axios
      .get(`${baseURL}/jobs`)
      .then(res => {
        setJobs(JSON.parse(res.data));
      })
      .catch(err => console.log(err));

  const getWeatherData = () =>
    axios
      .get(`${baseURL}/weather`)
      .then(res => {
        const weatherData = JSON.parse(res.data);
        setWeather(weatherData);
      })
      .catch(err => console.log(err));

  const getCovidData = () =>
    axios
      .get(`${baseURL}/covid`)
      .then(res => {
        const covidData = JSON.parse(res.data);
        setCovid(covidData);
      })
      .catch(err => console.log(err));

  // const getImage = async query => {
  //   try {
  //     const res = await axios.get(
  //       `https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.REACT_APP_CLIENT_ID}`
  //     );
  //     setImage(res.data.results);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const getData = (str, img) => {
    const s = str.charAt(str.length - 2) + str.charAt(str.length - 1);
    try {
      if (comparisonList.length < 3) {
        setComparisonList([
          ...comparisonList,
          {
            city: str,
            image: img,
            housing: housing[s][str],
            weather: weather[s][str].summer.MaxTempF,
            covid: covid[s]["positive"],
            jobs: jobs[s]["Total Manufacturing"]
          }
        ]);
        setIsComparing(true);
      } else {
        setShowLimitError(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleClose = () => {
    setShowLimitError(false);
  };

  const addCity = key => {
    setComparisonList(oldArray => [...oldArray, key]);
  };

  const removeCity = idx => {
    setComparisonList(
      comparisonList.filter((value, index) => {
        return idx !== index;
      })
    );
  };

  function onAuthRequired() {
    history.push("/login");
  }

  return (
    <CityContext.Provider
      value={{
        cities,
        comparisonList,
        setComparisonList,
        addCity,
        removeCity,
        isComparing,
        setIsComparing,
        getData,
        weather,
        housing,
        jobs,
        covid,
        showLimitError,
        setShowLimitError,
        handleClose,
        suggestions,
        result,
        setResult,
        loading
      }}
    >
      <Switch>
        <Security
          issuer="https://dev-783756.okta.com/oauth2/default"
          clientId="0oazj0xl0ZxIKVnSR4x6"
          redirectUri={window.location.origin + "/implicit/callback"}
          onAuthRequired={onAuthRequired}
        >
          <Route path="/" exact={true} component={Home} />
          <SecureRoute
            path="/home"
            exact
            component={() => <HomePage LoadingComponent={LoadingComponent} />}
          />

          <Route
            path="/login"
            render={() => <Login baseUrl="https://dev-783756.okta.com" />}
          />
          <Route path="/implicit/callback" component={LoginCallback} />

          <SecureRoute path="/about" exact={true} component={About} />
          <Route path="/example-list" component={ExampleListPage} />
          <Route path="/profile-list" component={ProfileListPage} />
          <Route path="/dataviz" component={DataViz} />
          <Route path="/advanced-search" component={AdvancedSearch} />
        </Security>
      </Switch>
    </CityContext.Provider>
  );
}
