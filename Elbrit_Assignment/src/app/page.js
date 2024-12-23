import {
  Header,
  VitaminLandingPage,
  BetterIngredients,
  BlogGrid,
  Footer,
} from "@/components";

export default function Home() {
  return (
 
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div>
        <VitaminLandingPage />
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
