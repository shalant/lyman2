import ImageOne from "./components/ImageOne";
import ImageTwo from "./components/ImageTwo";
import ImageThree from "./components/ImageThree";
import TextBox from "./components/TextBox";
import TextBox2 from "./components/TextBox2";
import Counter from "./components/Counter";
import TextBoxCounter from "./components/TextBoxCounter";
import Footer from "./components/Footer";
import TextBox3 from "./components/TextBox3";

function App() {
  return (
    <div>
      <ImageOne />
      <TextBox />
      <TextBox2 />
      <ImageTwo />
      <ImageThree />
      <TextBox3 />
      {/* <Counter label="Automobile Deaths Year-to-date" number="38000" duration="1000"/> */}
      {/* <TextBoxCounter /> */}
      <Footer />
    </div>
  );
}

export default App;
