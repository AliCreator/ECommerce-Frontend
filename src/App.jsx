import { Outlet } from "react-router-dom";
import Header from "./components/navbar/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
  <section className="overflow-hidden font-sans">
    <Header />
    <main className="max-w-[1300px] w-full m-auto border-b border-slate-800 mb-4 pt-4 pb-16">
      <Outlet />
    </main>
    <Footer />
  </section>
  );
}

export default App;
