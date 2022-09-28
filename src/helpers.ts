import { Recipe } from './recipeType';

interface Ingredient{
  qty: number;
  desc: string;
}

const recipes: Recipe[] =
  [
    {
      "id": 1,
      "title": "Chickpea Curry",
      "ingredients": [
        {
          qty: 1,
          desc: "Tbs olive oil"
        },
        {
          qty: 1.5,
          desc: "cups cooked chickpeas"
        },
        {
          qty: 1.25,
          desc: "Tbs curry powder"
        },
        {
          qty: 0.5,
          desc: "cup coconut yogurt"
        },
        {
          qty: 14,
          desc: "oz canned tomatoes"
        },
        {
          qty: 2,
          desc: "Tbs nutritional yeast"
        },
        {
          qty: 2,
          desc: "Tbs lime juice"
        },
        {
          qty: 3,
          desc: "cups spinach (loosely packed)"
        },
        {
          qty: 0,
          desc: "Salt and pepper to taste"
        }
      ],
      "instructions": [
        "Heat a skillet or pan and add the olive oil. ",
        "Then add the chickpeas and curry powder; sauté for 2-3 minutes. ",
        "Add the coconut yogurt, tomatoes, nutritional yeast, lime juice, and salt. ",
        "Stir and simmer for 5-10 minutes. ",
        "Add the spinach and stir for 1-2 minutes. ",
        "Season with salt & pepper to taste. ",
        "Serve over quinoa or brown rice. "
      ],
      "photo": "chickpeacurry.jpg"
    },
    {
      "id": 2,
      "title": "Banana Pancakes",
      "ingredients": [
        {
          qty: 0.5,
          desc: "cup oat milk"
        },
        {
          qty: 2,
          desc: "eggs"
        },
        {
          qty: 1,
          desc: "egg white"
        },
        {
          qty: 1,
          desc: "banana"
        },
        {
          qty: 1.5,
          desc: "cup Old Fashioned oats"
        },
        {
          qty: 2,
          desc: "Tbs organic honey"
        },
        {
          qty: 2,
          desc: "tsp baking powder"
        },
        {
          qty: 1,
          desc: "tsp vanilla extract"
        },
        {
          qty: 0.25,
          desc: "tsp salt"
        }
      ],
      "instructions": [
        "Blend the ingredients in a blender. ",
        "Cook pancakes on the stove over medium heat. "
      ],
      "photo": "bananapancakes.jpg"
    },
    {
      "id": 3,
      "title": "Almond Flour Bread",
      "ingredients": [
        {
          qty: 2,
          desc: "cups almond flour (loosely packed)"
        },
        {
          qty: 3,
          desc: "Tbs coconut flour"
        },
        {
          qty: 0.5,
          desc: "tsp baking powder"
        },
        {
          qty: 0.5,
          desc: "tsp baking soda"
        },
        {
          qty: 0.5,
          desc: "heaping tsp salt"
        },
        {
          qty: 4,
          desc: "eggs"
        },
        {
          qty: 0.33,
          desc: "cup oat milk"
        },
        {
          qty: 0.25,
          desc: "cup melted butter"
        },
        {
          qty: 3,
          desc: "Tbs honey"
        },
        {
          qty: 1,
          desc: "tsp apple cider vinegar"
        },
      ],
      "instructions": [
        "Mix the dry ingredients together.",
        "Mix the wet ingredients together.",
        "Pour the wet ingredients into the dry ingredients and stir until combined.",
        "Bake at 350 in a 9-inch diameter pan for 25 minutes (or until top is golden).",
        "Let cool for ~15 minutes."
      ],
      "photo": "almondflourbread.jpg"
    },
    {
      "id": 4,
      "title": "Sweet Potato Salad",
      "ingredients": [
        {
          qty: 4,
          desc: "medium-sized sweet potatoes"
        },
        {
          qty: 1,
          desc: "Tbs olive oil"
        },
        {
          qty: 1,
          desc: "cup chopped spinach"
        },
        {
          qty: 0.5,
          desc: "cup chopped red onion"
        },
        {
          qty: 2,
          desc: "Tbs apple cider vinegar"
        },
        {
          qty: 2,
          desc: "Tbs lemon juice"
        },
        {
          qty: 1,
          desc: "chopped avocado"
        }
      ],
      "instructions": [
        "Cut the sweet potatoes into bite-sized pieces and cook them in a pan with olive oil.",
        "Add the spinach, red onion, apple cider vinegar, lemon juice, and avocado to a bowl.", 
        "When the sweet potatoes are cool, add them to the bowl with salt & pepper to taste."
      ],
      "photo": "sweetpotatosalad.jpg"
    },
    {
      "id": 5,
      "title": "Lemon Muffins",
      "ingredients": [
        {
          qty: 0.5,
          desc: "cup coconut flour"
        },
        {
          qty: 2,
          desc: "Tbs chia seeds"
        },
        {
          qty: 0.25,
          desc: "tsp baking soda"
        },
        {
          qty: 0.0625,
          desc: "tsp salt"
        },
        {
          qty: 0.5,
          desc: "cup oat milk"
        },
        {
          qty: 4,
          desc: "eggs"
        },
        {
          qty: 2,
          desc: "lemons (zest and juice)"
        },
        {
          qty: 2,
          desc: "Tbs olive oil"
        },
        {
          qty: 1,
          desc: "Tbs apple cider vinegar"
        },
        {
          qty: 3,
          desc: "Tbs honey"
        },
        {
          qty: 0.25,
          desc: "tsp vanilla extract"
        }
      ],
      "instructions": [
        "Add the dry ingredients to a bowl and mix.", 
        "Add the wet ingredients to another bowl and mix.",
        "Add the wet ingredients to the dry ingredients and stir until smooth.",
        "Bake for 20-25 minutes at 350 degrees."
      ],
      "photo": "lemonmuffins.jpg"
    },
    {
      "id": 6,
      "title": "Chicken Casserole",
      "ingredients": [
        {
          qty: 1,
          desc: "asdf"
        },
        {
          qty: 1,
          desc: "asdf"
        }
      ],
      "instructions": ["asdf6", "asdf6"],
      "photo": "chickencasserole.jpg"
    },
    {
      "id": 7,
      "title": "Almond Flour Biscuit",
      "ingredients": [ 
        {
          qty: 0.5,
          desc: "cup almond flour"
        },
        {
          qty: 2,
          desc: "eggs"
        },
        {
          qty: 1.5,
          desc: "tsp baking powder"
        },
        {
          qty: 0.5,
          desc: "tsp olive oil"
        }
      ],
      "instructions": [
        "Mix the ingredients in a small bowl.",
        "Microwave for 2 minutes.",
        "Remove the biscuit from the bowl, then place it in a pan over medium heat.",
        "Cook each side until golden." 
      ],
      "photo": "biscuits.jpg"
    },
    {
      "id": 8,
      "title": "Breakfast Casserole",
      "ingredients": [
        {
          qty: 10,
          desc: "eggs"
        },
        {
          qty: 0.75,
          desc: "cup oat milk"
        },
        {
          qty: 1,
          desc: "lb. ground turkey"
        },
        {
          qty: 1,
          desc: "red bell pepper"
        },
        {
          qty: 1,
          desc: "tsp salt"
        },
        {
          qty: 1,
          desc: "tsp pepper"
        },
        {
          qty: 1,
          desc: "tsp garlic powder"
        },
        {
          qty: 0.25,
          desc: "tsp red pepper flakes"
        }
      ],
      "instructions": [
        "Cook the ground turke in a pan until brown.", 
        "Chop the red bell pepper.",
        "Whisk the eggs, milk, and spices together in a large bowl.",
        "Stir in the ground turkey and bell pepper.",
        "Spray an oven-safe pan with non-stick spray.",
        "Add the ingredients to the pan and bake at 375 for 30 minutes, or until the eggs are cooked all the way."
      ],
      "photo": "breakfastcasserole.jpg"
    },
    {
      "id": 9,
      "title": "Cinnamon Pancakes",
      "ingredients": [
        {
          qty: 0.5,
          desc: "cup almond flour"
        },
        {
          qty: 0.25,
          desc: "cup coconut flour"
        },
        {
          qty: 0.33,
          desc: "cup coconut yogurt"
        },
        {
          qty: 4,
          desc: "eggs"
        },
        {
          qty: 1,
          desc: "tsp baking powder"
        },
        {
          qty: 1.5,
          desc: "tsp cinnamon"
        },
        {
          qty: 1,
          desc: "tsp monk fruit sweetener"
        }
      ],
      "instructions": [
        "Blend the ingredients in a blender.", 
        "Cook in a pan over medium heat."
      ],
      "photo": "cinnamonpancakes.jpg"
    },
    {
      "id": 10,
      "title": "Chicken Curry",
      "ingredients": [
        {
          qty: 1,
          desc: "chicken breast"
        },
        {
          qty: 1,
          desc: "onion"
        },
        {
          qty: 1,
          desc: "green bell pepper"
        },
        {
          qty: 2,
          desc: "sweet potatoes"
        },
        {
          qty: 2,
          desc: "cups oat milk"
        },
        {
          qty: 1,
          desc: "handful baby carrots"
        },
        {
          qty: 2,
          desc: "Tbs curry powder"
        },
        {
          qty: 4,
          desc: "tsp garlic powder"
        },
        {
          qty: 0.5,
          desc: "tsp salt"
        },
        {
          qty: 0.25,
          desc: "tsp pepper"
        },
        {
          qty: 2,
          desc: "Tbs olive oil"
        }
      ],
      "instructions": [
        "Chop the chicken into pieces",
        "Sauté the onion & garlic powder in a large pan, add the chicken, and cook for 2-3 minutes.", 
        "Add the salt, pepper, and curry powder.",
        "Add half the oat milk, stir, and cook for 1 minute.",
        "Add the potatoes, carrots, bell pepper, and rest of the oat milk.",
        "Bring the pan to a boil, then simmer for 10-15 minutes (or until the potatoes are tender).",
        "Serve over quinoa or brown rice."
      ],
      "photo": "chickencurry.jpg"
    },
    {
      "id": 11,
      "title": "Sausage Patties",
      "ingredients": [
        {
          qty: 1,
          desc: "lb ground turkey"
        },
        {
          qty: 1,
          desc: "Tbs olive oil"
        },
        {
          qty: 1,
          desc: "tsp fennel seeds"
        },
        {
          qty: 1,
          desc: "tsp rubbed sage"
        },
        {
          qty: 1,
          desc: "tsp garlic powder"
        },
        {
          qty: 1,
          desc: "tsp sea salt"
        },
        {
          qty: 0.125,
          desc: "tsp red pepper flakes"
        }
      ],
      "instructions": [
        "Mix the ingredients in a bowl.",
        "Shape the mixture into patties.",
        "Cook over medium-high heat in a pan or cast iron skillet."
      ],
      "photo": "sausagepatties.jpg"
    },
    {
      "id": 12,
      "title": "Carrot Muffins",
      "ingredients": [
        {
          qty: 2,
          desc: "cups baby carrots"
        },
        {
          qty: 0.5,
          desc: "cup Old Fashioned oats"
        },
        {
          qty: 4,
          desc: "eggs"
        },
        {
          qty: 1.5,
          desc: "tsp baking powder"
        },
        {
          qty: 2,
          desc: "tsp cinnamon"
        },
        {
          qty: 0.25,
          desc: "tsp nutmeg"
        },
        {
          qty: 0.5,
          desc: "tsp vanilla extract"
        }
      ],
      "instructions": [
        "Blend the ingredients in a blender.",
        "Spray a muffin tin with pam, then pour the ingredients into it.", 
        "Bake for 22 min at 350.",
        "Let the muffins cool, then top with honey and cinnamon."
      ],
      "photo": "chickencasserole.jpg"
    },
    {
      "id": 13,
      "title": "Peanut Butter Cookies",
      "ingredients": [
        {
          qty: 1,
          desc: "egg"
        },
        {
          qty: 2,
          desc: "Tbs maple syrup"
        },
        {
          qty: 5,
          desc: "Tbs peanut butter"
        },
        {
          qty: 0.66,
          desc: "cup almond flour"
        },
        {
          qty: 1,
          desc: "tsp cinnamon"
        },
        {
          qty: 1,
          desc: "tsp baking powder"
        }
      ],
      "instructions": [
        "Mix the ingredients together and roll into 1-inch balls", 
        "Flatten the cookie balls with a wet spoon.",
        "Bake for 10 minutes at 350."
      ],
      "photo": "chickencasserole.jpg"
    }
  ];

async function fetche(url: string) {
    return {json: async() => {
      return recipes
    }};
  }

async function fetchee(url: string) {
  const matches = url.match(/recipes\/(\d+)$/)
  const index = parseInt((matches as RegExpMatchArray)[1])
    return {json: async() => {
      return recipes[index - 1]
    }};
}

export { fetche, fetchee }
export type { Ingredient }
