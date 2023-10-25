import { Drink } from "@/models/drink.model";

interface DifferenceParams<T> {
    mainSet: Set<T>;
    otherSets: Set<T>[];
}

export const SetOperationsService = {
    union: <T extends Drink>(...sets: Set<T>[]): Set<T> => {

        const result: Set<T> = new Set();

        sets.forEach((set) => {
            set.forEach((item) => {
                result.add(item);
            });
        });

        return result;
    },
    intersection: <T extends Drink>(...sets: Set<T>[]): Set<T> => {

        const resultMap: Map<number | string, T> = new Map();
        const result: Set<T> = new Set<T>();

        if (sets.length === 0) return result;

        sets.forEach((set) => {
            set.forEach((item) => {
                if (!resultMap.has(item.idDrink)) {
                    resultMap.set(item.idDrink, item);
                } else {
                    if (sets.every(s => [...s].some(i => item.idDrink === i.idDrink))) {
                        result.add(item);
                    }
                }
            });
        });

        return result;
    },
    difference: <T extends Drink>({
        mainSet,
        otherSets,
    }: DifferenceParams<T>) => {

        const result: Set<T> = new Set(mainSet);

        otherSets.forEach((set) => {
            set.forEach((item) => {
                result.delete(item);
            });
        });

        return result;

    },
};
