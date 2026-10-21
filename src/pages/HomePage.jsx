import InputRef from "../components/InputRef";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Home Page </h1>
        <InputRef />
      </div>
    </>
  );
}
