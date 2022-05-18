//import PropTypes from "prop-types";
import { forwardRef, memo } from "react";

// function FilterProduct(props, reference) {
//     console.log('[FP] rendered')
//     return (
//         <div>
//             <span>Filter By:&nbsp;</span>
//             <input
//                 ref={reference}
//                 type='text'
//                 value={props.filterValue}
//                 onChange={
//                     (event) => {
//                         props.filterHandler(event.target.value)
//                     }
//                 } />
//         </div>
//     )
// }
// FilterProduct.propTypes = {
//     filterValue: PropTypes.string.isRequired,
//     filterHandler: PropTypes.func.isRequired
// }

const FilterProduct = forwardRef(
    (props, reference) => {
        console.log('[FP] rendered')
        return (
            <div>
                <span>Filter By:&nbsp;</span>
                <input
                    ref={reference}
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
)
export default memo(FilterProduct)