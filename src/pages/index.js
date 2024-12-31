import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Home() {
  return (
    <div className={roboto.className}>
      <Image
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
    </div>
  );
}

export default Home;

export async function getStaticProps() {
  return {
    props: {},
  };
}
