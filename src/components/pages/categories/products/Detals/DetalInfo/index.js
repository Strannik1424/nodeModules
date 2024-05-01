import React from 'react'
import { Link, useParams, useLocation  } from 'react-router-dom';
import { FaAngleLeft } from "react-icons/fa";

import Header from '../../../../../header'
import '../../../../../../css/pages/categories/products/detals/detal_info/detal_info.scss'
import { RiH1 } from 'react-icons/ri';

function Electric(props) {
    const [openInfo, setOpenInfo] = React.useState(false);
    const [changeDetalInfo, setChangeDetalInfo] = React.useState(true)
    const [clickID, setClickID] = React.useState()
    const openInfoClick = () => setOpenInfo(true);
    const closeInfoClick = () => setOpenInfo(false);

    
    const { id } = useParams();
    const currentURL = window.location.href;
    const pathParts = currentURL.split('/');
    const urlProductID = pathParts[pathParts.length -2];
    const urlCategoryID = pathParts[pathParts.length -3];

    console.log(clickID)
  return (
    <>
    <Header/>
    <div className="toyota_Lc200_Electric">
        <div className="container">
            <div className="title">
                <div className='text'><Link to='/categories'>Категории </Link> <p>/</p> {props.category.map(el => el.id == Number(urlCategoryID) ? <Link key={el.id} to={-2}>{el.title}</Link> : null )} <p>/</p> {props.cars.map((el) => el.id == Number(urlProductID) ? <h3>{el.title}</h3> : null)}</div>
                <Link className='toBack d-flex align-items-center justify-content-between' to={-1}><FaAngleLeft /> Назад</Link>
            </div>
            {props.detals.map((el) => (
                el.id == Number(id) ? <div key={el.id} className="text"><h1>{el.title}</h1></div> : null
            ))}
           {
                (() => {
                    let found = false;
                    const tableRows = props.listDetals.map((el) => {
                        if (el.cars_id === Number(urlProductID) && el.detals_id === Number(id)) {
                            found = true;
                            return (
                                <tr key={el.id}>
                                    <td>{el.kod}</td>
                                    <td>{el.name}</td>
                                    <td>{el.artikul}</td>
                                    <td>{el.Chita} шт</td>
                                    <td>{el.Kultuma} шт</td>
                                    <td>{el.Ozerny} шт</td>
                                    {/* <td><button onClick={openInfoClick}>Подробнее...</button></td> */}
                                    <td>
                                    <button onClick={() => setClickID(el.id)} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        Подробнее ...
                                    </button>
                                        
                                    </td>
                                </tr>
                            );
                        }
                        return null; 
                    });

                   
                    if (!found) {
                        return <div className='nullProduct'>
                            <img src='/img/пусто.jpg' alt="..."/>
                            <h1>Товары пока что отсуствуют на складе</h1>
                        </div>;
                    }

                    return (
                        <table>
                            <colgroup></colgroup>
                            <tr>
                                <th>Код</th>
                                <th>Название</th>
                                <th>Артикуль</th>
                                <th>Чита</th>
                                <th>Култума</th>
                                <th>Озерный</th>
                                <th></th>
                            </tr>
                            {tableRows}
                        </table>
                    );
                })()
            }
        </div>

                


<div class="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <img src='/img/logoIKT.png' alt='logo'/>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
      </div>
      <div class="modal-body">

     {props.listDetals.map((el) => (
        el.id == Number(clickID) ? <>
         <div id="carouselExampleDark" class="carousel carousel-dark slide">
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
            <img src="/img/Запчасти/Фильтр/BE4018 Топливный фильтр.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item" data-bs-interval="2000">
            <img src="/img/Запчасти/Фильтр/BE4018 Топливный фильтр2.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
            <img src="/img/Запчасти/Фильтр/BE4018 Топливный фильтр.jpg" class="d-block w-100" alt="..." />
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Предыдущий</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Следующий</span>
        </button>
        </div>

        <ul>
            <li>
                <p className='nomer'>Тип</p>
                <b>|</b>
                <p className='nameVs'>{el.typeCars}</p>
            </li>
            <li>
                <p className='nomer' style={{fontSize:'18px'}}>Марка Модель</p>
                <b>|</b>
                <p className='nameVs'>{el.nameCar}</p>
            </li>
            <li>
                <p className='nomer'>Тип Запчасти</p>
                <b>|</b>
                <p className='nameVs'>{el.typeDetals}</p>
            </li>
            <li>
                <p className='nomer'>Номенклатура </p>
                <b>|</b>
                <p className='nameVs'>{el.name}</p>
            </li>
            <li>
                <p className='nomer'>Код</p>
                <b>|</b>
                <p className='nameVs'>{el.kod}</p>
            </li>
            <li>
                <p className='nomer'>Чита </p>
                <b>|</b>
                <p className='nameVs'>{el.Chita}</p>
            </li>
            <li>
                <p className='nomer'>Култума </p>
                <b>|</b>
                <p className='nameVs'>{el.Kultuma}</p>
            </li>
            <li>
                <p className='nomer'>Озерный </p>
                <b>|</b>
                <p className='nameVs'>{el.Ozerny}</p>
            </li>
            <li>
                <p className='nomer'>Единица </p>
                <b>|</b>
                <p className='nameVs'>{el.edinisa}</p>
            </li>
            <li>
                <p className='nomer'>Артикуль </p>
                <b>|</b>
                <p className='nameVs'>{el.artikul}</p>
            </li>
            <li>
                <p className='nomer'>Габарит </p>
                <b>|</b>
                <p className='nameVs'>{Number(el.GabaritX) + Number(el.GabaritY) + Number(el.GabaritV)}</p>
            </li>
        </ul>
        </> : null
     ))}


      </div>
    </div>
  </div>
</div>




     {/*    {openInfo && (
           <div className="info">
                 <div className="item">
                    <div className="content">
                    <div className="header">
                        <div className="logo">
                            <img className='img' src="img/logo.png" alt="" />
                            <p>Икт Запчасти</p>
                        </div>
                        <img  onClick={closeInfoClick} className='close' src="img/close.svg" alt="" />
                    </div>


                    <div id="carouselExampleDark" class="carousel carousel-dark slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="10000">
                            <img src="/img/icons/Мотор.png" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                            <img src="/img/icons/Мотор.png" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                            <img src="/img/icons/Мотор.png" class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                        </div>


                    <ul>
                        <li>
                            <p className='nomer'>Тип</p>
                            <b>|</b>
                            <p className='nameVs'>Внедорожник</p>
                        </li>
                        <li>
                            <p className='nomer' style={{fontSize:'18px'}}>Марка Модель</p>
                            <b>|</b>
                            <p className='nameVs'>TOYOTA LC 200</p>
                        </li>
                        <li>
                            <p className='nomer'>Тип Запчасти</p>
                            <b>|</b>
                            <p className='nameVs'>Электричество</p>
                        </li>
                        <li>
                            <p className='nomer'>Номенклатура </p>
                            <b>|</b>
                            <p className='nameVs'>А12-21-3 12V (P21W 12V 21 WBA15s)повор.лампа</p>
                        </li>
                        <li>
                            <p className='nomer'>Код</p>
                            <b>|</b>
                            <p className='nameVs'>ОБ-00029112</p>
                        </li>
                        <li>
                            <p className='nomer'>Количество </p>
                            <b>|</b>
                            <p className='nameVs'>27</p>
                        </li>
                        <li>
                            <p className='nomer'>Единица </p>
                            <b>|</b>
                            <p className='nameVs'>шт</p>
                        </li>
                        <li>
                            <p className='nomer'>Артикуль </p>
                            <b>|</b>
                            <p className='nameVs'>А12-21-3</p>
                        </li>
                    </ul>
                    </div>
                </div> 
        </div>
        )}*/}
    </div>
    </>
  )
}

export default Electric;
