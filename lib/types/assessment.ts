export interface Strength {
  title: string;
  description: string;
}

export interface Concern {
  title: string;
  finding: string;
  recommendation: string;
}

export interface InterviewQuestion {
  question: string;
  reason: string;
}

export interface Assessment {
  strengths: Strength[];
strengthenApplication: Concern[];
  finalAssessment: string;
  interviewQuestions: InterviewQuestion[];
}