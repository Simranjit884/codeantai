import { AuthProvider } from "../types/types";

const selfHostedAuthProviders: AuthProvider[] = [
  {
    authName: "gitlab",
    text: "Self Hosted GitLab",
    imgSrc: "/assets/gitlabIcon.svg",
    altText: "GitLab",
  },
  {
    authName: "bitbucket",
    text: "Sign in with SSO",
    imgSrc: "/assets/keyIcon.svg",
    altText: "bitbucket",
  },
];

export default selfHostedAuthProviders;
