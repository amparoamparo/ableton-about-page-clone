import Head from "next/head";
import Header from "./header";
import SecondNav from "./second-nav";
import Footer from "./footer";

const Layout = ({ children, home }) => {
  return (
    <div>
      <Head>
        <title>Ableton - About us</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
