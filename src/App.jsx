import { TextFiller, HeroScroll, Circle, Marquee } from "./components/index";

function App() {
  return (
    <>
      <div className="">
        <div className="flex h-48 items-center justify-center bg-neutral-800">
          <span className="font-semibold uppercase text-neutral-500">
            Scroll down
          </span>
        </div>

        <section className="bg-[#FFFEFC] p-48 leading-5.5 h-[150vh] flex flex-col flex-wrap justify-center items-start">
          <TextFiller
            text="Releaf® is a plant-based,"
            animStart="80%"
            animEnd="10%"
          />
          <TextFiller
            text="recyclable plastic."
            animStart="85%"
            animEnd="15%"
          />
          <TextFiller
            text="Completely fossil-free."
            animStart="75%"
            animEnd="10%"
          />
        </section>
        <div className="py-48 flex justify-around">
          <Circle />

          <div className="overflow-hidden whitespace-nowrap bg-[url(https://www.datocms-assets.com/135926/1728491836-releaf_product-shot_wheat_final-2.jpg?auto=format&crop=focalpoint&fit=crop&w=576)] bg-no-repeat bg-center text-white p-4 size-96 rounded-2xl flex flex-col justify-between">
            <div className="flex justify-around gap-4">
              <Marquee xAxisRange={["0%", "-100%"]} />
              <Marquee xAxisRange={["0%", "-100%"]} />
            </div>
            <div className="flex justify-around gap-4">
              <Marquee xAxisRange={["-100%", "0%"]} />
              <Marquee xAxisRange={["-100%", "0%"]} />
            </div>
          </div>
        </div>
        <HeroScroll />

        <div className="flex h-48 items-center justify-center bg-neutral-800">
          <span className="font-semibold uppercase text-neutral-500">
            Scroll up
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
