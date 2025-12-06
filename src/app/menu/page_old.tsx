"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, WheatOff } from "lucide-react";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
  vegetarian?: boolean;
  glutenFree?: boolean;
  popular?: boolean;
}

interface MenuCategory {
  name: string;
  id: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    name: "Breakfast",
    id: "breakfast",
    items: [
      {
        name: "Country Breakfast",
        description: "Two eggs any style, crispy bacon or sausage, golden hash browns, and buttered toast with jam.",
        price: "$9.99",
        image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop",
        popular: true,
      },
      {
        name: "Buttermilk Pancakes",
        description: "Fluffy stack of three pancakes served with whipped butter and warm maple syrup.",
        price: "$7.99",
        vegetarian: true,
      },
      {
        name: "Eggs Benedict",
        description: "Poached eggs on English muffin with Canadian bacon and creamy hollandaise.",
        price: "$11.99",
        popular: true,
      },
      {
        name: "Veggie Omelette",
        description: "Three-egg omelette loaded with peppers, onions, mushrooms, and cheddar cheese.",
        price: "$10.49",
        vegetarian: true,
        glutenFree: true,
      },
      {
        name: "French Toast",
        description: "Thick-cut brioche dipped in cinnamon batter, griddled golden and dusted with powdered sugar.",
        price: "$8.99",
        vegetarian: true,
      },
      {
        name: "Biscuits & Gravy",
        description: "Fluffy buttermilk biscuits smothered in homemade sausage gravy.",
        price: "$8.49",
      },
      {
        name: "Avocado Toast",
        description: "Smashed avocado on sourdough with cherry tomatoes, feta, and a poached egg.",
        price: "$10.99",
        vegetarian: true,
      },
      {
        name: "Breakfast Burrito",
        description: "Scrambled eggs, cheese, peppers, onions, and your choice of bacon or sausage wrapped in a warm tortilla.",
        price: "$9.49",
      },
    ],
  },
  {
    name: "Lunch",
    id: "lunch",
    items: [
      {
        name: "Classic Burger",
        description: "Half-pound Angus beef patty with lettuce, tomato, onion, pickles, and our secret sauce.",
        price: "$12.99",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
        popular: true,
      },
      {
        name: "Grilled Cheese & Tomato Soup",
        description: "Golden-crisp sourdough with melted cheddar and a bowl of creamy tomato soup.",
        price: "$9.99",
        vegetarian: true,
      },
      {
        name: "Club Sandwich",
        description: "Triple-decker with turkey, bacon, lettuce, tomato, and mayo on toasted white bread.",
        price: "$11.99",
      },
      {
        name: "Chicken Salad Sandwich",
        description: "House-made chicken salad with celery and herbs on a buttery croissant.",
        price: "$10.99",
      },
      {
        name: "Reuben",
        description: "Corned beef, sauerkraut, Swiss cheese, and Thousand Island on grilled rye.",
        price: "$12.49",
        popular: true,
      },
      {
        name: "Caesar Salad",
        description: "Crisp romaine, parmesan, croutons, and creamy Caesar dressing. Add grilled chicken +$3.",
        price: "$9.49",
        vegetarian: true,
        glutenFree: true,
      },
      {
        name: "BLT",
        description: "Crispy bacon, fresh lettuce, and ripe tomatoes with mayo on toasted sourdough.",
        price: "$9.99",
      },
      {
        name: "Philly Cheesesteak",
        description: "Thinly sliced ribeye with sautéed peppers, onions, and melted provolone on a hoagie roll.",
        price: "$13.99",
      },
    ],
  },
  {
    name: "Dinner",
    id: "dinner",
    items: [
      {
        name: "Meatloaf Dinner",
        description: "Homestyle meatloaf with mashed potatoes, gravy, and seasonal vegetables.",
        price: "$14.99",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
        popular: true,
      },
      {
        name: "Fried Chicken",
        description: "Crispy Southern-style fried chicken with coleslaw, cornbread, and honey.",
        price: "$15.99",
      },
      {
        name: "Pot Roast",
        description: "Slow-braised beef with carrots, potatoes, and onions in rich gravy.",
        price: "$16.99",
        glutenFree: true,
      },
      {
        name: "Grilled Salmon",
        description: "Atlantic salmon fillet with lemon-dill sauce, rice pilaf, and steamed broccoli.",
        price: "$17.99",
        glutenFree: true,
      },
      {
        name: "Chicken Fried Steak",
        description: "Breaded and pan-fried steak smothered in country gravy with mashed potatoes.",
        price: "$14.49",
      },
      {
        name: "Spaghetti & Meatballs",
        description: "House-made meatballs in marinara sauce over spaghetti with garlic bread.",
        price: "$13.99",
      },
      {
        name: "Liver & Onions",
        description: "Pan-seared calf liver with caramelized onions, mashed potatoes, and gravy.",
        price: "$12.99",
        glutenFree: true,
      },
      {
        name: "Veggie Stir-Fry",
        description: "Fresh seasonal vegetables in teriyaki sauce over steamed rice.",
        price: "$12.49",
        vegetarian: true,
        glutenFree: true,
      },
    ],
  },
  {
    name: "Desserts",
    id: "desserts",
    items: [
      {
        name: "Homemade Apple Pie",
        description: "Warm apple pie with flaky crust, cinnamon spice, and a scoop of vanilla ice cream.",
        price: "$5.99",
        image: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=400&h=300&fit=crop",
        vegetarian: true,
        popular: true,
      },
      {
        name: "Chocolate Layer Cake",
        description: "Rich chocolate cake with creamy fudge frosting.",
        price: "$5.99",
        vegetarian: true,
      },
      {
        name: "Banana Cream Pie",
        description: "Fresh bananas in vanilla custard with whipped cream and graham crust.",
        price: "$5.49",
        vegetarian: true,
      },
      {
        name: "New York Cheesecake",
        description: "Creamy classic cheesecake with your choice of strawberry or cherry topping.",
        price: "$6.49",
        vegetarian: true,
      },
      {
        name: "Hot Fudge Sundae",
        description: "Vanilla ice cream with hot fudge, whipped cream, nuts, and a cherry on top.",
        price: "$4.99",
        vegetarian: true,
        glutenFree: true,
      },
      {
        name: "Peach Cobbler",
        description: "Warm peach cobbler with buttery biscuit topping and vanilla ice cream.",
        price: "$5.99",
        vegetarian: true,
      },
    ],
  },
  {
    name: "Drinks",
    id: "drinks",
    items: [
      {
        name: "Fresh Brewed Coffee",
        description: "Bottomless cup of our signature house blend. Decaf available.",
        price: "$2.49",
        vegetarian: true,
        glutenFree: true,
      },
      {
        name: "Hot Tea",
        description: "Selection of black, green, and herbal teas.",
        price: "$2.29",
        vegetarian: true,
        glutenFree: true,
      },
      {
        name: "Fresh Squeezed OJ",
        description: "Made-to-order fresh orange juice.",
        price: "$3.99",
        vegetarian: true,
        glutenFree: true,
      },
      {
        name: "Classic Milkshake",
        description: "Hand-spun shake in chocolate, vanilla, or strawberry.",
        price: "$4.99",
        vegetarian: true,
        glutenFree: true,
        popular: true,
      },
      {
        name: "Root Beer Float",
        description: "Creamy vanilla ice cream floating in frosty root beer.",
        price: "$4.49",
        vegetarian: true,
        glutenFree: true,
      },
      {
        name: "Lemonade",
        description: "House-made fresh lemonade, sweetened just right.",
        price: "$2.99",
        vegetarian: true,
        glutenFree: true,
      },
      {
        name: "Soft Drinks",
        description: "Coca-Cola, Diet Coke, Sprite, Dr Pepper, and more.",
        price: "$2.49",
        vegetarian: true,
        glutenFree: true,
      },
      {
        name: "Iced Tea",
        description: "Fresh-brewed sweet or unsweetened iced tea. Free refills.",
        price: "$2.49",
        vegetarian: true,
        glutenFree: true,
      },
    ],
  },
];

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("breakfast");

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-48 md:h-64 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=600&fit=crop"
            alt="Delicious diner food spread"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Menu
          </h1>
          <p className="text-lg text-white/90">
            Homestyle cooking made with love
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Dietary Legend */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center text-sm">
            <div className="flex items-center gap-1.5">
              <Leaf className="w-4 h-4 text-green-600" />
              <span className="text-[var(--muted-foreground)]">Vegetarian</span>
            </div>
            <div className="flex items-center gap-1.5">
              <WheatOff className="w-4 h-4 text-amber-600" />
              <span className="text-[var(--muted-foreground)]">Gluten-Free</span>
            </div>
          </div>

          {/* Menu Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-8">
              {menuData.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="px-4 py-2 rounded-full data-[state=active]:bg-[var(--burgundy)] data-[state=active]:text-white bg-[var(--muted)] text-[var(--foreground)] hover:bg-[var(--secondary)]"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {menuData.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid gap-4 md:gap-6">
                  {category.items.map((item, index) => (
                    <div
                      key={index}
                      className="bg-[var(--card)] rounded-lg p-4 md:p-6 shadow-sm border border-[var(--border)] hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col md:flex-row gap-4">
                        {item.image && (
                          <div className="relative w-full md:w-32 h-32 md:h-24 flex-shrink-0 rounded-lg overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div className="flex-1">
                          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3
                                className="text-lg md:text-xl font-semibold text-[var(--foreground)]"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                              >
                                {item.name}
                              </h3>
                              {item.popular && (
                                <Badge className="bg-[var(--burnt-orange)] text-white text-xs">
                                  Popular
                                </Badge>
                              )}
                              {item.vegetarian && (
                                <Leaf className="w-4 h-4 text-green-600" title="Vegetarian" />
                              )}
                              {item.glutenFree && (
                                <WheatOff className="w-4 h-4 text-amber-600" title="Gluten-Free" />
                              )}
                            </div>
                            <span className="text-lg font-bold text-[var(--burgundy)]">
                              {item.price}
                            </span>
                          </div>
                          <p className="text-[var(--muted-foreground)] text-sm md:text-base">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Note */}
          <div className="mt-12 text-center text-sm text-[var(--muted-foreground)] max-w-2xl mx-auto">
            <p className="mb-2">
              <strong>Ask your server about daily specials!</strong>
            </p>
            <p>
              Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness. Please inform your server of any allergies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
