import { TextFiller, HeroScroll, Circle, Marquee } from "./components/index";
import "./App.css";
import "./components/OngoingAnimations/OngoingAnimations.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <span className="">Scroll down</span>
      </div>

      <div className="textFillerSection_Wrapper">
        <TextFiller
          text="Releaf® is a plant-based,"
          animStart="80%"
          animEnd="10%"
        />
        <TextFiller text="recyclable plastic." animStart="85%" animEnd="15%" />
        <TextFiller
          text="Completely fossil-free."
          animStart="75%"
          animEnd="10%"
        />
      </div>

      <HeroScroll />

      <div className="ongoingAnimationContainer">
        <Circle />

        <div className="marquee_Wrapper">
          <div className="marqueeContainer">
            <Marquee xAxisRange={["0%", "-100%"]} />
            <Marquee xAxisRange={["0%", "-100%"]} />
          </div>
          <div className="marqueeContainer">
            <Marquee xAxisRange={["-100%", "0%"]} />
            <Marquee xAxisRange={["-100%", "0%"]} />
          </div>
        </div>
      </div>
      
      <div className="footer">
        <span className="">Scroll up</span>
      </div>
    </div>
  );
}

export default App;
