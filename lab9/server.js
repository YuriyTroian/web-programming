// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();

// const diamondImg ='./img/diamond.jpg';
// const rubinImg = './img/rubin.jpg';
// const smaragdImg = './img/smaragd.jpg';
// const stoneImg = './img/stone.jpg';

// const path = require('path');



// app.use(bodyParser.json());
// app.use(cors());


// // app.use(express.static(path.join('C:','Users','levms','web','lab8',)));

// const objectsData = [
//   {
//       id: 0,
//       title: "Diamond",
//       strength: "high",
//       img: diamondImg,
//       description: "It is a jewelry stone.",
//       price: 1000,
//   },
//   {
//       id: 1,
//       title: "Rubin",
//       strength: "low",
//       img: rubinImg,
//       description: "It is a jewelry stone.",
//       price: 800,
//   },
//   {
//       id: 2,
//       title: "Smaragd",
//       strength: "medium",
//       img: smaragdImg,
//       description: "It is a jewelry stone.",
//       price: 900,
//   },
//   {
//       id: 3,
//       title: "Stone",
//       strength: "low",
//       img: stoneImg,
//       description: "It is a jewelry stone.",
//       price: 100,
//   },
//   {
//       id: 4,
//       title: "Diamond",
//       strength: "high",
//       img: diamondImg,
//       description: "It is a jewelry stone.",
//       price: 2000,
//   },
//   {
//       id: 5,
//       title: "Rubin",
//       strength: "low",
//       img: rubinImg,
//       description: "It is a jewelry stone.",
//       price: 450,
//   },
//   {
//       id: 6,
//       title: "Smaragd",
//       strength: "medium",
//       img: smaragdImg,
//       description: "It is a jewelry stone.",
//       price: 700,
//   },
//   {
//       id: 7,
//       title: "Stone",
//       strength: "low",
//       img: stoneImg,
//       description: "It is a jewelry stone.",
//       price: 60,
//   },
//     // {
//     //   id: 22,
//     //   title: "Stone12345",
//     //   strength: "low",
//     //   img: stoneImg,
//     //   description: "It is a jewelry stone.",
//     //   price: 60,
//     // }
// ]


// app.use(bodyParser.json());
// app.use(cors());
// app.use('/img', express.static(path.join(__dirname, 'src', 'img')));


// let itemsData = [...objectsData];


// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname,'server'));
// });

// app.get('/get', (req, res) => {
//     res.json(itemsData);
// });

// app.get('/get/:stoneId', (req, res) => {
//   const stoneId = parseInt(req.params.stoneId, 10);
//   const stoneInfo = itemsData.find(item => item.id === stoneId);

//   if (stoneInfo) {
//     res.json(stoneInfo);
//   } else {
//     res.status(404).json({ error: 'Stone not found' });
//   }
// });

// const PORT = 5001;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

// module.exports = { app, objectsData };


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const path = require('path');

const diamondImg ='./img/diamond.jpg';
const rubinImg = './img/rubin.jpg';
const smaragdImg = './img/smaragd.jpg';
const stoneImg = './img/stone.jpg';

const objectsData = [
  {
      id: 0,
      title: "Diamond",
      strength: "high",
      img: diamondImg,
      description: "It is a jewelry stone.",
      price: 1000,
  },
  {
      id: 1,
      title: "Rubin",
      strength: "low",
      img: rubinImg,
      description: "It is a jewelry stone.",
      price: 800,
  },
  {
      id: 2,
      title: "Smaragd",
      strength: "medium",
      img: smaragdImg,
      description: "It is a jewelry stone.",
      price: 900,
  },
  {
      id: 3,
      title: "Stone",
      strength: "low",
      img: stoneImg,
      description: "It is a jewelry stone.",
      price: 100,
  },
  {
      id: 4,
      title: "Diamond",
      strength: "high",
      img: diamondImg,
      description: "It is a jewelry stone.",
      price: 2000,
  },
  {
      id: 5,
      title: "Rubin",
      strength: "low",
      img: rubinImg,
      description: "It is a jewelry stone.",
      price: 450,
  },
  {
      id: 6,
      title: "Smaragd",
      strength: "medium",
      img: smaragdImg,
      description: "It is a jewelry stone.",
      price: 700,
  },
  {
      id: 7,
      title: "Stone",
      strength: "low",
      img: stoneImg,
      description: "It is a jewelry stone.",
      price: 60,
  },
];

app.use(bodyParser.json());
app.use(cors());

let itemsData = [...objectsData];

app.get('/get', (req, res) => {
    const { name, price, strength, search } = req.query;
    
    console.log("Received Filter Params:", req.query); 

    
    let filteredData = [...objectsData];

    if (name && name !== 'Any name') {
        filteredData = filteredData.filter(stone => stone.title === name);
    }

    
    if (strength && strength !== 'Any strength') {
        filteredData = filteredData.filter(stone => stone.strength === strength);
    }

    if (search) {
        const query = search.toLowerCase();
        filteredData = filteredData.filter(stone => 
            stone.title.toLowerCase().includes(query) ||
            stone.description.toLowerCase().includes(query)
        );
    }

    
    if (price && price !== 'Any price') {
        let minPrice = 0;
        let maxPrice = Infinity;

        if (price.includes('more than 1000')) {
            minPrice = 1000;
            maxPrice = Infinity;
        } else {
            
            const parts = price.replace(' $', '').split('-');
            if (parts.length === 2) {
                minPrice = parseInt(parts[0], 10);
                maxPrice = parseInt(parts[1], 10);
            }
        }
        
        filteredData = filteredData.filter(stone => 
            stone.price >= minPrice && stone.price <= maxPrice
        );
    }

    
    res.json(filteredData);
});

app.get('/get/:stoneId', (req, res) => {
  const stoneId = parseInt(req.params.stoneId, 10);
  const stoneInfo = objectsData.find(item => item.id === stoneId);

  if (stoneInfo) {
    res.json(stoneInfo);
  } else {
    res.status(404).json({ error: 'Stone not found' });
  }
});

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = { app, objectsData };