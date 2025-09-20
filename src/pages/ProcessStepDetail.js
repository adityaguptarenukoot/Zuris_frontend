import React from "react";
import { useParams, Link } from "react-router-dom";
import aiProcessSteps from "../data/aiProcessSteps";

const ProcessStepDetail = () => {
  const { stepKey } = useParams();
  const step = aiProcessSteps.find((s) => s.key === stepKey);

  if (!step) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold text-red-600">Step not found!</h2>
        <Link to="/process" className="text-blue-600 underline">Back to process</Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      <div className="flex items-center mb-6">
        <span className="text-5xl mr-4">{step.icon}</span>
        <h1 className="text-3xl font-bold">{step.title}</h1>
      </div>
      <p className="mb-4 text-gray-600">{step.description}</p>
      <div className="bg-white p-6 rounded shadow text-lg mb-4">{step.details}</div>
      <Link to="/process" className="inline-block px-6 py-2 text-white bg-indigo-700 rounded-full mt-6">
        Back to Process
      </Link>
    </div>
  );
};

export default ProcessStepDetail;
