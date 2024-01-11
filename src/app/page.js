import Middle from "./Middle";
import Header from "./Header";
import Nav from "./Nav";
import Table from "./Table";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="md:mx-28">
        |<Nav />
        <Middle />
      </div>
      <div>
        <Table />
      </div>
    </div>
  );
}
