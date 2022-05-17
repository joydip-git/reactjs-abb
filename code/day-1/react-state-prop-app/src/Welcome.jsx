import PropTypes from 'prop-types'

function Welcome(args) {
    console.log('Welcome is rendered')
    //console.log(args)
    //property object is immutable
    //args.message = "Welcome"
    const welcomeElement = (
        <div>
            {args.message}
        </div>
    )

    return welcomeElement
}
Welcome.propTypes = {
    message: PropTypes.string.isRequired
}
export default Welcome