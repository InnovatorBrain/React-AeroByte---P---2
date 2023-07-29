import imageOne from "../assets/CardsImages/img2.jpg";
import imageTwo from "../assets/CardsImages/img1.jpg";
import imageThree from "../assets/CardsImages/img3.jpg";
import imageFour from "../assets/CardsImages/img4.jpg";
export default [
    {
        id: 4,
        title: "Harmonious Melodies - Music Workshop",
        description: "Music Workshop: Explore captivating harmonies.",
        price: 80,
        coverImg: imageTwo,
        stats: {
            rating: 4.5,
            reviewCount: 12
        },
        location: "New York City",
        openSpots: 15,
    },
    {
        id: 5,
        title: "Rhythms of the World - Percussion Ensemble",
        description: "Thrilling global percussion journey.",
        price: 95,
        coverImg: imageOne,
        stats: {
            rating: 4.9,
            reviewCount: 20
        },
        location: "San Francisco",
        openSpots: 8,
    }
    ,
    {
        id: 6,
        title: "Songwriting Secrets - Unleash Your Creativity",
        description: "Transformative songwriting workshop.",
        price: 75,
        coverImg: imageThree,
        stats: {
            rating: 4.7,
            reviewCount: 15
        },
        location: "Los Angeles",
        openSpots: 10,
    }
    ,
    {
        id: 7,
        title: "Jazz Fusion Jam Night - Marvels Music",
        description: "Electrifying improvisation and collaboration.",
        price: 60,
        coverImg: imageFour,
        stats: {
            rating: 4.8,
            reviewCount: 25
        },
        location: "Chicago",
        openSpots: 5,
    }
]