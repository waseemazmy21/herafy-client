"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

type Craftsman = {
  name: string;
  description: string;
  phone: string;
  jobTitle: string;
};

const CraftsmanCard = ({ craftsmanId }: { craftsmanId: string }) => {
  const [craftsman, setCraftsman] = useState<Craftsman>();

  useEffect(() => {
    const fetchCraftsman = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:7000/api/users/craftsman/${craftsmanId}`,
          {
            headers: {
              "x-auth-token": token,
            },
          },
        );
        setCraftsman(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching craftsman details:", error);
      }
    };
    if (craftsmanId !== "") fetchCraftsman();
  }, [craftsmanId]);

  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <h3 className="typography-h3 mb-1">{craftsman?.name}</h3>
        <p className=" text-sm text-muted-foreground">{craftsman?.jobTitle}</p>
      </div>
      <p className=" text-sm text-muted-foreground">{craftsman?.description}</p>
      <p>
        <span
          className={`text-sm text-muted-foreground ${!craftsman && "hidden"}`}
        >
          رقم الهاتف:{" "}
        </span>
        {craftsman?.phone}
      </p>
    </div>
  );
};

export default CraftsmanCard;
