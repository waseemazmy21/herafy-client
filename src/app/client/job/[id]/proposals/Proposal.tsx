"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ProposalWithCraftsman as Proposal } from "@/lib/types";
import { handleClientScriptLoad } from "next/script";

const propsalStatus = {
  pending: "لم يتم التحديد",
  accepted: "مقبول",
  rejected: "مرفوض",
};

const ProposalComponent = ({
  proposal,
  onAccept,
  onClickCraftsmanName,
}: {
  proposal: Proposal;
  onAccept: (proposalId: string) => void;
  onClickCraftsmanName: (craftsmanId: string) => void;
}) => {
  return (
    <div
      onMouseEnter={() => {
        onClickCraftsmanName(proposal.craftsmanId._id);
      }}
      className="w-full rounded-xl border border-border bg-background p-4 transition hover:scale-[101%] "
    >
      <div className="mb-4 flex justify-between gap-4">
        <h4 className="typography-h4">
          عرض من:{" "}
          <Button variant="link" className="underline">
            {proposal.craftsmanId.name}
          </Button>
        </h4>
        <p>{proposal.proposedBudget} جنيه مصري</p>
      </div>
      <p className="text-muted-foreground">{proposal.message}</p>
      <div className="mt-6 flex justify-between">
        {proposal.status === "pending" ? (
          <Button
            variant={"outline"}
            onClick={() => {
              onAccept(proposal._id);
            }}
          >
            قبول العرض
          </Button>
        ) : (
          <p
            className={`rounded-sm px-4 py-1 text-white ${proposal.status === "accepted" ? "bg-green-500" : "bg-red-500"}`}
          >
            {propsalStatus[proposal.status]}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProposalComponent;
