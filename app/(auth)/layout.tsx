import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border-b text-center">
      20% off for the next 5 days {children}
    </div>
  );
};

export default Layout;
