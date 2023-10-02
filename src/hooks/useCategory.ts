import { Category } from '@/models/categories.model';
import MetadataService from '@/web/services/metadata.service';
import { useState, useEffect } from 'react';

function useCategory() {

    const [data, setData] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await MetadataService.getAllCategories();
                const formattedResult = result.map((category) => {
                    return {
                        ...category,
                        id: category.strCategory,
                        selected: false
                    }
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
        setData((prev) =>
            prev.map((tag) =>
                tag.id === id ? { ...tag, selected: true } : tag
            )
        );
    }

    const unSelectTag = (id: string | undefined) => {
        if (!id) return;
        setData((prev) =>
            prev.map((tag) =>
                tag.id === id ? { ...tag, selected: false } : tag
            )
        );
    }

    return { data, loading, error, selectTag, unSelectTag };
}

export default useCategory;
