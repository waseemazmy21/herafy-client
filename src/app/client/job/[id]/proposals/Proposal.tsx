"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ProposalWithCraftsman as Proposal } from "@/lib/types";

const propsalStatus = {
  pending: "لم يتم التحديد",
  accepted: "مقبول",
  rejected: "مرفوض",
};

const ProposalComponent = ({
  proposal,
  onAccept,
}: {
  proposal: Proposal;
  onAccept: (proposalId: string) => void;
}) => {
  return (
    <div className="w-full cursor-pointer rounded-xl border border-border bg-background p-4 transition hover:scale-[101%] ">
      <div className="mb-4 flex justify-between gap-4">
        <h4 className="typography-h4">
          عرض من:{" "}
          <Link
            href={`craftsman/:id`}
            className={buttonVariants({
              variant: "link",
              class: "underline",
            })}
          >
            {proposal.craftsmanId.name}
          </Link>
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
          <p>{propsalStatus[proposal.status]}</p>
        )}
      </div>
    </div>
  );
};

export default ProposalComponent;
