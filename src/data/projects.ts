import chessmate from "@/assets/projectImages/chessmate.png"
import onlinecompiler from "@/assets/projectImages/onlinecompiler.png"
import gallery from "@/assets/projectImages/gallery.png"
import dreamsdecode from "@/assets/projectImages/dreamsdecode.png"
import mern from "@/assets/projectImages/mern.png"
import node from "@/assets/projectImages/node.png"

const projects = [
  {
    title: "Chessmate",
    description: "Developed a real-time chess website using the MERN stack and WebSockets, ensuring seamless communication and responsive design across devices.",
    thumbnail: chessmate,
    githubLink: "https://github.com/Raunak49/chess-app"
  },
  {
    title: "Code Execution Engine",
    description: "Developed a high-performing coding website, enabling users to improve algorithmic problem-solving skills. Frontend - React, Backend - Nodejs, Database - MongoDB",
    thumbnail: onlinecompiler,
    githubLink: "https://github.com/Raunak49/leetcode_backend.git"
  },
  {
    title: "Campers",
    description: "Developed a global campground locator web app using MERN Stack, featuring CRUD operations and Mapbox cluster maps for efficient, precise location management.",
    thumbnail: mern,
    githubLink: "https://github.com/Raunak49/Campers.git"
  },
  {
    title: "Dreams Decode",
    description: "Developed a Django web app for real-time sentiment analysis, achieving 81% accuracy using a logistic regression model, and utilizing NLTK, scikit-learn, and Vectorizer for text processing and model development.",
    thumbnail: dreamsdecode,
    githubLink: "https://github.com/Raunak49/sentimentAnalysis"
  },
  {
    title: "Reachinbox",
    description: "Developed a Node.js and TypeScript backend allowing users to register via Google or Microsoft, set up email monitoring, and automatically reply to new emails using the Google Gemini API.",
    thumbnail: node,
    githubLink: "https://github.com/Raunak49/Reachinbox_Assignment"
  },
  {
    title: "Gallery",
    description: "Built a MERN stack web app where users can log in via Google or email, upload images, and utilize editing features before uploading.",
    thumbnail: gallery,
    githubLink: "https://github.com/Raunak49/Gallery.git"
  },
]

export default projects