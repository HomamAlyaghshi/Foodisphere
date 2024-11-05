import React from "react";
import ButtonTheme from "../Components/ButtonTheme";

const GridCard = () => {
    const data = [
        {
          id: 1,
          category: "Food",
          title: "The Benefits of Avocado",
          description:
            "Discover the nutritional advantages of including avocados in your diet.",
          image: "/images/MenuPage/food1.png",
          badge: "Most Read",
        },
        {
          id: 2,
          category: "Health",
          title: "Grilling Techniques for Salmon",
          description:
            "Learn the best grilling techniques to achieve perfectly cooked salmon.",
          image: "/images/MenuPage/food2.png",
          badge: "NEW",
        },
        {
          id: 3,
          category: "Beverages",
          title: "How to Make Iced Coffee",
          description:
            "A step-by-step guide to crafting the perfect iced coffee at home.",
          image: "/images/MenuPage/food3.jpg",
        },
        {
          id: 4,
          category: "Desserts",
          title: "Tiramisu: A Classic Italian Recipe",
          description:
            "An easy recipe for making classic Tiramisu from scratch.",
          image: "/images/MenuPage/food4.png",
        },
        {
          id: 5,
          category: "Breakfast",
          title: "Creating the Perfect Smoothie Bowl",
          description:
            "Tips and tricks for making a nutritious and delicious smoothie bowl.",
          image: "/images/MenuPage/food5.png",
        },
        {
          id: 6,
          category: "Cuisine",
          title: "Mastering Pasta Carbonara",
          description:
            "A guide to cooking authentic Pasta Carbonara with traditional ingredients.",
          image: "/images/MenuPage/food6.png",
        },
        {
          id: 7,
          category: "Drinks",
          title: "Refreshing Summer Cocktails",
          description:
            "Explore various cocktail recipes that are perfect for hot summer days.",
          image: "/images/MenuPage/food7.png",
        },
        {
          id: 8,
          category: "Desserts",
          title: "Cheesecake Variations",
          description:
            "Discover different cheesecake recipes that you can try at home.",
          image: "/images/MenuPage/food8.png",
        },
        {
          id: 9,
          category: "Fast Food",
          title: "The Ultimate Burger Guide",
          description:
            "Learn how to make the perfect burger, from patties to toppings.",
          image: "/images/MenuPage/food9.png",
        },
      ];
      

  
  return (
    <div className="sm:mx-16 my-6 font-playfair">
   

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <div key={item.id} className="card bg-base-100 w-full shadow-xl sm:px-0 px-2">
            <figure>
              <img
                src={item.image}
                alt={item.title}
                className="h-[280px] w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title italic text-xl whitespace-nowrap">
                {item.title}
                {item.badge && (
                  <div className="badge bg-themeRed text-lightColor animate-bounce">
                    {item.badge}
                  </div>
                )}
              </h2>
              <p>{item.description}</p>

              
              <div className="hover:scale-105 transition-all duration-500 hover:bg-gray-100 rounded-lg">
                <ButtonTheme variant={"filled"}>Read The Article</ButtonTheme>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridCard;
