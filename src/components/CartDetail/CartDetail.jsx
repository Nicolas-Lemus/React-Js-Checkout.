import React from "react";

const CartDetail = ({ Tecnologia, qtyItems }) => {

  return (
    <div>
      <div>
        <div>
          <img src={Tecnologia.images} alt={Tecnologia.title}/>
        </div>
        <div>
          <h2>{Tecnologia.title}</h2>
          <p>{Tecnologia.description}</p>
          <p>Precio: ${Tecnologia.precio}</p>
          <p>Cantidad: {qtyItems.qtyItems}</p>
        </div>
      </div>
    </div>
  );
};

export default CartDetail;
