"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Job, Proposal } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { jobCategories, jobDurations } from "@/lib/placehoder-data";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const JobComponent = ({
  job,
  hasApplied,
}: {
  job: Job;
  hasApplied: boolean;
}) => {
  console.log("hasApplied", hasApplied);
  return (
    <div className="w-full rounded-xl border border-border bg-background p-4 transition hover:scale-[101%] ">
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
        {hasApplied ? (
          <div
            className={buttonVariants({
              variant: "outline",
              className: "self-end",
            })}
          >
            لقد قمت بالتقديم
          </div>
        ) : (
          <Link
            href={`/craftsman/jobs/${job._id}/send-proposal`}
            className={buttonVariants({
              variant: "outline",
              className: "self-end",
            })}
          >
            التقديم علي الوظيفه
          </Link>
        )}
      </div>
    </div>
  );
};

const JobSearch = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState("");
  const [minBudget, setMinBudget] = useState("");
  const [maxBudget, setMaxBudget] = useState("");
  const [error, setError] = useState();

  useEffect(() => {
    const fetchJobs = async () => {
      const token = localStorage.getItem("token");
      try {
        // const response = await axios.get("http://localhost:7000/api/jobs", {
        //   headers: {
        //     "x-auth-token": token,
        //   },
        // });

        const [jobsResponse, proposalsResponse] = await Promise.all([
          axios.get("http://localhost:7000/api/jobs", {
            headers: { "x-auth-token": token },
          }),
          axios.get("http://localhost:7000/api/proposals/craftsman", {
            headers: { "x-auth-token": token },
          }),
        ]);

        setJobs(jobsResponse.data);
        setFilteredJobs(jobsResponse.data);
        setProposals(proposalsResponse.data);
        console.log("jobs", jobsResponse.data);
        console.log("proposals", proposalsResponse.data);
      } catch (e: any) {
        console.log(e);
        // if (e.response.status === 401) {
        //   window.location.href = "/";
        // }
        setError(e);
        console.log(e);
      }
    };

    fetchJobs();
  }, []);

  // const handleSearch = () => {
  //   const filtered = jobs.filter((job) => {
  //     const matchesCategory = category ? job.category === category : true;
  //     const matchesBudget =
  //       (minBudget ? job.budget >= parseFloat(minBudget) : true) &&
  //       (maxBudget ? job.budget <= parseFloat(maxBudget) : true);
  //     return matchesCategory && matchesBudget;
  //   });
  //   setFilteredJobs(filtered);
  // };

  return (
    <div className="container py-8">
      <h3 className="typography-h3 mb-6">الوظائف</h3>

      <div className="flex flex-col-reverse gap-8 sm:flex-row ">
        <div className="w-full sm:w-2/3">
          {jobs.length > 0 ? (
            <div className="flex flex-col gap-4">
              {jobs.map((job: Job) => (
                <JobComponent
                  key={job._id}
                  job={job}
                  hasApplied={proposals.some((p) => p.jobId === job._id)}
                />
              ))}
            </div>
          ) : (
            <p className="text-2xl text-muted-foreground ">
              لم يتم العثور على وظائف
            </p>
          )}
        </div>

        <div className="flex w-full flex-col gap-4  rounded-xl border border-border p-4 sm:w-1/3">
          <div className="flex justify-between gap-4">
            <Input
              type="number"
              placeholder="الحد الأدنى للميزانية"
              value={minBudget}
              onChange={(e) => setMinBudget(e.target.value)}
              className="rounded border p-2"
            />
            <Input
              type="number"
              placeholder="الحد الأقصى للميزانية"
              value={maxBudget}
              onChange={(e) => setMaxBudget(e.target.value)}
              className="rounded border p-2"
            />
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded border p-2"
          >
            <option value="">كل الفئات</option>
            {jobCategories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="rounded border p-2"
          >
            <option value="">كل الفترات</option>
            {jobDurations.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
