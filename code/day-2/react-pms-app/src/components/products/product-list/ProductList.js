import PropTypes from "prop-types";
import ProductRow from "../product-row/ProductRow";

function ProductList(props) {
    const tableDesign = (
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Rating</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.productRecords.map(
                        (p) => {
                            return <ProductRow productInfo={p} key={p.productId} />
                        }
                    )
                }
            </tbody>
        </table>
    )
    return tableDesign
}
ProductList.propTypes = {
    productRecords: PropTypes.array.isRequired
}

export default ProductList