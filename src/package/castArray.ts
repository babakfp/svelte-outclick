export const castArray = (value: any) => {
    return Array.isArray(value) ? value : [value]
}
