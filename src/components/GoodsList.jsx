import { GoodsItem } from './GoodsItem';

function GoodsList(props) {
  const { goods = [], addToBusket = Function.prototype } = props;
  return (
    <div className="cards-container">
      {goods.length ? (
        goods.map((good) => (
          <GoodsItem
            key={good.id}
            {...good}
            addToBusket = {addToBusket}
          />
        ))
      ) : (
        <h2>Nothing here</h2>
      )}
    </div>
  );
}

export { GoodsList };
