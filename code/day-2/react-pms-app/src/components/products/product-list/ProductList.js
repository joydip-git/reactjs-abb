import PropTypes from "prop-types";
import ProductRow from "../product-row/ProductRow";

function ProductList(props) {
    console.log('[PL] rendered')
    const tableDesign = (
        <div className="tbl tbl-responsive">
            <table className="table">
                <thead style={{ backgroundColor: 'burlywood' }}>
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
                                return <ProductRow
                                    productInfo={p} key={p.productId}
                                    selectedProductHandler={props.selectHandler}
                                />
                            }
                        )
                    }
                </tbody>
            </table>
        </div>
    )
    return tableDesign
}
ProductList.propTypes = {
    productRecords: PropTypes.array.isRequired,
    selectHandler: PropTypes.func.isRequired
}

export default ProductList