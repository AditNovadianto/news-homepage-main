import Content from "./components/Content";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import News from "./components/News";

const App = () => {
  return (
    <div className="p-5 md:p-10 flex flex-col justify-center min-h-screen md:py-10 max-w-[1200px] m-auto">
      <Navbar />
      <div className="md:flex gap-5">
        <Home />
        <News />
      </div>
      <Content />
    </div>
  );
};

export default App;
