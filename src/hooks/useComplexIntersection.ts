/* eslint-disable @typescript-eslint/no-explicit-any */
// import { createIntersection, createUnion } from '@/utils/sets';
import DrinkService from '@/web/services/drinks.service';
import { SetOperationsService } from '@/web/services/set-operations.service';
import { useEffect, useState } from 'react';

interface SearchQuery {
    ingredients?: string[];
    categories?: string[];
}

interface Props {
    query?: SearchQuery;
}

export const useComplexIntersection = ({ query }: Props) => {
    const [intersectionData, setIntersectionData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    async function fetchData() {
        let categoryResults: any[] = [];
        let ingredientResults: any[] = [];
        setLoading(true);
        try {
            if (query?.categories) {
                const results = await Promise.all(query.categories.map((c) => DrinkService.getByCategory(c)));
                categoryResults = [...results].map((r) => new Set(r));
            }

            if (query?.ingredients) {
                const results = await Promise.all(query.ingredients.map((i) => DrinkService.getByIngredient(i)));
                ingredientResults = [...results].map((r) => new Set(r));
            }

            // const unionBetweenCategories = createUnion(...categoryResults);
            // const unionBetweenIngredients = createUnion(...ingredientResults);

            const unionBetweenCategories_V2 = SetOperationsService.union(...categoryResults);
            const unionBetweenIngredients_V2 = SetOperationsService.union(...ingredientResults);

            const isCategoriesEmpty = unionBetweenCategories_V2.size === 0;
            const isIngredientsEmpty = unionBetweenIngredients_V2.size === 0;

            if (isCategoriesEmpty && isIngredientsEmpty) {
                setIntersectionData([]);
                return;
            }

            if (isCategoriesEmpty || isIngredientsEmpty) {
                const nonEmptySet = isCategoriesEmpty ? unionBetweenIngredients_V2 : unionBetweenCategories_V2;
                setIntersectionData([...nonEmptySet]);
                return;
            }

            setIntersectionData([...SetOperationsService.intersection(unionBetweenCategories_V2, unionBetweenIngredients_V2)]);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return {
        intersectionData,
        loading,
    };
};
