import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  return (
    <main className="container">
      <header className="header">JAN ANDREI G. TERESA - BSIT DA3A</header>

      <section className="content">
        <div className="content1">
          <div className="c1left">
            <div className="hero">Hero</div>
            <div className="sidebar">Sidebar</div>
          </div>

          <div className="c1right">
            <div className="main-content">
              <div className="title">Main Content</div>
              <p></p>
            </div>
            <div className="extra-content">Extra Content</div>
          </div>
        </div>

        <div className="content2">
          <div className="related-images">Related Images</div>
          <div className="related-posts">Related Posts</div>
        </div>
      </section>

      <footer className="footer">Footer</footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
