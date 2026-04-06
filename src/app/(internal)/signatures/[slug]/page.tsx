import { Metadata } from "next";
import { notFound } from "next/navigation";
import { employees } from "../_data/employees";
import { generateSignatureHtml } from "../_components/SignatureTemplate";
import SignaturePreview from "../_components/SignaturePreview";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const employee = employees[slug];
  if (!employee) return {};
  return {
    title: `Email Signature - ${employee.name}`,
    robots: { index: false, follow: false },
  };
}

export function generateStaticParams() {
  return Object.keys(employees).map((slug) => ({ slug }));
}

export default async function SignaturePage({ params }: Props) {
  const { slug } = await params;
  const employee = employees[slug];
  if (!employee) notFound();

  const html = generateSignatureHtml(employee);

  return <SignaturePreview signatureHtml={html} employeeName={employee.name} />;
}
