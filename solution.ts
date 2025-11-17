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