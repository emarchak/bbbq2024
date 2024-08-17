import Snowfall from "react-snowfall";
import strawberryImg from "./assets/strawberry.png";
import blueberriesImg from "./assets/blueberries.png";

import "./App.css";
import Form from "./Form";

const eventTime = import.meta.env.VITE_EVENT_TIME;
const eventLocation = import.meta.env.VITE_EVENT_LOCATION;

const blueberry = document.createElement("img");
blueberry.src = strawberryImg;

const strawberry = document.createElement("img");
strawberry.src = blueberriesImg;

const berries = [blueberry, strawberry];

export default function App() {
  return (
    <>
      <Snowfall
        images={berries}
        snowflakeCount={30}
        wind={[-0.1, 0.1]}
        speed={[0.5, 1.0]}
        radius={[50, 75]}
        style={{ zIndex: -1 }}
      />
      <div className="h-screen flex items-center py-6">
        <main className="container mx-auto bg-white drop-shadow-sm rounded-md p-6 max-w-screen-sm font-mono text-gray-700">
          <h1 className="pb-6">Barry-BBQ 2024</h1>
          <p className="pb-6">
            You are lovingly invited to our first annual <em>Barry BBQ</em> to
            celebrate our beautiful baby boy and welcome you to our new home!
          </p>
          <p className="pb-6">
            We'll have our usual BBQ goodies available, with both veggie and
            meat options. We only ask that you show up with your lovely selves,
            but if you <em>must</em> bring something, please bring a barbecue or
            berry treat to share!
          </p>
          <p className="pb-6">
            Please let us know if you have additional or new dietary
            requirements.
          </p>
          <hr className="pb-6 text-center" />
          <ul className="text-center">
            <li>{eventTime}</li>
            <li>{eventLocation}</li>
          </ul>
          <Form />
        </main>
      </div>
    </>
  );
}
