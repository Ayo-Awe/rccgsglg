export interface Event {
  id: number;
  title: string;
  description: string;
  schedule: string;
  image: string;
  link?: string;
}

export const events: Event[] = [
  {
    id: 1,
    title: "Sunday Worship - Celebration Service",
    description:
      "Join us for our weekly Celebration Service where we worship, praise, and grow in faith together.",
    schedule: "Sundays, 11:00 AM - 2:00 PM",
    image: "/events/be-single-out.jpg",
  },
  {
    id: 2,
    title: "RCCG Monthly Holy Ghost Service",
    description:
      "Experience the move of the Holy Spirit in powerful ministry, signs, and wonders. Watch live.",
    schedule: "First Friday of Every Month",
    image: "/events/holy-ghost-service.jpg",
    link: "https://www.youtube.com/@rccglive",
  },
  {
    id: 3,
    title: "Thursday Worship - Digging Deep & Faith Clinic",
    description:
      "Bible Study and Faith Clinic sessions for spiritual growth and addressing life challenges through God's Word.",
    schedule: "Thursdays, 6:00 PM - 8:00 PM",
    image: "/events/faith-clinic.jpg",
  },
  {
    id: 4,
    title: "An Hour At His Throne",
    description:
      "An intensive one-hour prayer session dedicated to intercessory prayer and communion with God.",
    schedule: "First Sunday, 11:00 AM - 12:00 PM",
    image: "/events/prayer-hour.jpg",
  },
  {
    id: 5,
    title: "Monthly Thanksgiving Service",
    description:
      "Celebrate God's faithfulness and blessings in your life with the congregation.",
    schedule: "First Sunday, 12:00 PM - 2:00 PM",
    image: "/heroes/give_hero.jpg",
  },
  {
    id: 6,
    title: "Night Vigil",
    description:
      "Workers Leadership Training and intensive prayer session for spiritual empowerment and intercession.",
    schedule: "Second Friday, 10:30 PM - 4:30 AM",
    image: "/events/night-vigil.jpg",
  },
  {
    id: 7,
    title: "Special Praise Evening",
    description:
      "Musical praise concert and testimonies celebrating God's goodness and mighty works.",
    schedule: "Last Friday, 6:00 PM - 9:00 PM",
    image: "/heroes/ministries_hero.jpg",
  },
  {
    id: 8,
    title: "Special Empowerment & Discipleship Sunday",
    description:
      "Focused teaching and training for spiritual development and Christian maturity.",
    schedule: "Second Sunday of the Month",
    image: "/events/holy-ghost-anointing.jpg",
  },
  {
    id: 9,
    title: "Intercessory & Petition Thursday",
    description:
      "Dedicated prayer session focusing on intercession for the church, nation, and personal petitions.",
    schedule: "Last Thursday, 6:30 PM - 8:30 PM",
    image: "/events/petition.jpg",
  },
];