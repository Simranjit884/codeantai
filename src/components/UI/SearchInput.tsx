import React from "react";

interface SearchInputProps {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div className="custom-input-container">
      <input
        type="search"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="custom-input"
      />
    </div>
  );
};

export default SearchInput;
