
/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const tipCollection = [
    {
        description: "Make sure tank has water"
    },
    {
        description: "Clean the poop out"
    },
    {
        description: "Make sure to feed them at least once"
    }
]

export const useTips = () => {
    return tipCollection.slice()
}