import { Routes, Route } from "react-router";
import { lazy } from "react";
// Pages
const Home = lazy(() => import("./pages/Home/Home"));
const SingleArtistPage = lazy(
  () => import("./pages/singleArtist/SingleArtistPage")
);
const ArtistPage = lazy(() => import("./pages/Artist/Artist"));
// Layout
import Layout from "./components/Layout/Layout";
// Utils
import { ROUTES } from "./utils/constants";

function App() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.artists} element={<ArtistPage />} />
        <Route
          path={`${ROUTES.artists}/:artistName`}
          element={<SingleArtistPage />}
        />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
