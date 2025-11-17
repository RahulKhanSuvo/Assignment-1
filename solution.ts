const formatValue = (value: number | string | boolean): string | number | boolean => {
    if (typeof value === "string") {
        return value.toUpperCase()
    } else if (typeof value === 'number') {
        return value * 10
    } return !value

}

const getLength = (value: string | any[]) => {
    if (Array.isArray(value)) {
        return value.length
    } else if (typeof value === 'string') {
        return value.length
    }
    return 0
}

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name,
            this.age = age
    }
    getDetails(): string {
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
}

interface Items {
    title: string
    rating: number
}
const filterByRating = (items: Items[]): Items[] => {
    return items.filter(items => items.rating >= 4)
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];