import type { Assessment } from "@/lib/types/assessment";

export const mockAssessment: Assessment = {
  strengths: [
    {
      title: "Strong Educational Background",
      description:
        "Your 10 years of curriculum development experience aligns closely with the educational expertise this role requires.",
    },
    {
      title: "Evidence of Collaboration",
      description:
        "Your resume demonstrates experience working with cross-functional teams, a key responsibility highlighted in the job description.",
    },
    {
      title: "Resume Improvements Added Context",
      description:
        "The additional information you provided during the Resume Review strengthened your application and better demonstrated relevant experience.",
    },
  ],

  concerns: [
    {
      title: "Limited Salesforce Experience",
      description:
        "Although you're actively pursuing Salesforce certification, your resume doesn't yet demonstrate significant hands-on platform experience.",
    },
    {
      title: "Leadership Experience",
      description:
        "The position emphasizes leadership responsibilities that aren't yet strongly represented throughout your resume.",
    },
    {
      title: "Enterprise CRM Exposure",
      description:
        "Your resume doesn't clearly demonstrate experience working with enterprise-scale CRM implementations.",
    },
  ],

  finalAssessment:
    "Overall, your background demonstrates many of the core qualifications for this position. The additional context you provided during the Resume Review strengthened your application and helped clarify experience that wasn't initially reflected on your resume. While a few areas may prompt follow-up questions during an interview, they don't appear to outweigh your strongest qualifications. If this role aligns with your career goals, this appears to be a worthwhile opportunity to pursue.",

  interviewQuestions: [
    {
      question:
        "Tell me about your experience using Salesforce.",
      reason:
        "Your resume doesn't currently demonstrate direct Salesforce experience, but it's listed as an important requirement for this role.",
    },
    {
      question:
        "Describe a time you collaborated across multiple teams to accomplish a goal.",
      reason:
        "Cross-functional collaboration is emphasized throughout the job description, and hiring managers often ask for specific examples.",
    },
    {
      question:
        "Can you walk me through a project that best demonstrates your qualifications for this position?",
      reason:
        "This open-ended question allows hiring managers to understand how your experience aligns with the role's primary responsibilities.",
    },
    {
      question:
        "Tell me about a time you had to quickly learn a new skill or technology.",
      reason:
        "Interviewers often ask this when there are small experience gaps to evaluate adaptability and learning ability.",
    },
  ],
};