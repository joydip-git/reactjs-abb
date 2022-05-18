import { Component, createRef } from "react";
import FilterProduct from "../../components/products/filter-product/FilterProduct";
import ProductList from "../../components/products/product-list/ProductList";
import ViewProduct from "../../components/products/view-product/ViewProduct";
import { getProducts } from '../../services/productService'

class ProductContainer extends Component {
    constructor() {
        super()
        console.log('[PC] created')
        this.filterProductInputRef = createRef()
    }
    state = {
        products: [],
        filteredProducts: [],
        fetching: true,
        errorMessage: '',
        selectedId: 0,
        filterText: ''
    }

    filterProductsHandler = (filterVal) => {

        //alert(filterVal)
        const copyProducts = [...this.state.products]
        if (filterVal !== '') {
            const filteredProducts = copyProducts.filter(p => p.productName.toLocaleLowerCase().indexOf(filterVal.toLocaleLowerCase()) !== -1)
            this.setState({
                filterText: filterVal,
                filteredProducts: filteredProducts
            })
        } else {
            this.setState(
                (prevState) => {
                    return {
                        filterText: '',
                        filteredProducts: prevState.products
                    }
                }
            )
        }

    }

    selectProductIdHandler = (pid) => {
        //alert(pid.toString())
        this.setState({
            selectedId: pid
        })
    }

    componentDidMount() {
        console.log('[PC] mounted')
        //console.log(this.filterProductInputRef.current)        
        // setTimeout(
        //     () => {
        getProducts()
            .then(
                (axiosResponse) => {
                    this.setState(
                        {
                            products: axiosResponse.data,
                            filteredProducts: axiosResponse.data,
                            fetching: false,
                            errorMessage: ''
                        },
                        () => {
                            this.filterProductInputRef.current.focus()
                        }
                    )
                },
                (errResponse) => {
                    this.setState({
                        products: [],
                        fetching: false,
                        errorMessage: errResponse.message
                    })
                }
            )
        //     }, 2000
        // )
    }

    render() {
        console.log('[PC] rendered')
        // let vpDesign = null
        // if (this.state.selectedId > 0) {
        //     vpDesign = <ViewProduct selectedProductId={this.state.selectedId} />
        // }
        let containerDesign = null
        if (this.state.fetching) {
            containerDesign = <span>Loading...</span>
        } else if (this.state.errorMessage !== '') {
            containerDesign = <span>{this.state.errorMessage}</span>
        } else if (this.state.filteredProducts.length === 0) {
            containerDesign = <span>No products found..</span>
        } else {
            containerDesign = (
                <div className="panel panel-primary">
                    <div className="panel panel-heading">
                        Product Management System
                    </div>
                    <div className="panel panel-body">
                        <FilterProduct
                            filterValue={this.state.filterText}
                            filterHandler={this.filterProductsHandler}
                            ref={this.filterProductInputRef}
                        />
                        <br />
                        <ProductList
                            productRecords={this.state.filteredProducts}
                            selectHandler={this.selectProductIdHandler} />
                        <br />
                        {
                            this.state.selectedId > 0 && <ViewProduct selectedProductId={this.state.selectedId} />
                        }
                    </div>
                </div>
            )
        }
        return containerDesign
    }
}

export default ProductContainer
/**
 * {
 *  productRcords:[],
 *  x:10,
 *  y:200
 * }
 */

/**
 *  this.state.selectedId > 0 ? <ViewProduct selectedProductId={this.state.selectedId} /> : <p>No product selected</p> 
 */