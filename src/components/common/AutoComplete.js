import React, { useState, useEffect } from "react";
import { CityCards } from "./CityCards";

export const AutoComplete = () => {
  const [suggestions, setSuggestions] = useState([
    "Auburn city, Alabama",
    "Birmingham city, Alabama",
    "Decatur city, Alabama",
    "Dothan city, Alabama",
    "Hoover city, Alabama",
    "Huntsville city, Alabama",
    "Madison city, Alabama",
    "Mobile city, Alabama",
    "Montgomery city, Alabama",
    "Tuscaloosa city, Alabama",
    "Anchorage municipality, Alaska",
    "Avondale city, Arizona",
    "Buckeye city, Arizona",
    "Casa Grande city, Arizona",
    "Chandler city, Arizona",
    "Flagstaff city, Arizona",
    "Gilbert town, Arizona",
    "Glendale city, Arizona",
    "Goodyear city, Arizona",
    "Lake Havasu City, Arizona",
    "Maricopa city, Arizona",
    "Mesa city, Arizona",
    "Peoria city, Arizona",
    "Phoenix city, Arizona",
    "Queen Creek town, Arizona",
    "Scottsdale city, Arizona",
    "Surprise city, Arizona",
    "Tempe city, Arizona",
    "Tucson city, Arizona",
    "Yuma city, Arizona",
    "Bentonville city, Arkansas",
    "Conway city, Arkansas",
    "Fayetteville city, Arkansas",
    "Fort Smith city, Arkansas",
    "Jonesboro city, Arkansas",
    "Little Rock city, Arkansas",
    "North Little Rock city, Arkansas",
    "Rogers city, Arkansas",
    "Springdale city, Arkansas",
    "Alameda city, California",
    "Alhambra city, California",
    "Aliso Viejo city, California",
    "Anaheim city, California",
    "Antioch city, California",
    "Apple Valley town, California",
    "Arcadia city, California",
    "Bakersfield city, California",
    "Baldwin Park city, California",
    "Beaumont city, California",
    "Bellflower city, California",
    "Berkeley city, California",
    "Brentwood city, California",
    "Buena Park city, California",
    "Burbank city, California",
    "Camarillo city, California",
    "Carlsbad city, California",
    "Carson city, California",
    "Cathedral City city, California",
    "Chico city, California",
    "Chino city, California",
    "Chino Hills city, California",
    "Chula Vista city, California",
    "Citrus Heights city, California",
    "Clovis city, California",
    "Colton city, California",
    "Compton city, California",
    "Concord city, California",
    "Corona city, California",
    "Costa Mesa city, California",
    "Cupertino city, California",
    "Daly City city, California",
    "Davis city, California",
    "Delano city, California",
    "Diamond Bar city, California",
    "Downey city, California",
    "Dublin city, California",
    "Eastvale city, California",
    "El Cajon city, California",
    "Elk Grove city, California",
    "El Monte city, California",
    "Encinitas city, California",
    "Escondido city, California",
    "Fairfield city, California",
    "Folsom city, California",
    "Fontana city, California",
    "Fountain Valley city, California",
    "Fremont city, California",
    "Fresno city, California",
    "Fullerton city, California",
    "Gardena city, California",
    "Garden Grove city, California",
    "Gilroy city, California",
    "Glendale city, California",
    "Glendora city, California",
    "Hanford city, California",
    "Hawthorne city, California",
    "Hayward city, California",
    "Hemet city, California",
    "Hesperia city, California",
    "Highland city, California",
    "Huntington Beach city, California",
    "Huntington Park city, California",
    "Indio city, California",
    "Inglewood city, California",
    "Irvine city, California",
    "Jurupa Valley city, California",
    "Laguna Niguel city, California",
    "La Habra city, California",
    "Lake Elsinore city, California",
    "Lake Forest city, California",
    "Lakewood city, California",
    "La Mesa city, California",
    "Lancaster city, California",
    "Livermore city, California",
    "Lodi city, California",
    "Long Beach city, California",
    "Los Angeles city, California",
    "Lynwood city, California",
    "Madera city, California",
    "Manteca city, California",
    "Menifee city, California",
    "Merced city, California",
    "Milpitas city, California",
    "Mission Viejo city, California",
    "Modesto city, California",
    "Montebello city, California",
    "Monterey Park city, California",
    "Moreno Valley city, California",
    "Mountain View city, California",
    "Murrieta city, California",
    "Napa city, California",
    "National City city, California",
    "Newport Beach city, California",
    "Norwalk city, California",
    "Novato city, California",
    "Oakland city, California",
    "Oceanside city, California",
    "Ontario city, California",
    "Orange city, California",
    "Oxnard city, California",
    "Palmdale city, California",
    "Palm Desert city, California",
    "Palo Alto city, California",
    "Paramount city, California",
    "Pasadena city, California",
    "Perris city, California",
    "Petaluma city, California",
    "Pico Rivera city, California",
    "Pittsburg city, California",
    "Placentia city, California",
    "Pleasanton city, California",
    "Pomona city, California",
    "Porterville city, California",
    "Rancho Cordova city, California",
    "Rancho Cucamonga city, California",
    "Redding city, California",
    "Redlands city, California",
    "Redondo Beach city, California",
    "Redwood City city, California",
    "Rialto city, California",
    "Richmond city, California",
    "Riverside city, California",
    "Rocklin city, California",
    "Rosemead city, California",
    "Roseville city, California",
    "Sacramento city, California",
    "Salinas city, California",
    "San Bernardino city, California",
    "San Buenaventura (Ventura) city, California",
    "San Clemente city, California",
    "San Diego city, California",
    "San Francisco city, California",
    "San Jose city, California",
    "San Leandro city, California",
    "San Marcos city, California",
    "San Mateo city, California",
    "San Rafael city, California",
    "San Ramon city, California",
    "Santa Ana city, California",
    "Santa Barbara city, California",
    "Santa Clara city, California",
    "Santa Clarita city, California",
    "Santa Cruz city, California",
    "Santa Maria city, California",
    "Santa Monica city, California",
    "Santa Rosa city, California",
    "Santee city, California",
    "Simi Valley city, California",
    "South Gate city, California",
    "South San Francisco city, California",
    "Stockton city, California",
    "Sunnyvale city, California",
    "Temecula city, California",
    "Thousand Oaks city, California",
    "Torrance city, California",
    "Tracy city, California",
    "Tulare city, California",
    "Turlock city, California",
    "Tustin city, California",
    "Union City city, California",
    "Upland city, California",
    "Vacaville city, California",
    "Vallejo city, California",
    "Victorville city, California",
    "Visalia city, California",
    "Vista city, California",
    "Walnut Creek city, California",
    "Watsonville city, California",
    "West Covina city, California",
    "Westminster city, California",
    "West Sacramento city, California",
    "Whittier city, California",
    "Woodland city, California",
    "Yorba Linda city, California",
    "Yuba City city, California",
    "Yucaipa city, California",
    "Arvada city, Colorado",
    "Aurora city, Colorado",
    "Boulder city, Colorado",
    "Broomfield city, Colorado",
    "Castle Rock town, Colorado",
    "Centennial city, Colorado",
    "Colorado Springs city, Colorado",
    "Commerce City city, Colorado",
    "Denver city, Colorado",
    "Fort Collins city, Colorado",
    "Grand Junction city, Colorado",
    "Greeley city, Colorado",
    "Lakewood city, Colorado",
    "Longmont city, Colorado",
    "Loveland city, Colorado",
    "Parker town, Colorado",
    "Pueblo city, Colorado",
    "Thornton city, Colorado",
    "Westminster city, Colorado",
    "Bridgeport city, Connecticut",
    "Bristol city, Connecticut",
    "Danbury city, Connecticut",
    "Hartford city, Connecticut",
    "Meriden city, Connecticut",
    "Milford city (balance), Connecticut",
    "New Britain city, Connecticut",
    "New Haven city, Connecticut",
    "Norwalk city, Connecticut",
    "Stamford city, Connecticut",
    "Waterbury city, Connecticut",
    "West Haven city, Connecticut",
    "Wilmington city, Delaware",
    "Washington city, District of Columbia",
    "Apopka city, Florida",
    "Boca Raton city, Florida",
    "Bonita Springs city, Florida",
    "Boynton Beach city, Florida",
    "Bradenton city, Florida",
    "Cape Coral city, Florida",
    "Clearwater city, Florida",
    "Coconut Creek city, Florida",
    "Coral Springs city, Florida",
    "Davie town, Florida",
    "Daytona Beach city, Florida",
    "Deerfield Beach city, Florida",
    "Delray Beach city, Florida",
    "Deltona city, Florida",
    "Doral city, Florida",
    "Fort Lauderdale city, Florida",
    "Fort Myers city, Florida",
    "Gainesville city, Florida",
    "Hialeah city, Florida",
    "Hollywood city, Florida",
    "Homestead city, Florida",
    "Jacksonville city, Florida",
    "Jupiter town, Florida",
    "Kissimmee city, Florida",
    "Lakeland city, Florida",
    "Largo city, Florida",
    "Lauderhill city, Florida",
    "Margate city, Florida",
    "Melbourne city, Florida",
    "Miami city, Florida",
    "Miami Beach city, Florida",
    "Miami Gardens city, Florida",
    "Miramar city, Florida",
    "North Miami city, Florida",
    "North Port city, Florida",
    "Ocala city, Florida",
    "Orlando city, Florida",
    "Palm Bay city, Florida",
    "Palm Beach Gardens city, Florida",
    "Palm Coast city, Florida",
    "Pembroke Pines city, Florida",
    "Pensacola city, Florida",
    "Pinellas Park city, Florida",
    "Plantation city, Florida",
    "Pompano Beach city, Florida",
    "Port Orange city, Florida",
    "Port St. Lucie city, Florida",
    "St. Cloud city, Florida",
    "St. Petersburg city, Florida",
    "Sanford city, Florida",
    "Sarasota city, Florida",
    "Sunrise city, Florida",
    "Tallahassee city, Florida",
    "Tamarac city, Florida",
    "Tampa city, Florida",
    "Wellington village, Florida",
    "Weston city, Florida",
    "West Palm Beach city, Florida",
    "Albany city, Georgia",
    "Alpharetta city, Georgia",
    "Athens-Clarke County unified government (balance), Georgia",
    "Atlanta city, Georgia",
    "Augusta-Richmond County consolidated government (balance), Georgia",
    "Brookhaven city, Georgia",
    "Columbus city, Georgia",
    "Johns Creek city, Georgia",
    "Macon-Bibb County, Georgia",
    "Marietta city, Georgia",
    "Roswell city, Georgia",
    "Sandy Springs city, Georgia",
    "Savannah city, Georgia",
    "Smyrna city, Georgia",
    "South Fulton city, Georgia",
    "Stonecrest city, Georgia",
    "Valdosta city, Georgia",
    "Warner Robins city, Georgia",
    "Urban Honolulu CDP, Hawaii",
    "Boise City city, Idaho",
    "Caldwell city, Idaho",
    "Coeur d'Alene city, Idaho",
    "Idaho Falls city, Idaho",
    "Meridian city, Idaho",
    "Nampa city, Idaho",
    "Pocatello city, Idaho",
    "Twin Falls city, Idaho",
    "Arlington Heights village, Illinois",
    "Aurora city, Illinois",
    "Berwyn city, Illinois",
    "Bloomington city, Illinois",
    "Bolingbrook village, Illinois",
    "Champaign city, Illinois",
    "Chicago city, Illinois",
    "Cicero town, Illinois",
    "Decatur city, Illinois",
    "Des Plaines city, Illinois",
    "Elgin city, Illinois",
    "Evanston city, Illinois",
    "Hoffman Estates village, Illinois",
    "Joliet city, Illinois",
    "Mount Prospect village, Illinois",
    "Naperville city, Illinois",
    "Normal town, Illinois",
    "Oak Lawn village, Illinois",
    "Oak Park village, Illinois",
    "Orland Park village, Illinois",
    "Palatine village, Illinois",
    "Peoria city, Illinois",
    "Rockford city, Illinois",
    "Schaumburg village, Illinois",
    "Skokie village, Illinois",
    "Springfield city, Illinois",
    "Tinley Park village, Illinois",
    "Waukegan city, Illinois",
    "Wheaton city, Illinois",
    "Anderson city, Indiana",
    "Bloomington city, Indiana",
    "Carmel city, Indiana",
    "Elkhart city, Indiana",
    "Evansville city, Indiana",
    "Fishers city, Indiana",
    "Fort Wayne city, Indiana",
    "Gary city, Indiana",
    "Greenwood city, Indiana",
    "Hammond city, Indiana",
    "Indianapolis city (balance), Indiana",
    "Kokomo city, Indiana",
    "Lafayette city, Indiana",
    "Mishawaka city, Indiana",
    "Muncie city, Indiana",
    "Noblesville city, Indiana",
    "South Bend city, Indiana",
    "Terre Haute city, Indiana",
    "West Lafayette city, Indiana",
    "Ames city, Iowa",
    "Ankeny city, Iowa",
    "Cedar Rapids city, Iowa",
    "Council Bluffs city, Iowa",
    "Davenport city, Iowa",
    "Des Moines city, Iowa",
    "Dubuque city, Iowa",
    "Iowa City city, Iowa",
    "Sioux City city, Iowa",
    "Waterloo city, Iowa",
    "West Des Moines city, Iowa",
    "Kansas City city, Kansas",
    "Lawrence city, Kansas",
    "Lenexa city, Kansas",
    "Manhattan city, Kansas",
    "Olathe city, Kansas",
    "Overland Park city, Kansas",
    "Shawnee city, Kansas",
    "Topeka city, Kansas",
    "Wichita city, Kansas",
    "Bowling Green city, Kentucky",
    "Lexington-Fayette urban county, Kentucky",
    "Louisville/Jefferson County metro government (balance), Kentucky",
    "Owensboro city, Kentucky",
    "Baton Rouge city, Louisiana",
    "Bossier City city, Louisiana",
    "Kenner city, Louisiana",
    "Lafayette city, Louisiana",
    "Lake Charles city, Louisiana",
    "New Orleans city, Louisiana",
    "Shreveport city, Louisiana",
    "Portland city, Maine",
    "Baltimore city, Maryland",
    "Bowie city, Maryland",
    "Frederick city, Maryland",
    "Gaithersburg city, Maryland",
    "Rockville city, Maryland",
    "Boston city, Massachusetts",
    "Brockton city, Massachusetts",
    "Cambridge city, Massachusetts",
    "Chicopee city, Massachusetts",
    "Fall River city, Massachusetts",
    "Framingham city, Massachusetts",
    "Haverhill city, Massachusetts",
    "Lawrence city, Massachusetts",
    "Lowell city, Massachusetts",
    "Lynn city, Massachusetts",
    "Malden city, Massachusetts",
    "Medford city, Massachusetts",
    "Methuen Town city, Massachusetts",
    "New Bedford city, Massachusetts",
    "Newton city, Massachusetts",
    "Peabody city, Massachusetts",
    "Quincy city, Massachusetts",
    "Revere city, Massachusetts",
    "Somerville city, Massachusetts",
    "Springfield city, Massachusetts",
    "Taunton city, Massachusetts",
    "Waltham city, Massachusetts",
    "Weymouth Town city, Massachusetts",
    "Worcester city, Massachusetts",
    "Ann Arbor city, Michigan",
    "Battle Creek city, Michigan",
    "Dearborn city, Michigan",
    "Dearborn Heights city, Michigan",
    "Detroit city, Michigan",
    "Farmington Hills city, Michigan",
    "Flint city, Michigan",
    "Grand Rapids city, Michigan",
    "Kalamazoo city, Michigan",
    "Kentwood city, Michigan",
    "Lansing city, Michigan",
    "Livonia city, Michigan",
    "Novi city, Michigan",
    "Pontiac city, Michigan",
    "Rochester Hills city, Michigan",
    "Royal Oak city, Michigan",
    "St. Clair Shores city, Michigan",
    "Southfield city, Michigan",
    "Sterling Heights city, Michigan",
    "Taylor city, Michigan",
    "Troy city, Michigan",
    "Warren city, Michigan",
    "Westland city, Michigan",
    "Wyoming city, Michigan",
    "Apple Valley city, Minnesota",
    "Blaine city, Minnesota",
    "Bloomington city, Minnesota",
    "Brooklyn Park city, Minnesota",
    "Burnsville city, Minnesota",
    "Coon Rapids city, Minnesota",
    "Duluth city, Minnesota",
    "Eagan city, Minnesota",
    "Eden Prairie city, Minnesota",
    "Edina city, Minnesota",
    "Lakeville city, Minnesota",
    "Maple Grove city, Minnesota",
    "Minneapolis city, Minnesota",
    "Minnetonka city, Minnesota",
    "Plymouth city, Minnesota",
    "Rochester city, Minnesota",
    "St. Cloud city, Minnesota",
    "St. Paul city, Minnesota",
    "Woodbury city, Minnesota",
    "Gulfport city, Mississippi",
    "Jackson city, Mississippi",
    "Southaven city, Mississippi",
    "Blue Springs city, Missouri",
    "Columbia city, Missouri",
    "Florissant city, Missouri",
    "Independence city, Missouri",
    "Joplin city, Missouri",
    "Kansas City city, Missouri",
    "Lee's Summit city, Missouri",
    "O'Fallon city, Missouri",
    "St. Charles city, Missouri",
    "St. Joseph city, Missouri",
    "St. Louis city, Missouri",
    "St. Peters city, Missouri",
    "Springfield city, Missouri",
    "Billings city, Montana",
    "Great Falls city, Montana",
    "Missoula city, Montana",
    "Bellevue city, Nebraska",
    "Grand Island city, Nebraska",
    "Lincoln city, Nebraska",
    "Omaha city, Nebraska",
    "Carson City, Nevada",
    "Henderson city, Nevada",
    "Las Vegas city, Nevada",
    "North Las Vegas city, Nevada",
    "Reno city, Nevada",
    "Sparks city, Nevada",
    "Manchester city, New Hampshire",
    "Nashua city, New Hampshire",
    "Bayonne city, New Jersey",
    "Camden city, New Jersey",
    "Clifton city, New Jersey",
    "East Orange city, New Jersey",
    "Elizabeth city, New Jersey",
    "Hoboken city, New Jersey",
    "Jersey City city, New Jersey",
    "Newark city, New Jersey",
    "New Brunswick city, New Jersey",
    "Passaic city, New Jersey",
    "Paterson city, New Jersey",
    "Perth Amboy city, New Jersey",
    "Plainfield city, New Jersey",
    "Trenton city, New Jersey",
    "Union City city, New Jersey",
    "Vineland city, New Jersey",
    "West New York town, New Jersey",
    "Albuquerque city, New Mexico",
    "Las Cruces city, New Mexico",
    "Rio Rancho city, New Mexico",
    "Santa Fe city, New Mexico",
    "Albany city, New York",
    "Buffalo city, New York",
    "Hempstead village, New York",
    "Mount Vernon city, New York",
    "New Rochelle city, New York",
    "New York city, New York",
    "Rochester city, New York",
    "Schenectady city, New York",
    "Syracuse city, New York",
    "Utica city, New York",
    "White Plains city, New York",
    "Yonkers city, New York",
    "Apex town, North Carolina",
    "Asheville city, North Carolina",
    "Burlington city, North Carolina",
    "Cary town, North Carolina",
    "Chapel Hill town, North Carolina",
    "Charlotte city, North Carolina",
    "Concord city, North Carolina",
    "Durham city, North Carolina",
    "Fayetteville city, North Carolina",
    "Gastonia city, North Carolina",
    "Greensboro city, North Carolina",
    "Greenville city, North Carolina",
    "High Point city, North Carolina",
    "Huntersville town, North Carolina",
    "Jacksonville city, North Carolina",
    "Kannapolis city, North Carolina",
    "Raleigh city, North Carolina",
    "Rocky Mount city, North Carolina",
    "Wilmington city, North Carolina",
    "Winston-Salem city, North Carolina",
    "Bismarck city, North Dakota",
    "Fargo city, North Dakota",
    "Grand Forks city, North Dakota",
    "Akron city, Ohio",
    "Canton city, Ohio",
    "Cincinnati city, Ohio",
    "Cleveland city, Ohio",
    "Columbus city, Ohio",
    "Dayton city, Ohio",
    "Elyria city, Ohio",
    "Hamilton city, Ohio",
    "Kettering city, Ohio",
    "Lorain city, Ohio",
    "Newark city, Ohio",
    "Parma city, Ohio",
    "Springfield city, Ohio",
    "Toledo city, Ohio",
    "Youngstown city, Ohio",
    "Broken Arrow city, Oklahoma",
    "Edmond city, Oklahoma",
    "Lawton city, Oklahoma",
    "Midwest City city, Oklahoma",
    "Moore city, Oklahoma",
    "Norman city, Oklahoma",
    "Oklahoma City city, Oklahoma",
    "Stillwater city, Oklahoma",
    "Tulsa city, Oklahoma",
    "Albany city, Oregon",
    "Beaverton city, Oregon",
    "Bend city, Oregon",
    "Corvallis city, Oregon",
    "Eugene city, Oregon",
    "Gresham city, Oregon",
    "Hillsboro city, Oregon",
    "Medford city, Oregon",
    "Portland city, Oregon",
    "Salem city, Oregon",
    "Springfield city, Oregon",
    "Tigard city, Oregon",
    "Allentown city, Pennsylvania",
    "Bethlehem city, Pennsylvania",
    "Erie city, Pennsylvania",
    "Lancaster city, Pennsylvania",
    "Philadelphia city, Pennsylvania",
    "Pittsburgh city, Pennsylvania",
    "Reading city, Pennsylvania",
    "Scranton city, Pennsylvania",
    "Cranston city, Rhode Island",
    "Pawtucket city, Rhode Island",
    "Providence city, Rhode Island",
    "Warwick city, Rhode Island",
    "Charleston city, South Carolina",
    "Columbia city, South Carolina",
    "Greenville city, South Carolina",
    "Mount Pleasant town, South Carolina",
    "North Charleston city, South Carolina",
    "Rock Hill city, South Carolina",
    "Summerville town, South Carolina",
    "Rapid City city, South Dakota",
    "Sioux Falls city, South Dakota",
    "Bartlett city, Tennessee",
    "Chattanooga city, Tennessee",
    "Clarksville city, Tennessee",
    "Collierville town, Tennessee",
    "Franklin city, Tennessee",
    "Hendersonville city, Tennessee",
    "Jackson city, Tennessee",
    "Johnson City city, Tennessee",
    "Kingsport city, Tennessee",
    "Knoxville city, Tennessee",
    "Memphis city, Tennessee",
    "Murfreesboro city, Tennessee",
    "Nashville-Davidson metropolitan government (balance), Tennessee",
    "Smyrna town, Tennessee",
    "Abilene city, Texas",
    "Allen city, Texas",
    "Amarillo city, Texas",
    "Arlington city, Texas",
    "Austin city, Texas",
    "Baytown city, Texas",
    "Beaumont city, Texas",
    "Brownsville city, Texas",
    "Bryan city, Texas",
    "Carrollton city, Texas",
    "Cedar Park city, Texas",
    "College Station city, Texas",
    "Conroe city, Texas",
    "Corpus Christi city, Texas",
    "Dallas city, Texas",
    "Denton city, Texas",
    "DeSoto city, Texas",
    "Edinburg city, Texas",
    "El Paso city, Texas",
    "Euless city, Texas",
    "Flower Mound town, Texas",
    "Fort Worth city, Texas",
    "Frisco city, Texas",
    "Galveston city, Texas",
    "Garland city, Texas",
    "Georgetown city, Texas",
    "Grand Prairie city, Texas",
    "Grapevine city, Texas",
    "Harlingen city, Texas",
    "Houston city, Texas",
    "Irving city, Texas",
    "Killeen city, Texas",
    "Laredo city, Texas",
    "League City city, Texas",
    "Leander city, Texas",
    "Lewisville city, Texas",
    "Little Elm city, Texas",
    "Longview city, Texas",
    "Lubbock city, Texas",
    "McAllen city, Texas",
    "McKinney city, Texas",
    "Mansfield city, Texas",
    "Mesquite city, Texas",
    "Midland city, Texas",
    "Mission city, Texas",
    "Missouri City city, Texas",
    "New Braunfels city, Texas",
    "North Richland Hills city, Texas",
    "Odessa city, Texas",
    "Pasadena city, Texas",
    "Pearland city, Texas",
    "Pflugerville city, Texas",
    "Pharr city, Texas",
    "Plano city, Texas",
    "Port Arthur city, Texas",
    "Richardson city, Texas",
    "Round Rock city, Texas",
    "Rowlett city, Texas",
    "San Angelo city, Texas",
    "San Antonio city, Texas",
    "San Marcos city, Texas",
    "Sugar Land city, Texas",
    "Temple city, Texas",
    "Texas City city, Texas",
    "Tyler city, Texas",
    "Victoria city, Texas",
    "Waco city, Texas",
    "Wichita Falls city, Texas",
    "Wylie city, Texas",
    "Herriman city, Utah",
    "Layton city, Utah",
    "Lehi city, Utah",
    "Logan city, Utah",
    "Millcreek city, Utah",
    "Ogden city, Utah",
    "Orem city, Utah",
    "Provo city, Utah",
    "St. George city, Utah",
    "Salt Lake City city, Utah",
    "Sandy city, Utah",
    "South Jordan city, Utah",
    "Taylorsville city, Utah",
    "West Jordan city, Utah",
    "West Valley City city, Utah",
    "Alexandria city, Virginia",
    "Chesapeake city, Virginia",
    "Hampton city, Virginia",
    "Harrisonburg city, Virginia",
    "Leesburg town, Virginia",
    "Lynchburg city, Virginia",
    "Newport News city, Virginia",
    "Norfolk city, Virginia",
    "Portsmouth city, Virginia",
    "Richmond city, Virginia",
    "Roanoke city, Virginia",
    "Suffolk city, Virginia",
    "Virginia Beach city, Virginia",
    "Auburn city, Washington",
    "Bellevue city, Washington",
    "Bellingham city, Washington",
    "Burien city, Washington",
    "Everett city, Washington",
    "Federal Way city, Washington",
    "Kennewick city, Washington",
    "Kent city, Washington",
    "Kirkland city, Washington",
    "Lacey city, Washington",
    "Lakewood city, Washington",
    "Marysville city, Washington",
    "Olympia city, Washington",
    "Pasco city, Washington",
    "Redmond city, Washington",
    "Renton city, Washington",
    "Richland city, Washington",
    "Sammamish city, Washington",
    "Seattle city, Washington",
    "Shoreline city, Washington",
    "Spokane city, Washington",
    "Spokane Valley city, Washington",
    "Tacoma city, Washington",
    "Vancouver city, Washington",
    "Yakima city, Washington",
    "Appleton city, Wisconsin",
    "Eau Claire city, Wisconsin",
    "Green Bay city, Wisconsin",
    "Janesville city, Wisconsin",
    "Kenosha city, Wisconsin",
    "La Crosse city, Wisconsin",
    "Madison city, Wisconsin",
    "Milwaukee city, Wisconsin",
    "Oshkosh city, Wisconsin",
    "Racine city, Wisconsin",
    "Waukesha city, Wisconsin",
    "West Allis city, Wisconsin",
    "Casper city, Wyoming",
    "Cheyenne city, Wyoming"
  ]);

  const [result, setResult] = useState([]);

  const changeText = e => {
    let value = e.target.value;
    let regex = new RegExp(`^${value}`, "i");
    // setSuggestions(suggestions.sort().filter((v) => regex.test(v)));
    let arr = [];
    if (value.length != 0) {
      arr = suggestions.filter(v => regex.test(v));
    }

    console.log("arr: " + arr);
    setResult(arr.slice(0, 5));
  };

  console.log(result);
  return (
    <div className="searchbox">
      <input
        className="search-input"
        onChange={changeText}
        type="text"
        placeholder="city search"
      />
      <div className="grid">
        {result.map((item, index) => {
          return <CityCards data={item} key={index} />;
        })}
      </div>
    </div>
  );
};
