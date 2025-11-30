// import CatalogFilters from "./../catalogFilters/CatalogFilters";
// import Card from "../card/Card";
// import React, {useEffect, useState} from "react";

// import './catalogObjects.css'

// import diamondImg from "../../img/diamond.jpg";
// import rubinImg from "../../img/rubin.jpg";
// import smaragdImg from "../../img/smaragd.jpg";
// import stoneImg from "../../img/stone.jpg";
// import {getStoneList} from "../../fetching";
// import ElementsGet from "./elementsGet";
// import Loader from "../loader/Loader";


// const imageMap = {
//   'diamond': diamondImg,
//   'rubin': rubinImg,
//   'smaragd': smaragdImg,
//   'stone': stoneImg
// };

// const CatalogObjects=()=> {
//   const [loading, setLoading] = useState(true);
//   const [objectsData, setObjectsData] = useState([]);
//   const [filteredObjects, setFilteredObjects] = useState(objectsData);

//       useEffect(() => {
//         setLoading(true);
//         getStoneList()
//           .then(response => {
//                 console.log(response)
//               setObjectsData(response.data);
//                 setFilteredObjects(response.data)
//               setLoading(false);
//           })
//           .catch(error => {
//             console.error('Error fetching data:', error);

//             setLoading(false);
//           });

//       }, []);
//   const handleFilterApply = (selectedFilters) => {
//     const searchQuery = document.getElementById("mySearch").value.toLowerCase();

//     const filtered = objectsData.filter((object) => {
//       const nameMatch =
//         selectedFilters.name !== "Any name" ? object.title === selectedFilters.name : true;

//       const priceRange = selectedFilters.price.split('-');
//       const minPrice = parseFloat(priceRange[0]);
//       const maxPrice = parseFloat(priceRange[1]);

//       const priceMatch =
//         selectedFilters.price !== "Any price"
//           ? object.price >= minPrice && object.price <= maxPrice
//           : true;

//       const strengthMatch =
//         selectedFilters.strength !== "Any strength"
//           ? object.strength === selectedFilters.strength
//           : true;

//       const nameSearchMatch = object.title.toLowerCase().includes(searchQuery);

//       return nameMatch && priceMatch && strengthMatch && nameSearchMatch;
//     });

//     setFilteredObjects(filtered)
//   };

//   return (
//     <section className="catalog">
//         {loading ? <Loader /> : null}
//       <div className="catalog-filters">
//         <CatalogFilters onFilterApply={handleFilterApply} />
//       </div>
//       <div className="catalog-objects">
//         {filteredObjects.map((object, index) => {
            
//             // 🛑 ЗМІНИ ПОЧИНАЮТЬСЯ ТУТ: Обробка шляху зображення
//             let imageSourceKey = '';
//             if (object.img) {
//                 // Видаляємо './img/' та '.jpg', щоб отримати чистий ключ ('diamond', 'rubin' тощо)
//                 imageSourceKey = object.img
//                     .replace('./img/', '')
//                     .replace('.jpg', '')
//                     .toLowerCase();
//             }

//             // Шукаємо імпортоване зображення в мапі. Якщо не знайдено, використовуємо stoneImg.
//             const imageSrc = imageMap[imageSourceKey] || stoneImg;

//             return (
//           <Card
//                key={index}
//                title={object.title}
//                strength={object.strength}
//                description={object.description}
//                price={object.price}
//                itemId={object.id}
//                img={imageSrc} // Передаємо обчислений динамічний шлях
//           />
//             );
//         })}
//       </div>
//     </section>
//   );
// }

// export default CatalogObjects;


import CatalogFilters from "./../catalogFilters/CatalogFilters";
import Card from "../card/Card";
import React, {useEffect, useState} from "react";

import './catalogObjects.css'

import diamondImg from "../../img/diamond.jpg";
import rubinImg from "../../img/rubin.jpg";
import smaragdImg from "../../img/smaragd.jpg";
import stoneImg from "../../img/stone.jpg";
import {getStoneList} from "../../fetching";
import ElementsGet from "./elementsGet";
import Loader from "../loader/Loader";


const imageMap = {
  'diamond': diamondImg,
  'rubin': rubinImg,
  'smaragd': smaragdImg,
  'stone': stoneImg
};

const CatalogObjects=()=> {
  const [loading, setLoading] = useState(true);
  const [objectsData, setObjectsData] = useState([]);
  const [filteredObjects, setFilteredObjects] = useState(objectsData);

// ----------------------------------------------------
// ФУНКЦІЯ ОТРИМАННЯ ДАНИХ (Викликається при завантаженні та фільтрації)
// ----------------------------------------------------
    const fetchData = (params = {}) => {
        setLoading(true);
        // getStoneList тепер приймає параметри для бекенду
        getStoneList(params) 
            .then(response => {
                console.log(response); // Залишаємо лог для перевірки
                setObjectsData(response.data);
                // Бекенд повертає вже відфільтровані дані
                setFilteredObjects(response.data) 
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }
// ----------------------------------------------------

      useEffect(() => {
        fetchData(); // Початкове завантаження без параметрів
      }, []);
      
  const handleFilterApply = (selectedFilters) => {
    const searchQuery = document.getElementById("mySearch").value;

    // Створюємо об'єкт параметрів для відправки на бекенд
    const params = {
        name: selectedFilters.name,
        price: selectedFilters.price,
        strength: selectedFilters.strength,
        search: searchQuery.toLowerCase(),
    };

    fetchData(params); // Запускаємо фільтрацію на бекенді
    
    // Логіка локального фільтрування видалена
  };

  return (
    <section className="catalog">
        {loading ? <Loader /> : null}
      <div className="catalog-filters">
        <CatalogFilters onFilterApply={handleFilterApply} />
      </div>
      <div className="catalog-objects">
        {filteredObjects.map((object, index) => {
            
            // Логіка обробки шляху зображення
            let imageSourceKey = '';
            if (object.img) {
                // Витягуємо чистий ключ ('diamond', 'rubin' тощо)
                imageSourceKey = object.img
                    .replace('./img/', '')
                    .replace('.jpg', '')
                    .toLowerCase();
            }

            // Використовуємо знайдений імпорт або резервне зображення stoneImg
            const imageSrc = imageMap[imageSourceKey] || stoneImg;

            return (
          <Card
               key={index}
               title={object.title}
               strength={object.strength}
               description={object.description}
               price={object.price}
               itemId={object.id}
               img={imageSrc} // Передаємо динамічний шлях
          />
            );
        })}
      </div>
    </section>
  );
}

export default CatalogObjects;