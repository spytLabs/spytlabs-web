import { getRedirectTarget } from "@/lib/redirectLinks";
import { notFound, redirect } from "next/navigation";

type RedirectPageProps = {
  params: Promise<{ code: string }>;
};

export const dynamic = "force-dynamic";

export default async function RedirectPage({ params }: RedirectPageProps) {
  const { code } = await params;
  const targetUrl = await getRedirectTarget(code);

  if (!targetUrl) {
    notFound();
  }

  redirect(targetUrl);
}
