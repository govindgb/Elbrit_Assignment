import Header from "@/components/Header";
import VitaminLandingPage from "@/components/VitaminLandingPage";
import BetterIngredients from "@/components/BetterIngredients";
import BlogGrid from "@/components/BlogGrid";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    // header
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div>
        <VitaminLandingPage/>
      </div>
      <div>
        <BetterIngredients />
      </div>
      <div>
        <BlogGrid />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
