import { Star, Trophy, Heart, Zap, Shield, Sparkles } from 'lucide-react';

export const questions = [
  {
    question: "What's your ideal way to solve problems?",
    options: [
      { text: "With wit and clever strategies", hero: "mahesh" },
      { text: "Direct action and determination", hero: "ram" },
      { text: "Using humor and charm", hero: "allu" },
      { text: "With intensity and passion", hero: "prabhas" },
      { text: "Through intelligence and planning", hero: "nani" },
      { text: "With style and confidence", hero: "vijay" }
    ]
  },
  {
    question: "Your ideal movie genre would be:",
    options: [
      { text: "Stylish action thriller", hero: "mahesh" },
      { text: "High-energy mass entertainer", hero: "ram" },
      { text: "Comedy-drama with heart", hero: "allu" },
      { text: "Epic historical drama", hero: "prabhas" },
      { text: "Realistic slice-of-life", hero: "nani" },
      { text: "Commercial blockbuster", hero: "vijay" }
    ]
  },
  {
    question: "What's your biggest strength?",
    options: [
      { text: "Cool composure under pressure", hero: "mahesh" },
      { text: "Explosive energy and charisma", hero: "ram" },
      { text: "Natural charm and humor", hero: "allu" },
      { text: "Commanding presence", hero: "prabhas" },
      { text: "Relatability and authenticity", hero: "nani" },
      { text: "Mass appeal and style", hero: "vijay" }
    ]
  },
  {
    question: "Your ideal vacation spot:",
    options: [
      { text: "A sophisticated city break", hero: "mahesh" },
      { text: "An adventurous mountain trek", hero: "ram" },
      { text: "A fun beach resort with friends", hero: "allu" },
      { text: "An exotic, royal destination", hero: "prabhas" },
      { text: "A peaceful countryside retreat", hero: "nani" },
      { text: "A vibrant cultural festival", hero: "vijay" }
    ]
  },
  {
    question: "How do you handle fame and attention?",
    options: [
      { text: "With dignified grace", hero: "mahesh" },
      { text: "Embrace it with full energy", hero: "ram" },
      { text: "Use it to spread joy", hero: "allu" },
      { text: "Command respect naturally", hero: "prabhas" },
      { text: "Stay humble and grounded", hero: "nani" },
      { text: "Celebrate with the masses", hero: "vijay" }
    ]
  },
  {
    question: "Your philosophy in life:",
    options: [
      { text: "Excellence in everything", hero: "mahesh" },
      { text: "Live life to the fullest", hero: "ram" },
      { text: "Spread happiness everywhere", hero: "allu" },
      { text: "Destiny shapes greatness", hero: "prabhas" },
      { text: "Simple joys matter most", hero: "nani" },
      { text: "Entertain and inspire", hero: "vijay" }
    ]
  }
];

export const heroes = {
  mahesh: {
    name: "Mahesh Babu",
    title: "The Prince of Tollywood",
    description: "Like Mahesh Babu, you're sophisticated, charismatic, and have a natural royal aura. You handle situations with grace and style.",
    traits: ["Sophisticated", "Charismatic", "Stylish", "Cool-headed"],
    color: "from-blue-500 to-purple-600",
    icon: <Star className="w-8 h-8" />
  },
  ram: {
    name: "Ram Charan",
    title: "The Energetic Powerhouse",
    description: "You share Ram Charan's explosive energy and determination. You're passionate about everything you do and inspire others with your enthusiasm.",
    traits: ["Energetic", "Determined", "Passionate", "Dynamic"],
    color: "from-red-500 to-orange-600",
    icon: <Zap className="w-8 h-8" />
  },
  allu: {
    name: "Allu Arjun",
    title: "The Stylish Star",
    description: "Like Allu Arjun, you're the perfect blend of style, humor, and charm. You have a unique way of making everyone around you happy.",
    traits: ["Stylish", "Charming", "Humorous", "Trendy"],
    color: "from-green-500 to-teal-600",
    icon: <Sparkles className="w-8 h-8" />
  },
  prabhas: {
    name: "Prabhas",
    title: "The Rebel Star",
    description: "You embody Prabhas's commanding presence and larger-than-life personality. You're destined for greatness and inspire awe in others.",
    traits: ["Commanding", "Intense", "Loyal", "Epic"],
    color: "from-purple-500 to-pink-600",
    icon: <Shield className="w-8 h-8" />
  },
  nani: {
    name: "Nani",
    title: "The Natural Star",
    description: "Like Nani, you're genuine, relatable, and have a natural charm. You find beauty in simplicity and connect with people easily.",
    traits: ["Genuine", "Relatable", "Natural", "Humble"],
    color: "from-yellow-500 to-orange-500",
    icon: <Heart className="w-8 h-8" />
  },
  vijay: {
    name: "Vijay Deverakonda",
    title: "The Rowdy Star",
    description: "You share Vijay Deverakonda's mass appeal and confident attitude. You're not afraid to be different and have a strong connection with youth.",
    traits: ["Confident", "Rebellious", "Authentic", "Bold"],
    color: "from-indigo-500 to-blue-600",
    icon: <Trophy className="w-8 h-8" />
  }
};