import React from "react";
import { Card } from "antd";

const ItemCard = ({ src, title })=> {
  return (
    <Card
      hoverable
      className="Card text-card"
      style={{
        width : "100"
      }}
      cover={<img alt={title} src={src} />}
    >
      <p>{title}</p>
    </Card>
  );
}

export default ItemCard;
