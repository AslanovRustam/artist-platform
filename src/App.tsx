import { Routes, Route } from "react-router";
// Pages
import Home from "./pages/Home/Home";
import SingleArtistPage from "./pages/singleArtist/SingleArtistPage";
// Layout
import Layout from "./components/Layout/Layout";
// Utils
import { ROUTES } from "./utils/constants";

function App() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<Layout />}>
        <Route index element={<Home />} />
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
