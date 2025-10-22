import { NextResponse } from 'next/server';
import { applicants } from '@/lib/mock-data';

export async function GET(
  _request: Request,
  { params }: { params: { jobId: string } }
) {
  const jobId = parseInt(params.jobId, 10);
  const jobApplicants = applicants.filter((applicant) => applicant.jobId === jobId);
  return NextResponse.json(jobApplicants);
}
