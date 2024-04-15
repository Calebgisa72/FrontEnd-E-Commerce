import "./dicount.css";
interface DiscountProps {
  price: number;
  from: number;
}

function Discount({ price, from }: DiscountProps) {
  function findPercentage(price: number, from: number) {
    return (price / from) * 100;
  }

  const percentage = findPercentage(price, from);

  return (
    <div className="discountDetail">
      <div className="name">
        <div className="price">${price.toFixed(2)}</div>
        <div className="discountPercent">{percentage}%</div>
      </div>
      <div className="from">${from.toFixed(2)}</div>
    </div>
  );
}

export default Discount;
