import React, { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import './ItemListContainer.css';
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore,query, where} from "firebase/firestore";
import HashLoader from "react-spinners/HashLoader";

export const ItemListContainer = (props) => {

  const [items, setItems] = useState([])
  const {familia} = useParams()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const db = getFirestore();

    const myItems = familia 
    ?
    query(collection(db, 'productos'), where('familia', '==', familia))
    :
    collection(db, 'productos');

    //ponemos el async con una funcion anónima para que no cree conflictos con UseEffect- 
    (async function(){
        
        try { 
            setLoading(true)
             //traemos los productos de Firebase
            const querySnapshot = await getDocs(myItems)
        
            setItems(querySnapshot.docs.map(el => {
            return { ...el.data(), id: el.id }
            
            }))
        } 
        catch {
            console.log("Error al traer los productos de Firebase")
        }
      finally{setLoading(false)
      }
    })();
  }, [familia]);

  return (
      <div className="ItemListContainer">
        <h2 style={{textAlign:'center'}}>{props.gretting}</h2>
        <div className="Container">
        {loading ?
          <HashLoader className="loader" color="#ffa500" size={180}/>
          :
          <ItemList items={items}/>
        }
        </div>
      </div>
  );
}


