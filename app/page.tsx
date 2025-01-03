import Banner from "../components/common/Banner";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import NavHeader from "../components/common/NavHeader";

import Services from "../components/common/Service";


export default function Home() {
  return (
    <div className="">
      {/* <Header/> */}
      <NavHeader />
      <Banner/>
      <div>
      <Services/>
      </div>
      <Footer/>
    </div>
  );
}

