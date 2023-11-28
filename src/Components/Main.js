import { useMediaQuery } from "react-responsive";
import heroMobile from "../images/image-hero-mobile.png";
import heroDesktop from "../images/image-hero-desktop.png";
import databiz from "../images/client-databiz.svg";
import audiophile from "../images/client-audiophile.svg";
import maker from "../images/client-maker.svg";
import meet from "../images/client-meet.svg";

export default function Main() {
  const isMobile = useMediaQuery({ maxWidth: 760 });

  return (
    <div className="main">
      {isMobile ? (
        <img
          className="hero_mobile_img"
          src={heroMobile}
          alt="hero img"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      ) : (
        <img
          className="hero_desktop_img"
          src={heroDesktop}
          alt="hero img"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      )}
      <div className="content">
        <h1 className="main_header">Make remote work</h1>
        <p className="main_parag">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="learnBtn">Learn more</button>
        <div className="clients">
          <img src={databiz} alt="client-databiz" />
          <img src={audiophile} alt="client-audiophile" />
          <img src={meet} alt="client-meet" />
          <img src={maker} alt="client-maker" />
        </div>
      </div>
    </div>
  );
}
