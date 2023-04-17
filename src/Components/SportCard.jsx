import { useContext, useEffect } from "react";
import { getSport } from "../Context2/SportActions";
import SportNews from "./SportNews";
import SportContext, { SportProvider } from "../Context2/SportContext";
import SportCarousel from "./SportCarousel";
const SportCard = () => {
  const { sports, dispatch } = useContext(SportContext);

  const getSportData = async () => {
    const data = await getSport();
    dispatch({
      type: "SPORT_NEWS",
      payload: data,
    });
  };
  useEffect(() => {
    getSportData();
  }, []);

  if (!sports || sports.length == 0) {
    return (
      <div className="svg-secti">
        <div
          aria-label="Orange and tan hamster running in a metal wheel"
          role="img"
          className="wheel-and-hamster"
        >
          <div className="wheel"></div>
          <div className="hamster">
            <div className="hamster__body">
              <div className="hamster__head">
                <div className="hamster__ear"></div>
                <div className="hamster__eye"></div>
                <div className="hamster__nose"></div>
              </div>
              <div className="hamster__limb hamster__limb--fr"></div>
              <div className="hamster__limb hamster__limb--fl"></div>
              <div className="hamster__limb hamster__limb--br"></div>
              <div className="hamster__limb hamster__limb--bl"></div>
              <div className="hamster__tail"></div>
            </div>
          </div>
          <div className="spoke"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bak-section">
        <SportCarousel />
      </div>
      <div className="row g-2 p-4 ">
        {sports.map((sports, index) => (
          <SportNews key={index} sports={sports} />
        ))}
      </div> 
    </>
  );
};

export default SportCard;
