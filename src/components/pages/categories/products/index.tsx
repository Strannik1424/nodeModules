import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";


import Header from "../../../header/index.js";
import ToyotaLc200 from "./Detals/index.js";
import "../../../../css/pages/categories/products/products.scss";

import { fetchCategories } from "../../../../api/category.ts";
import { Category } from "../../../../models/category.ts";
import { click } from "@testing-library/user-event/dist/click";


function Vnedorojnik(props) {
  const { id } = useParams();
  const [items, setItems] = React.useState<Category[]>([]);


  React.useEffect(() => {
    window.scrollTo(0, 0);
    fetchCategories().then((res) => {
      setItems(res);
    });
    
  }, []);
  

  return (
    <div>
      <Header />
      <div className="vnedorojnik"> 
        <div className="container">
          <div className="title">
            <div className="text">
              <Link to="/categories">Категории</Link> / {props.category.map((obj)=> (id == obj.id ? obj.title : ''))}
            </div>
            <Link className='toBack d-flex align-items-center justify-content-between' to={-1}><FaAngleLeft /> Назад</Link>
          </div>
          <div className="item">
            <ul>  
                {props.cars.map((el) => (
                  el.parent_id == Number(id) ? <li><Link key={el.id} to={`/category/${id}/${el.id}`} >
                  <img className="product_img" src={`/img/Cars/${el.image_path}`} alt="" />
                  <div className="title">
                    <p>{el.title}</p>
                    <img src="/img/right.svg" alt="" />
                  </div>
                </Link> </li> : ''
                ))}
                
            </ul>
          </div>
        </div>
      </div>
    </div>
  );



}

export default Vnedorojnik;
