import { useState } from "react";
import "./signIn.css";
import { Link } from "react-router-dom";
import CodeAntLargeIcon from "../icons/CodeAntLargeIcon";
import IncreaseArrowIcon from "../icons/IncreaseArrowIcon";
import CodeAntSmallIcon from "../icons/CodeAntSmallIcon";
import CodeAntLogo from "../icons/CodeAntLogo";
import SaasAuth from "../Auth/SaasAuth";
import SelfHostedAuth from "../Auth/SelfHostedAuth";

const SignIn = () => {
  const [authType, setAuthType] = useState<"saas" | "self-hosted">("saas");

  return (
    <div className="signin-container">
      <div className="signin-left">
        <div className="card-layout">
          <div className="card card-primary">
            <div className="card-heading">
              <CodeAntSmallIcon />
              <h3>AI to Detect & Autofix Bad Code</h3>
            </div>
            <div className="line"></div>
            <div className="stats">
              <div>
                <span>30+</span>
                <span>Language Support</span>
              </div>
              <div>
                <span>10K+</span>
                <span>Developers</span>
              </div>
              <div>
                <span>100K+</span>
                <span>Hours Saved</span>
              </div>
            </div>
          </div>
          <div className="card card-secondary">
            <div>
              <div className="pie-chart-icon">
                <img src="/assets/ellipse_1.svg" alt="elliplse" />
                <img src="/assets/pie-chart.svg" alt="pie-chart" />
              </div>
              <div>
                <span className="increase">
                  <IncreaseArrowIcon />
                  <span>14%</span>
                </span>
                <span>This week</span>
              </div>
            </div>
            <div>
              <h3>Issues Fixed</h3>
              <h1>500K+</h1>
            </div>
          </div>
        </div>
        <div className="transparent-logo">
          <CodeAntLargeIcon />
        </div>
      </div>
      <div className="signin-right">
        <div className="auth-container">
          <div className="auth-heading">
            <div className="logo-heading">
              <div className="logo">
                <CodeAntLogo />
                <h1>CodeAnt AI</h1>
              </div>
              <h2>Welcome to CodeAnt AI</h2>
            </div>
            <div className="auth-type-toggle">
              <button
                className={`toggle-button ${
                  authType === "saas" ? "active" : ""
                }`}
                onClick={() => {
                  console.log("saas click");
                  setAuthType("saas");
                }}
              >
                SAAS
              </button>
              <button
                className={`toggle-button ${
                  authType === "self-hosted" ? "active" : ""
                }`}
                onClick={() => {
                  console.log("self-hosted click");
                  setAuthType("self-hosted");
                }}
              >
                Self Hosted
              </button>
            </div>
          </div>
          {authType === "saas" && <SaasAuth />}
          {authType === "self-hosted" && <SelfHostedAuth />}
        </div>
        <p className="privacy-notice">
          By signing up you agree to the{" "}
          <Link to="/privacy-policy">Privacy Policy.</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
