
function GoodsItem (props){
    const {
        id,
        name,
        description,
        price,
        type,
        full_background,
        image,
        icon,
        addToBusket = Function.prototype

    } = props

    return (
       
          <div className="card">
            <div className="card-image">
              <img src={full_background} alt={name}/>
              
            </div>
            <div className="card-content">
            <span className="card-title">{name}</span>
              <p>{description}</p>
            </div>
            <div className="card-action">
              <button className="btn" onClick={()=>addToBusket({
                id, name, price
              })}
              >Купить</button><span className="right card-action__price">{price} руб.</span>
            </div>
          </div>

    )
}

export {GoodsItem}

