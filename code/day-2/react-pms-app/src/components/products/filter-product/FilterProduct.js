import PropTypes from "prop-types";
import { memo } from "react";

function FilterProduct(props) {
    console.log('[FP] rendered')
    return (
        <div>
            <span>Filter By:&nbsp;</span>
            <input
                type='text'
                value={props.filterValue}
                onChange={
                    (event) => {
                        props.filterHandler(event.target.value)
                    }
                } />
        </div>
    )
}
FilterProduct.propTypes = {
    filterValue: PropTypes.string.isRequired,
    filterHandler: PropTypes.func.isRequired
}
export default memo(FilterProduct)