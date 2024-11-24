
import { Header } from './Header/Header'
import { FormProducts } from './FormProduct/FormProducts'
import { useState } from 'react'
import { ListProduct } from './ListProducts/ListProduct'

interface ItemProduct {
    precio: number,
    imagen: string,
    nombre: string,
}

export const AppProduct = () => {

    const [products, setProducts] = useState<ItemProduct[]>([])

    const handleAddProduct = (newItem: ItemProduct) =>{
        setProducts((prev)=>[...products, newItem])
    }

  return (
    <div>
        <Header/>
        <h2 className='text-center'>Formulario</h2>
        <FormProducts handleAddProduct={handleAddProduct} />
        <h2 className='text-center'>Productos</h2>
        {
            products.length> 0 ? <ListProduct arrItems={products}/> : <h3 className='text-center'>No se encuentran Productos</h3>
        }
        
    </div>
  )
}
