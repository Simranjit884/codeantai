import { useState } from "react";
import "./signIn.css";
import { Link, useNavigate } from "react-router-dom";
import AntIcon from "../../assets/Subtract.svg";

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
            <AntIcon />
            <h3>AI to Detect & Autofix Bad Code</h3>
            <div className="line"></div>
            <div className="stats">
              <div>
                30+
                <br />
                Language Support
              </div>
              <div>
                10K+
                <br />
                Developers
              </div>
              <div>
                100K+
                <br />
                Hours Saved
              </div>
            </div>
          </div>
          <div className="card card-secondary">
            <h3>Issues Fixed</h3>
            <h1>500K+</h1>
            <p>
              <span className="increase">↑ 14%</span> This week
            </p>
          </div>
        </div>
      </div>
      <div className="signin-right">
        <div className="auth-container">
          <div className="auth-heading">
            <div className="logo-heading">
              <div className="logo">
                <img src="src\assets\codeAntlogo.svg" alt="CodeAnt AI" />
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
