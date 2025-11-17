const getLength = (value: string | any[]) => {
    if (Array.isArray(value)) {
        return value.length
    } else if (typeof value === 'string') {
        return value.length
    }
    return 0
}
console.log(getLength("typescriptff"));
console.log(getLength([10, 20, 30, 40, 5555]))