import "./SecondaryNavBar.css";
const SecondaryNavBar = () => {
  return (
    <div className="container">
      <p id="consent-header">Consent Manager</p>
      <div className="items">
        <img src="/demo.svg" alt="demo" />
        <span>Demo</span>
      </div>
      <div className="items">
        <img src="/configuration.svg" alt="configurations" />
        <div>Configurations</div>
      </div>
      <div className="items">
        <img src="/search.svg" alt="Search" />
        <div>Search</div>
      </div>
    </div>
  );
};

export default SecondaryNavBar;
