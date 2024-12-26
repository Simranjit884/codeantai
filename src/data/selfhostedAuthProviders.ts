import { AuthProvider } from "../types/types";

const selfHostedAuthProviders: AuthProvider[] = [
  {
    authName: "gitlab",
    text: "Self Hosted GitLab",
    imgSrc: "src/assets/gitlabIcon.svg",
    altText: "GitLab",
  },
  {
    authName: "bitbucket",
    text: "Sign in with SSO",
    imgSrc: "src/assets/keyIcon.svg",
    altText: "bitbucket",
  },
];

export default selfHostedAuthProviders;
