import PropTypes from 'prop-types'
import { Component } from 'react'
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
class ViewProduct extends Component {
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
    componentDidMount() {
        this.fetchProduct()
    }
    componentDidUpdate() {
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