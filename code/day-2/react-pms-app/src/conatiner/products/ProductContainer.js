import { Component } from "react";
import FilterProduct from "../../components/products/filter-product/FilterProduct";
import ProductList from "../../components/products/product-list/ProductList";
import ViewProduct from "../../components/products/view-product/ViewProduct";

class ProductContainer extends Component {
    state = {
        products: [{}, {}, {}]
    }
    render() {
        const containerDesign = (
            <div>
                <FilterProduct />
                <br />
                <ProductList productRecords={this.state.products} />
                <br />
                <ViewProduct />
            </div>
        )
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