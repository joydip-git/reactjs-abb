import PropTypes from 'prop-types'
import { Component, PureComponent } from 'react'
import { getProductById } from '../../../services/productService'
// function ViewProduct(props) {
//     console.log('[VP] rendered')
//     return (
//         <div>
//             Detail of Product#:&nbsp;{props.selectedProductId}
//         </div>
//     )
// }
// ViewProduct.propTypes = {
//     selectedProductId: PropTypes.number.isRequired
// }
class ViewProduct extends PureComponent {
    constructor() {
        super()
        console.log('[VP] created')
    }
    static propTypes = {
        selectedProductId: PropTypes.number.isRequired
    }
    state = {
        product: null,
        fetching: true,
        errorMessage: ''
    }
    fetchProduct = () => {
        getProductById(this.props.selectedProductId)
            .then(
                (axiosResp) => {
                    this.setState({
                        product: axiosResp.data,
                        fetching: false,
                        errorMessage: ''
                    })
                },
                (errResp) => {
                    this.setState({
                        product: null,
                        fetching: false,
                        errorMessage: errResp.message
                    })
                }
            )
    }
    // shouldComponentUpdate(newProps, newState) {
    //     if (this.state.product === null || (newProps.selectedProductId !== this.props.selectedProductId && newState.product.productId !== newProps.selectedProductId)) {

    //         return true
    //     }
    //     return false
    // }
    componentDidMount() {
        console.log('[VP] mounted')
        this.fetchProduct()
    }
    componentDidUpdate(oldProps, oldState) {
        // console.log(this.state)
        // console.log(this.props)
        console.log('[VP] getting updated')
        if (this.props.selectedProductId !== oldProps.selectedProductId)
            this.fetchProduct()
    }
    render() {
        console.log('[VP] rendered')

        let productDesign = null

        if (this.state.fetching) {
            productDesign = <span>Loading...</span>
        } else if (this.state.errorMessage !== '') {
            productDesign = <span>{this.state.errorMessage}</span>
        } else if (this.state.product === null) {
            productDesign = <span>No product found..</span>
        } else {
            productDesign = (
                <div>
                    Detail of :&nbsp;{this.state.product.productName}
                </div>
            )
        }
        return productDesign
    }
}
export default ViewProduct