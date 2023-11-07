import { Outlet } from "react-router-dom";
import Header from "./components/navbar/Header";

function App() {
  return (
  <>
    <Header />
    <main className="max-w-[1300px] w-full m-auto">
      <Outlet />
    </main>
  </>
  );
}

export default App;
