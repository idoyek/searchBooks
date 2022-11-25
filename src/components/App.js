import React, { useState, useEffect } from "react";
import SearchBar from "../searchBar/SearchBar";

// const products = [
//     "hello",
//     "hi",
//     "ma nishma",
//     "ma hamatzav"
// ]

const App = () => {

    const [productsState, setProductState] = useState([])

    useEffect(() => {

        fetch('https://www.googleapis.com/books/v1/volumes?q=search+terms')
            .then((res) => res.json())
            .then((productsArray) => {
                console.log(productsArray)
                // const newProductsState = productsArray.items.map((product) => {
                //     return product
                // })
                setProductState(productsArray.items)
            })

        // setTimeout(() => {
        //     setProductState([
        //         "hello",
        //         "hi",
        //         "ma nishma",
        //         "ma hamatzav"
        //     ])
        //
        // }, 2000)
    }, [])
    console.log(productsState)

    const hasProducts = productsState.length > 0

    return (
        <div>
            {hasProducts ? <SearchBar products={productsState} setValue={setProductState}/> : "Loading..."}
            {productsState.map((product) => {
                return (
                    <ul>
                        <li>{product.volumeInfo.title}</li>
                    </ul>
                    )
            })}
        </div>
    )
}

export default App