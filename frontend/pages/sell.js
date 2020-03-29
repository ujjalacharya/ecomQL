import Link from "next/link";

const Test = props => {
  return (
    <div>
      <h2>Su'up from test</h2>
      <Link href="/">
        <a>Go to home</a>
      </Link>
    </div>
  );
};

export default Test;
