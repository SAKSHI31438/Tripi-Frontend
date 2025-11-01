"use client";
// import img1 from "/images/travel_stories/pexels-optical-chemist-340351297-30685037.jpg";
// import img2 from "/images/travel_stories/pexels-optical-chemist-340351297-31256374.jpg";
// import img3 from "/images/travel_stories/pexels-optical-chemist-340351297-31318003.jpg";
// import img4 from "/images/travel_stories/pexels-optical-chemist-340351297-31318013.jpg";
// import img5 from "/images/travel_stories/pexels-optical-chemist-340351297-31888570.jpg";
// import img6 from "/images/travel_stories/pexels-optical-chemist-340351297-31999029.jpg";
// import img7 from "/images/travel_stories/pexels-robertforevr-18246355.jpg";
// import img8 from "/images/travel_stories/pexels-vanessa-garcia-6324297.jpg";

export const destinationData = [
  {
    id: 1,
    image: "/images/d1.jpg",
    country: "France",
    travelers: "150,000",
  },
  {
    id: 2,
    image: "/images/d2.jpg",
    country: "USA",
    travelers: "250,000",
  },
  {
    id: 3,
    image: "/images/d3.jpg",
    country: "Italy",
    travelers: "180,000",
  },
  {
    id: 4,
    image: "/images/d4.jpg",
    country: "Japan",
    travelers: "200,000",
  },
  {
    id: 5,
    image: "/images/d5.jpg",
    country: "Australia",
    travelers: "120,000",
  },
  {
    id: 6,
    image: "/images/d6.jpg",
    country: "Canada",
    travelers: "175,000",
  },
  {
    id: 7,
    image: "/images/d7.jpg",
    country: "Germany",
    travelers: "160,000",
  },
  {
    id: 8,
    image: "/images/d8.jpg",
    country: "Brazil",
    travelers: "140,000",
  },
];

export const hotelsData = [
  {
    id: 1,
    image: "/images/h1.jpg",
    name: "The Grand London Resort and Spa",
    location: "Westminster, London",
    rating: 4.6,
    reviews: "2,345",
    price: "72",
  },
  {
    id: 2,
    image: "/images/h2.jpg",
    name: "Barcelona City Suites Deluxe Hotel",
    location: "Ciutat Vella, Barcelona",
    rating: 4.7,
    reviews: "1,912",
    price: "85",
  },
  {
    id: 3,
    image: "/images/h3.jpg",
    name: "Times Square Premium Stay Hotel",
    location: "Manhattan, New York",
    rating: 4.9,
    reviews: "3,420",
    price: "95",
  },
  {
    id: 4,
    image: "/images/h4.jpg",
    name: "Hilton Roma Luxury Hotel Palace",
    location: "Vaticano Prati, Rome",
    rating: 4.5,
    reviews: "2,876",
    price: "68",
  },
];

export const toursData = [
  {
    id: 1,
    image: "/images/t1.jpg",
    title: "Historic Wonders of Stonehenge & Oxford Tour",
    location: "Wiltshire, England",
    time: "12+ hours",
    type: "Cultural & Historical Tours",
    rating: 4.9,
    reviews: "1,245",
    price: "65",
  },
  {
    id: 2,
    image: "/images/t2.jpg",
    title: "Barcelona Gothic Quarter Walking Tour",
    location: "Ciutat Vella, Barcelona",
    time: "3+ hours",
    type: "Walking & Sightseeing Tours",
    rating: 4.7,
    reviews: "876",
    price: "50",
  },
  {
    id: 3,
    image: "/images/t3.jpg",
    title: "Thames Luxury Boat Cruise with Dinner",
    location: "London, United Kingdom",
    time: "2–3 hours",
    type: "Private & Luxury Cruises",
    rating: 4.8,
    reviews: "2,300",
    price: "110",
  },
  {
    id: 4,
    image: "/images/t4.jpg",
    title: "Edinburgh Haunted History Walking Tour",
    location: "Edinburgh, Scotland",
    time: "2+ hours",
    type: "Ghost & Mystery Tours",
    rating: 4.6,
    reviews: "1,050",
    price: "40",
  },
];

export const reviewData = [
  {
    id: 1,
    name: "John Doe",
    review:
      "The service exceeded my expectations. The team was professional, and I couldn't be happier with the results. Highly recommended to everyone!",
    image: "/images/u1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    review:
      "I am thoroughly impressed with the attention to detail and quality. They truly understand customer needs and deliver outstanding results. Wonderful experience!",
    image: "/images/u2.jpg",
  },
  {
    id: 3,
    name: "Michael Brown",
    review:
      "Exceptional quality and fantastic customer service! The project was delivered on time and exactly as I wanted. I will definitely use their services again.",
    image: "/images/u3.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    review:
      "Outstanding results! The team was efficient, and their professionalism was remarkable. Everything was done perfectly. I highly recommend their expertise to everyone.",
    image: "/images/u1.jpg",
  },
  {
    id: 5,
    name: "Chris Wilson",
    review:
      "Amazing service! They exceeded all expectations and delivered a product that I am extremely happy with. The communication throughout the project was excellent.",
    image: "/images/u2.jpg",
  },
  {
    id: 6,
    name: "Sarah Johnson",
    review:
      "Fantastic experience! They listened carefully to my requirements and delivered exactly what I needed. Their attention to detail is truly commendable.",
    image: "/images/u3.jpg",
  },
  {
    id: 7,
    name: "David Lee",
    review:
      "Absolutely incredible service! The team was supportive and responsive, making sure everything was perfect. I will definitely recommend them to my friends.",
    image: "/images/u1.jpg",
  },
  {
    id: 8,
    name: "Sophia White",
    review:
      "Five-star service from start to finish! The dedication and skill of the team made all the difference. Truly an exceptional experience I won’t forget.",
    image: "/images/u2.jpg",
  },
];

export const blogData = [
  {
    id: 1,
    title: "Exploring the Hidden Beaches of Goa",
    description:
      "Discover the untouched beauty of Goa’s secret beaches where calm waves meet golden sands.",
    category: "Beach Travel",
    date: "2025-07-10",
    author: "Ananya Sharma",
    image: "/images/cover image blog.jpg",
    email: "ananya.sharma@example.com",
  },
  {
    id: 2,
    title: "A Food Lover’s Guide to Street Food in Bangkok",
    description:
      "From Pad Thai to Mango Sticky Rice, experience the flavors of Thailand’s buzzing street markets.",
    category: "Food & Travel",
    date: "2025-06-28",
    author: "Rohan Mehta",
    image: "/images/cover image blog.jpg",
    email: "ananya.sharma@example.com",
  },
  {
    id: 3,
    title: "Top 7 Hiking Trails in Himachal Pradesh",
    description:
      "Pack your bags and boots! These trails offer breathtaking Himalayan views for every trekker.",
    category: "Adventure Travel",
    date: "2025-07-15",
    author: "Priya Verma",
    image: "/images/cover image blog.jpg",
    email: "ananya.sharma@example.com",
  },
  {
    id: 4,
    title: "Why Paris is Still the City of Love",
    description:
      "From the Eiffel Tower to cozy cafés, explore what makes Paris the ultimate romantic escape.",
    category: "Romantic Travel",
    date: "2025-08-01",
    author: "Aarav Kapoor",
    image: "/images/cover image blog.jpg",
    email: "ananya.sharma@example.com",
  },
  {
    id: 5,
    title: "Backpacking Through Europe on a Budget",
    description:
      "Learn how to explore multiple European cities without breaking the bank.",
    category: "Budget Travel",
    date: "2025-07-05",
    author: "Kavya Nair",
    image: "/images/cover image blog.jpg",
    email: "ananya.sharma@example.com",
  },
  {
    id: 6,
    title: "Discovering Rajasthan’s Royal Palaces",
    description:
      "Step into India’s history by visiting Jaipur, Jodhpur, and Udaipur’s majestic forts and palaces.",
    category: "Cultural Travel",
    date: "2025-06-20",
    author: "Manish Patel",
    image: "/images/cover image blog.jpg",
    email: "ananya.sharma@example.com",
  },
  {
    id: 7,
    title: "Top 10 Things to Do in New York City",
    description:
      "From Times Square to Central Park, here’s a must-do list for your first NYC trip.",
    category: "City Travel",
    date: "2025-07-30",
    author: "Neha Singh",
    image: "/images/cover image blog.jpg",
    email: "ananya.sharma@example.com",
  },
  {
    id: 8,
    title: "Experiencing Japan’s Cherry Blossom Season",
    description:
      "A dreamy guide to enjoying hanami, sakura festivals, and spring in Japan.",
    category: "Seasonal Travel",
    date: "2025-04-01",
    author: "Haruki Tanaka",
    image: "/images/cover image blog.jpg",
    email: "ananya.sharma@example.com",
  },
  {
    id: 9,
    title: "Island Hopping in the Maldives",
    description:
      "Clear waters, coral reefs, and private villas – discover paradise in the Maldives.",
    category: "Luxury Travel",
    date: "2025-07-22",
    author: "Ishita Gupta",
    image: "/images/cover image blog.jpg",
    email: "ananya.sharma@example.com",
  },
  {
    id: 10,
    title: "A Weekend Getaway to Daman & Diu",
    description:
      "Short on time? Explore peaceful beaches, Portuguese forts, and cultural vibes in just 2 days.",
    category: "Short Trips",
    date: "2025-08-05",
    author: "Sameer Khan",
    image: "/images/cover image blog.jpg",
    email: "ananya.sharma@example.com",
  },
];

export const travelerStories = [
  {
    id: 1,
    title: "A Weekend in Daman",
    story:
      "Loved the hidden beaches and peaceful vibe. The seafood at Devka Beach was the best!",
    traveler: "Priya",
    location: "Mumbai",
    image: "/images/travelStories/A Weekend in Daman.webp",
  },
  {
    id: 2,
    title: "Manali Trekking Adventure",
    story:
      "Triund trek was tough but worth it! Sunrise from the top was magical.",
    traveler: "Rahul",
    location: "Delhi",
    image: "/images/travelStories/Manali Trekking Adventure.jpg",
  },
  {
    id: 3,
    title: "Relaxing in Goa",
    story:
      "Best nightlife experience at Baga Beach. Will visit again with friends.",
    traveler: "Aisha",
    location: "Pune",
    image: "/images/travelStories/Relaxing in Goa.jpg",
  },
  {
    id: 4,
    title: "Backwaters of Kerala",
    story:
      "The houseboat stay felt like a dream. Authentic Kerala food made it even better.",
    traveler: "Ankit & Meera",
    location: "Jaipur",
    image: "/images/travelStories/Backwaters of Kerala.webp",
  },
  {
    id: 5,
    title: "Desert Safari in Jaisalmer",
    story:
      "Camel ride at sunset was unforgettable. The folk dance show at night was amazing.",
    traveler: "Neha",
    location: "Hyderabad",
    image: "/images/travelStories/Desert Safari in Jaisalmer.webp",
  },
  {
    id: 6,
    title: "Cherry Blossoms in Sikkim",
    story:
      "Cherry blossoms in full bloom – never thought I’d see this in India!",
    traveler: "Karthik",
    location: "Bangalore",
    image: "/images/travelStories/Cherry Blossoms in Sikkim.jpg",
  },
  {
    id: 7,
    title: "Spiritual Journey in Varanasi",
    story:
      "Witnessing the Ganga Aarti at Dashashwamedh Ghat was a soul-stirring experience.",
    traveler: "Simran",
    location: "Lucknow",
    image: "/images/travelStories/Spiritual Journey in Varanasi.jpg",
  },
  {
    id: 8,
    title: "Snowfall in Shimla",
    story:
      "First time seeing snow! Kufri adventure rides made it extra special.",
    traveler: "Aman",
    location: "Chandigarh",
    image: "/images/travelStories/Snowfall in Shimla.jpg",
  },
  {
    id: 9,
    title: "Exploring Jaipur",
    story:
      "The architecture of Hawa Mahal and Amber Fort blew my mind. Rajasthani food was delicious!",
    traveler: "Ritika",
    location: "Ahmedabad",
    image: "/images/travelStories/Exploring Jaipur.webp",
  },
  {
    id: 10,
    title: "Andaman Island Escape",
    story:
      "Snorkeling at Havelock Island was breathtaking. Crystal clear waters and coral reefs were magical.",
    traveler: "Arjun",
    location: "Chennai",
    image: "/images/travelStories/Andaman Island Escape.jpg",
  },
];

export const moreTravelerStories = [
  {
    id: 11,
    title: "Dal Lake Shikara Ride",
    story:
      "The shikara ride at sunset in Srinagar was so peaceful. Floating markets were unique!",
    traveler: "Sana",
    location: "Kashmir",
    image: "/images/moreTraveleStories/dal lake.webp",
  },
  {
    id: 12,
    title: "Golden Temple Serenity",
    story:
      "Early morning prayers at the Golden Temple felt divine. The langar was truly heartwarming.",
    traveler: "Harpreet",
    location: "Amritsar",
    image: "/images/moreTraveleStories/golden temple.webp",
  },
  {
    id: 13,
    title: "Cycling in Pondicherry",
    story:
      "Exploring French colonies on cycle was fun. Cafes had amazing croissants!",
    traveler: "Ananya",
    location: "Chennai",
    image: "/images/moreTraveleStories/Cycling in Pondicherry.webp",
  },
  {
    id: 14,
    title: "Wildlife Safari in Jim Corbett",
    story: "Saw elephants and even a tiger! Nature at its rawest form.",
    traveler: "Vikram",
    location: "Dehradun",
    image: "/images/moreTraveleStories/Wildlife Safari in Jim Corbett.webp",
  },
  {
    id: 15,
    title: "Tea Gardens of Munnar",
    story:
      "The lush green hills and tea aroma were refreshing. Best place to relax.",
    traveler: "Divya",
    location: "Cochin",
    image: "/images/moreTraveleStories/Tea Gardens of Munnar.jpg",
  },
  {
    id: 16,
    title: "Cultural Walk in Kolkata",
    story:
      "Durga Puja celebrations were larger than life! Street food was mind-blowing.",
    traveler: "Rohit",
    location: "Kolkata",
    image: "/images/moreTraveleStories/Cultural Walk in Kolkata.jpg",
  },
  {
    id: 17,
    title: "Adventure in Rishikesh",
    story:
      "River rafting in Ganga gave me the thrill of my life. Yoga retreat was peaceful too.",
    traveler: "Meera",
    location: "Delhi",
    image: "/images/moreTraveleStories/Adventure in Rishikesh.webp",
  },
  {
    id: 18,
    title: "Elephanta Caves Exploration",
    story:
      "Boat ride to Elephanta Island was lovely. The rock carvings were stunning.",
    traveler: "Farhan",
    location: "Mumbai",
    image: "/images/moreTraveleStories/Elephanta Caves Exploration.webp",
  },
  {
    id: 19,
    title: "Kutch Rann Utsav",
    story:
      "White desert under the full moon was magical. Folk music and dance made it lively.",
    traveler: "Neelam",
    location: "Rajkot",
    image: "/images/moreTraveleStories/Kutch Rann Utsav.jpg",
  },
  {
    id: 20,
    title: "Exploring Mysore Palace",
    story: "The palace lit up at night looked straight out of a fairy tale!",
    traveler: "Abhishek",
    location: "Bangalore",
    image: "/images/moreTraveleStories/Exploring Mysore Palace.webp",
  },
];

export const destinationPage = [
  {
    id: 1,
    name: "Goa Beach Paradise",
    location: "Goa, India",
    image: "/images/destinationpage1/Goa Beach Paradise.webp",
    description:
      "Golden sands, clear blue water, and vibrant nightlife — Goa offers the perfect mix of relaxation and excitement for every traveler.",
    rating: 4.8,
    price: 12000,
    category: "Beach",
    reviewsCount: 324,
    bestTimeToVisit: "November to February",
  },
  {
    id: 2,
    name: "Manali Adventure Valley",
    location: "Himachal Pradesh, India",
    image: "/images/destinationpage1/Manali Adventure Valley.jpg",
    description:
      "Nestled in the Himalayas, Manali is the hub for adventure seekers offering paragliding, trekking, and snow activities.",
    rating: 4.7,
    price: 9500,
    category: "Adventure",
    reviewsCount: 278,
    bestTimeToVisit: "October to March",
  },
  {
    id: 3,
    name: "Jaipur Heritage Tour",
    location: "Rajasthan, India",
    image: "/images/destinationpage1/Jaipur Heritage Tour.webp",
    description:
      "The Pink City of India offers rich history, royal palaces, and vibrant markets that bring Rajasthani culture to life.",
    rating: 4.6,
    price: 8000,
    category: "Cultural",
    reviewsCount: 412,
    bestTimeToVisit: "October to March",
  },
  {
    id: 4,
    name: "Kerala Backwaters Escape",
    location: "Alleppey, Kerala, India",
    image: "/images/destinationpage1/Kerala Backwaters Escape.webp",
    description:
      "Cruise through tranquil backwaters surrounded by lush greenery and enjoy authentic South Indian hospitality.",
    rating: 4.9,
    price: 11000,
    category: "Nature",
    reviewsCount: 351,
    bestTimeToVisit: "August to February",
  },
  {
    id: 5,
    name: "Ladakh Mountain Expedition",
    location: "Leh, Ladakh, India",
    image: "/images/destinationpage1/Ladakh Mountain Expedition.webp",
    description:
      "Known as the land of high passes, Ladakh offers surreal landscapes, monasteries, and thrilling bike adventures.",
    rating: 4.9,
    price: 15000,
    category: "Adventure",
    reviewsCount: 290,
    bestTimeToVisit: "June to September",
  },
  {
    id: 6,
    name: "Andaman Island Getaway",
    location: "Port Blair, Andaman & Nicobar Islands",
    image: "/images/destinationpage1/Andaman Island Getaway.webp",
    description:
      "Pristine beaches, coral reefs, and crystal-clear waters make Andaman a paradise for scuba divers and honeymooners.",
    rating: 4.8,
    price: 18000,
    category: "Beach",
    reviewsCount: 365,
    bestTimeToVisit: "October to May",
  },
  {
    id: 7,
    name: "Varanasi Spiritual Journey",
    location: "Varanasi, Uttar Pradesh, India",
    image: "/images/destinationpage1/Varanasi Spiritual Journey.webp",
    description:
      "Experience the spirituality of India on the ghats of the Ganges — a soulful destination for culture and peace.",
    rating: 4.5,
    price: 7000,
    category: "Cultural",
    reviewsCount: 198,
    bestTimeToVisit: "November to February",
  },
  {
    id: 8,
    name: "Rishikesh River Rafting",
    location: "Rishikesh, Uttarakhand, India",
    image: "/images/destinationpage1/Rishikesh River Rafting.cms",
    description:
      "A hub for adventure lovers and yoga seekers — enjoy river rafting and breathtaking views of the Himalayas.",
    rating: 4.7,
    price: 8500,
    category: "Adventure",
    reviewsCount: 245,
    bestTimeToVisit: "March to May",
  },
  {
    id: 9,
    name: "Darjeeling Tea Hills",
    location: "Darjeeling, West Bengal, India",
    image: "/images/destinationpage1/Darjeeling Tea Hills.webp",
    description:
      "Famous for its scenic toy train rides and lush tea gardens — Darjeeling is a charming hill station escape.",
    rating: 4.6,
    price: 9000,
    category: "Nature",
    reviewsCount: 167,
    bestTimeToVisit: "October to April",
  },
];

export const destinationPage2 = [
  {
    id: 1,
    name: "Kovalam Sun-Kissed Shores",
    location: "Kovalam, Kerala, India",
    image: "/images/destinationpage2/Kovalam Sun-Kissed Shores.webp",
    description:
      "Golden beaches and serene sunsets make Kovalam a perfect destination for relaxation and water sports.",
    rating: 4.7,
    price: 13000,
    category: "Beach",
    reviewsCount: 289,
    bestTimeToVisit: "November to February",
  },
  {
    id: 2,
    name: "Shimla Hill Retreat",
    location: "Shimla, Himachal Pradesh, India",
    image: "/images/destinationpage2/Shimla Hill Retreat.webp",
    description:
      "A scenic hill station surrounded by pine forests, ideal for trekking, sightseeing, and cool weather escapes.",
    rating: 4.6,
    price: 9500,
    category: "Adventure",
    reviewsCount: 310,
    bestTimeToVisit: "March to June",
  },
  {
    id: 3,
    name: "Udaipur Royal Experience",
    location: "Udaipur, Rajasthan, India",
    image: "/images/destinationpage2/Udaipur Royal Experience.jpg",
    description:
      "Explore the city of lakes and palaces, where royal architecture and vibrant markets meet in harmony.",
    rating: 4.8,
    price: 8500,
    category: "Cultural",
    reviewsCount: 398,
    bestTimeToVisit: "September to March",
  },
  {
    id: 4,
    name: "Alleppey Serenity Cruise",
    location: "Alleppey, Kerala, India",
    image: "/images/destinationpage2/Alleppey Serenity Cruise.jpg",
    description:
      "Drift along peaceful backwaters and witness traditional village life while enjoying a houseboat stay.",
    rating: 4.9,
    price: 11500,
    category: "Nature",
    reviewsCount: 340,
    bestTimeToVisit: "July to February",
  },
  {
    id: 5,
    name: "Leh High Pass Adventure",
    location: "Leh, Ladakh, India",
    image: "/images/destinationpage2/Leh High Pass Adventure.webp",
    description:
      "Adventure enthusiasts can explore stunning landscapes, monasteries, and challenging mountain passes.",
    rating: 4.9,
    price: 15500,
    category: "Adventure",
    reviewsCount: 275,
    bestTimeToVisit: "June to September",
  },
  {
    id: 6,
    name: "Havelock Island Paradise",
    location: "Havelock Island, Andaman & Nicobar Islands",
    image: "/images/destinationpage2/Havelock Island Paradise.webp",
    description:
      "White sandy beaches, crystal-clear waters, and colorful coral reefs make Havelock ideal for diving and snorkeling.",
    rating: 4.8,
    price: 18500,
    category: "Beach",
    reviewsCount: 360,
    bestTimeToVisit: "October to May",
  },
  {
    id: 7,
    name: "Khajuraho Temple Trail",
    location: "Khajuraho, Madhya Pradesh, India",
    image: "/images/destinationpage2/Khajuraho Temple Trail.webp",
    description:
      "Marvel at the intricate temple carvings and experience a spiritual journey through India's historic art and architecture.",
    rating: 4.5,
    price: 7200,
    category: "Cultural",
    reviewsCount: 210,
    bestTimeToVisit: "October to March",
  },
  {
    id: 8,
    name: "Ganga River Rafting, Uttarakhand",
    location: "Rishikesh, Uttarakhand, India",
    image: "/images/destinationpage2/Ganga River Rafting, Uttarakhand.webp",
    description:
      "Enjoy thrilling river rafting, yoga retreats, and Himalayan scenery in this adventure hotspot.",
    rating: 4.7,
    price: 8700,
    category: "Adventure",
    reviewsCount: 250,
    bestTimeToVisit: "March to June",
  },
  {
    id: 9,
    name: "Munnar Tea Gardens Escape",
    location: "Munnar, Kerala, India",
    image: "/images/destinationpage2/Munnar Tea Gardens Escape.jpg",
    description:
      "Walk through lush tea plantations, enjoy scenic viewpoints, and breathe in the fresh mountain air in Munnar.",
    rating: 4.6,
    price: 9200,
    category: "Nature",
    reviewsCount: 180,
    bestTimeToVisit: "September to April",
  },
  {
    id: 10,
    name: "Fatehpur Sikri Historical Tour",
    location: "Agra, Uttar Pradesh, India",
    image: "/images/destinationpage2/Fatehpur Sikri Historical Tour.jpg",
    description:
      "Step back in time exploring the stunning Mughal architecture and UNESCO World Heritage sites of Fatehpur Sikri.",
    rating: 4.7,
    price: 6700,
    category: "Historical",
    reviewsCount: 400,
    bestTimeToVisit: "October to March",
  },
  {
    id: 11,
    name: "Agra Historical Tour",
    location: "Agra, Uttar Pradesh, India",
    image: "/images/destinationpage1/Agra Historical Tour.webp",
    description:
      "Home to the majestic Taj Mahal, Agra offers a glimpse into the grandeur of Mughal architecture and Indian heritage.",
    rating: 4.8,
    price: 6500,
    category: "Historical",
    reviewsCount: 421,
    bestTimeToVisit: "October to March",
  },
];
