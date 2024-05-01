import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";

import Home from "./components/pages/home";
import Categories from "./components/pages/categories/index.tsx";
import Shop from "./components/pages/shops";
import Contacts from "./components/pages/contacts";

import Product from "./components/pages/categories/products/index.tsx";
import Detals from "./components/pages/categories/products/Detals/index.js";
import Detalnfo from "./components/pages/categories/products/Detals/DetalInfo/index.js";




function App() {

  const [category, setCategory] = React.useState()

  const [subCategory, setSubCategory] = React.useState([
    {
        "id":1,
        "parent_id":1,
        "title":"TADANO-GR-500EX",
        "image_path":"Автокран/TADANO-GR-500EX.png",
        
    },
    {
        "id":2,
        "parent_id":1,
        "title":"LIEBHERR LTM 1120-4.1",
        "image_path":"Автокран/LIEBHERRLTM1120.jpeg",
        
    },
    {
        "id":3,
        "parent_id":1,
        "title":"XCMG XCT25L5 S31",
        "image_path":"Автокран/XCMGXCT25L5S31.jpg",
        
    },
    {
        "id":4,
        "parent_id":1,
        "title":"Ивановвец KC 55717K3",
        "image_path":"Автокран/ИвановвецKC55717K3.png",
        
    },
    {
        "id":5,
        "parent_id":1,
        "title":"LIEBHERR LTM 1250-5.1",
        "image_path":"Автокран/LIEBHERRLTM1250-5.1.png",
        
    },
    {
        "id":6,
        "parent_id":1,
        "title":"TADANO-GR-1100EX",
        "image_path":"Автокран/TADANO-GR-1100EX.png",
        
    },
    {
        "id":7,
        "parent_id":1,
        "title":"TADANO-GR-800EX",
        "image_path":"Автокран/TADANO-GR-800EX.png",
    },
    {
        "id":8,
        "parent_id":2,
        "title":"KAMAZ-5053A4 (35M)",
        "image_path":"Автовышка/KAMAZ-5053A4(35M).jpg",
        
    },
    {
        "id":9,
        "parent_id":3,
        "title":"KAMAZ-42261",
        "image_path":"Автобус/KAMAZ-42261.jpg",
        
    },
    {
        "id":10,
        "parent_id":3,
        "title":"YUTONG ZK6938HB9",
        "image_path":"Автобус/YUTONGZK6938HB9.jpg",
        
    },
    {
        "id":11,
        "parent_id":3,
        "title":"YUTONG ZK6122H9",
        "image_path":"Автобус/YUTONGZK6122H9.jpg",
        
    },
    {
        "id":12,
        "parent_id":4,
        "title":"MANITOU MT-X 1440 A E3",
        "image_path":"телепогрузчик/Telepogruzchik.png",
        

    },
    {
        "id":13,
        "parent_id":5,
        "title":"FORD-TRANSIT",
        "image_path":"Автогрузовой/Ford-Transit-L4H3-1024x1024.png",
        
    },
    {
        "id":14,
        "parent_id":5,
        "title":"GAZ-СОБОЛЬ",
        "image_path":"Автогрузовой/GAZ-Соболь.png",
        
    },
    {
        "id":15,
        "parent_id":5,
        "title":"ГАЗЕЛЬ-NEXT",
        "image_path":"Автогрузовой/ГАЗЕЛЬ-NEXT.png",
    },
    {
        "id":16,
        "parent_id":5,
        "title":"ГАЗЕЛЬ 2844N5",
        "image_path":"Автогрузовой/ГАЗЕЛЬ2844N5.jpg",
        
    },
    {
        "id":17,
        "parent_id":6,
        "title":"SHANTUI SR18MP2",
        "image_path":"Каток/SHANTUISR18MP2.png",
        
    },
    {
        "id":18,
        "parent_id":6,
        "title":"SDLG RS8180",
        "image_path":"Каток/SDLGRS8180.png",
        
    },
    {
        "id":19,
        "parent_id":7,
        "title":"SDLG-HMK 102S",
        "image_path":"Погрузчик/SDLG-HMK102S.png",
        

    },
    {
        "id":20,
        "parent_id":7,
        "title":"HIDROMEK-HMK 102S",
        "image_path":"Погрузчик/HIDROMEK-HMK102S.png",
        

    },
    {
        "id":21,
        "parent_id":8,
        "title":"KAMAZ KO 806 01",
        "image_path":"Водовоз/KAMAZKO80601.png",
    },
    {
        "id":22,
        "parent_id":8,
        "title":"KAMAZ 7074A9 50",
        "image_path":"Водовоз/KAMAZ7074A950.png",
        
    },
    {
        "id":23,
        "parent_id":9,
        "title":"IVECO AMT MTGB3",
        "image_path":"Самосвал/IVECOAMTMTGB3.png",
        
    },
    {
        "id":24,
        "parent_id":9,
        "title":"Mercedes Arocs 65896 08",
        "image_path":"Самосвал/MercedesArocs6589608.png",
        
    },
    {
        "id":25,
        "parent_id":9,
        "title":"SACHMAN-SX331863366",
        "image_path":"Самосвал/SACHMAN-SX331863366.png",
        
    },
    {
        "id":26,
        "parent_id":10,
        "title":"KOMATSU-PC500LC-10MO",
        "image_path":"Excovator/KOMATSU-PC500LC-10MO.png",
        
    },
    {
        "id":27,
        "parent_id":10,
        "title":"HITACHI-ZX470LC-5G",
        "image_path":"Excovator/HITACHI-ZX470LC-5G.png"
    },
    {
        "id":28,
        "parent_id":10,
        "title":"HYUNDAI-R430LC 9SH",
        "image_path":"Excovator/HYUNDAI-R430LC9SH.png",
        
    },
    {
        "id":29,
        "parent_id":10,
        "title":"HYUNDAI HX300S L",
        "image_path":"Excovator/HYUNDAI HX300S L.png",
        
    },
    {
        "id":30,
        "parent_id":10,
        "title":"HYUNDAI HX340S L",
        "image_path":"Excovator/HYUNDAI HX340S L.png",
        
    },
    {
        "id":31,
        "parent_id":10,
        "title":"CATERPILLAR-374",
        "image_path":"Excovator/CATERPILLAR-374.png",
        
    },
    {
        "id":32,
        "parent_id":11,
        "title":"KAMAZ 43118",
        "image_path":"Манипулятор/KAMAZ43118.png",
        
    },
    {
        "id":33,
        "parent_id":12,
        "title":"HAULOTTE-HA32 RTJPRO",
        "image_path":"Подьемник/HAULOTTE-HA32RTJPRO.png",
        
    },
    {
        "id":34,
        "parent_id":12,
        "title":"ZOOMLION-ZT26J",
        "image_path":"Подьемник/ZOOMLION-ZT26J.png",
        
    },
    {
        "id":35,
        "parent_id":12,
        "title":"HAULOTTE-ZT26J",
        "image_path":"Подьемник/HAULOTTE-ZT26J.png",
        
    },
    {
        "id":36,
        "parent_id":12,
        "title":"HAULOTTE-HA20 RTJPRO",
        "image_path":"Подьемник/HAULOTTE-HA20 RTJPRO.png",
        
    },
    {
        "id":37,
        "parent_id":12,
        "title":"HAULOTTE-HT23 RTJPRO",
        "image_path":"Подьемник/HAULOTTE-HT23 RTJPRO.png",
        
    },
    {
        "id":38,
        "parent_id":12,
        "title":"HAULOTTE-HA41 RTJPRO",
        "image_path":"Подьемник/HAULOTTE-HA41 RTJPRO.png",
        
    },
    {
        "id":39,
        "parent_id":12,
        "title":"HAULOTTE-HT23RTJ",
        "image_path":"Подьемник/HAULOTTE-HT23RTJ.png",
        
    },
    {
        "id":40,
        "parent_id":12,
        "title":"HAULOTTE-32-41 RTJ",
        "image_path":"Подьемник/HAULOTTE-32-41 RTJ.png",
        
    },
    {
        "id":41,
        "parent_id":12,
        "title":"HAULOTTE-HA23 RTJ",
        "image_path":"Подьемник/HAULOTTE-HA23 RTJ.png",
        
    },
    {
        "id":42,
        "parent_id":12,
        "title":"HAULOTTE-HA26 RTJPRO",
        "image_path":"Подьемник/HAULOTTE-HA26 RTJPRO.png",
        
    },
    {
        "id":43,
        "parent_id":12,
        "title":"HAULOTTE-HA20 RTJ",
        "image_path":"Подьемник/HAULOTTE-HA20 RTJ.png",
    },
    {
        "id":44,
        "parent_id":13,
        "title":"BOBCAT-EARTHFORCE S18",
        "image_path":"миниПогрузчик/BOBCAT-EARTHFORCE S18.png"
    },
    {
        "id":45,
        "parent_id":13,
        "title":"BOBCAT S530",
        "image_path":"миниПогрузчик/BOBCAT S530.png"
    },
    {
        "id":46,
        "parent_id":13,
        "title":"BOBCAT T770",
        "image_path":"миниПогрузчик/BOBCAT T770.png"
    },{
        "id":47,
        "parent_id":14,
        "title":"KAMAZ-5453Z1-100",
        "image_path":"Бензовоз/KAMAZ-5453Z1-100.png"
    },
    {
        "id":48,
        "parent_id":15,
        "title":"KAMAZ-65221-53",
        "image_path":"Тягач/KAMAZ-65221-53.png"
    },
    {
        "id":49,
        "parent_id":15,
        "title":"IVECO-AMT",
        "image_path":"Тягач/IVECO-AMT.png"
    },
    {
        "id":50,
        "parent_id":16,
        "title":"KAMAZ-7074AO-50",
        "image_path":"Ассенизатор/KAMAZ-7074AO-50.png"
    },
    {
        "id":51,
        "parent_id":17,
        "title":"TOYOTA-LC PRADO 150",
        "image_path":"Внедорожник/TOYOTA-LC PRADO 150.png"
    },
    {
        "id":52,
        "parent_id":17,
        "title":"TOYOTA HILUX",
        "image_path":"Внедорожник/TOYOTA HILUX.png"
    },
    {
        "id":53,
        "parent_id":17,
        "title":"TOYOTA LC 200",
        "image_path":"Внедорожник/TOYOTA LC 200.png"
    },
    {
        "id":54,
        "parent_id":17,
        "title":"RENAULT-DUSTER",
        "image_path":"Внедорожник/RENAULT-DUSTER.png"
    },
    {
        "id":55,
        "parent_id":18,
        "title":"MGE-80",
        "image_path":"Генератор/MGE-80.png"
    },
    {
        "id":56,
        "parent_id":18,
        "title":"AMC-5000,4-2H-M2",
        "image_path":"Генератор/AMC-5000,4-2H-M2.png"
    },
    {
        "id":57,
        "parent_id":18,
        "title":"Агрегат-60c-T400",
        "image_path":"Генератор/Агрегат-60c-T400.png"
    },
    {
        "id":58,
        "parent_id":18,
        "title":"MGE 160",
        "image_path":"Генератор/MGE 160.png"
    },
    {
        "id":59,
        "parent_id":18,
        "title":"MGE 240",
        "image_path":"Генератор/MGE 240.png"
    },
    {
        "id":60,
        "parent_id":18,
        "title":"AMC-60C-T400",
        "image_path":"Генератор/AMC-60C-T400.png"
    },
    {
        "id":61,
        "parent_id":19,
        "title":"KAMAZ-5814Z9",
        "image_path":"Бетономешалка/KAMAZ-5814Z9.png"
    },
    {
        "id":62,
        "parent_id":19,
        "title":"MAZ-69366J",
        "image_path":"Бетономешалка/MAZ-69366J.png"
    },
    {
        "id":63,
        "parent_id":20,
        "title":"PUTZMEISTER-BSA 1409 D",
        "image_path":"Бетононасос/PUTZMEISTER-BSA 1409 D.png"
    },
    {
        "id":64,
        "parent_id":20,
        "title":"PUTZMEISTER-BSF 42-5.14 H",
        "image_path":"Бетононасос/PUTZMEISTER-BSF 42-5.14 H.png"
    }
    
])

   const [detals, setDetals] = React.useState([
    {
        "id":1,
        "images_path":"icons/Электричество.png",
        "title":"Электричество"
    },
    {
        "id":2,
        "images_path":"icons/Мотор.png",
        "title":"Мотор"
    },
    {
        "id":3,
        "images_path":"icons/Шины.png",
        "title":"Шина"
    },
    {
        "id":4,
        "images_path":"icons/Ходовой.png",
        "title":"Ходовой часть"
    },
    {
        "id":5,
        "images_path":"icons/внешние.webp",
        "title":"Внешние части"
    },
    {
        "id":6,
        "images_path":"icons/Кузовной.png",
        "title":"Кузовной"
    },
    {
        "id":7,
        "images_path":"icons/Фильтр.png",
        "title":"Фильтр"
    },
    {
        "id":8,
        "images_path":"icons/Ремкомплект.png",
        "title":"Ремкомплект"
    },
    {
        "id":9,
        "images_path":"icons/Гидравлическая.png",
        "title":"Гидравлическая"
    },
    {
        "id":10,
        "images_path":"icons/Прочие.png",
        "title":"Прочие"
    },
    {
        "id":11,
        "images_path":"icons/Стекло.png",
        "title":"Стекло"
    },
    {
        "id":12,
        "images_path":"icons/Трансмиссия.png",
        "title":"Трансмиссия"
    },
    {
        "id":13,
        "images_path":"icons/Тормозная.jpeg",
        "title":"Тормозная"
    },
    {
        "id":14,
        "images_path":"icons/Рама.jpeg",
        "title":"Рама"
    },
    {
        "id":15,
        "images_path":"icons/Ремень.png",
        "title":"Ремень"
    }

])

    const [listDetals, setListDetals ] = React.useState([
            {
                "id":1,
                "cars_id":1,
                "detals_id":7,
                "kod":"БС-00102855",
                "name":"BE4018 Топливый фильтр",
                "nameCar":"TADANO-GR-500EX",
                "edinisa":"шт",
                "artikul":"BE4018",
                "Chita":"4",
                "Kultuma":"2",
                "Ozerny":"6",
                "Obshiy":"12",
                "typeCars":"Автокран",
                "typeDetals":"фильтр",
                "GabaritX":"1",
                "GabaritY":"3",
                "GabaritV":"2",
                "images_path":["Фильтр/BE4018 Топливный фильтр2.jpg","Фильтр/BE4018 Топливный фильтр.jpg"]
            },
            {
                "id":2,
                "cars_id":2,
                "detals_id":7,
                "kod":"БС-00102855",
                "name":"BE4018 Топливый фильтр",
                "nameCar":"LIEBHERR-LTM 1120-4.1",
                "edinisa":"шт",
                "artikul":"BE4018",
                "Chita":"4",    
                "Kultuma":"2",
                "Ozerny":"6",
                "Obshiy":"12",
                "typeCars":"Автокран",
                "typeDetals":"фильтр",
                "GabaritX":"2",
                "GabaritY":"3",
                "GabaritV":"2"
            },
            {
                "id":3,
                "cars_id":3,
                "detals_id":7,
                "kod":"БС-00102855",
                "name":"BE4018 Топливый фильтр",
                "nameCar":"XCMG XCT25L5 S31",
                "edinisa":"шт",
                "artikul":"BE4018",
                "Chita":"4",
                "Kultuma":"2",
                "Ozerny":"6",
                "Obshiy":"12",
                "typeCars":"Автокран",
                "typeDetals":"фильтр",
                "GabaritX":"4",
                "GabaritY":"3",
                "GabaritV":"2"
                
            },
    ])


    React.useEffect(()=>{
        axios.get('https://66084611a2a5dd477b14432d.mockapi.io/api/iktzap/test').then((el)=>{
            setCategory(el.data)
        })

        const fetchData = async () => {
            // Задержка в 1 секунду перед выполнением запроса
            await new Promise(resolve => setTimeout(resolve, 1000));
            // ваш код для выполнения запроса с использованием Axios
        };
    
        fetchData();
    }, [<Home/>])

  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories obj={category}/>} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/category/:id" element={<Product category={category} cars={subCategory}/>} />
            <Route path="/category/:id/:id" element={<Detals detals={detals} category={category} cars={subCategory} />} />
            <Route path="/category/:id/:id/:id" element={<Detalnfo category={category} detals={detals} cars={subCategory} listDetals={listDetals}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
