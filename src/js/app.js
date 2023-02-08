import CategoryView from "./CategoryView.js";
import ProductView from "./ProductView.js";

document.addEventListener("DOMContentLoaded", () => {
  CategoryView.setApp();

  // create categories option
  CategoryView.createCategoriesList();
  // setApp => push in products
  ProductView.setApp();
  // create products list
  ProductView.createProductsList(ProductView.products);
});
