import React, { useState, useContext, useEffect, useRef } from "react";
import axios from "axios";
import { CityContext } from "../../contexts/CityContext";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";

export const AutoComplete = props => {
  const { getData, data } = useContext(CityContext);

  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");

  const searchContainer = useRef(null);

  // SIDE EFFECTS
  // Create a dictionary to match filtered city names to images
  // useEffect(() => {
  //   console.log(data[0])
  //   const createDictionary = () => {
  //     const dict = {};

  //     data[0] &&
  //       data[0].map(c => {
  //         dict[c.location] = c.image;
  //       });

  //     return dict;
  //   };

  //   setDictonary(createDictionary());
  // }, [data]);

  useEffect(() => {
    let elem = document.getElementsByClassName("option-container");

    document.addEventListener("click", function(event) {
      if (elem[0] !== undefined) {
        let isClickInside = elem[0].contains(event.target);

        if (!isClickInside) {
          setDisplay(false);
          setSearch("");
        }
      }
    });
  }, [display]);

  const handleSearch = e => {
    setSearch(e);
    setDisplay(false);
  };

  return (
    <div className="search">
      <div className="search-box">
        <input
          className="search-input"
          onChange={e => {
            setDisplay(true);
            setSearch(e.target.value);
          }}
          type="text"
          placeholder="Type to search"
          value={search}
          ref={searchContainer}
        />
        <Link className="search-btn" to="#">
          <SearchOutlined />
        </Link>
      </div>
      {display && (
        <div className="option-container">
          {data[0]
            .filter(item => {
              return item.location.toLowerCase().indexOf(search) >= 0;
            })
            .slice(0, 3)
            .map((item, index) => {
              return (
                <div
                  className="option"
                  key={index}
                  onClick={() => {
                    console.log("clicking!");
                    getData(item.location, item.image);

                    handleSearch(item.location);
                  }}
                >
                  {item.location}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};
