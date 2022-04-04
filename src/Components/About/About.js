import headshot from "./../../assets/Headshot-dark.JPG";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-box">
        <h1>About Wishlist</h1>
      </div>
      <div className="about-text">
        <p>
          <span>
            Wishlist is an online shopping app to help you plan your purchases.
          </span>{" "}
          <br /> <br />
          So much better than having a million tabs open and carts filled with
          items you can’t remember at 20 different stores. Put all of your ideal
          items in one place to better plan and save up for your dream wardrobe!
          This app will also help with budgeting and making sure you are making
          the best purchase at the best price.
        </p>
      </div>
      <div className="intro">
        <img
          className="headshot"
          src={headshot}
          alt="headshot-lauren-colvin"
        ></img>
        <div className="intro-text">
          <p>
            <span>
              Meet Lauren Colvin, the engineer and designer behind{" "}
              <h5 className="logo">wishlist</h5>
            </span>{" "}
            <br />
            Thanks for stopping by! I created Wishlist to help shoppers make
            smarter purchasing decisions and budget for their dream wardrobe. I
            wanted my site to be visually appealing with bright colors and an
            intuitive user experience. I built this Fullstack website with a
            React front-end and MongoDb back-end. Click around and let me know
            what you think!
          </p>
          <div className="link-buttons">
            <a
              href="https://www.linkedin.com/in/laurenleighcolvin/"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/LaurenColvin/wishlist-client"
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
