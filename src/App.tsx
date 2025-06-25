import { Routes, Route } from "react-router";
import Layout from "./components/Layout/Layout";
import { ROUTES } from "./utils/constants";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
