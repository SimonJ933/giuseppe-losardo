import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen">
        <Navbar />
        <img src="/studio.jpg" alt="Studio" className="absolute inset-0 w-full h-full object-cover opacity-80" />
        <Intro />
      </div>
    </>
  );
}
