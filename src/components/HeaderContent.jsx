import "./HeaderContent.css";

function HeaderContent() {
  return (
    <>
      <section className="hero">
        <div className="content">
          <h1>Make remote work</h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <div className="center">
            <button>Learn more</button>
          </div>
          <div className="our-client">
            <img src="./images/client-databiz.svg" alt="databiz logo company" />
            <img src="./images/client-audiophile.svg" alt="audipphile logo company"/>
            <img src="./images/client-meet.svg" alt="meet logo company" />
            <img src="./images/client-maker.svg" alt="maker logo company" />
          </div>
        </div>
        <picture>
          <source media="(max-width: 750px )" srcSet="./images/image-hero-mobile.png" />
          <img className="content-img" src="./images/image-hero-desktop.png" alt="hero" />
        </picture>
      </section>
    </>
  );
}

export default HeaderContent;
