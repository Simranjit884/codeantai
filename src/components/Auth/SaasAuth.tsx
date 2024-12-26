import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import "../SignIn/signIn.css";
import "./saasAuth.css";
import authProviders from "../../data/authProviders";

const SaasAuth = () => {
  const navigate = useNavigate();

  const handleAuth = (provider: string) => {
    console.log(provider);
    navigate("/repositories");
  };

  return (
    <div className="auth-buttons">
      {authProviders.map((provider) => (
        <Button
          key={provider.authName}
          className={`auth-button ${provider.authName}`}
          onClick={() => handleAuth(provider.authName)}
          name={provider.text}
          imgSrc={provider.imgSrc}
          altText={provider.altText}
        />
      ))}
    </div>
  );
};

export default SaasAuth;
