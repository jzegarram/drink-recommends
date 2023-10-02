import { Ingredient } from '@/models/ingredients.model';
import MetadataService from '@/web/services/metadata.service';
import { useState, useEffect } from 'react';

function useIngredient() {
  const [data, setData] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [limitReached, setLimitReached] = useState(false);
  const LIMIT = 6;

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await MetadataService.getAllIngredients();
        const formattedResult = result.map((ingredient) => {
          return {
            ...ingredient,
            id: ingredient.strIngredient1,
            selected: false,
          };
        });
        setData(formattedResult);
        setLoading(false);
      } catch (err) {
        setError(err as Error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const selectTag = (id: string | undefined) => {
    if (!id) return;

    const lastSelected = data.filter((tag) => tag.selected).length + 1 === LIMIT;

    setData((prev) => prev.map((tag) => (tag.id === id ? { ...tag, selected: true } : tag)));

    if (lastSelected) {
      setLimitReached(true);
    }
  };

  const unSelectTag = (id: string | undefined) => {
    if (!id) return;
    setData((prev) => prev.map((tag) => (tag.id === id ? { ...tag, selected: false } : tag)));

    setLimitReached(false);
  };

  return { data, loading, error, selectTag, unSelectTag, limitReached };
}

export default useIngredient;
