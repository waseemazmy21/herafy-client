"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { translateServerMessage } from "@/utils/utils";
import { Job } from "@/lib/types";

const JobComponent = ({ job }: { job: Job }) => {
  return (
    <div className="w-full cursor-pointer rounded-xl border border-border bg-background p-4 transition hover:scale-[101%] ">
      <div className="mb-4 flex justify-between gap-4">
        <h4 className="typography-h4">{job.title}</h4>
        <p>{job.budget} جنيه مصري</p>
      </div>
      <p className="text-muted-foreground">{job.description}</p>
      <div className="flex justify-between">
        <div className="mt-6 flex flex-col gap-4">
          <p>المدة: {job.duration}</p>
          <p>الفئة: {job.category}</p>
          <p className="">الموقع: {job.location}</p>
        </div>
        <Link
          href={`/client/job/${job._id}/proposals`}
          className={buttonVariants({
            variant: "outline",
            className: "self-end",
          })}
        >
          تصفح العروض
        </Link>
      </div>
    </div>
  );
};

const ClientDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          "http://localhost:7000/api/jobs/client",
          {
            headers: {
              "x-auth-token": token,
            },
          },
        );
        setJobs(response.data);
      } catch (e: any) {
        setError(e.response?.data?.message || "An error occurred");
        alert(translateServerMessage(error));
      }
    };

    fetchJobs();
  }, [error]);

  return (
    <div className="container py-8">
      <h3 className="typography-h3 mb-6">مساحه العمل الخاصة بك</h3>

      <div className="flex flex-col-reverse gap-8 sm:flex-row ">
        <div className="w-full sm:w-2/3">
          {jobs.length > 0 ? (
            <div className="flex flex-col gap-4">
              {jobs.map((job: Job) => (
                <JobComponent key={job._id} job={job} />
              ))}
            </div>
          ) : (
            <p className="text-2xl text-muted-foreground ">
              لم تقم بنشر اي وظيفة بعد.
            </p>
          )}
        </div>

        <div className="flex w-full flex-col gap-4  rounded-xl border border-border p-4 sm:w-1/3">
          <Link
            href="/client/post-job"
            className={buttonVariants({ variant: "outline" })}
          >
            نشر وظيفه
          </Link>
          <select className="rounded border p-2">
            <option value="">كل الحالات</option>
            <option value="open">المتاحه للحرفيين</option>
            <option value="close">المنتهيه</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
