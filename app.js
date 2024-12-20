const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/general-knowledge", (req, res) => {
  res.json({
    questions: [
      {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris",
        explanation: "Paris is the capital and most populous city of France.",
        imageUrl:
          "https://images.javatpoint.com/reasoning/images/image-series-q1-problem-figures.png",
      },
      {
        question: "What is the atomic number of hydrogen?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "1",
        explanation:
          "The atomic number of hydrogen is 1, as it has one proton in its nucleus.",
        imageUrl: "",
      },
      {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "CO2", "H2"],
        correctAnswer: "H2O",
        explanation:
          "Water is composed of two hydrogen atoms and one oxygen atom, hence H2O.",
        imageUrl:
          "https://images.javatpoint.com/reasoning/images/image-series-q1-problem-figures.png",
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars",
        explanation:
          "Mars is known as the Red Planet because of its reddish appearance due to iron oxide on its surface.",
        imageUrl: "",
      },
      {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Osmium", "Ozone", "Olivine"],
        correctAnswer: "Oxygen",
        explanation:
          "Oxygen is a chemical element with the symbol 'O' and atomic number 8.",
        imageUrl: "",
      },
      {
        question: "What is the largest continent on Earth?",
        options: ["Asia", "Africa", "North America", "Europe"],
        correctAnswer: "Asia",
        explanation:
          "Asia is the largest continent both by land area and population.",
        imageUrl: "",
      },
      {
        question: "In which country would you find the Great Barrier Reef?",
        options: ["Australia", "New Zealand", "Indonesia", "Philippines"],
        correctAnswer: "Australia",
        explanation:
          "The Great Barrier Reef is located off the coast of Queensland, Australia.",
        imageUrl: "",
      },
      {
        question: "What is the longest river in the world?",
        options: [
          "Amazon River",
          "Nile River",
          "Yangtze River",
          "Mississippi River",
        ],
        correctAnswer: "Amazon River",
        explanation:
          "The Amazon River is the longest river in the world, stretching approximately 4,345 miles.",
        imageUrl: "",
      },
      {
        question: "What is the smallest planet in our solar system?",
        options: ["Mercury", "Mars", "Earth", "Venus"],
        correctAnswer: "Mercury",
        explanation: "Mercury is the smallest planet in our solar system.",
        imageUrl: "",
      },
      {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Won", "Yen", "Ringgit"],
        correctAnswer: "Yen",
        explanation: "The Yen (¥) is the official currency of Japan.",
        imageUrl:
          "https://images.javatpoint.com/reasoning/images/image-series-q1-problem-figures.png",
      },
    ],
  });
}); // General Knowledge API

app.get("/api/science", (req, res) => {
  res.json({
    questions: [
      {
        question: "What is the speed of light?",
        options: [
          "300,000 km/s",
          "150,000 km/s",
          "500,000 km/s",
          "1,000,000 km/s",
        ],
        correctAnswer: "300,000 km/s",
        explanation:
          "The speed of light in a vacuum is approximately 300,000 km per second.",
        imageUrl: "",
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars",
        explanation:
          "Mars is known as the Red Planet because of its reddish appearance due to iron oxide on its surface.",
        imageUrl: "",
      },
      {
        question: "What is the chemical formula for methane?",
        options: ["CH4", "CO2", "H2O", "C2H6"],
        correctAnswer: "CH4",
        explanation:
          "Methane has the chemical formula CH4, indicating it consists of one carbon atom and four hydrogen atoms.",
        imageUrl: "",
      },
      {
        question: "What is the main gas found in Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correctAnswer: "Nitrogen",
        explanation:
          "The Earth's atmosphere is about 78% nitrogen and 21% oxygen.",
        imageUrl: "",
      },
      {
        question:
          "What organ is responsible for pumping blood in the human body?",
        options: ["Heart", "Liver", "Brain", "Kidneys"],
        correctAnswer: "Heart",
        explanation:
          "The heart is responsible for pumping blood throughout the body.",
        imageUrl: "",
      },
      {
        question: "Which gas do plants absorb during photosynthesis?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"],
        correctAnswer: "Carbon Dioxide",
        explanation:
          "Plants absorb carbon dioxide from the air to produce glucose and oxygen during photosynthesis.",
        imageUrl: "",
      },
      {
        question: "What is the boiling point of water at sea level?",
        options: ["100°C", "90°C", "120°C", "110°C"],
        correctAnswer: "100°C",
        explanation:
          "Water boils at 100°C at standard atmospheric pressure (sea level).",
        imageUrl: "",
      },
      {
        question: "Which element is most abundant in the Earth's crust?",
        options: ["Oxygen", "Silicon", "Aluminum", "Iron"],
        correctAnswer: "Oxygen",
        explanation:
          "Oxygen is the most abundant element in the Earth's crust, forming about 46% by weight.",
        imageUrl: "",
      },
      {
        question: "What is the process by which plants make their own food?",
        options: ["Respiration", "Photosynthesis", "Fermentation", "Digestion"],
        correctAnswer: "Photosynthesis",
        explanation:
          "Plants use photosynthesis to convert light energy into chemical energy stored in glucose.",
        imageUrl: "",
      },
      {
        question: "Which planet is closest to the Sun?",
        options: ["Mercury", "Venus", "Earth", "Mars"],
        correctAnswer: "Mercury",
        explanation:
          "Mercury is the closest planet to the Sun in our solar system.",
        imageUrl: "",
      },
    ],
  });
});

app.get("/api/history", (req, res) => {
  res.json({
    questions: [
      {
        question: "Who was the first President of the United States?",
        options: [
          "George Washington",
          "Abraham Lincoln",
          "Thomas Jefferson",
          "John Adams",
        ],
        correctAnswer: "George Washington",
        explanation:
          "George Washington was the first President of the United States, serving from 1789 to 1797.",
        imageUrl: "",
      },
      {
        question: "In what year did World War II end?",
        options: ["1940", "1941", "1945", "1950"],
        correctAnswer: "1945",
        explanation:
          "World War II ended in 1945 with the surrender of Germany and Japan.",
        imageUrl: "",
      },
      {
        question:
          "Who was the first woman to fly solo across the Atlantic Ocean?",
        options: [
          "Amelia Earhart",
          "Harriet Quimby",
          "Bessie Coleman",
          "Jacqueline Cochran",
        ],
        correctAnswer: "Amelia Earhart",
        explanation:
          "Amelia Earhart was the first woman to fly solo across the Atlantic Ocean in 1932.",
        imageUrl:
          "https://images.javatpoint.com/reasoning/images/image-series-q1-problem-figures.png",
      },
      {
        question: "Which empire was ruled by Julius Caesar?",
        options: [
          "Roman Empire",
          "Ottoman Empire",
          "Mongol Empire",
          "British Empire",
        ],
        correctAnswer: "Roman Empire",
        explanation:
          "Julius Caesar was a ruler of the Roman Empire in the 1st century BC.",
        imageUrl: "",
      },
      {
        question: "What year did the Titanic sink?",
        options: ["1900", "1910", "1912", "1920"],
        correctAnswer: "1912",
        explanation:
          "The Titanic sank in 1912 after hitting an iceberg during its maiden voyage.",
        imageUrl: "",
      },
      {
        question: "Who discovered America?",
        options: [
          "Christopher Columbus",
          "Leif Erikson",
          "Ferdinand Magellan",
          "Vasco da Gama",
        ],
        correctAnswer: "Christopher Columbus",
        explanation:
          "Christopher Columbus is credited with discovering America in 1492.",
        imageUrl: "",
      },
      {
        question: "What ancient civilization built the pyramids in Egypt?",
        options: ["Romans", "Mayans", "Egyptians", "Greeks"],
        correctAnswer: "Egyptians",
        explanation:
          "The ancient Egyptians built the famous pyramids as tombs for their pharaohs.",
        imageUrl: "",
      },
      {
        question: "Who was the leader of the Soviet Union during World War II?",
        options: [
          "Joseph Stalin",
          "Vladimir Lenin",
          "Leon Trotsky",
          "Mikhail Gorbachev",
        ],
        correctAnswer: "Joseph Stalin",
        explanation:
          "Joseph Stalin was the leader of the Soviet Union during World War II.",
        imageUrl: "",
      },
      {
        question:
          "What war was fought between the North and South in the United States?",
        options: [
          "American Revolutionary War",
          "American Civil War",
          "World War I",
          "World War II",
        ],
        correctAnswer: "American Civil War",
        explanation:
          "The American Civil War was fought between the Northern Union states and the Southern Confederate states from 1861 to 1865.",
        imageUrl: "",
      },
      {
        question:
          "What is the name of the ship that carried the Pilgrims to America in 1620?",
        options: ["Mayflower", "Nina", "Santa Maria", "Beagle"],
        correctAnswer: "Mayflower",
        explanation:
          "The Mayflower was the ship that carried the Pilgrims to America in 1620.",
        imageUrl: "",
      },
    ],
  });
});

app.get("/api/geography", (req, res) => {
  res.json({
    questions: [
      {
        question: "What is the largest desert in the world?",
        options: [
          "Sahara Desert",
          "Gobi Desert",
          "Karakum Desert",
          "Antarctic Desert",
        ],
        correctAnswer: "Antarctic Desert",
        explanation:
          "The Antarctic Desert is the largest desert in the world by area, covering over 14 million square kilometers.",
        imageUrl: "",
      },
      {
        question: "What is the longest mountain range in the world?",
        options: ["Andes", "Himalayas", "Rockies", "Alps"],
        correctAnswer: "Andes",
        explanation:
          "The Andes is the longest mountain range in the world, stretching over 7,000 km along South America.",
        imageUrl: "",
      },
      {
        question: "Which country has the largest population in the world?",
        options: ["India", "United States", "China", "Russia"],
        correctAnswer: "China",
        explanation:
          "China has the largest population in the world, with over 1.4 billion people.",
        imageUrl: "",
      },
      {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correctAnswer: "Canberra",
        explanation:
          "Canberra is the capital city of Australia, located in the Australian Capital Territory.",
        imageUrl: "",
      },
      {
        question: "Which ocean is the largest?",
        options: [
          "Atlantic Ocean",
          "Indian Ocean",
          "Arctic Ocean",
          "Pacific Ocean",
        ],
        correctAnswer: "Pacific Ocean",
        explanation:
          "The Pacific Ocean is the largest and deepest ocean on Earth, covering more than 63 million square miles.",
        imageUrl: "",
      },
      {
        question: "Which continent is known as the 'Dark Continent'?",
        options: ["Asia", "Europe", "Africa", "Australia"],
        correctAnswer: "Africa",
        explanation:
          "Africa was once called the 'Dark Continent' due to limited knowledge about it before the 19th century.",
        imageUrl: "",
      },
      {
        question: "Which river is the longest in Africa?",
        options: ["Nile River", "Congo River", "Zambezi River", "Niger River"],
        correctAnswer: "Nile River",
        explanation:
          "The Nile River, at about 6,650 kilometers, is the longest river in Africa.",
        imageUrl: "",
      },
      {
        question: "In which country is Mount Everest located?",
        options: ["India", "China", "Nepal", "Pakistan"],
        correctAnswer: "Nepal",
        explanation:
          "Mount Everest, the highest mountain in the world, is located on the border between Nepal and China.",
        imageUrl: "",
      },
      {
        question: "Which country is both an island and a continent?",
        options: ["Australia", "New Zealand", "Madagascar", "Iceland"],
        correctAnswer: "Australia",
        explanation:
          "Australia is the only country that is also a continent and is surrounded by water.",
        imageUrl: "",
      },
      {
        question: "What is the smallest country in the world?",
        options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
        correctAnswer: "Vatican City",
        explanation:
          "Vatican City is the smallest country in the world by both population and area, covering only 44 hectares.",
        imageUrl: "",
      },
    ],
  });
});

app.get("/api/technology", (req, res) => {
  res.json({
    questions: [
      {
        question: "What company created the first personal computer?",
        options: ["Apple", "IBM", "Microsoft", "Compaq"],
        correctAnswer: "Apple",
        explanation:
          "Apple is credited with creating one of the first personal computers, the Apple I, in 1976.",
        imageUrl: "",
      },
      {
        question:
          "Which technology is used to make phone calls over the internet?",
        options: ["Bluetooth", "Wi-Fi", "VoIP", "NFC"],
        correctAnswer: "VoIP",
        explanation:
          "VoIP (Voice over Internet Protocol) technology allows phone calls to be made over the internet.",
        imageUrl: "",
      },
      {
        question:
          "Which programming language is known as the 'mother of all programming languages'?",
        options: ["Python", "C", "Assembly", "Fortran"],
        correctAnswer: "C",
        explanation:
          "The C programming language is often referred to as the 'mother of all programming languages' due to its influence on many others.",
        imageUrl: "",
      },
      {
        question: "What does HTTP stand for in web development?",
        options: [
          "HyperText Transfer Protocol",
          "HyperTool Transfer Protocol",
          "High Transfer Protocol",
          "HyperText Technical Protocol",
        ],
        correctAnswer: "HyperText Transfer Protocol",
        explanation:
          "HTTP stands for HyperText Transfer Protocol, used to transfer data over the web.",
        imageUrl: "",
      },
      {
        question: "Which company developed the first smartphone?",
        options: ["Apple", "Nokia", "IBM", "Samsung"],
        correctAnswer: "IBM",
        explanation:
          "IBM developed the first smartphone, the Simon Personal Communicator, in 1994.",
        imageUrl: "",
      },
      {
        question: "What does USB stand for?",
        options: [
          "Universal Serial Bus",
          "Universal Signal Bus",
          "Unique Serial Bus",
          "United Serial Base",
        ],
        correctAnswer: "Universal Serial Bus",
        explanation:
          "USB stands for Universal Serial Bus, a standard for connecting devices to a computer.",
        imageUrl: "",
      },
      {
        question: "What is the main function of an operating system?",
        options: [
          "Run applications",
          "Connect to the internet",
          "Manage hardware and software",
          "Store data",
        ],
        correctAnswer: "Manage hardware and software",
        explanation:
          "The main function of an operating system is to manage hardware and software resources on a computer.",
        imageUrl: "",
      },
      {
        question: "What is the world's most popular search engine?",
        options: ["Google", "Bing", "Yahoo", "DuckDuckGo"],
        correctAnswer: "Google",
        explanation:
          "Google is the world's most popular search engine, handling billions of queries daily.",
        imageUrl: "",
      },
      {
        question: "What does Wi-Fi stand for?",
        options: [
          "Wireless Fidelity",
          "Wired Fidelity",
          "Wide Fidelity",
          "Wireless Format",
        ],
        correctAnswer: "Wireless Fidelity",
        explanation:
          "Wi-Fi stands for Wireless Fidelity, allowing devices to connect to the internet wirelessly.",
        imageUrl: "",
      },
      {
        question:
          "Which social media platform is known for its short video content?",
        options: ["Facebook", "Twitter", "TikTok", "Instagram"],
        correctAnswer: "TikTok",
        explanation:
          "TikTok is a platform known for short-form video content, particularly popular with younger audiences.",
        imageUrl: "",
      },
    ],
  });
});

app.listen(8000, () => {
  console.log("⚙️ -Server is running at port : 8000");
});
