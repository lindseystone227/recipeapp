import { Recipe } from './recipeType';

const recipes: Recipe[] =
  [
    {
      "id": 1,
      "title": "Chickpea Curry",
      "ingredients": [
        "1 Tbs olive oil ",
        "1 1/2 cups cooked chickpeas ",
        "1 1/4 Tbs curry powder ",
        "1/2 cup coconut yogurt ",
        "14 oz canned tomatoes ",
        "2 Tbs nutritional yeast ",
        "2 Tbs lime juice ",
        "3 cups spinach (loosely packed) ",
        "Salt and pepper to taste "
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
        "1/2 cup oat milk ", 
        "2 eggs ", 
        "1 egg white ", 
        "1 banana ", 
        "1 1/2 cup Old Fashioned oats ", 
        "2 Tbs organic honey ", 
        "2 tsp baking powder ", 
        "1 tsp vanilla extract ", 
        "1/4 tsp salt "
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
        "2 cups almond flour (loosely packed)",
        "3 Tbs coconut flour",
        "1/2 tsp baking powder",
        "1/2 tsp baking soda",
        "1/2 heaping tsp salt", 
        "4 eggs",
        "1/3 cup oat milk",
        "1/4 cup melted butter",
        "3 Tbs honey",
        "1 tsp apple cider vinegar"
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
        "4 medium-sized sweet potatoes", 
        "1 Tbs olive oil",
        "1 cup chopped spinach",
        "1/2 cup chopped red onion",
        "2 Tbs apple cider vinegar",
        "2 Tbs lemon juice",
        "1 chopped avocado"
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
        "1/2 cup coconut flour", 
        "2 Tbs chia seeds",
        "1/4 tsp baking soda",
        "1/16 tsp salt",
        "1/2 cup oat milk",
        "4 eggs",
        "2 lemons (zest and juice)",
        "2 Tbs olive oil",
        "1 Tbs apple cider vinegar",
        "3 Tbs honey",
        "1/4 tsp vanilla extract"
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
      "ingredients": ["asdf", "asdf"],
      "instructions": ["asdf6", "asdf6"],
      "photo": "chickencasserole.jpg"
    },
    {
      "id": 7,
      "title": "Almond Flour Biscuit",
      "ingredients": [
        "1/2 cup almond flour", 
        "2 eggs",
        "1.5 tsp baking powder",
        "1/2 tsp olive oil"
      ],
      "instructions": [
        "Mix the ingredients in a small bowl.",
        "Microwave for 2 minutes.",
        "Remove the biscuit from the bowl, then place it in a pan over medium heat.",
        "Cook each side until golden." 
      ],
      "photo": "biscuits.jpg"
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
