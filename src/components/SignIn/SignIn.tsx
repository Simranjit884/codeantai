import { useState } from "react";
import "./signIn.css";
import { Link, useNavigate } from "react-router-dom";
import CodeAntLargeIcon from "../icons/CodeAntLargeIcon";
import IncreaseArrowIcon from "../icons/IncreaseArrowIcon";
import CodeAntSmallIcon from "../icons/CodeAntSmallIcon";
import CodeAntLogo from "../icons/CodeAntLogo";

const SignIn = () => {
  const [authType, setAuthType] = useState<"saas" | "self-hosted">("saas");
  const navigate = useNavigate();

  const handleAuth = (provider: string) => {
    console.log(provider);
    navigate("/repositories");
  };

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
                <img src="src\assets\ellipse_1.svg" alt="elliplse" />
                <img src="src\assets\pie-chart.svg" alt="pie-chart" />
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
          <div className="auth-buttons">
            <button
              className="auth-button github"
              onClick={() => handleAuth("github")}
            >
              <img src="src\assets\githubIcon.svg" alt="GitHub" />
              <span>Sign in with Github</span>
            </button>
            <button
              className="auth-button bitbucket"
              onClick={() => handleAuth("bitbucket")}
            >
              <img src="src\assets\bitbucketIcon.svg" alt="Bitbucket" />
              <span>Sign in with Bitbucket</span>
            </button>
            <button
              className="auth-button azure"
              onClick={() => handleAuth("azure")}
            >
              <img src="src\assets\azureIcon.svg" alt="Azure DevOps" />
              <span>Sign in with Azure Devops</span>
            </button>
            <button
              className="auth-button gitlab"
              onClick={() => handleAuth("gitlab")}
            >
              <img src="src\assets\gitlabIcon.svg" alt="GitLab" />
              <span>Sign in with GitLab</span>
            </button>
          </div>
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
