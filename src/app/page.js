import Banner from "@/components/Banner";
import TilesSlider from "@/components/TilesSlider";
import Image from "next/image";

export default function Home() {
  return (
        <div>
            <TilesSlider/>
            <Banner></Banner>
            <h1>Home Page</h1>
        </div>
    );
}
