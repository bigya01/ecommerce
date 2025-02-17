import { create } from "zustand";
import { persist } from "zustand/middleware";


type ProductStore = {
    products: any[];
    selectedCategory: string[];
    categories: () => string[];
    brands: () => string[];
    filteredProducts: () => any[];
    setProducts: (products: any[]) => void;
    setSelectedCategory: (category: string[]) => void;
    priceRange: [number, number];
    setPriceRange: (range: [number, number]) => void;
    getMinPrice: () => number;
    getMaxPrice: () => number;
    sortBy: [string,string];
    setSortBy: (sort: [string,string]) => void;
};

const useProducts = create<ProductStore>()(
    persist(
        (set, get) => ({
            products: [],
            selectedCategory: [],
            categories: () => {
                const categories = get().products.map((product) => product.category);
                return Array.from(new Set(categories));
            },
            brands: () => {
                const brands = get().products.map((product) => product.brand);
                return Array.from(new Set(brands));},
            getMinPrice: () => {
                const minPrice = get().products.reduce(
                    (min, product) => (product.price < min ? product.price : min),
                    Infinity
                );
                return minPrice;
            },
            getMaxPrice: () => {
                const maxPrice = get().products.reduce(
                    (max, product) => (product.price > max ? product.price : max),
                    0
                );
                return maxPrice;
            },
            filteredProducts: () => {
                const { products, selectedCategory, priceRange, sortBy } = get();
                return products
                    .filter(
                        (product) =>
                            (selectedCategory.length === 0 ||
                                selectedCategory.includes(product.category)) &&
                            product.price >= priceRange[0] &&
                            product.price <= priceRange[1]
                    )
                    .sort((a, b) => {
                        const [sortField, sortOrder] = sortBy;
                        if (sortField === "title") {
                            return sortOrder === "asc"
                                ? a.title.localeCompare(b.title)
                                : b.title.localeCompare(a.title);
                        } else if (sortField === "price") {
                            return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
                        } else {
                            return sortOrder === "asc"
                                ? new Date(a.meta.updatedAt).getTime() - new Date(b.meta.updatedAt).getTime()
                                : new Date(b.meta.updatedAt).getTime() - new Date(a.meta.updatedAt).getTime();
                        }
                    });
            },
            setProducts: (products: any[]) => set({ products }),
            setSelectedCategory: (category: string[]) => set({ selectedCategory: category }),
            priceRange: [0, Infinity],
            setPriceRange: (range: [number, number]) => set({ priceRange: range }),
            sortBy: ["title", "asc"],
            setSortBy: (sort: [string, string]) => set({ sortBy: sort }),
        }),
        {
            name: "product-store",
        }
    )
);

export default useProducts;
