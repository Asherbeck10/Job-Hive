import React from "react";
// import SearchResults from '../SearchResults.json'
import { useParams } from "react-router-dom";
// import jobTest from  '../../test'

function JobInfo() {
  const { id } = useParams();
  const jobs = JSON.parse(localStorage.getItem("searchResults")) || [];
  console.log(jobs);
  const job = jobs[id];

  return (
    <div>
      <div className="max-w-md mx-auto bg-indigo-200 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
          {job.employer_logo ?
            <img
              className="h-48 w-full object-cover md:w-48"
              src={job.employer_logo}
              alt="Thumbnail"
            />
            :
            <div className="h-50 w-full md:w-48  flex justify-center items-center text-indigo-600 text-9xl font-bold">
      {job.employer_name.charAt(0)}
    </div>
  }
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-black-500 text-5xl font-semibold">
              {job.job_title}
            </div>
            <div className="uppercase tracking-wide text-sm text-blue-500 font-semibold">
              <a
                href={job.employer_website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {job.employer_name}
              </a>
            </div>
            <div className="uppercase tracking-wide text-sm text-black-500 font-semibold">
              {job.job_city}
            </div>
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {job.job_min_salary}-{job.job_max_salary}{job.job_salary_currency}
            </div>

            <p className="mt-2 text-gary-900">{job.job_description}</p>
            <a
              href={job.job_apply_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-4 rounded mt-4">
                Apply Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobInfo;
