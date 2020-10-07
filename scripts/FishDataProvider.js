const fishCollection = [
    {
        name: "Bart",
        food: "crustaceans",
        species: "simpson",
        length: 6,
        harvested: "Springfield",
        image: ""
    },
    {
        name: "Lisa",
        food: "algae",
        species: "simpson",
        length: 3,
        harvested: "Springfield",
        image: ""
    },
    {
        name: "Marge",
        food: "cuttlefish",
        species: "simpson",
        length: 10,
        harvested: "Springfield",
        image: ""
    },
    {
        name: "Homer",
        food: "donuts",
        species: "simpson",
        length: 15,
        harvested: "Springfield",
        image: ""
    },
    {
        name: "Mo",
        food: "",
        species: "bartender",
        length: 6,
        harvested: "Springfield",
        image: ""
    },
    {
        name: "Mr. Burns",
        food: "blood",
        species: "kleptocrat",
        length: 5,
        harvested: "cryo chamber",
        image: ""
    },
    {
        name: "Apu",
        food: "curry",
        species: "human",
        length: 9,
        harvested: "Springfield",
        image: ""
    },
    {
        name: "Sideshow Bob",
        food: "fries",
        species: "clown",
        length: 21,
        harvested: "Springfield",
        image: ""
    }
]

export const useFish = () => {
    return fishCollection.slice()
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of holyFish) {
        if(fish.length % 3 === 0) {
            console.log(fish)
        } else if (fish.length % 5 === 0) {
            console.log(fish)
        } else if (fish.length % 5 === 0 && fish.length % 3 === 0) {
            console.log(fish)
        }
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish

    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    return regularFish
}