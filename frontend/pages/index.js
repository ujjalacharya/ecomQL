import Link from "next/link";

const Home = props => {
  return (
    <div>
      <h2>Su'up from home</h2>
      <Link href="/sell">
        <a>Go to sell</a>
      </Link>
    </div>
  );
};

export default Home;
