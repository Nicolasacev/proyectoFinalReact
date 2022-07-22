import React from 'react'
import {Link} from 'react-router-dom'
import './CategoryButton.css';

export const CategoryButton = () => {

    const categoriesGroup = [
        { id:'1', path:'/category/electricidad',nombre:'Electricidad'},
        { id:'2', path:'/category/refrigeracion', nombre:'Refrigeracion'},
        { id:'3', path:'/category/chapa', nombre:'Chapa'},
        { id:'4', path:'/category/carroceria', nombre:'Carroceria'},    
    ];

    return (
        <>
            <div className='categoryContainer'>
                <button href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" className='categoryButton'>
                    Categorias
                </button>
                <ul className="dropdown-menu navbarCategories" aria-labelledby="navbarDropdownMenuLink">
                    {categoriesGroup.map((cat) => {
                        return (
                            <Link to={cat.path} key={cat.id} ><li className="categoryList">{cat.nombre}</li></Link> 
                        )
                    })}
                    <hr className='dropdown-divider'/>
                    <Link to="/"><li className="categoryList">Todos</li></Link>
                </ul>
            </div>
        </>
    )
}




