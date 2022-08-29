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
      "photo": "chickpeacurry.jpeg"
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
      "photo": "bananapancakes.jpeg"
    },
    {
      "id": 3,
      "title": "Almond Flour Bread",
      "ingredients": ["asdf", "asdf"],
      "instructions": ["asdf3", "asdf3"],
      "photo": "almondflourbread.jpeg"
    },
    {
      "id": 4,
      "title": "Sweet Potato Salad",
      "ingredients": ["asdf", "asdf"],
      "instructions": ["asdf4", "asdf4"],
      "photo": "sweetpotatosalad.jpeg"
    },
    {
      "id": 5,
      "title": "Lemon Muffins",
      "ingredients": ["asdf", "asdf"],
      "instructions": ["asdf5", "asdf5"],
      "photo": "lemonmuffins.jpeg"
    },
    {
      "id": 6,
      "title": "Chicken Casserole",
      "ingredients": ["asdf", "asdf"],
      "instructions": ["asdf6", "asdf6"],
      "photo": "chickencasserole.jpeg"
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
