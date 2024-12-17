import "./Validate.css";
const Validate = () => {
  return (
    <div className="validationBox">
      <div className="tokenInput">
        <label htmlFor="token">Token</label>
        <input type="text" />
      </div>
      <button id="validateBtn">Validate token</button>
    </div>
  );
};

export default Validate;
