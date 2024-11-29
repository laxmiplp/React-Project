import React, { useState } from "react"
import axios from "axios"


const Ecommerce = () => {
    const [searchProduct, setSearchProduct] = useState("")
    const [products, setProducts] = useState([])
    const [isSearched, setIsSearched] = useState(false)


    const searchHandle = (e) => {
        setSearchProduct(e.target.value)
    }
    const getData = async () => {
        try {
            let apiURL = 'https://dummyjson.com/products/search?q=' + searchProduct
            let apiResponse = await axios.get(apiURL)
            setProducts(apiResponse.data.products)
            setIsSearched(true)
        } catch (ex) {
            alert(ex.message())
        }
    }
    return (
        <>
            <div className="container my-5">
                <h1 className="mb-5 text-black">ECOMMERCE PROJECT</h1>

                <form>
                    <div className="input-group">
                        <input
                            type="search"
                            className="form-control form-control-lg"
                            placeholder="Search..."
                            aria-label="Search"
                            onChange={e => searchHandle(e)}
                        />
                        <span className="input-group-text" id="search-addon">
                            <i className="bi bi-search"></i>
                        </span>
                        <button
                            className="btn btn-dark ms-5 rounded-3"
                            type="button"
                            id="search-button"
                            onClick={e => getData()}>
                            Search
                        </button>
                    </div>
                </form>
                {
                    isSearched && products.length === 0 ? (

                        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
                            <h1 className="text-danger">No Products Found</h1>
                        </div>
                    ) :

                        (
                            products.map(product => (
                                <div className="card mt-5 p-4">
                                    <div className="row m-0">
                                        <div className="col-12 col-md-4 text-start mb-md-0 mb-4 border rounded-3 p-3" height={100} width={100}>
                                            <img src={product.images} className="img-fluid" alt="Product Image exits here" height={100} width={100} />
                                        </div>
                                        <div className="col-12 col-md-6 text-start ps-md-5 ps-0">
                                            <h6 className="text-uppercase bg-dark text-white p-2 rounded-3 fw-bold">{product.title}</h6>
                                            <p className="text-capitalize">{product.category}</p>
                                            <p className="text-capitalize">{product.description}</p>
                                            <p className="fw-bold text-danger">{product.price}</p>
                                            <p className="mb-0"><i className="bi bi-star-fill text-warning pe-2"></i>{product.rating}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                            ))
                }
            </div>

        </>
    )
}
export default Ecommerce