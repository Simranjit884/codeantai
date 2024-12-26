import { AuthProvider } from "../types/types";

const authProviders: AuthProvider[] = [
  {
    authName: "github",
    text: "Sign in with Github",
    imgSrc: "/assets/githubIcon.svg",
    altText: "GitHub",
  },
  {
    authName: "bitbucket",
    text: "Sign in with Bitbucket",
    imgSrc: "/assets/bitbucketIcon.svg",
    altText: "Bitbucket",
  },
  {
    authName: "azure",
    text: "Sign in with Azure Devops",
    imgSrc: "/assets/azureIcon.svg",
    altText: "Azure DevOps",
  },
  {
    authName: "gitlab",
    text: "Sign in with GitLab",
    imgSrc: "/assets/gitlabIcon.svg",
    altText: "GitLab",
  },
];

export default authProviders;
