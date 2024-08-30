import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import AnimatedShapeComponent from "./effect/AnimatedShapeComponent";
import BouncingBall from "./effect/BouncingBall";
import BouncingBalls from "./effect/BouncingBalls";
import BubbleComponent from "./effect/BubbleComponet";
import CssDoodleComponent from "./effect/CssDoodleComponent";
import CubeWaveComponent from "./effect/CubeWaveComponent";
import EyesAnimation from "./effect/EyesAnimation";
import FloatingLabelInput from "./effect/FloatingLabelInput";
import InfinityAnimation from "./effect/InfinityAnimation";
import LoaderComponent from "./effect/LoaderComponent";
import Loading1Animation from "./effect/Loading1Animation";
import Loading2Component from "./effect/Loading2Component";
import LoadingAnimation from "./effect/LoadingAnimation";
import RadioGroup from "./effect/RadioGroup";
import RainComponent from "./effect/RainComponent";
import WaveformComponent from "./effect/WaveformComponent";
import StarburstComponent from "./effect/StartburstComponent";
import ShoppingCart from "./effect/ShoppingCart";
import RotatingCloverComponent from "./effect/RotatingCloverComponent";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import PeekLoading from "./effect/PeekLoading";

const AppContainer = styled.div`
  display: flex;
  height: "100%";
`;

const MainContent = styled.div`
  flex-grow: 1;
  padding: 20px;
  background-color: #17181c;
`;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContainer>
          <Sidebar />
          <MainContent>
            <Routes>
              <Route
                path="/animated-shape"
                element={<AnimatedShapeComponent />}
              />
              <Route path="/bouncing-ball" element={<BouncingBall />} />
              <Route path="/bouncing-balls" element={<BouncingBalls />} />
              <Route path="/bubble" element={<BubbleComponent />} />
              <Route path="/css-doodle" element={<CssDoodleComponent />} />
              <Route path="/cube-wave" element={<CubeWaveComponent />} />
              <Route path="/eyes-animation" element={<EyesAnimation />} />
              <Route path="/floating-label" element={<FloatingLabelInput />} />
              <Route
                path="/infinity-animation"
                element={<InfinityAnimation />}
              />
              <Route path="/loader" element={<LoaderComponent />} />
              <Route
                path="/loading1-animation"
                element={<Loading1Animation />}
              />
              <Route
                path="/loading2-animation"
                element={<Loading2Component />}
              />
              <Route path="/loading-animation" element={<LoadingAnimation />} />
              <Route path="/peek-loading" element={<PeekLoading />} />
              <Route path="/radio-group" element={<RadioGroup />} />
              <Route path="/rain" element={<RainComponent />} />
              <Route
                path="/rotating-clover"
                element={<RotatingCloverComponent />}
              />
              <Route path="/shopping-cart" element={<ShoppingCart />} />
              <Route path="/starburst" element={<StarburstComponent />} />
              <Route path="/waveform" element={<WaveformComponent />} />
            </Routes>
          </MainContent>
        </AppContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
