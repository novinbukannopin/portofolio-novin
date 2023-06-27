import Hero from "./pages/Hero";
import Navbar from "./component/Navbar";
import Providers from "./Providers";

export default function Home() {
  return (
    <>
      <Providers>
        <Navbar />
        <Hero />
      </Providers>
    </>
  );
}
