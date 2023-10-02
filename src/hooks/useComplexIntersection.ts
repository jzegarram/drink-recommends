/* eslint-disable @typescript-eslint/no-explicit-any */
import { createIntersection, createUnion } from "@/utils/sets";
import DrinkService from "@/web/services/drinks.service";
import { useEffect, useState } from "react";

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
                const results = (
                    await Promise.all(query.categories.map((c) => DrinkService.getByCategory(c)))
                )
                categoryResults = [...results]
            }

            if (query?.ingredients) {
                const results = (
                    await Promise.all(query.ingredients.map((i) => DrinkService.getByIngredient(i)))
                )
                ingredientResults = [...results]
            }



            const unionBetweenCategories = createUnion(...categoryResults);
            const unionBetweenIngredients = createUnion(...ingredientResults);

            if (unionBetweenCategories.length === 0 && unionBetweenIngredients.length === 0) { setIntersectionData([]); return; }
            if (unionBetweenCategories.length === 0 && unionBetweenIngredients.length > 0) { setIntersectionData(unionBetweenIngredients); return; }
            if (unionBetweenCategories.length > 0 && unionBetweenIngredients.length === 0) { setIntersectionData(unionBetweenCategories); return; }

            // console.log({ unionBetweenCategories, unionBetweenIngredients })

            setIntersectionData(createIntersection(unionBetweenCategories, unionBetweenIngredients));

            // setLoading(false);
        } catch (err) {
            // setError(err as Error);
            // setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData()
    }, []);



    return {
        intersectionData,
        loading
    }

};
