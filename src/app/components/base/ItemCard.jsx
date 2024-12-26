import React from "react";
import { Card } from "antd";

const ItemCard = ({ src, title }) => {
  return (
      <Card
        hoverable
        className="Card text-card"
        cover={<img alt={title} src={src} class="w-[20%]" />}
      >
        <p>{title}</p>
      </Card>
  );
}

export default ItemCard;
