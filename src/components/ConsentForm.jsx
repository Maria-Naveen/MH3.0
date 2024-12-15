import "./ConsentForm.css";
import { useState } from "react";
import { ConsentSDK } from "../utils/hypercmp.js";
const ConsentForm = () => {
  const [customerId, setCustomerId] = useState("");
  const [redirectURI, setRedirectURI] = useState("");
  const [policyVersion, setPolicyVersion] = useState("");
  const [purpose, setPurpose] = useState("");
  const [scope, setScope] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      `${customerId}  ${redirectURI} ${policyVersion} ${purpose} ${scope}`
    );
    const sdk = new ConsentSDK("/api/v1");
    try {
      const res = await sdk.requestConsent(
        customerId,
        1,
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
    <div className="box">
      <h3>Enter Consent Details</h3>
      <form onSubmit={handleSubmit}>
        <div className="item">
          <label htmlFor="customerId">Customer ID</label>
          <input
            type="text"
            id="customerId"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
          />
        </div>
        <div className="item">
          <label htmlFor="uri">Redirect URI</label>
          <input
            type="text"
            id="uri"
            value={redirectURI}
            onChange={(e) => setRedirectURI(e.target.value)}
          />
        </div>
        <div className="item">
          <label htmlFor="policyVersion">Policy Version</label>
          <input
            type="text"
            id="policyVersion"
            value={policyVersion}
            onChange={(e) => setPolicyVersion(e.target.value)}
          />
        </div>
        <div className="item">
          <label htmlFor="purpose">Purpose</label>
          <input
            type="text"
            id="purpose"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
          />
        </div>
        <div className="item">
          <label htmlFor="scope">Scope</label>
          <input
            type="text"
            id="scope"
            value={scope}
            onChange={(e) => setScope(e.target.value)}
          />
        </div>

        <button id="submit">Request Consent</button>
      </form>
    </div>
  );
};

export default ConsentForm;
