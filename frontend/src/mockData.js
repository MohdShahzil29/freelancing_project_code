// Mock data for Hotel Balaji Lodging
import familyRoomImage from "@/assets/WhatsApp Image 2026-02-02 at 10.12.34 AM (1).jpeg";

export const hotelInfo = {
  name: "Hotel Balaji Lodging",
  tagline: "Comfort, Convenience & Care",
  description:
    "Hotel Balaji Lodging is a comfortable and budget-friendly accommodation located in the heart of Amode, Shirpur (Maharashtra). We are committed to providing a pleasant stay with clean rooms, a peaceful environment, and courteous service for all our guests.",
  checkIn: "12:00 PM",
  checkOut: "11:00 AM",
  address:
    "Plot No. 7, 1st Floor, Agrasen Maharaj Complex, Amode, Shirpur – 425405",
  phone: ["9753436113", "9890436113"],
  email: "hotelbalajilodging@gmail.com",
  instagram:
    "https://www.instagram.com/hotel_balaji_lodging.shirpur?igsh=MWVwa2g3NmI1azUxbg==",
  whatsapp: "https://wa.me/message/EM4FVITLQW2ZL1",
  facebook: "https://www.facebook.com/share/1D2wuXrNYo/",
};

export const roomCategories = [
  {
    id: 1,
    name: "Deluxe Room",
    type: "AC",
    price: 2099,
    features: [
      "Air Conditioning",
      "Attached Bathroom",
      "TV",
      "Wi-Fi",
      "Hot Water",
    ],
    image:
      "https://customer-assets.emergentagent.com/job_7d5ec213-b347-4f24-800f-186f509b4f42/artifacts/q9mh15e8_IMG-20260131-WA0118.jpg",
  },
  {
    id: 2,
    name: "Deluxe Room",
    type: "Non AC",
    price: 1680,
    features: ["Fan", "Attached Bathroom", "TV", "Wi-Fi", "Hot Water"],
    image:
      "https://customer-assets.emergentagent.com/job_7d5ec213-b347-4f24-800f-186f509b4f42/artifacts/sj2mtxft_IMG-20260131-WA0108.jpg",
  },
  {
    id: 3,
    name: "Semi-Deluxe Room",
    type: "AC",
    price: 1399,
    features: ["Air Conditioning", "Attached Bathroom", "TV", "Hot Water"],
    image:
      "https://customer-assets.emergentagent.com/job_7d5ec213-b347-4f24-800f-186f509b4f42/artifacts/qz371h1i_IMG-20260131-WA0109.jpg",
  },
  {
    id: 4,
    name: "Semi-Deluxe Room",
    type: "Non AC",
    price: 999,
    features: ["Fan", "Attached Bathroom", "TV", "Hot Water"],
    image:
      "https://customer-assets.emergentagent.com/job_7d5ec213-b347-4f24-800f-186f509b4f42/artifacts/ze658wb5_IMG-20260131-WA0106.jpg",
  },
  {
    id: 5,
    name: "Family Room",
    type: "AC",
    price: 2499,
    features: [
      "Air Conditioning",
      "Multiple Beds",
      "Spacious",
      "Attached Bathroom",
      "TV",
      "Wi-Fi",
      "Hot Water",
    ],
    image: familyRoomImage,
  },
  {
    id: 6,
    name: "Family Room",
    type: "Non AC",
    price: 2199,
    features: [
      "Fan",
      "Multiple Beds",
      "Spacious",
      "Attached Bathroom",
      "TV",
      "Hot Water",
    ],
    image:
      "https://customer-assets.emergentagent.com/job_7d5ec213-b347-4f24-800f-186f509b4f42/artifacts/sj2mtxft_IMG-20260131-WA0108.jpg",
  },
];

export const guestReviews = [
  {
    id: 1,
    name: "Rajesh Kumar",
    rating: 5,
    comment:
      "Excellent service and very clean rooms. The staff was very helpful and friendly. Perfect location in Shirpur. Highly recommended for business travelers.",
    date: "January 2025",
  },
  {
    id: 2,
    name: "Priya Sharma",
    rating: 5,
    comment:
      "Great value for money! The rooms are spacious and well-maintained. The check-in process was smooth. Will definitely stay here again on my next visit to Shirpur.",
    date: "December 2024",
  },
  {
    id: 3,
    name: "Amit Patel",
    rating: 4,
    comment:
      "Good budget hotel with all basic amenities. The location is convenient and rooms are comfortable. Staff is courteous and responsive to all requests.",
    date: "November 2024",
  },
  {
    id: 4,
    name: "Sunita Desai",
    rating: 5,
    comment:
      "Perfect for family stay! We stayed in the family room and it was spacious and clean. Good hospitality and peaceful environment. Highly satisfied with our experience.",
    date: "October 2024",
  },
];

export const idPolicy = {
  title: "Guest Identification Policy",
  accepted: [
    { name: "Aadhaar Card", icon: "check" },
    { name: "Passport", icon: "check" },
  ],
  notAccepted: [{ name: "PAN Card", icon: "x" }],
  note: "Valid government-issued ID is mandatory for all guests at check-in.",
};

export const nearbyAttractions = [
  { name: "Shirpur City Center", distance: "2 km" },
  { name: "Local Market", distance: "1.5 km" },
  { name: "Bus Station", distance: "3 km" },
  { name: "Railway Station", distance: "15 km" },
];

export const amenities = [
  "24/7 Reception",
  "Free Wi-Fi",
  "Hot Water 24/7",
  "Room Service",
  "Parking Available",
  "CCTV Security",
  "Power Backup",
  "Daily Housekeeping",
];
