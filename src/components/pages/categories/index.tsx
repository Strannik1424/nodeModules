import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../header";
import Footer from "../../footer";
import "../../../css/pages/categories/categoriesMain.scss";
import { fetchCategories } from "../../../api/category.ts";
import { Category } from "../../../models/category";




function Сategories(props) {
  const [items, setItems] = useState<Category[]>([]);
  
  useEffect(() => {
    fetchCategories().then((res) => {
      setItems(res);
    });
  }, []);




  return (
    <>
      <Header />
      <div className="categories">
        <div className="container">
          <div className="title">
          <div className="text">Категории</div>
          </div>
          <ul>
            <li>
              {props.obj && props.obj.map((g) => (
                <Link key={g.id} to={`/category/${g.id}`} >
                  <img src={`img/Cars/${g.image_path}`} alt="" />
                  <div className="title">
                    <p>{g.title}</p>
                    <img src="img/right.svg" alt="" />
                  </div>
                </Link>
              ))}
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}


export default Сategories;
