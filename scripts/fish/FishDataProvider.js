const fishCollection = [
    {
        name: "Bart",
        food: "mollusks, worms, insect larvae, crustaceans, and some fish",
        species: "Ambystoma mexicanum",
        length: 6,
        harvested: "Springfield",
        image: "https://www.welovesharks.club/wp-content/uploads/2017/04/Depositphotos_99722956_m-2015.jpg"
    },
    {
        name: "Lisa",
        food: "algae",
        species: "simpson",
        length: 3,
        harvested: "Springfield",
        image: "https://images.pexels.com/photos/886210/pexels-photo-886210.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        name: "Marge",
        food: "cuttlefish",
        species: "simpson",
        length: 10,
        harvested: "Springfield",
        image: "https://i0.wp.com/metro.co.uk/wp-content/uploads/2017/09/finding-nemo.jpg?quality=90&strip=all&crop=0px%2C62px%2C1024px%2C538px&resize=1200%2C630&zoom=1&ssl=1"
    },
    {
        name: "Homer",
        food: "donuts",
        species: "simpson",
        length: 15,
        harvested: "Springfield",
        image: "https://pbs.twimg.com/profile_images/773917612648591365/hFl6DSSh_400x400.jpg"
    }

]

export const useFish = () => {
    return fishCollection.slice()
}

