import PropTypes from 'prop-types'

function ProductRow(props) {
    console.log('[PR] rendered')
    const { productInfo, selectedProductHandler } = props
    // const productInfo = props.productInfo
    return (
        <tr>
            <td>
                <img src={productInfo.imageUrl}
                    alt="NA"
                    title={productInfo.productName}
                    style={{ margin: '2px', width: '50px' }}
                    onClick={
                        () => {
                            selectedProductHandler(productInfo.productId)
                        }
                    }
                />
            </td>
            <td>{productInfo.productName}</td>
            <td>{productInfo.price}</td>
            <td>{productInfo.starRating}</td>
            <td>
                <button className='btn btn-primary'>Delete</button>
            </td>
        </tr>
    )
}
ProductRow.propTypes = {
    productInfo: PropTypes.object.isRequired,
    selectedProductHandler: PropTypes.func.isRequired
}
export default ProductRow