export interface AuthProvider {
  authName: string;
  text: string;
  imgSrc: string;
  altText: string;
}

export interface Repository {
  id: number;
  name: string;
  isPrivate: boolean;
  language: string;
  size: number;
  htmlUrl: string;
  updated: string;
}

export interface ApiRepository {
  id: number;
  name: string;
  private: boolean;
  language: string;
  size: number;
  html_url: string;
  updated_at: string;
}
