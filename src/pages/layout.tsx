import Head from "next/head";
import NavBar from "~/components/NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />

      <Head>
        <title>WrldBldr</title>
        <meta name="description" content="WrldBldr" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        {children}
      </main>
    </>
  );
}
