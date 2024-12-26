import selfHostedAuthProviders from "../../data/selfhostedAuthProviders";
import Button from "../UI/Button";

const SelfHostedAuth = () => {
  return (
    <div className="auth-buttons">
      {selfHostedAuthProviders.map((provider) => (
        <Button
          key={provider.authName}
          className={`auth-button ${provider.authName}`}
          onClick={() => {}}
          name={provider.text}
          imgSrc={provider.imgSrc}
          altText={provider.altText}
        />
      ))}
    </div>
  );
};

export default SelfHostedAuth;
