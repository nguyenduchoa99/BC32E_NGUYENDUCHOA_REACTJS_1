import Body from "./components/BaiTapThucHanhLayout/Body";
import Footer from "./components/BaiTapThucHanhLayout/Footer";
import Header from "./components/BaiTapThucHanhLayout/Header";


function App() {
  return (
    <div>
      <div className="bg-dark">
        <div className="container" style={{maxWidth:'1250px'}}>
          <Header />
        </div>
      </div>
      <div className="container" style={{maxWidth:'1320px'}}>
        <Body />
      </div>
      <div className="py-5 bg-dark">
        <Footer />
      </div>
    </div>
  );
}

export default App;
