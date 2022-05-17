import React from 'react'

const productData = {
    "productId": 1,
    "productName": "Leaf Rake",
    "productCode": "GDN-0011",
    "releaseDate": "March 19, 2016",
    "description": "Leaf rake with 48-inch wooden handle.",
    "price": 19.95,
    "starRating": 4,
    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
}

function ProductDetail() {
    const imgStyle = {
        width: '50px',
        margin: '2px'
    }
    const productTable = (
        <div className='tbl tbl-responsive'>
            <table className='table'>
                <thead style={{ backgroundColor: 'burlywood' }}>
                    <tr>
                        <th> Image  </th>
                        <th> Name  </th>
                        <th> Price  </th>
                        <th> Rating  </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src={productData.imageUrl}
                                alt='NA'
                                title={productData.productName}
                                style={imgStyle}
                            />
                        </td>
                        <td>
                            {productData.productName}
                        </td>
                        <td>
                            {productData.price}
                        </td>
                        <td>
                            {productData.starRating}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
    return productTable
}

export default ProductDetail