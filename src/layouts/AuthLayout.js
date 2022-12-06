import React from "react";

function AuthLayout({ children }) {
  return (
    <div className="auth_page">
      <>
        <nav className="py-[1.5rem] border">
          <div className="constraint"></div>
        </nav>

        <main className="px-4 py-20 sm:py-[5.19rem] flex justify-center">
          {children}
        </main>
      </>
    </div>
  );
}

export default AuthLayout;
