import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { doc, getDoc, getFirestore} from "firebase/firestore";

const ItemDetailContainer = () => {

const [producto, setProducto] = useState([])

const { productById } = useParams()



useEffect(() => {
    const db = getFirestore();

    const biceRef = doc(db, "productos", productById);
    getDoc(biceRef).then((snapshot) => {
        if (snapshot.exists()) {
          setProducto({ id: snapshot.id, ...snapshot.data( )});
        }

  });
}, [productById]);


  return (
    <ItemDetail producto={producto}/>
  )

}

export default ItemDetailContainer