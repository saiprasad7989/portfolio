import { redirect } from "next/navigation";

export const metadata = {
  title: "Resume - BTN Sai Prasad - Product & Engineering",
  description: "Download the resume of BTN Sai Prasad - Product professional building B2B SaaS MVPs with expertise in React, NextJS, and LLM integration.",
};

export const GET = async () => {
  return redirect(process.env.RESUME_URL || "");
};
