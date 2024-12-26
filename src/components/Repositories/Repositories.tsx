import { useState } from "react";
import "./repositories.css";
import CodeAntSmallIcon from "../icons/CodeAntSmallIcon";
import PhoneIcon from "../icons/PhoneIcon";
import LogoutIcon from "../icons/LogoutIcon";
import CodeIcon from "../icons/CodeIcon";
import CloudIcon from "../icons/CloudIcon";
import BookIcon from "../icons/BookIcon";
import SettingsIcon from "../icons/SettingsIcon";
import HomeIcon from "../icons/HomeIcon";
import RefreshIcon from "../icons/RefreshIcon";
import PlusIcon from "../icons/PlusIcon";
import SearchIcon from "../icons/SearchIcon";
import EcllipseSmallIcon from "../icons/EcllipseSmallIcon";
import DatabaseIcon from "../icons/DatabaseIcon";
import MobileNavigationIcon from "../icons/MobileNavigationIcon";
import HomeIconBlack from "../icons/HomeIconBlack";
import CrossIcon from "../icons/CrossIcon";

interface Repository {
  name: string;
  language: string;
  size: string;
  updated: string;
  isPrivate: boolean;
}

const Repositories = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState("simranjitsingh");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const repositories: Repository[] = [
    {
      name: "design-system",
      language: "React",
      size: "7320 KB",
      updated: "1 day ago",
      isPrivate: false,
    },
    {
      name: "codeant-ai-app",
      language: "JavaScript",
      size: "5671 KB",
      updated: "2 days ago",
      isPrivate: true,
    },
    {
      name: "analytics-dashboard",
      language: "Python",
      size: "4521 KB",
      updated: "5 days ago",
      isPrivate: true,
    },
    {
      name: "mobile-app",
      language: "Swift",
      size: "3098 KB",
      updated: "3 days ago",
      isPrivate: false,
    },
    {
      name: "e-commerce-platform",
      language: "Java",
      size: "6210 KB",
      updated: "6 days ago",
      isPrivate: true,
    },
    {
      name: "blog-website",
      language: "HTML/CSS",
      size: "1876 KB",
      updated: "4 days ago",
      isPrivate: false,
    },
    {
      name: "social-network",
      language: "PHP",
      size: "5432 KB",
      updated: "7 days ago",
      isPrivate: true,
    },
  ];

  return (
    <div className="repo-container">
      {/*Mobile navigation */}
      <div className="mobile-header">
        <div className="mobile-header-content">
          <div className="mobile-logo">
            <CodeAntSmallIcon />
            <span>CodeAnt AI</span>
          </div>
          <button
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <MobileNavigationIcon />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <div className="mobile-logo">
            <CodeAntSmallIcon />
            <span>CodeAnt AI</span>
          </div>
          <button
            className="close-menu-button"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <CrossIcon />
          </button>
        </div>
        <div className="mobile-menu-content">
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="simranjitsingh">simranjitsingh</option>
            {/* Add more options here if needed */}
          </select>
          {/* */}
          {/* <nav className="mobile-nav">
            <a href="#" className="menu-item active">
              <img src="/placeholder.svg?height=20&width=20" alt="" />
              Repositories
            </a>
            <a href="#" className="menu-item">
              <img src="/placeholder.svg?height=20&width=20" alt="" />
              AI Code Review
            </a>
            <a href="#" className="menu-item">
              <img src="/placeholder.svg?height=20&width=20" alt="" />
              Cloud Security
            </a>
            <a href="#" className="menu-item">
              <img src="/placeholder.svg?height=20&width=20" alt="" />
              How to Use
            </a>
            <a href="#" className="menu-item">
              <img src="/placeholder.svg?height=20&width=20" alt="" />
              Settings
            </a>
            <a href="#" className="menu-item">
              <img src="/placeholder.svg?height=20&width=20" alt="" />
              Support
            </a>
            <a href="#" className="menu-item">
              <img src="/placeholder.svg?height=20&width=20" alt="" />
              Logout
            </a>
          </nav> */}

          <nav className="mobile-nav">
            <a href="#" className="menu-item">
              <HomeIconBlack />
              <span>Repositories</span>
            </a>
            <a href="#" className="menu-item">
              <CodeIcon />
              <span>AI Code Review</span>
            </a>
            <a href="#" className="menu-item">
              <CloudIcon />
              <span>Cloud Security</span>
            </a>
            <a href="#" className="menu-item">
              <BookIcon />
              <span>How to Use</span>
            </a>
            <a href="#" className="menu-item">
              <SettingsIcon />
              <span>Settings</span>
            </a>
            <a href="#" className="sidebar-footer-item">
              <PhoneIcon />
              <span>Support</span>
            </a>
            <a href="#" className="sidebar-footer-item">
              <LogoutIcon />
              <span>Logout</span>
            </a>
          </nav>
        </div>
      </div>

      {/* Desktop */}
      <nav className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-title">
            <CodeAntSmallIcon />
            <span>CodeAnt AI</span>
          </div>
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="simranjitsingh">simranjitsingh</option>
            {/* Add more options here if needed */}
          </select>
        </div>

        <div className="sidebar-menu">
          <a href="#" className="menu-item active">
            <HomeIcon />
            <span>Repositories</span>
          </a>
          <a href="#" className="menu-item">
            <CodeIcon />
            <span>AI Code Review</span>
          </a>
          <a href="#" className="menu-item">
            <CloudIcon />
            <span>Cloud Security</span>
          </a>
          <a href="#" className="menu-item">
            <BookIcon />
            <span>How to Use</span>
          </a>
          <a href="#" className="menu-item">
            <SettingsIcon />
            <span>Settings</span>
          </a>
        </div>
        <div className="sidebar-footer">
          <a href="#" className="sidebar-footer-item">
            <PhoneIcon />
            <span>Support</span>
          </a>
          <a href="#" className="sidebar-footer-item">
            <LogoutIcon />
            <span>Logout</span>
          </a>
        </div>
      </nav>

      <main className="main-content-container">
        <div className="main-content">
          <header className="content-header-container">
            <div className="content-header">
              <div className="content-title">
                <h1>Repositories</h1>
                <span>{repositories.length} total repositories</span>
              </div>
              <div className="header-actions">
                <button className="refresh-all-button">
                  <RefreshIcon /> <span>Refresh All</span>
                </button>
                <button className="add-repo-button">
                  <PlusIcon /> <span>Add Repository</span>
                </button>
              </div>
            </div>
            <div className="search-container">
              <SearchIcon />
              <input
                type="search"
                placeholder="Search Repositories"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </header>
          <div className="repository-divider" />
          <div
            className={`repository-list ${
              isMobileMenuOpen ? "dimmed-background" : ""
            }`}
          >
            {repositories.map((repo) => (
              <div key={repo.name} className="repository-item">
                <div className="repo-info">
                  <h3>{repo.name}</h3>
                  <span className="visibility-badge">
                    {repo.isPrivate ? "Private" : "Public"}
                  </span>
                </div>
                <div className="repo-meta">
                  <span>
                    {repo.language}
                    <EcllipseSmallIcon />
                  </span>
                  <span>
                    <DatabaseIcon /> {repo.size}
                  </span>
                  <span>Updated {repo.updated}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Repositories;
