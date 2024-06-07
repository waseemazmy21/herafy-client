"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { buttonVariants } from "@/components/ui/button";
import JobCard from "@/components/client-dashboard/job-card";
import Link from "next/link";
import { translateServerMessage } from "@/utils/utils";
import { Job } from "@/lib/types";

const ClientDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get("http://localhost:7000/api/jobs", {
          headers: {
            "x-auth-token": token,
          },
        });
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
      <div className="flex justify-between gap-4">
        <h1 className="typography-h3">مساحة العمل الخاصة بك</h1>
        <Link
          className={buttonVariants({ variant: "outline", class: "mb-4" })}
          href="/client/post-job"
        >
          نشر وظيفة
        </Link>
      </div>
      <div className="max-w-lg">
        {jobs.length > 0 ? (
          jobs.map((job: Job) => <JobCard key={job._id} job={job} />)
        ) : (
          <p>لم تنشر أي وظيفة بعد</p>
        )}
      </div>
    </div>
  );
};

export default ClientDashboard;
