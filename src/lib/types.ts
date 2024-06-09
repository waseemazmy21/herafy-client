export type Job = {
  _id: string;
  title: string;
  budget: number;
  location: string;
  duration: string;
  category: string;
  description: string;
};

export type Proposal = {
  _id: string;
  craftsmanId: string;
  jobId: string;
  message: string;
  proposedBudget: number;
  status: "pending" | "accepted" | "rejected";
};
