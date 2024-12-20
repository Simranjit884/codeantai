import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import "../SignIn/signIn.css";
import "./saasAuth.css";

const SaasAuth = () => {
  const navigate = useNavigate();

  const handleAuth = (provider: string) => {
    console.log(provider);
    navigate("/repositories");
  };

  return (
    <div className="auth-buttons">
      <Button
        className="auth-button github"
        onClick={() => handleAuth("github")}
        name="Sign in with Github"
        imgSrc="src/assets/githubIcon.svg"
        altText="GitHub"
      />
      <Button
        className="auth-button bitbucket"
        onClick={() => handleAuth("bitbucket")}
        name="Sign in with Bitbucket"
        imgSrc="src/assets/bitbucketIcon.svg"
        altText="Bitbucket"
      />
      <Button
        className="auth-button azure"
        onClick={() => handleAuth("azure")}
        name="Sign in with Azure Devops"
        imgSrc="src/assets/azureIcon.svg"
        altText="Azure DevOps"
      />
      <Button
        className="auth-button gitlab"
        onClick={() => handleAuth("gitlab")}
        name="Sign in with GitLab"
        imgSrc="src/assets/gitlabIcon.svg"
        altText="GitLab"
      />
    </div>
  );
};

export default SaasAuth;
