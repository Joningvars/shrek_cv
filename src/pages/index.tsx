import { SHREK_DATA, DONKEY_DATA, FIONA_DATA } from "../data/data";
import Cv from "@/components/Cv";

export default function Home() {
  return (
    <div className="bg-sky-200 mt-15 flex items-center justify-center gap-5 ">
      <Cv data={SHREK_DATA} />
      <Cv data={DONKEY_DATA} />
      <Cv data={FIONA_DATA} />
    </div>
  );
}
