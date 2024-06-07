"use client";

import { Job } from "@/lib/types";

const JobCard = ({ job }: { job: Job }) => {
  return (
    <div className="border-b border-t border-gray-200 py-4">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-xl font-bold">{job.title}</h2>
        <p className="text-lg font-semibold text-green-500">{job.budget} ج.م</p>
      </div>
      <div className="text-sm text-gray-600">
        <p>{job.description}</p>
      </div>
      <div className="mt-2 text-gray-800">
        <p>
          <strong>الموقع:</strong> {job.location}
        </p>
        <p>
          <strong>المدة:</strong> {job.duration}
        </p>
        <p>
          <strong>الفئة:</strong> {job.category}
        </p>
      </div>
    </div>
  );
};

export default JobCard;
