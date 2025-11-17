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

interface Users {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}
const filterActiveUsers = (users: Users[]) => {
    return users.filter(user => user.isActive)
}
interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}
const printBookDetails = (book: Book): void => {
    const availability = book.isAvailable ? "Yes" : "No";
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`);

}
