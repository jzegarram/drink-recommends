import { Drink } from '@/models/drink.model';
import { CocktailClient } from '../common/cocktail-client';

const API_VERSION = '/v1/1';
const RESOURCE = '/filter.php';
const RESOURCE_RANDOM = '/random.php';

interface Service<T> {
    getByCategory: (category: string) => Promise<T[]>;
    getByIngredient: (ingredient: string) => Promise<T[]>;
    getRandom: () => Promise<T>;
}

const DrinkService: Service<Drink> = {
    getByCategory: async (category: string): Promise<Drink[]> => {
        const drinks = await CocktailClient.get(`${API_VERSION}${RESOURCE}`, {
            params: { c: category },
        });
        return drinks.data.drinks;
    },
    getByIngredient: async (ingredient: string): Promise<Drink[]> => {
        const drinks = await CocktailClient.get(`${API_VERSION}${RESOURCE}`, {
            params: { i: ingredient },
        });
        return drinks.data.drinks;
    },
    getRandom: async (): Promise<Drink> => {
        const drinks = await CocktailClient.get(`${API_VERSION}${RESOURCE_RANDOM}`);
        return drinks.data.drinks[0];
    },
};

export default DrinkService;
