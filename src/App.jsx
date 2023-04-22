
import './App.css';
import TopBar from './top';
import BodyTop from './bodyTop';
import MovingBanner from './movingBanner';
import MovingProducts from './movingProducts';
import Features from './features';
import BottomDiv from './bottomDiv';


function App() {
  return (
    <div className="App">
    <TopBar />
    <BodyTop />
    <MovingBanner />
    <Features />
    <MovingProducts />
    <BottomDiv />
     
    </div>
  );
}

export default App;
