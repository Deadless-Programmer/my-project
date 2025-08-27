import Navbar from "@/components/Navbar"


export default function WithNavbarLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
     <Navbar/>
      <main className="max-w-6xl mx-auto " >{children}</main>
    </>
  );
}