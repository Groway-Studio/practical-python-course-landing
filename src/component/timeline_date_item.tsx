import { Timeline } from "../utils";
import "../sass/component/_timeline_date_item.scss";

interface Props extends Timeline {}

const TimelineDateItem = ({
  day,
  description,
  disabled,
  month,
  price,
  ribbon,
  typeOfSale,
  until,
  discount,
}: Props) => {
  return (
    <li className={disabled ? "disabled" : "timeline__item"}>
      {ribbon && (
        <div className="ribbon">
          {disabled && <span>Sold Out</span>}
          <small>{discount}% Off</small>
        </div>
      )}
      <small className="timeline__item-limit">Desde el</small>

      <span className="timeline__item-day">{day}</span>
      <span className="timeline__item-month">{month}</span>

      <h3 className="timeline__item-type">{typeOfSale}</h3>
      <p className="timeline__item-description">{description}</p>

      <span className="timeline__item-price">{price}</span>

      <small className="timeline__item-limit">Hasta el {until}</small>
    </li>
  );
};

export default TimelineDateItem;
