import React from "react";

interface ButtonProps {
  className: string;
  onClick: () => void;
  name: string;
  imgSrc?: string;
  altText?: string;
  SvgComponent?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const Button: React.FC<ButtonProps> = ({
  className,
  onClick,
  name,
  imgSrc,
  altText,
  SvgComponent,
}) => {
  return (
    <button className={className} onClick={onClick}>
      {imgSrc ? (
        <img src={imgSrc} alt={altText} />
      ) : SvgComponent ? (
        <SvgComponent />
      ) : null}
      <span>{name}</span>
    </button>
  );
};

export default Button;
