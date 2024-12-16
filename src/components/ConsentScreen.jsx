import "./ConsentScreen.css";
import { ConsentSDK } from "../utils/hypercmp.js";
import { useLocation } from "react-router-dom";

const ConsentScreen = () => {
  const location = useLocation();
  const { customerId, redirectURI, policyVersion, purpose, scope } =
    location.state;
  const handleConsent = async () => {
    const sdk = new ConsentSDK("/api/v1");
    try {
      const res = await sdk.requestConsent(
        customerId,
        undefined,
        redirectURI,
        policyVersion,
        "https://hyperverge.co/privacy-policy/",
        purpose,
        "100",
        scope
      );
      console.log(res.link);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="outerBox">
      <div className="headerBox">
        <img src="/consentLogo.svg" alt="logo" />
        <div>
          <p>JohnDoe@gmail.com</p>
          <p id="policyVersion">Policy Version</p>
        </div>
      </div>
      <div className="mainBox">
        <div className="main-item1">
          <p>The following details will be collected from you by ......</p>
          <div className="permissions">
            <div>
              <input type="radio" />
              <label htmlFor="">Facial Scan</label>
            </div>
            <div>
              <input type="radio" />
              <label htmlFor="">Location Access</label>
            </div>
          </div>
        </div>
        <div className="main-item2">
          <p>Purpose</p>
          <span>Fraud detection and compliance checks</span>
        </div>
      </div>
      <div className="footerBox">
        <p>
          By clicking Allow, you allow the app to use your information in
          accordance to their respective terms of serve and privacy policies.
        </p>
        <div className="consentArea">
          <button id="denyBtn">Deny</button>
          <button id="allowBtn" onClick={handleConsent}>
            Allow
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentScreen;
