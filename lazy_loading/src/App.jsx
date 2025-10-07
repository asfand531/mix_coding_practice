import { lazy, Suspense, useState } from "react";
import "./App.css";

const pages = {
  profile: lazy(() => import("./Profile")),
  setting: lazy(() => import("./Setting")),
};

function App() {
  const [page, setPage] = useState("");

  const PageComponent = pages[page];

  return (
    <div>
      <button onClick={() => setPage("profile")}>Profile</button>
      <button onClick={() => setPage("setting")}>Setting</button>
      <button onClick={() => setPage("")}>Home</button>

      <div style={{ marginTop: "1rem" }}>
        {PageComponent ? (
          <Suspense
            fallback={`${
              page ? page.charAt(0).toUpperCase() + page.slice(1) : "Home"
            } Loading...`}
          >
            <PageComponent />
          </Suspense>
        ) : (
          <h2>Welcome to home page</h2>
        )}
      </div>
    </div>
  );
}

export default App;
