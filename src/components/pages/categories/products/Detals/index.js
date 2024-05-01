import React from 'react';
import { Link, useParams } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";


import Headers from '../../../../header'
import '../../../../../css/pages/categories/products/detals/detals.scss'

function ToyotaLc200(props) {   
    window.scrollTo(0, 0);

    React.useEffect(()=>{
        window.scrollTo(0, 0);

    })
    const { id } = useParams();
    const currentURL = window.location.href;
    const pathParts = currentURL.split('/');
    const urlCategoryID = pathParts[pathParts.length -2];

    return (
        <>
            <Headers/>
            <div className="toyotaLc200">
                <div className="container">
                    <div className="title">
                        <div className='text'><Link to='/categories'>Категории </Link><p>/</p>{props.category.map(el => el.id == Number(urlCategoryID) ? <Link key={el.id} to={-1}>{el.title}</Link> : null )}<p>/</p> {props.cars.map( el => el.id == Number(id) ? <h3>{el.title}</h3> : null )} </div>
                        <Link className='toBack d-flex align-items-center justify-content-between' to={-1}><FaAngleLeft /> Назад</Link>
                    </div>
                    <h1>Запчасти</h1>
                    <ul>
                        {
                            props.detals.map((el) => (
                                <li>
                                    <Link to={`${el.id}`}>   
                                            <img src={`/img/${el.images_path}`} alt="" />
                                            <div className="title">
                                                <p>{el.title}</p>
                                                <img src="/img/right.svg" alt="" />
                                            </div>
                                        </Link> 
                                </li>
                            ))
                        }






                    {/* {
                        props.cars.map((el) => {
                            if (el.id === Number(id)) {
                                return props.detals.map((obj) => {
                                    const stringID = String(obj.id);
                                    if (el.product.includes(stringID)) {
                                        return <li>
                                                    <Link to="/toyota_lc_200_electric">   
                                                            <img src={`/img/${obj.images_path}`} alt="" />
                                                            <div className="title">
                                                                <p>{obj.title}</p>
                                                                <img src="/img/right.svg" alt="" />
                                                            </div>
                                                        </Link> 
                                                </li>;
                                    } else {
                                        return null;
                                    }
                                });
                            } else {
                                return null;
                            }
                        })
                    } */}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ToyotaLc200;
