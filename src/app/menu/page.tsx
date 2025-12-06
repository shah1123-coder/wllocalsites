"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface MenuItem {
    name: string;
    description?: string;
    price: string;
    extras?: string[];
}

interface MenuSubcategory {
    name: string;
    items: MenuItem[];
    note?: string;
}

interface MenuCategory {
    name: string;
    id: string;
    subcategories: MenuSubcategory[];
}

const menuData: MenuCategory[] = [
    {
        name: "Breakfast",
        id: "breakfast",
        subcategories: [
            {
                name: "Specialties",
                items: [
                    { name: "Signature Breakfast*", price: "$11.49", description: "Three scrambled eggs topped with cheddar cheese served with two bacon strips, two sausage patties or links, and your choice of potatoes. Served with two pancakes." },
                    { name: "Local Favorites*", price: "$14.49", description: "Two eggs any style 1/2 ham steak, two sausage patties, two bacon strips, and your choice of potatoes. Served with two pancakes." },
                    { name: "Breakfast Sandwich", price: "$9.49", description: "Two eggs with your choice of bacon, ham or sausage and American cheese served with your choice of potatoes" },
                    { name: "Healthy Fit Breakfast", price: "$11.99", description: "Six egg white with sliced tomatoes and 7oz grilled chicken breast and toasted English muffin" },
                    { name: "Open Face Breakfast", price: "$9.49", description: "Open face biscuit with two sausage patties and hash browns smothered in white gravy and served with two eggs" },
                    { name: "Breakfast Burrito", price: "$9.49", description: "Three scrambled eggs with sausage, Cheddar cheese and serve with your choice of potatoes", extras: ["Extra meat $2.99"] },
                    { name: "Mexican Breakfast", price: "$10.49", description: "Two scrambled eggs with chorizo, onions, fresh jalapeño with your choice of potatoes served with a flour tortilla" },
                    { name: "Breakfast Sampler*", price: "$11.49", description: "Two eggs any style, two sausage patties, two strips of bacon abd two ham strips served with two pancakes and your choice of potato" },
                    { name: "Breakfast Quesadilla", price: "$10.49", description: "Three eggs scramble with your choice of bacon, sausage or chorizo, bell peppers, tomato, onions, Cheddar cheese and your choice of potato", extras: ["Extra meat $2.99"] },
                    { name: "THE COWBOY*", price: "$11.99", description: "We start with two fresh baked biscuits layered with sausage patties, bacon, your choice of hash browns or home fries, pepper gravy and topped off with eggs cooked to your liking" },
                    { name: "THE COWGIRL", price: "$11.99", description: "We start with one fresh baked biscuit with two sausage patties or two slices of bacon, three silver dollar cakes and two eggs cooked to order. Your choice of hash browns or home fries" },
                    { name: "BYOB", price: "$9.49", description: "only 1 meat choice allowed. Choose four of the following options: three slices of bacon, two sausage patties, three slices of turkey bacon, two eggs, hash browns, home fries, fruit, toast, oatmeal, grits, applesauce" },
                    { name: "Eggs Benedict", price: "$10.99", description: "We start with toasted english muffin topped off with fresh ham, two poached eggs & creamy hollndaise sauce. served with your choice of hash browns or home fries" },
                    { name: "Chicken & Biscuits", price: "$11.99", description: "Fried Chicken tenders and biscuit topped with creamy gravy, 2 eggs and cheddar cheese served with your choice of potatoes" },
                    { name: "Mexican Burrito", price: "$11.99", description: "Three scrambled eggs with chorizo, onions, fresh jalapeños with choice of potatoes with three silver dollar cakes" },
                ]
            },
            {
                name: "Skillets",
                items: [
                    { name: "All-in-One Skillet*", price: "$11.99", description: "Diced ham, bacon, sausage, mushrooms, onions, green peppers, tomatoes and Cheddar cheese" },
                    { name: "Veggie Skillet", price: "$10.49", description: "Grilled onions, green peppers, tomatoes, mushrooms, fresh spinach and Cheddar cheese" },
                    { name: "Mexicali Skillet*", price: "$11.99", description: "Your choice of steak, or chicken, or chorizo, or corn beef hash with mushrooms, onions, green peppers, tomatoes and Cheddar cheese", extras: ["Extra meat $2.99"] },
                    { name: "Country Skillet*", price: "$11.99", description: "Golden hash browns or home fries with grilled mushrooms, onions, green peppers, tomatoes and sliced country fried steak, or chicken smothered with country gravy and Cheddar cheese" },
                ]
            },
            {
                name: "Plates",
                note: "Includes choice of potatoes and choice of toast",
                items: [
                    { name: "One Egg*", price: "$6.99", description: "One egg any style (no meat)", extras: ["w/bacon or sausage $7.99"] },
                    { name: "Two Eggs*", price: "$7.99", description: "Two eggs any style (no meat)", extras: ["w/bacon or sausage $8.99"] },
                    { name: "Pork Chops", price: "$11.49", description: "Served grilled or fried" },
                    { name: "Corn Beef Hash", price: "$10.49" },
                    { name: "Country Fried Steak*", price: "$11.49" },
                    { name: "8oz Sirloin Steak*", price: "$12.99" },
                    { name: "Ham Steak* (Quarter)", price: "$9.99", extras: ["Half - $11.99", "Full - $14.99"] },
                    { name: "Country Fried Chicken", price: "$11.49" },
                    { name: "Ribeye Steak", price: "$17.99" },
                    { name: "Hamburger Patty", price: "$11.49" },
                ]
            },
            {
                name: "Cakes & More",
                note: "Add pancake toppings of your choice for $1.49 each: bananas, blueberries, chocolate chips, cinnamon, or pecans. Add hash browns or home fries +$2.29",
                items: [
                    { name: "1x1x1*", price: "$7.49", description: "One egg, one slice of bacon or one sausage, one pancake" },
                    { name: "2x2x2*", price: "$9.99", description: "Two eggs, two strips of bacon or two sausage patties and two pancakes" },
                    { name: "2x2*", price: "$7.99", description: "Two pancakes with two strips of bacon or two sausage patties" },
                    { name: "PANCAKES", price: "$6.99", description: "Full Stack", extras: ["Short Stack $5.49", "Single $3.49"] },
                    { name: "Chicken & Waffle", price: "$10.49" },
                    { name: "WAFFLE", price: "$6.99", extras: ["w/3 strips of bacon or sausage patties $8.99", "w/2 eggs & two bacon strips or sausage patties $10.99"] },
                    { name: "French Toast", price: "$6.99", description: "Four points of Texas toast dipped in cinnamon custard", extras: ["w/2 sausages patties or three strips of bacon $8.99", "With two eggs and three strips of bacon or two sausage patties $10.99"] },
                    { name: "The Sweetness", price: "$9.99", description: "Pecans, fresh bananas, strawberries and crispy bacon topped on your choice of waffles, pancakes or French toast" },
                    { name: "CINNAMON ROLL", price: "$3.99" },
                    { name: "BISCUITS & GRAVY*", price: "$2.99", extras: ["Two $3.99", "Three $5.99", "+sausage gravy .99"] },
                ]
            },
            {
                name: "Three Egg Omelets",
                note: "Served with your choice of potatoes and your choice of biscuit & gravy or toast.",
                items: [
                    { name: "Cheese", price: "$8.49", extras: ["Add chili $9.99"] },
                    { name: "SINGLE MEAT OMELET", price: "$9.99" },
                    { name: "Meat Lovers", price: "$11.49", description: "Diced ham, sausage, bacon and Cheddar cheese" },
                    { name: "Veggie Omelet", price: "$10.99", description: "Fresh spinach, onions, green peppers, mushrooms, tomatoes and Cheddar cheese" },
                    { name: "Fajita Omelet*", price: "$11.49", description: "Your choice of steak or chicken, tomatoes, onions, green peppers, mushrooms and Mozzarella cheese" },
                    { name: "All-in-One Omelet", price: "$11.49", description: "Diced ham, bacon, sausage, onion, tomatoes, green peppers, mushrooms and Cheddar cheese" },
                    { name: "Denver", price: "$10.99", description: "Diced ham, onions and bell peppers and Cheddar cheese" },
                    { name: "Western", price: "$10.99", description: "Diced ham, tomatoes, onions, bell pepper and Cheddar cheese" },
                    { name: "Healthy Fit", price: "$10.99", description: "White eggs, bacon, spinach and Swiss cheese served with sliced tomato" },
                    { name: "Cajun Chicken Omelet", price: "$10.99", description: "Grilled chicken grilled mushroom onions cajun seasoning and swiss cheese" },
                ]
            },
            {
                name: "Breakfast Sides",
                items: [
                    { name: "1/4 Ham Steak", price: "$4.99" },
                    { name: "1/2 Ham Steak", price: "$7.99" },
                    { name: "Full Ham Steak", price: "$10.99" },
                    { name: "Hamburger Patty", price: "$5.99" },
                    { name: "Sausage Patties (2)", price: "$3.99" },
                    { name: "Sausage Links (4)", price: "$3.99" },
                    { name: "Bacon Strips (4)", price: "$3.99" },
                    { name: "Turkey Bacon", price: "$3.99" },
                    { name: "Turkey Sausage*", price: "$3.99" },
                    { name: "Ala Carte Chicken Tender", price: "$3.99" },
                    { name: "Corn Beef Hash*", price: "$4.99" },
                    { name: "One Egg*", price: "$1.29" },
                    { name: "Home Fries", price: "$3.99" },
                    { name: "Hash Browns", price: "$3.99" },
                    { name: "Toast", price: "$2.29" },
                    { name: "Fresh Fruit Mix", price: "$2.99" },
                    { name: "Apple Sauce", price: "$2.99" },
                    { name: "Biscuit", price: "$1.99" },
                    { name: "Grits & Toast", price: "$5.99" },
                    { name: "Oatmeal & Toast", price: "$5.99" },
                    { name: "Avocado", price: "$2.99" },
                    { name: "Cheddar Cheese", price: "$.99" },
                ]
            }
        ]
    },
    {
        name: "Entrées",
        id: "entrees",
        subcategories: [
            {
                name: "Sandwich Board",
                note: "All board sandwiches come with fries/Upgrade to onion rings +$1.99",
                items: [
                    { name: "LILLY'S HOT SANDWICH*", price: "$9.99", description: "Texas toast topped with our slow cooked tender roast beef smothered with brown gravy" },
                    { name: "GRILLED CHEESE SANDWICH", price: "$8.99", description: "Three slices of potato bread with American cheese, grilled to perfection" },
                    { name: "PHILLY SANDWICH*", price: "$9.99", description: "Grilled steak or chicken, grilled mushrooms & onions, green peppers with Swiss cheese on a hoagie bun" },
                    { name: "REUBEN*", price: "$9.99", description: "Thinly sliced corn beef with sauerkraut, Swiss cheese and thousand island dressing on grilled rye bread" },
                    { name: "LUCY'S SANDWICH*", price: "$9.99", description: "Smoked turkey breast, sliced avocados, tomato, lettuce and mayonnaise on wheat bread" },
                    { name: "TRIPLE-DECKER CLUB*", price: "$9.99", description: "Sliced turkey and ham, bacon, lettuce, tomato, Swiss and American cheese on potato bread" },
                    { name: "BLT*", price: "$9.99", description: "Grilled wheat bread with smoky bacon, lettuce, tomato and mayonnaise" },
                    { name: "CHICKEN SANDWICH*", price: "$10.49", description: "Grilled or fried chicken breast, pepper jack cheese, bacon, lettuce, tomato, onion and pickles" },
                    { name: "QUESADILLA*", price: "$9.99", description: "We take your choice of grilled chicken or Philly steak and stuff onion, bell pepper, tomatoes and cheddar cheese inside a flour tortilla" },
                    { name: "BUFFALO CHICKEN WRAP*", price: "$9.99", description: "Fried chicken, cheddar cheese, shredded cabbage, pickles, homemade ranch, wrapped in a flour tortilla" },
                    { name: "PHILLY CHEESE STEAK WRAP*", price: "$9.99", description: "Your choice of grilled chicken or steak wrapped in a flour tortilla, filled with fresh ranch, lettuce, tomatoes, caramelized onions, green bell peppers, and mushrooms. Finished off with mozzarella cheese" },
                    { name: "GRILLED HAM OR TURKEY BREAST*", price: "$8.99", description: "Served with lettuce, tomatoes and pickles on grilled rye bread" },
                    { name: "MONTE CRISTO*", price: "$9.99", description: "Smoked ham, smoked turkey, two cheeses, battered and fried until golden brown, with strawberry preserves and dusted with powder sugar" },
                    { name: "TUNA SANDWICH*", price: "$9.99", description: "Our homemade tuna salad on grilled wheat toast with lettuce and tomato" },
                    { name: "BBQ ROAST BEEF SANDWICH*", price: "$9.99", description: "Roast beef served on toasted bun with pickles and onions covered in tangy BBQ sauce" },
                ]
            },
            {
                name: "Gourmet Burgers",
                note: "Our 1⁄2 pound burgers are prepared medium-well and served with French fries/Upgrade to onion rings +$1.99/ Add a hamburger patty +3.99",
                items: [
                    { name: "LARRY'S COUNTRY BURGER*", price: "$10.49", description: "Our juicy burger on a grilled bun, smothered with country gravy and grilled onions" },
                    { name: "OLD FASHIONED BURGER*", price: "$9.49", description: "Our original burger with lettuce, tomato, onion and pickles", extras: ["Add cheese +.50"] },
                    { name: "BACON CHEESEBURGER*", price: "$10.49", description: "Our juicy burger with bacon, American cheese, lettuce, tomato, onion and pickles" },
                    { name: "CHILI BURGER*", price: "$10.49", description: "Our juicy burger on a toasted bun, smothered with chili, Cheddar cheese and onions" },
                    { name: "BBQ BURGER*", price: "$10.49", description: "Our juicy burger topped with melted Cheddar cheese, bacon, BBQ sauce and grilled onions" },
                    { name: "MUSHROOM SWISS BURGER*", price: "$10.49", description: "Our juicy burger topped with Swiss cheese, grilled mushrooms, lettuce, tomato, onion and pickles" },
                    { name: "GUACAMOLE BURGER*", price: "$10.49", description: "Our juicy burger topped with pepper jack cheese and guacamole" },
                    { name: "TEXAS BURGER*", price: "$10.49", description: "Our juicy burger on grilled Texas toast topped with French fries, smothered with brown gravy" },
                    { name: "PATTY MELT*", price: "$10.49", description: "Our juicy burger topped with Swiss cheese and grilled onions on toasted Rye bread" },
                    { name: "BACON & EGG BURGER*", price: "$10.49", description: "Our juicy burger topped with bacon, egg and pepper jack cheese" },
                ]
            },
            {
                name: "Homestyle Entrees",
                note: "All below are served with two sides and a hot roll",
                items: [
                    { name: "GRILLED SALMON*", price: "$13.99", description: "Hand-cut in house blacked salmon grilled to perfection, served on a bed of rice", extras: ["grilled or fried shrimp +3.99"] },
                    { name: "COUNTRY FRIED STEAK*", price: "$11.99", description: "Hand-breaded and fried golden brown, smothered with white gravy" },
                    { name: "CHICKEN FRIED CHICKEN*", price: "$11.99", description: "Hand-breaded and fried golden brown, smothered with white gravy" },
                    { name: "LIVER AND ONIONS*", price: "$11.99", description: "Grilled beef liver topped with sautéed onions and brown gravy" },
                    { name: "ROAST BEEF*", price: "$11.99", description: "Slow-cooked, tender roast beef covered in brown gravy" },
                    { name: "PORK CHOPS*", price: "$11.99", description: "Fried or grilled to perfection" },
                    { name: "HAMBURGER STEAK*", price: "$11.99", description: "1⁄2 pound of chopped beef steak smothered with grilled onions, mushrooms and brown gravy" },
                    { name: "CHICKEN TENDERS*", price: "$11.99", description: "Hand-breaded and fried golden brown" },
                    { name: "THE HEALTHY", price: "$13.99", description: "Your choice of: Freshly grilled marinated chicken, pork chop, ham steak, hamburger steak or sirloin. Served with fresh sliced tomatoes, avocado, and a hard-boiled egg" },
                    { name: "BUFFALO CHICKEN TENDERS", price: "$11.99", description: "Hand breaded fried chicken tenders tossed in our zesty buffalo sauce" },
                    { name: "DIJON CHICKEN*", price: "$11.99", description: "Grilled chicken breast topped with honey dijon, sauteed mushrooms served on a bed of rice with your choice of two sides" },
                    { name: "THE GRILLED HAWAIIAN CHICKEN*", price: "$11.99", description: "Chicken breast topped with our made from scratch sauce, grilled pineapple and bell peppers served on a bed of rice with your choice of two sides" },
                    { name: "SEASONED GRILLED CHICKEN TENDERS", price: "$11.99", description: "Grilled to perfection, served with two sides of your choice and freshly baked roll" },
                ]
            }
        ]
    },
    {
        name: "Dinner",
        id: "dinner",
        subcategories: [
            {
                name: "Pastas",
                note: "Served with a side salad and garlic toast",
                items: [
                    { name: "CHICKEN OR SHRIMP ALFREDO*", price: "$12.99", description: "Penne pasta with broccoli, covered in our creamy Alfredo sauce with sliced chicken breast or shrimp" },
                    { name: "CHICKEN OR SHRIMP CARBONARA*", price: "$12.99", description: "Sliced chicken breast or shrimp, sautéed onions, tomatoes and diced bacon tossed in our cream sauce over penne pasta" },
                    { name: "FOUR WAY SPAGHETTI*", price: "$10.99", description: "Spaghetti topped with chili, brown beans, onions and cheese" },
                    { name: "SPAGHETTI & MEATBALLS*", price: "$11.99", description: "Our home-style meatballs with marinara sauce" },
                    { name: "CHICKEN PARMIGIANA*", price: "$11.99", description: "Breaded chicken breast with melted Mozzarella cheese and marinara sauce, served over penne pasta" },
                    { name: "NEW ORLEANS PASTA*", price: "$12.99", description: "Penne pasta, onions, bell peppers, tomatoes, grilled chicken, shrimp, and smoked sausage topped with our made from scratch creamy alfredo sauce" },
                ]
            },
            {
                name: "Specialties",
                note: "Add extra meat +2.99",
                items: [
                    { name: "ULTIMATE STIR FRY*", price: "$11.99", description: "Marinated chicken, beef or shrimp sautéed with vegetables, served over rice" },
                    { name: "LILLY'S FISH*", price: "$11.99", description: "Lilly's special recipe delicious fillet grilled or fried served with two sides, jalapeño hush puppies and tartar sauce", extras: ["Add shrimp +3.99", "+fillet +6.99"] },
                    { name: "JUMBO SHRIMP*", price: "$12.99", description: "Jumbo shrimp grilled or deep fried to perfection. Served with cocktail sauce and your choice of two sides" },
                    { name: "CHICKEN MONTEREY*", price: "$11.99", description: "Grilled chicken breast covered with diced bacon, sautéed onions, mushrooms and melted cheese served over rice with two sides" },
                    { name: "ORANGE CHICKEN LO MEIN", price: "$11.99", description: "Marinated chicken breast bites deep fried to a golden crisp topped off with crispy chow mien noodles served on a bed of mixed stir fry vegetables, noodles with our made from scratch sauce, and a side of garlic toast" },
                ]
            },
            {
                name: "Steaks",
                note: "Our steaks are hand-cut and Certified Premium USDA. All steaks are served with choice of two sides and a hot roll. ADD FRIED SHRIMP $3.99",
                items: [
                    { name: "12 oz. RIBEYE*", price: "$17.99" },
                    { name: "8 oz. SIRLOIN*", price: "$12.49" },
                    { name: "SIRLOIN AND TENDERS", price: "$15.99" },
                ]
            },
            {
                name: "Giant Spuds",
                items: [
                    { name: "PHILLY SPUD*", price: "$9.99", description: "Large potato topped with your choice of chicken or beef, grilled onions, mushrooms and melted mozzarella cheese" },
                    { name: "OLD FASHION SPUD*", price: "$9.99", description: "Large potato topped with butter, cheddar cheese, bacon bits and chives" },
                    { name: "CHILI SPUD*", price: "$9.99", description: "Large potato topped with chili, cheddar cheese and diced onions" },
                ]
            }
        ]
    },
    {
        name: "Extras",
        id: "extras",
        subcategories: [
            {
                name: "Appetizers",
                note: "Add dressing dip to any appetizer for .99 each",
                items: [
                    { name: "ONION RINGS", price: "$7.49", description: "Hand battered and fried onion rings, served with dipping sauce" },
                    { name: "FRIED MUSHROOMS", price: "$7.49", description: "Hand battered and fried mushrooms, served with dipping sauce" },
                    { name: "FRIED PICKLES", price: "$7.49" },
                    { name: "MOZZARELLA STICKS", price: "$7.99", description: "Italian breaded mozzarella sticks served with marinara sauce for dipping" },
                    { name: "CHILI CHEESE FRIES", price: "$7.49", description: "Crispy french fries topped with our homemade chili, cheese and onions" },
                    { name: "FRIED JALAPENOS", price: "$7.49" },
                    { name: "TATOR TOTS", price: "$7.49", description: "Crispy tots topped with our homemade chili, cheese and onions" },
                ]
            },
            {
                name: "Salads & Soups",
                note: "Ranch, Honey Mustard, Blue Cheese, Zesty Italian, Creamy Italian, 1000 Island, French, BBQ, Balsamic, and Sesame Ginger",
                items: [
                    { name: "CHEF SALAD*", price: "$9.99", description: "Fresh green salad with cheddar cheese, tomatoes, bell peppers, onions, hard-boiled egg, croutons and sliced premium ham and turkey" },
                    { name: "GRILLED SALMON SALAD*", price: "$12.99", description: "Grilled salmon on a bed of fresh greens, cheddar cheese, croutons tomatoes, and onions, served with a hard boiled egg and your choice of dressing" },
                    { name: "CHICKEN SALAD*", price: "$9.99", description: "Crispy lettuce, cheddar cheese, tomato, onion, croutons, hard-boiled egg and your choice of dressing with grilled or fried chicken breast" },
                    { name: "TUNA SALAD*", price: "$9.99", description: "Crispy lettuce, cheddar cheese, tomato, onion, croutons and our homemade tuna salad, served with a hard boiled egg and your choice of dressing" },
                    { name: "TACO SALAD*", price: "$9.99", description: "Tortilla chips covered with chili, lettuce, cheddar cheese, tomato, onion, jalapeños, served with sour cream, picante sauce and guacamole." },
                    { name: "CHEESE AND AVOCADO SALAD", price: "$9.99", description: "Crispy lettuce, cheddar cheese, tomato, onion, croutons, fresh slice of avocado and a scoop: of cottage cheese, served with a hard boiled egg and your choice of dressing" },
                    { name: "HAWAIIAN PINEAPPLE SALAD*", price: "$9.99", description: "Mix of fresh greens topped with cheddar cheese, tomatoes, onions, hard-boiled egg, and pineapples. Choice of chicken breast grilled or fried to a golden crisp" },
                    { name: "GARDEN SALAD", price: "$9.99", description: "We a take a bed of crispy lettuce, topped off with cheddar cheese, tomato, onions, croutons and fresh strawberries. Served with a hard boiled egg and your choice of dressing" },
                    { name: "CHILI & CORN BREAD", price: "$6.99" },
                    { name: "BEANS & CORN BREAD", price: "$6.99" },
                    { name: "SOUP & CORNBREAD", price: "$6.99" },
                    { name: "SOUP & SALAD", price: "$8.99" },
                    { name: "1/2 SANDWICH & SOUP", price: "$8.99", description: "Your choice of BLT, Lucy's Sandwich, Grilled Ham or Turkey Breast, Tuna Sandwich, or Lilly's Hot Sandwich" },
                    { name: "Cup of Soup", price: "$4.99" },
                ]
            },
            {
                name: "Lunch & Dinner Sides",
                note: "$3.99 EACH (unless otherwise noted)",
                items: [
                    { name: "Baked Potato", price: "$3.99", extras: ["+Loaded add 1.50"] },
                    { name: "Mashed Potatoes", price: "$3.99" },
                    { name: "Fried Okra", price: "$3.99" },
                    { name: "Green Beans", price: "$3.99" },
                    { name: "Three Veggie Plate", price: "$9.99" },
                    { name: "Four Veggie Plate", price: "$11.99" },
                    { name: "French Fries", price: "$3.99" },
                    { name: "Cottage Cheese", price: "$3.99" },
                    { name: "Fresh Fruit Mix", price: "$3.99" },
                    { name: "Buttered Corn", price: "$3.99" },
                    { name: "Steamed Vegetable Mix", price: "$3.99" },
                    { name: "Cole Slaw", price: "$3.99" },
                    { name: "Carrots", price: "$3.99" },
                    { name: "Brown Beans", price: "$3.99" },
                    { name: "Seasoned Rice", price: "$3.99" },
                    { name: "Side Salad", price: "$3.99" },
                    { name: "Mac & Cheese", price: "$3.99" },
                    { name: "Apple Sauce", price: "$3.99" },
                    { name: "Broccoli", price: "$3.99" },
                    { name: "Potato Chips", price: "$3.99" },
                    { name: "Sweet Potato Fries", price: "$3.99" },
                    { name: "Sliced Tomatoes", price: "$3.99" },
                    { name: "Cornbread", price: "$2.99" },
                    { name: "Dinner Roll", price: "$.99" },
                    { name: "Cheddar Cheese", price: "$.99" },
                ]
            },
            {
                name: "Beverages",
                note: "FREE REFILLS on Soft Drinks, Tea, Coffee",
                items: [
                    { name: "Soft Drinks", price: "$2.99" },
                    { name: "Iced Tea (Sweet & Unsweet)", price: "$2.99" },
                    { name: "Fresh Coffee", price: "$2.99" },
                    { name: "Decaf Coffee", price: "$2.99" },
                    { name: "Hot Tea", price: "$2.99" },
                    { name: "Milk", price: "$2.99", extras: ["Lg $3.99"] },
                    { name: "Chocolate Milk", price: "$2.99", extras: ["Lg $3.99"] },
                    { name: "Hot Chocolate", price: "$2.99" },
                    { name: "Orange Juice", price: "$2.99", extras: ["Lg $3.99"] },
                    { name: "Apple Juice", price: "$2.99", extras: ["Lg $3.99"] },
                    { name: "Tomato Juice", price: "$2.99", extras: ["Lg $3.99"] },
                ]
            },
            {
                name: "Desserts",
                items: [
                    { name: "Slice of Pie or Cobbler", price: "$3.99", extras: ["Add a Scoop of our Vanilla Ice Cream +.99"] },
                ]
            }
        ]
    }
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
                    {/* Menu Tabs */}
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                        <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-8">
                            {menuData.map((category) => (
                                <TabsTrigger
                                    key={category.id}
                                    value={category.id}
                                    className="px-6 py-3 rounded-full text-lg data-[state=active]:bg-[var(--burgundy)] data-[state=active]:text-white bg-[var(--muted)] text-[var(--foreground)] hover:bg-[var(--secondary)] transition-colors"
                                >
                                    {category.name}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        {menuData.map((category) => (
                            <TabsContent key={category.id} value={category.id} className="mt-0">
                                <div className="space-y-12">
                                    {category.subcategories.map((subcategory, index) => (
                                        <div key={index} className="space-y-6">
                                            <div className="border-b border-[var(--border)] pb-2">
                                                <h2
                                                    className="text-2xl md:text-3xl font-bold text-[var(--burgundy)]"
                                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                                >
                                                    {subcategory.name}
                                                </h2>
                                                {subcategory.note && (
                                                    <p className="text-[var(--muted-foreground)] mt-1 italic">
                                                        {subcategory.note}
                                                    </p>
                                                )}
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-6">
                                                {subcategory.items.map((item, itemIndex) => (
                                                    <div
                                                        key={itemIndex}
                                                        className="bg-[var(--card)] rounded-lg p-5 shadow-sm border border-[var(--border)] hover:shadow-md transition-shadow"
                                                    >
                                                        <div className="flex justify-between items-start gap-4 mb-2">
                                                            <h3
                                                                className="text-lg font-semibold text-[var(--foreground)]"
                                                                style={{ fontFamily: "'Playfair Display', serif" }}
                                                            >
                                                                {item.name}
                                                            </h3>
                                                            <span className="text-lg font-bold text-[var(--burgundy)] whitespace-nowrap">
                                                                {item.price}
                                                            </span>
                                                        </div>
                                                        {item.description && (
                                                            <p className="text-[var(--muted-foreground)] text-sm mb-2">
                                                                {item.description}
                                                            </p>
                                                        )}
                                                        {item.extras && (
                                                            <div className="flex flex-wrap gap-2 mt-2">
                                                                {item.extras.map((extra, extraIndex) => (
                                                                    <Badge key={extraIndex} variant="outline" className="text-xs border-[var(--burnt-orange)] text-[var(--burnt-orange)]">
                                                                        {extra}
                                                                    </Badge>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
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
                            <strong>*Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness.</strong>
                        </p>
                        <p>
                            Please inform your server of any allergies.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
