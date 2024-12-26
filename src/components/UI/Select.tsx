import React from "react";

interface UserSelectProps {
  selectedOption: string;
  onChange: (value: string) => void;
}

const UserSelect: React.FC<UserSelectProps> = ({
  selectedOption,
  onChange,
}) => {
  return (
    <select value={selectedOption} onChange={(e) => onChange(e.target.value)}>
      <option value="simranjitsingh">simranjitsingh</option>
      {/* Add more options here if needed */}
    </select>
  );
};

export default UserSelect;
