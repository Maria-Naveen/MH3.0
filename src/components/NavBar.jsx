import "./NavBar.css";
const NavBar = () => {
  return (
    <div id="navbar">
      <ul className="navItems">
        <div>
          <img src="/logo.svg" alt="logo" />
        </div>
        <div>
          <img src="/home.svg" alt="home" />
          <li>Home</li>
        </div>
        <div>
          <img src="/appLogo.svg" alt="application" />
          <li>Applications</li>
        </div>
        <div>
          <img src="/analyLogo.svg" alt="analytics" />
          <li>Analytics</li>
        </div>
        <div>
          <img src="/workflow.svg" alt="workflows" />
          <li>Workflows</li>
        </div>

        <div>
          <img src="/devHub.svg" alt="DevHub" />
          <li>Dev Hub</li>
        </div>
        <div>
          <img src="/account.svg" alt="account" />
          <li>Account</li>
        </div>
        <div>
          <img src="/consent.svg" alt="consent" />
          <li>Consent Manager</li>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
