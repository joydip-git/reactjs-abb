import PropTypes from 'prop-types'

function Value(props) {
    console.log('value is rendered')
    const valueComp = (
        <div>
            Value: &nbsp;
            <span>
                {
                    props.valueData
                }
            </span>
            <br />
            <button
                onClick={props.increaseHandler}>
                Increase
            </button>
        </div>
    )
    return valueComp
}
Value.propTypes = {
    valueData: PropTypes.number.isRequired,
    increaseHandler: PropTypes.func.isRequired
}
export default Value