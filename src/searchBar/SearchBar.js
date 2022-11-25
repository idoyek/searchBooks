import React, { useState } from "react";

const SearchBar = (props) => {
    // const [searchValue, setSearchValue] = useState("")
    //
    // const filteredProducts = props.products.filter ((product) => {
    //     return product.includes(searchValue)
    // })

    // {/*<input type="text" value={searchValue}/>*/}
    // {/*<ul>*/}
    // {/*    {filteredProducts.map((product) => {*/}
    // {/*        return <li key={product}>{product}</li>*/}
    // {/*    })}*/}
    // {/*</ul>*/}

    console.log("we are in search bar", props)

    const [searchValue, setSearchValue] = useState("")

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    const handleClearClick = () => {
        setSearchValue("")
    }

    const shouldDisplayButton = searchValue.length >= 3

    const filteredProducts = props.products.filter((product) => {
        return product.volumeInfo.title.includes(searchValue)
    })
    // searchValue.length>2 && props.setValue(filteredProducts)
    console.log("filtered products: ", filteredProducts)

    return (
        <div>
            <input type="text" value={searchValue} onChange={handleInputChange} />
            {shouldDisplayButton && <button onClick={handleClearClick}>search</button>}
            {/*<ul>*/}
            {/*    {filteredProducts.map((product) => {*/}
            {/*        return <li key={product}>{product}</li>*/}
            {/*    })}*/}
            {/*</ul>*/}
        </div>
    )
}

export default SearchBar