import Snowfall from "react-snowfall";
import strawberryImg from "./assets/strawberry.png";
import blueberriesImg from "./assets/blueberries.png";

import "./App.css";
import Main from "./components/Main";
import Login, { useLogin } from "./components/Login";

const blueberry = document.createElement("img");
blueberry.src = strawberryImg;

const strawberry = document.createElement("img");
strawberry.src = blueberriesImg;

const berries = [blueberry, strawberry];

export default function App() {
  const { handlePasswordSubmit, password, setPassword, loggedIn } = useLogin();

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
        <main className="container transform mx-auto bg-white drop-shadow-sm rounded-md p-6 max-w-screen-sm font-mono text-gray-700">
          {!loggedIn && (
            <Login
              handlePasswordSubmit={handlePasswordSubmit}
              password={password}
              setPassword={setPassword}
            />
          )}
          {loggedIn && <Main />}
        </main>
      </div>
    </>
  );
}
