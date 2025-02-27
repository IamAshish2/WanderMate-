import Solukhumbu from "../assets/solukhumbuXmt.jpg";
import Boudha from "../assets/headerImg2.jpg";
import Lumbini from "../assets/lumbini.jpg";
import Dharan from "../assets/Dharan.jpg";
import Pokhara from "../assets/pokhara.jpg";
import Chitwan from "../assets/Chitwan.jpg";
import Hotel1 from "../assets/hotel1.jpg";
import Hotel2 from "../assets/hotel2.jpg";
import Hotel3 from "../assets/hotel.jpg";
import Hotel4 from "../assets/hotel4.jpg";
import spa from "../assets/Spa2.jpg";
import gym from "../assets/Gym.jpg";
import tennis from "../assets/Tennis3.jpg";
import swimming from "../assets/Swimming5.jpg";
import dest1 from "../assets/bg2.jpg";
import dest2 from "../assets/bg7.jpg";
import dest3 from "../assets/img8.jpg";
import dest4 from "../assets/img9.jpg";

export const landingFooterLinks = [
  {
    id: 1,
    title: "Facebook",
    link: "https://www.facebook.com",
  },
  {
    id: 2,
    title: "X",
    link: "https://www.x.com",
  },
  {
    id: 3,
    title: "Instagram",
    link: "https://www.instagram.com",
  },
  {
    id: 4,
    title: "Youtube",
    link: "https://www.youtube.com",
  },
  {
    id: 5,
    title: "Google",
    link: "https://www.google.com",
  },
];

export const landingHeaderLinks = [
  {
    id:0,
    title:"Home",
    link:"/user/home"
  },
  {
    id: 1,
    title: "About",
    link: "#",
  },
  {
    id: 2,
    title: "Tours",
    link: "/user/destination",
  },
  {
    id: 3,
    title: "Sale",
    link: "#",
  },
  {
    id: 4,
    title: "Contact",
    link: "#",
  },
  { id: 5, title: "Sign In", link: "/signin" },
  {
    id: 6,
    title: "Sign Up",
    link: "/signup",
  },
];

export const headerLinks = [
  {
    id:1,
    linkTitle: "Home",
    link: "/user/home",
  },
  {id:2,
    linkTitle: "Destination",
    link: "/user/destination",
  },
  { id:3,
    linkTitle: "Travel Packages",
    link: "/user/travelpackages",
  },
  { id:4,
    linkTitle: "Hotels",
    link: "/user/hotels",
  },
];

export const footerLinks = [
  {
    id: 1,
    name: "About Us",
    link: "",
  },
  {
    id: 2,
    name: "Home",
    link: "/",
  },
  {
    id: 3,
    name: "Destinations",
    link: "/destinations",
  },
  {
    id: 4,
    name: "Tours",
    link: "/tours",
  },
  {
    id: 5,
    name: "Hotels",
    link: "/hotels",
  },
  {
    id: 6,
    name: "Flights",
    link: "/flights",
  },
  {
    id: 7,
    name: "Car Rentals",
    link: "/car-rentals",
  },
  {
    id: 8,
    name: "Activities",
    link: "/activities",
  },
  {
    id: 9,
    name: "Deals",
    link: "/deals",
  },
  {
    id: 10,
    name: "Blog",
    link: "/blog",
  },
  {
    id: 11,
    name: "Contact Us",
    link: "/contact",
  },
  {
    id: 12,
    name: "Terms of Service",
    link: "/tos",
  },
  {
    id: 13,
    name: "Privacy Policy",
    link: "/privacy",
  },
  {
    id: 14,
    name: "Terms and Conditions",
    link: "/termsconditions",
  },
];

export const hotels = [
  {
    id: 1,
    name: "Hotel Yak & Yeti",
    price: 120,
    img: Hotel1,
  },
  {
    id: 2,
    name: "Hotel Annapurna",
    price: 100,
    img: Hotel2,
  },
  {
    id: 3,
    name: "Hotel Radisson",
    price: 80,
    img: Hotel3,
  },
  {
    id: 4,
    name: "Lumbini Garden Retreat",
    price: 150,
    img: Hotel4,
  },
];

export const topDestinations = [
  {
    id: 1,
    name: "Kathmandu Durbar Square",
    price: 500,
    img: dest1,
    desc: "Kathmandu Durbar Square is the historic heart of Kathmandu with ancient temples, palaces and courtyards including the old royal palace.",
  },
  {
    id: 2,
    name: "Phewa Lake",
    price: 400,
    img: dest2,
    desc: "Phewa Lake is a large scenic lake in Pokhara with views of the Annapurna Range and activities like boating and paragliding.",
  },
  {
    id: 3,
    name: "Chitwan National Park",
    price: 350,
    img: dest3,
    desc: "Chitwan National Park protects rare wildlife like one-horned rhinos, Royal Bengal tigers and Gharial crocodiles.",
  },
  {
    id: 4,
    name: "Lumbini Sacred Garden",
    price: 300,
    img: dest4,
    desc: "Lumbini Sacred Garden contains ancient Buddhist monasteries, stupas and the exact birthplace of Buddha.",
  },
];

export const travelPackages = [
  {
    id: 1,
    name: "Boudha",
    price: 1000,
    img: Boudha,
    desc: "Boudha, the heart of Kathmandu’s spiritual life, is an enchanting destination that promises a journey through serenity and tradition",
  },
  {
    id: 2,
    name: "Pokhara",
    price: 800,
    img: Pokhara,
    desc: "Pokhara, known as the city of lakes and the gateway to the Himalayas, is one of Nepal's most scenic and popular destinations",
  },
  {
    id: 3,
    name: "Chitwan",
    price: 1200,
    img: Chitwan,
    desc: "Chitwan National Park, Nepal's first national park, is home to rare flora and fauna including the one-horned rhino and Royal Bengal tiger",
  },
  {
    id: 4,
    name: "Lumbini",
    price: 500,
    img: Lumbini,
    desc: "Lumbini, the birthplace of Lord Buddha, is one of the world's most important spiritual pilgrimage sites and a UNESCO World Heritage Site",
  },
];

export const thingsToDo = [
  {
    id: 1,
    name: "Swimming",
    price: 100,
    img: swimming,
  },
  {
    id: 2,
    name: "Gym",
    price: 50,
    img: gym,
  },
  {
    id: 3,
    name: "Spa",
    price: 150,
    img: spa,
  },
  {
    id: 4,
    name: "Tennis Court",
    price: 80,
    img: tennis,
  },
];

export const hotelDetails = [
  {
    id: 11,
    name: "About",
    to: "#about",
  },
  {
    id: 12,
    name: "Location",
    to: "#location",
  },
  {
    id: 13,
    name: "Reviews",
    to: "#reviews",
  },
];

export const destination = [
  {
    id: 1,
    title: "Solukhumbu",
    weather: "rainy",
    img: Solukhumbu,
    desc: "Nestled amidst the majestic Himalayas, Solukhumbu is a treasure trove of natural beauty and cultural richness. Home to the iconic Mount Everest, it beckons adventurers and peace-seekers alike with its serene landscapes and vibrant Sherpa heritage. Imagine embarking on the legendary Everest Base Camp trek, where each step unfolds panoramic vistas and brings you closer to the highest point on Earth. Enrich your spirit at the ancient Tengboche Monastery, a sanctuary of tranquility and faith, set against the backdrop of awe-inspiring peaks. The pristine Gokyo Lakes, with their crystal-clear waters reflecting the sky, offer a moment of reflection and wonder. Whether it’s the thrill of landing at the daring Lukla Airport or the allure of witnessing the Khumbu Glacier's grandeur, Solukhumbu is an experience that transcends the ordinary, promising memories that will elevate your soul",
  },
  {
    id: 2,
    title: "Boudha",
    weather: "sunny",
    img: Boudha,
    desc: "Boudha, the heart of Kathmandu’s spiritual life, is an enchanting destination that promises a journey through serenity and tradition. At its core stands the magnificent Boudhanath Stupa, a UNESCO World Heritage site and one of the largest stupas in the world, radiating peace with its all-seeing eyes1. Wander the vibrant streets lined with colorful prayer flags, explore the myriad of monasteries, and immerse yourself in the sacred chants that fill the air. Indulge in the local cuisine, savoring dishes like laphing and thukpa, and find tranquility at the Ghyoilisang Peace Park. Whether you’re seeking spiritual awakening or cultural exploration, Boudha’s unique blend of chaos and calm offers an unforgettable experience that beckons travelers from all corners of the globe",
  },
  {
    id: 3,
    title: "Pokhara",
    weather: "cloudy",
    img: Pokhara,
    desc: "Discover the enchanting city of Pokhara, a serene oasis nestled in the heart of Nepal’s panoramic Annapurna region. This tranquil paradise offers a harmonious blend of natural wonders and cultural experiences. Glide across the reflective waters of Phewa Lake, where the Annapurna mountains cast their grandeur upon the surface1. Ascend to the World Peace Pagoda, perched atop a hill, offering a vantage point for breathtaking views that promise to leave you spellbound2. Adventure seekers can revel in the thrill of paragliding amidst the Himalayan winds or trek the famous Annapurna Circuit. For those seeking solace, the sacred Barahi Temple and the profound International Mountain Museum beckon with tales of spirituality and mountaineering glory3. Pokhara is not just a destination; it’s an experience that will captivate your heart and soul, urging you to return to its beauty time and again.",
  },
  {
    id: 4,
    title: "Lumbini",
    weather: "sunny",
    img: Lumbini,
    desc: "Lumbini, the revered birthplace of Lord Buddha, is a beacon of peace and spirituality that resonates with the echoes of enlightenment. Here, the Maya Devi Temple stands as a testament to the sacred origins of Buddhism, inviting pilgrims and tourists alike to witness the very spot where Queen Maya Devi gave birth to Siddhartha Gautama1. The Bodhi Tree, adorned with fluttering prayer flags, offers a serene space for meditation and reflection, while the Mayadevi Pond provides a tranquil setting for contemplation1. The Ashoka Pillar, erected by Emperor Ashoka himself, marks this hallowed ground with ancient inscriptions, further solidifying Lumbini’s significance1. With its array of monasteries representing different Buddhist traditions from around the world, Lumbini is not just a destination; it’s a journey through the spiritual heart of humanity, promising a profound and transformative experience for all who visit.",
  },
  {
    id: 5,
    title: "Dharan",
    weather: "sunny",
    img: Dharan,
    desc: "Dharan, a vibrant city at the foothills of the Mahabharata range, is a gateway to the eastern Himalayas and a melting pot of diverse cultures. Explore the sacred Budha Subba Temple, where wishes are believed to come true, or marvel at the Namaste Falls, cascading down to form a natural 'namaste’. The central Pindeshwor Temple invites you to witness the eternal flame and feel the spiritual energy during the auspicious months1. For breathtaking views, ascend the Vijayapur Hill, and let the panorama of the city and beyond captivate your senses. Whether you’re seeking adventure, spirituality, or simply a taste of local life, Dharan’s rich tapestry of experiences promises an unforgettable journey",
  },
];

export const hotelPage = [
  {
    id: "1",
    name: "Hotel Yak & Yeti",
    price: 120,
    img: "https://res.cloudinary.com/soragatrasambandha/image/upload/f_auto,q_auto/v1/WanderMate/tv5jbv6wn68crhqdjm1b",
    rating: 5,
    freeCancellation: true,
    reserveNow: true,
    desc: "Hotel Yak & Yeti is a luxurious 5-star hotel located in the heart of Kathmandu, offering world-class amenities and exceptional service. Guests can indulge in the hotel's opulent accommodations, featuring elegantly appointed rooms and suites with modern amenities. The hotel boasts an array of dining options, from fine dining restaurants to casual cafes, catering to diverse culinary preferences. Additionally, it features a state-of-the-art fitness center, a rejuvenating spa, and a stunning outdoor pool, providing guests with ample opportunities for relaxation and rejuvenation.",
  },
  {
    id: "2",
    name: "Hotel Annapurna",
    price: 100,
    img: "https://res.cloudinary.com/soragatrasambandha/image/upload/f_auto,q_auto/v1/WanderMate/zgpubhnmahhywx21t1j2",
    rating: 5,
    freeCancellation: true,
    reserveNow: true,
    desc: "Hotel Annapurna is a renowned 5-star hotel in Kathmandu, offering stunning views of the Himalayas and a range of luxurious amenities. Guests can enjoy the hotel's spacious and elegantly designed rooms, which provide a perfect blend of comfort and style. The hotel features multiple dining options, including a rooftop restaurant with panoramic views of the city and the majestic mountains. Additionally, guests can unwind at the hotel's spa, take a dip in the outdoor pool, or stay active at the well-equipped fitness center.",
  },
  {
    id: "3",
    name: "Hotel Radisson",
    price: 80,
    img: "https://res.cloudinary.com/soragatrasambandha/image/upload/f_auto,q_auto/v1/WanderMate/ymdp7tcjizdaoiiytyio",
    rating: 3,
    freeCancellation: true,
    reserveNow: true,
    desc: "Hotel Radisson is a modern and stylish 5-star hotel located in the heart of Kathmandu, offering exceptional service and a range of amenities. The hotel features contemporary and well-appointed rooms with modern amenities, ensuring a comfortable and luxurious stay for guests. Guests can indulge in a variety of dining options, from international cuisine to local Nepali delicacies, catering to diverse tastes. The hotel also boasts a state-of-the-art fitness center, a relaxing spa, and a rooftop pool with stunning city views, providing guests with ample opportunities for relaxation and rejuvenation.",
  },
  {
    id: "4",
    name: "Lumbini Garden Retreat",
    price: 150,
    img: "https://res.cloudinary.com/soragatrasambandha/image/upload/f_auto,q_auto/v1/WanderMate/snng9ztpxqockoxj4v7n",
    rating: 5,
    freeCancellation: true,
    reserveNow: true,
    desc: "Lumbini Garden Retreat is a peaceful and serene 5-star hotel located in the birthplace of Lord Buddha, offering a tranquil atmosphere and a range of amenities. Guests can immerse themselves in the hotel's serene surroundings, with lush gardens and peaceful courtyards that provide a perfect setting for relaxation and spiritual rejuvenation. The hotel features spacious and elegantly designed rooms, with traditional Nepali touches and modern amenities. Guests can indulge in the hotel's wellness offerings, including yoga and meditation sessions, or explore the nearby UNESCO World Heritage Site of Lumbini, the birthplace of Buddha.",
  },
  {
    id: "5",
    name: "Hyatt Regency",
    price: 180,
    img: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/6608967321245190-d9dabdf82d2611eabcfc0242ac110003.jpg",
    rating: 4,
    freeCancellation: true,
    reserveNow: true,
    desc: "Hyatt Regency is a luxurious 4-star hotel located in Kathmandu, offering modern amenities, exceptional service, and a range of dining options. The hotel features stylish and contemporary rooms with modern amenities, ensuring a comfortable and enjoyable stay for guests. Guests can indulge in a variety of dining experiences, from international cuisine to local Nepali delicacies, catering to diverse tastes. The hotel also boasts a state-of-the-art fitness center, a relaxing spa, and an outdoor pool, providing guests with ample opportunities for relaxation and rejuvenation.",
  },
];

export const travelPackagesPage = [
  {
    id: "6",
    name: "Marriott Hotel",
    price: 200,
    img: "https://royalcollege.edu.np/wp-content/uploads/2020/04/HQ5A8705_20190611131701.jpg",
    rating: 5,
    freeCancellation: false,
    reserveNow: true,
    desc: "Marriott Hotel is a world-renowned 5-star hotel located in Kathmandu, offering luxurious accommodations, exceptional service, and a range of amenities. Guests can indulge in the hotel's opulent rooms and suites, featuring elegant decor, modern amenities, and stunning views of the city or the Himalayas. The hotel boasts multiple dining options, from fine dining restaurants to casual cafes, catering to diverse culinary preferences. Additionally, guests can unwind at the hotel's spa, stay active at the well-equipped fitness center, or take a dip in the outdoor pool, surrounded by lush gardens.",
  },
  {
    id: "7",
    name: "Soaltee Crowne Plaza",
    price: 160,
    img: "https://lh4.googleusercontent.com/proxy/cguEeVMN81BkYeeUl8EpVCzts4PTtUcx1H2TSsw-5hzcHhYY3-DvdZviVpr3GrzSLAE4cG7qNqE",
    rating: 4,
    freeCancellation: true,
    reserveNow: false,
    desc: "Soaltee Crowne Plaza is a 4-star hotel located in Kathmandu, offering comfortable accommodations, a range of amenities, and exceptional service. The hotel features well-appointed rooms with modern amenities, ensuring a comfortable and enjoyable stay for guests. Guests can indulge in a variety of dining options, from international cuisine to local Nepali delicacies, catering to diverse tastes. The hotel also boasts a fitness center, a relaxing spa, and an outdoor pool, providing guests with ample opportunities for relaxation and rejuvenation.",
  },
];

export const reviews = [
  {
    id: "1",
    hotelId: "1",
    rating: 5,
    comment: "Great place to stay",
    user: "User name",
    date: "2020-01-01",
    userImage:
      "https://res.cloudinary.com/soragatrasambandha/image/upload/f_auto,q_auto/juzdfyafpfijrb8nhkfa",
  },
  {
    id: "2",
    hotelId: "3",
    rating: 5,
    comment: "Great place to stay",
    user: "User name",
    date: "2020-01-01",
    userImage:
      "https://res.cloudinary.com/soragatrasambandha/image/upload/f_auto,q_auto/juzdfyafpfijrb8nhkfa",
  },
  {
    id: "3",
    hotelId: "2",
    rating: 5,
    comment: "Great place to stay",
    user: "User name",
    date: "2020-01-01",
    userImage:
      "https://res.cloudinary.com/soragatrasambandha/image/upload/f_auto,q_auto/juzdfyafpfijrb8nhkfa",
  },
  {
    id: "4",
    hotelId: "1",
    rating: 5,
    comment: "Great place to stay",
    user: "User name",
    date: "2020-01-01",
    userImage:
      "https://res.cloudinary.com/soragatrasambandha/image/upload/f_auto,q_auto/juzdfyafpfijrb8nhkfa",
  },
  {
    id: "5",
    hotelId: "1",
    rating: 5,
    comment: "Great place to stay",
    user: "User name",
    date: "2020-01-01",
    userImage:
      "https://res.cloudinary.com/soragatrasambandha/image/upload/f_auto,q_auto/juzdfyafpfijrb8nhkfa",
  },
  {
    id: "6",
    hotelId: "1",
    rating: 5,
    comment: "Great place to stay",
    user: "User name",
    date: "2020-01-01",
    userImage:
      "https://res.cloudinary.com/soragatrasambandha/image/upload/f_auto,q_auto/juzdfyafpfijrb8nhkfa",
  },
];

export const userData = [
  {
    id: "1",
    name: "sora",
    email: "user@gmail.com",
    password: "passuuserUwU",
    image:
      "https://res.cloudinary.com/soragatrasambandha/image/upload/v1719430781/ekmdys34ldonak4gbrdz.jpg",
    coverImage:
      "https://res.cloudinary.com/soragatrasambandha/image/upload/v1719430786/yyzbkc6drznfthfadwzc.jpg",
    bio: "My name is Sora because I was born during a thunderstorm, and 'Sora' means 'sky' in Japanese. The raging storm outside was a powerful force of nature, and my parents wanted to give me a name that reflected the majesty and beauty of the sky.",
  },
];


export const adminSidebar = [
  {
    id: 1,
    to: "/dashboard",
    name: "Dashboard",
  },
  {
    id: 2,
    to: "/dashboard/manage-hotels",
    name: "Hotels",
  },
  {
    id: 3,
    to: "/dashboard/manage-travelPackages",
    name: "Travel Packages",
  },
  {
    id: 4,
    to: "/dashboard/Destination",
    name: "Destination",
  },
  {
    id: 5,
    to: "/dashboard/things-to-do",
    name: "Things To Do",
  },
  // {
  //   id: 6,
  //   to: "dashboard/manage-reviews",
  //   name: "Reviews",
  // },

];