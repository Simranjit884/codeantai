import { useState } from "react";
import "./repositories.css";
import CodeAntSmallIcon from "../icons/CodeAntSmallIcon";
import RefreshIcon from "../icons/RefreshIcon";
import PlusIcon from "../icons/PlusIcon";
import SearchIcon from "../icons/SearchIcon";
import EcllipseSmallIcon from "../icons/EcllipseSmallIcon";
import DatabaseIcon from "../icons/DatabaseIcon";
import MobileNavigationIcon from "../icons/MobileNavigationIcon";
import CrossIcon from "../icons/CrossIcon";
import FooterItems from "./FooterItems";
import MenuItems from "./MenuItems";
import SearchInput from "../UI/SearchInput";
import UserSelect from "../UI/Select";
import useRepositories from "../../hooks/useRepositories";
import { Link } from "react-router-dom";

const Repositories = ({ userName = "Simranjit884" }) => {
  const { repositories, getInDays } = useRepositories(userName);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState("simranjitsingh");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          <UserSelect
            selectedOption={selectedOption}
            onChange={setSelectedOption}
          />
          <nav className="mobile-nav">
            <MenuItems mobileNav={true} />
            <FooterItems />
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

          <UserSelect
            selectedOption={selectedOption}
            onChange={setSelectedOption}
          />
        </div>

        <div className="sidebar-menu">
          <MenuItems mobileNav={false} />
        </div>
        <div className="sidebar-footer">
          <FooterItems />
        </div>
      </nav>

      <main className="main-content-container">
        <div className="main-content">
          <header className="content-header-container">
            <div className="content-header">
              <div className="content-title">
                <h1>Repositories</h1>
                <span>{repositories?.length || 0} total repositories</span>
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
              <SearchInput
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
            {repositories?.map((repo) => (
              <Link
                to={repo.htmlUrl}
                target="_blank"
                className="repository-list-link"
                key={repo.id}
              >
                <div key={repo.id} className="repository-item">
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
                      <DatabaseIcon /> {repo.size} KB
                    </span>
                    <span>Updated {getInDays(repo.updated)} days ago</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Repositories;
