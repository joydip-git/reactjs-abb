import { Component } from "react";
import FilterProduct from "../../components/products/filter-product/FilterProduct";
import ProductList from "../../components/products/product-list/ProductList";
import ViewProduct from "../../components/products/view-product/ViewProduct";
import { getProducts } from '../../services/productService'

class ProductContainer extends Component {
    constructor() {
        super()
        console.log('[PC] created')
    }
    state = {
        products: [],
        fetching: true,
        errorMessage: '',
        selectedId: 0
    }

    selectProductIdHandler = (pid) => {
        //alert(pid.toString())
        this.setState({
            selectedId: pid
        })
    }

    componentDidMount() {
        console.log('[PC] mounted')
        // setTimeout(
        //     () => {
        getProducts()
            .then(
                (axiosResponse) => {
                    this.setState({
                        products: axiosResponse.data,
                        fetching: false,
                        errorMessage: ''
                    })
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
        } else if (this.state.products.length === 0) {
            containerDesign = <span>No products found..</span>
        } else {
            containerDesign = (
                <div className="panel panel-primary">
                    <div className="panel panel-heading">
                        Product Management System
                    </div>
                    <div className="panel panel-body">
                        <FilterProduct />
                        <br />
                        <ProductList
                            productRecords={this.state.products}
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