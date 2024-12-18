import React from "react";
import { Card } from "antd";

const ItemCard = ({ src, title })=> {
  return (
      <Card
        hoverable
        className="Card text-card"
        style={{
        }}
        cover={<img className="w-[20%]" alt={title} src={src}  />}
      >
        <p>{title}</p>
      </Card>
  );
}

export default ItemCard;
