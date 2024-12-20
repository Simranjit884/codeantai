import Button from "../UI/Button";

const SelfHostedAuth = () => {
  return (
    <div className="auth-buttons">
      <Button
        className="auth-button github"
        onClick={() => {}}
        name="Self Hosted GitLab"
        imgSrc="src/assets/gitlabIcon.svg"
        altText="GitHub"
      />
      <Button
        className="auth-button bitbucket"
        onClick={() => {}}
        name="Sign in with SSO"
        imgSrc="src/assets/keyIcon.svg"
        altText="Bitbucket"
      />
    </div>
  );
};

export default SelfHostedAuth;
