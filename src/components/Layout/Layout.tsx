import { Outlet } from "react-router";
import { Suspense } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

type Props = {};

function Layout({}: Props) {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <Footer />
    </>
  );
}

export default Layout;
