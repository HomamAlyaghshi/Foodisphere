import React, { useState } from "react";
import ButtonTheme from "../Components/ButtonTheme";

const GridPhoto = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const data = [
    {
      id: 1,
      category: "Breakfast",
      title: "Avocado Toast",
      description:
        "Fresh avocado slices on whole-grain toast with a sprinkle of chili flakes.",
      image: "/images/MenuPage/food1.png",
      tags: ["Breakfast", "Healthy"],
      badge: "TRENDING",
      price: "18.89$",
    },
    {
      id: 2,
      category: "Main Dishes",
      title: "Grilled Salmon",
      description:
        "Perfectly grilled salmon with a lemon butter glaze and fresh herbs.",
      image: "/images/MenuPage/food2.png",
      tags: ["Dinner", "Seafood"],
      badge: "NEW",
      price: "48.00$",
    },
    {
      id: 3,
      category: "Drinks",
      title: "Iced Coffee",
      description:
        "Chilled espresso mixed with milk and ice for a refreshing boost.",
      image: "/images/MenuPage/food3.jpg",
      tags: ["Drinks", "Cold", "Caffeinated"],
      badge: "POPULAR",
      price: "12.99$",
    },
    {
      id: 4,
      category: "Desserts",
      title: "Tiramisu",
      description:
        "Classic Italian dessert with layers of mascarpone cheese and coffee-soaked ladyfingers.",
      image: "/images/MenuPage/food4.png",
      tags: ["Dessert", "Coffee-flavored"],
      badge: "FAVORITE",
      price: "35.89$",
    },
    {
      id: 5,
      category: "Breakfast",
      title: "Smoothie Bowl",
      description:
        "A nutritious smoothie bowl topped with fresh fruits and granola.",
      image: "/images/MenuPage/food5.png",
      tags: ["Breakfast", "Vegan", "Healthy"],
      price: "28.00$",
    },
    {
      id: 6,
      category: "Main Dishes",
      title: "Pasta Carbonara",
      description:
        "Creamy Italian pasta with pancetta, Parmesan cheese, and eggs.",
      image: "/images/MenuPage/food6.png",
      tags: ["Dinner", "Italian"],
      badge: "CLASSIC",
      price: "45.99$",
    },
    {
      id: 7,
      category: "Drinks",
      title: "Chocolate Delight",
      description:
        "Refreshing mint and lime cocktail perfect for a summer day.",
      image: "/images/MenuPage/food7.png",
      tags: ["Drinks", "Cocktail", "Cold"],
      price: "10.00$",
    },
    {
      id: 8,
      category: "Desserts",
      title: "Cheesecake",
      description:
        "Rich and creamy cheesecake with a graham cracker crust and berry topping.",
      image: "/images/MenuPage/food8.png",
      tags: ["Dessert", "Sweet"],
      badge: "SPECIAL",
      price: "28.89$",
    },
    {
        id: 9,
        category: "Main Dishes",
        title: "Burger",
        description:
          "Rich and creamy cheesecake with a graham cracker crust and berry topping.",
        image: "/images/MenuPage/food9.png",
        tags: ["Dinner", "Dinner"],
        price: "15.00$",
      },
  ];

  const filteredData =
    selectedCategory === "All"
      ? data
      : data.filter((item) => item.category === selectedCategory);

  return (
    <div className="mx-16 my-6 font-playfair">
      <div className="flex justify-center items-center whitespace-nowrap  ">
        <div className="sm:flex grid grid-cols-2 mt-8 mb-12 justify-center items-center gap-x-16 gap-y-4 sm:gap-8 ">
          {["All", "Breakfast", "Main Dishes", "Drinks", "Desserts"].map(
            (category) => (
              <ButtonTheme
                key={category}
                variant={
                  selectedCategory === category ? "contained" : "outlined"
                }
                width={"150px"}
                bgcolor={"error"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </ButtonTheme>
            )
          )}
        </div>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredData.map((item) => (
          <div key={item.id} className="card bg-base-100 w-full shadow-xl">
            <figure>
              <img
                src={item.image}
                alt={item.title}
                className="h-[280px] w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title italic text-2xl">
                {item.title}
                {item.badge && (
                  <div className="badge bg-themeRed text-lightColor animate-bounce">
                    {item.badge}
                  </div>
                )}
              </h2>
              <p>{item.description}</p>

              <div className="card-actions justify-end">
                <p className="text-lg text-themeRed">{item.price}</p>

                {item.tags.map((tag, index) => (
                  <div key={index} className="badge badge-outline">
                    {tag}
                  </div>
                ))}
              </div>
              <div className="hover:scale-105 transition-all duration-500 hover:bg-gray-100 rounded-lg">
                <ButtonTheme variant={"filled"}>Add To Cart</ButtonTheme>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridPhoto;
