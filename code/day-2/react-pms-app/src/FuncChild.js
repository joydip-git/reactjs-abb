import React, { forwardRef } from 'react'

let FuncChild = (props, reference) => {
    return (
        <div>
            Func Child Input: &nbsp; <input type='text' ref={reference} />
        </div>
    )
}
FuncChild = forwardRef(FuncChild)
export default FuncChild