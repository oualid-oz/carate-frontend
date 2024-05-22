import { Badge, Image, Typography } from "antd";
import React from "react";

function ShowCarForm({ editCarInfos }) {
  const ribbonColor = editCarInfos.carColor.toLowerCase();
  return (
    <div className="flex flex-col">
      <Typography.Paragraph className="mb-3">
        {editCarInfos?.carDescription}
      </Typography.Paragraph>
      <span className="text-white mb-3">
          Year: {editCarInfos?.carYear}
      </span>
      <Badge.Ribbon
        text={
          <span className={ribbonColor === "white" && "text-black"}>
            $ {editCarInfos?.carPrice}
          </span>
        }
        color={ribbonColor}
        className="font-semibold top-10"
      >
        <Image
          src={editCarInfos?.image_url}
          alt={editCarInfos?.carName}
          className="rounded-xl"
        />
      </Badge.Ribbon>
    </div>
  );
}

export default ShowCarForm;
