import React from "react";
import Footer from "../components/landing-page/footer";
import Nav from "../components/landing-page/nav";

function LandingLayout({ children }) {
  return (
    <div className="min-h-screen landing-page font-Euclid">
      <Nav />

      <main className="text-base ">{children}</main>

      <Footer />
    </div>
  );
}

export default LandingLayout;
