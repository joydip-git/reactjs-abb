import PropTypes from 'prop-types'

function ProductRow(props) {
    const { productInfo } = props
    // const productInfo = props.productInfo
    return (
        <tr>
            <td>
                <img src={productInfo.imageUrl}
                    alt="NA"
                    title={productInfo.productName}
                    style={{ margin: '2px', width: '50px' }}
                />
            </td>
            <td>{productInfo.productName}</td>
            <td>{productInfo.price}</td>
            <td>{productInfo.starRating}</td>
            <td>
                <button>Delete</button>
            </td>
        </tr>
    )
}
ProductRow.propTypes = {
    productInfo: PropTypes.object.isRequired
}
export default ProductRow