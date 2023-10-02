import { Category } from '@/models/categories.model';
import { CocktailClient } from '../common/cocktail-client';
import { Ingredient } from '@/models/ingredients.model';

const API_VERSION = '/v1/1';
const RESOURCE = '/list.php';

interface Service {
  getAllCategories: () => Promise<Category[]>;
  getAllIngredients: () => Promise<Ingredient[]>;
}

const MetadataService: Service = {
  getAllCategories: async (): Promise<Category[]> => {
    const categories = await CocktailClient.get(`${API_VERSION}${RESOURCE}`, {
      params: { c: 'list' },
    });
    return categories.data.drinks;
  },
  getAllIngredients: async (): Promise<Ingredient[]> => {
    const ingredients = await CocktailClient.get(`${API_VERSION}${RESOURCE}`, {
      params: { i: 'list' },
    });
    return ingredients.data.drinks;
  },
};

export default MetadataService;
