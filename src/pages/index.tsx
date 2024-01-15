import Search from "~/components/Search";
import Layout from "./layout";

export default function Home() {
  return (
    <Layout>
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          <span className="text-brand-earthy">Wrld</span>
          <span className="text-brand-blue">Bldr</span>
        </h1>
        <div className="grid grid-cols-1">
          <Search />
        </div>
      </div>
    </Layout>
  );
}
