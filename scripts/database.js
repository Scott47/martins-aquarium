
const database = {
    fish: [
        {
            image: "",
            length: 20,
            species: "Crustacean",
            name: "Bart",
            harvested: "Cumberland",
            diet: ["snails", "plants", "larvae", "eggs"]
        },
        {
            image: "",
            length: 20,
            species: "Siamese Fighting Fish",
            name: "Lisa",
            harvested: "MeKong River",
            diet: ["plankton", "crustaceans", "larvae", "mosquitoes"]
        },
        {
            image: "",
            length: 30,
            species: "Blobfish",
            name: "Homer",
            harvested: "Timor Sea",
            diet: ["floating edible matter"]
        },
        {
            image: "",
            length: 40,
            species: "Snakehead",
            name: "Mr. Burns",
            harvested: "Arabian Sea",
            diet: ["frogs", "water bugs", "small fish"]
        },
        {
            image: "",
            length: 35,
            species: "Stone Fish",
            name: "Otto Mann",
            harvested: "Red Sea",
            diet: ["small fish", "crustaceans"]
        },
        {
            image: "",
            length: 2,
            species: "Guppy",
            name: "Smithers",
            harvested: "Carribean Sea",
            diet: ["algae", "larvae"]
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}