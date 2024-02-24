import React from 'react'

function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block py-5">
            <div className="row">
                {/* single column */}
                <div className="col-lg-2">
        <p className="text-uppercase">products</p>

                </div>

            {/* end single coloumn */}

                {/* single column */}
                <div className="col-lg-2">
                    <p className="text-uppercase">Name of the products</p>

                </div>

                {/* end single coloumn */}
                {/* single column */}
                <div className="col-lg-2">
                    <p className="text-uppercase">price</p>

                </div>

                {/* end single coloumn */}
                {/* single column */}
                <div className="col-lg-2">
                    <p className="text-uppercase">quantity</p>

                </div>

                {/* end single coloumn */}
                {/* single column */}
                <div className="col-lg-2">
                    <p className="text-uppercase">remove</p>

                </div>

                {/* end single coloumn */}
                {/* single column */}
                <div className="col-lg-2">
                    <p className="text-uppercase">total</p>

                </div>

                {/* end single coloumn */}
            </div>
         
        </div>
    )
}

export default CartColumns
