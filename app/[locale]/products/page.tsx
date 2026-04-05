import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductsPageContent from "@/components/ProductsPageContent";

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProductsPageContent />
      </main>
      <Footer />
    </>
  );
}
