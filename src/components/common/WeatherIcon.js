import React, { useEffect, useState } from "react";
import { ReactComponent as SunAndCloud } from "../../assets/weather-sunshine.svg";

const WeatherIcon = props => {
  const { feelsLike } = props;
  const [isCold, setIsCold] = useState(false);
  const [isModerate, setIsModerate] = useState(false);
  const [isHot, setIsHot] = useState(false);

  const temp = feelsLike("summer");

  useEffect(() => {
    calculateTemp();
  }, []);

  const calculateTemp = () => {
    if (temp < 60) {
      setIsCold(true);
    } else if (60 <= temp && temp <= 80) {
      setIsModerate(true);
    } else if (80 < temp) {
      setIsHot(true);
    }
  };

  return (
    <span className="temperature">
      {isCold && <span>❄️</span>}
      {isModerate && (
        <span>
          <SunAndCloud />
        </span>
      )}
      {isHot && <span>☀️</span>}
      <span className="temp-text">{`${temp}° F`}</span>
    </span>
  );
};

export default WeatherIcon;
