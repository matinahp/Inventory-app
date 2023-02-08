const products = [
  {
    id: 1,
    title: "React.js",
    category: "frontend",
    createdAt: "2021-10-31T15:02:00.411Z",
  },
  {
    id: 2,
    title: "Node.js",
    category: "backend",
    createdAt: "2021-10-31T15:03:23.556Z",
  },
  {
    id: 3,
    title: "Vue.js",
    category: "frontend",
    createdAt: "2021-11-01T10:47:26.889Z",
  },
];

const categories = [
  {
    id: 1,
    title: "FrontEnd",
    description: "FrontEnd of Appliacation",
    createdAt: "2021-11-01T10:47:26.889Z",
  },
  {
    id: 2,
    title: "BackEnd",
    description: "the BackEnd of the Application",
    createdAt: "2021-10-01T10:47:26.889Z",
  },
];

//property
//save, delete, update, ... => methods
export default class Storage {
  // add new category
  // getAllCategories
  static getAllCategories() {
    // products, categories => localStorage => JSON.parse(localStorage.getItem()) , JSON.parse(localStorage.setItem())
    const savedCategories = JSON.parse(localStorage.getItem("category")) || [];
    // sort -> descending
    const sortedCategories = savedCategories.sort((a, b) => {
      return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
    });
    return sortedCategories;
  }
  // save category
  static saveCategory(categoryToSave) {
    const savedCategories = Storage.getAllCategories();
    // edit => ... save
    // new => ... save
    const existedItems = savedCategories.find(
      (c) => c.id === categoryToSave.id
    );
    if (existedItems) {
      // edit
      existedItems.title = categoryToSave.title;
      existedItems.description = categoryToSave.description;
    } else {
      // new
      categoryToSave.id = new Date().getTime();
      categoryToSave.createdAt = new Date().toISOString();
      savedCategories.push(categoryToSave);
    }
    localStorage.setItem("category", JSON.stringify(savedCategories));
  }

  // getAllProducts
  static getAllProducts(sort = "newest") {
    // newest is default
    // products, categories => localStorage => JSON.parse(localStorage.getItem()) , JSON.parse(localStorage.setItem())
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    // sort -> descending
    return savedProducts.sort((a, b) => {
      if (sort === "newest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (sort === "oldest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      }
    });
  }
  // save products
  static saveProducts(productToSave) {
    const savedProducts = Storage.getAllProducts();
    // edit => ... save
    // new => ... save
    const existedItems = savedProducts.find((c) => c.id === productToSave.id);
    if (existedItems) {
      // edit
      existedItems.title = productToSave.title;
      existedItems.quantity = productToSave.quantity;
      existedItems.category = productToSave.category;
    } else {
      // new
      productToSave.id = new Date().getTime();
      productToSave.createdAt = new Date().toISOString();
      savedProducts.push(productToSave);
    }
    localStorage.setItem("products", JSON.stringify(savedProducts));
  }
  // delete product
  static deleteProduct(id) {
    const savedProducts = Storage.getAllProducts();

    const filteredProducts = savedProducts.filter(
      (p) => parseInt(p.id) !== parseInt(id)
    );
    localStorage.setItem("products", JSON.stringify(filteredProducts));
  }
}
