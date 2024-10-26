import Footer from "../../../common/components/Footer/Footer";
import Navbar from "../../../common/components/Navbar/Navbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="container mx-auto mt-20">
        <Navbar />
        {children}
      </div>
      <Footer />
    </>
  );
}
