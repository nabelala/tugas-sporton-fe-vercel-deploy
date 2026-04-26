import { getAllCategories } from "../services/category.service";
import { getAllProducts } from "../services/product.service";
import CategoriesSection from "./components/Home/categories";
import HeroSection from "./components/Home/hero";
import ProductsSection from "./components/Home/products";


export default async function Home() {
const [categories, products] = await Promise.all([
getAllCategories(),
getAllProducts()
])

  return (
  <main>
<HeroSection />
<CategoriesSection categories={categories} />
<ProductsSection products={products} />
  </main>
  );
}
