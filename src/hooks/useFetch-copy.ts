import { useState, useEffect } from 'react';

export interface FetchResult<T> {
    data: T | T[] | null;
    loading: boolean;
    error: Error | null;
}

interface Service<T> {
    getAll: () => Promise<T | T[]>;
}

interface ServiceProps<T> {
    Service: Service<T>;
    transformer: (data: T) => T | T[];
}

function useFetch<T>({ Service }: ServiceProps<T>): FetchResult<T> {
    const [data, setData] = useState<T | T[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await Service.getAll();
                setData(result);
                setLoading(false);
            } catch (err) {
                setError(err as Error);
                setLoading(false);
            }
        }

        fetchData();
    }, [Service]);

    return { data, loading, error };
}

export default useFetch;
