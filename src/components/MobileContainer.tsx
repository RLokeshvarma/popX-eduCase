import React from "react";
import type { ReactNode } from "react";
import "../styles/layout.css";

interface Props {
  children: ReactNode;
}

const MobileContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="mobile-wrapper">
      <div className="mobile-container">
        {children}
      </div>
    </div>
  );
};

export default MobileContainer;