import "./ConsentForm.css";
const ConsentForm = () => {
  return (
    <div className="box">
      <h3>Enter Consent Details</h3>
      <form>
        <div className="item">
          <label htmlFor="customerId">Customer ID</label>
          <input type="text" id="customerId" />
        </div>
        <div className="item">
          <label htmlFor="uri">Redirect URI</label>
          <input type="text" id="uri" />
        </div>
        <div className="item">
          <label htmlFor="policyVersion">Policy Version</label>
          <input type="text" id="policyVersion" />
        </div>
        <div className="item">
          <label htmlFor="purpose">Purpose</label>
          <input type="text" id="purpose" />
        </div>
        <div className="item">
          <label htmlFor="scope">Scope</label>
          <input type="text" id="scope" />
        </div>

        <button id="submit">Request Consent</button>
      </form>
    </div>
  );
};

export default ConsentForm;
