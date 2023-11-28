import { useMediaQuery } from "react-responsive";

export default function Main() {
  const isMobile = useMediaQuery({ maxWidth: 760 });

  return (
    <div className="main">
      {isMobile ? (
        <img
          className="hero_mobile_img"
          src="../images/image-hero-mobile.png"
          alt="hero img"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      ) : (
        <img
          className="hero_desktop_img"
          src="../images/image-hero-desktop.png"
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
          <img src="../images/client-databiz.svg" alt="client-databiz" />
          <img src="../images/client-audiophile.svg" alt="client-audiophile" />
          <img src="../images/client-meet.svg" alt="client-meet" />
          <img src="../images/client-maker.svg" alt="client-maker" />
        </div>
      </div>
    </div>
  );
}
