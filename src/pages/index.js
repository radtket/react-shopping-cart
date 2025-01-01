import { Roboto } from "next/font/google";
import "normalize.css/normalize.css";
import Store from "../components/Store";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Home() {
  return (
    <div className={roboto.className}>
      <Store />
    </div>
  );
}

export default Home;

export async function getStaticProps() {
  return {
    props: {},
  };
}
