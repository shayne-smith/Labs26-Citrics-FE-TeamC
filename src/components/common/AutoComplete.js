import React, { useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { CityContext } from "../../contexts/CityContext";

export const AutoComplete = props => {
  const { changeText, result } = useContext(CityContext);

  return (
    <div className="search">
      <div className="search-box">
        <input
          className="search-input"
          onChange={changeText}
          type="text"
          placeholder="Type to search"
        />
        <Link className="search-btn" to="#">
          <SearchOutlined />
        </Link>
      </div>
      {result.length !== 0 && (
        <div className="grid">
          {result.map((item, index) => {
            return (
              <div
                className="result"
                key={index}
                onClick={() => {
                  props.getData(item);
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
