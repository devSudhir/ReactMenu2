import { SendHeadings } from "./components/Heading";
import { ListItems } from "./components/List";
import "./App.css";

function App() {
  let arr = ["Mobile Operating System", "Mobile Manufacturers"];
  let list1 = ["Android", "Blackberry", "iPhone", "Windows Phone"];
  let list2 = ["Samsung", "HTC", "Micromax", "Apple"];
  return (
    <div className="centerDiv">
      <SendHeadings heading={arr[0]} />
      <ul>
        {list1.map((ele) => {
          return <ListItems listItem={ele} />;
        })}
      </ul>
      <SendHeadings heading={arr[0]} />
      <ul className="random">
        {list2.map((ele) => {
          return <ListItems listItem={ele} />;
        })}
      </ul>
    </div>
  );
}

export default App;
