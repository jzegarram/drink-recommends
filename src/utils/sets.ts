type Drink = {
    idDrink: string;
    strDrink?: string;
    strDrinkThumb?: string;
};

const createUnion = (...arrays: Drink[][]): Drink[] => {
    const map = new Map<string, Drink>();

    arrays.forEach((array) => {
        array.forEach((item) => {
            if (item.idDrink) {
                map.set(item.idDrink, item);
            }
        });
    });

    return [...map.values()];
};

const createIntersection = (array1: Drink[], array2: Drink[]): Drink[] => {
    const map = new Map<string, Drink>();

    // Add all items from array1 to the map
    array1.forEach((item) => {
        if (item.idDrink) map.set(item.idDrink, item);
    });

    return array2.filter((item) => map.has(item.idDrink));
};

export { createUnion, createIntersection };
