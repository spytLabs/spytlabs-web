import {
  clearAdminSessionCookie,
  isAdminAuthenticated,
  isValidAdminCredentials,
  setAdminSessionCookie,
} from "@/lib/redirectAdminAuth";
import {
  createRedirectLink,
  deleteRedirectLink,
  listRedirectLinks,
  updateRedirectLink,
} from "@/lib/redirectLinks";
import { getSiteUrl } from "@/lib/siteUrl";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

type AdminPageProps = {
  searchParams: Promise<{
    error?: string;
    success?: string;
  }>;
};

function parseCheckbox(formData: FormData, fieldName: string) {
  return formData.get(fieldName) === "on";
}

function parseId(formData: FormData, fieldName: string) {
  const value = Number(formData.get(fieldName));
  if (!Number.isInteger(value) || value <= 0) {
    throw new Error("Invalid redirect ID.");
  }

  return value;
}

async function ensureAdminSession() {
  if (!(await isAdminAuthenticated())) {
    redirect("/r/admin?error=not_authenticated");
  }
}

async function loginAction(formData: FormData) {
  "use server";

  const username = String(formData.get("username") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!isValidAdminCredentials(username, password)) {
    redirect("/r/admin?error=invalid_credentials");
  }

  await setAdminSessionCookie();
  redirect("/r/admin?success=logged_in");
}

async function logoutAction() {
  "use server";

  await clearAdminSessionCookie();
  redirect("/r/admin?success=logged_out");
}

async function createRedirectAction(formData: FormData) {
  "use server";

  await ensureAdminSession();

  try {
    await createRedirectLink({
      code: String(formData.get("code") ?? ""),
      targetUrl: String(formData.get("target_url") ?? ""),
      isActive: parseCheckbox(formData, "is_active"),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    redirect(`/r/admin?error=${encodeURIComponent(message)}`);
  }

  revalidatePath("/r/admin");
  redirect("/r/admin?success=created");
}

async function updateRedirectAction(formData: FormData) {
  "use server";

  await ensureAdminSession();

  try {
    await updateRedirectLink({
      id: parseId(formData, "id"),
      code: String(formData.get("code") ?? ""),
      targetUrl: String(formData.get("target_url") ?? ""),
      isActive: parseCheckbox(formData, "is_active"),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    redirect(`/r/admin?error=${encodeURIComponent(message)}`);
  }

  revalidatePath("/r/admin");
  redirect("/r/admin?success=updated");
}

async function deleteRedirectAction(formData: FormData) {
  "use server";

  await ensureAdminSession();

  try {
    await deleteRedirectLink(parseId(formData, "id"));
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    redirect(`/r/admin?error=${encodeURIComponent(message)}`);
  }

  revalidatePath("/r/admin");
  redirect("/r/admin?success=deleted");
}

function formatMessage(searchParams: Awaited<AdminPageProps["searchParams"]>) {
  const safeDecode = (value: string) => {
    try {
      return decodeURIComponent(value);
    } catch {
      return value;
    }
  };

  if (searchParams.error) {
    return {
      type: "error" as const,
      text: safeDecode(searchParams.error),
    };
  }

  if (searchParams.success) {
    return {
      type: "success" as const,
      text: safeDecode(searchParams.success),
    };
  }

  return null;
}

function prettyStatus(value: string) {
  return value.replaceAll("_", " ");
}

export default async function RedirectAdminPage({ searchParams }: AdminPageProps) {
  const adminAuthenticated = await isAdminAuthenticated();
  const query = await searchParams;
  const message = formatMessage(query);

  if (!adminAuthenticated) {
    return (
      <main className="mx-auto flex w-full max-w-xl flex-1 flex-col px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Redirect Admin</h1>
        <p className="mt-2 text-sm text-neutral-600">
          Sign in to manage short URL codes under /r/[code].
        </p>

        {message?.type === "error" ? (
          <p className="mt-5 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
            {prettyStatus(message.text)}
          </p>
        ) : null}

        <form action={loginAction} className="mt-8 space-y-4 rounded-lg border border-neutral-200 p-5">
          <label className="block">
            <span className="mb-1 block text-sm font-medium">Username</span>
            <input
              name="username"
              type="text"
              autoComplete="username"
              required
              className="w-full rounded-md border border-neutral-300 px-3 py-2"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium">Password</span>
            <input
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full rounded-md border border-neutral-300 px-3 py-2"
            />
          </label>
          <button
            type="submit"
            className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white"
          >
            Sign in
          </button>
        </form>
      </main>
    );
  }

  const links = await listRedirectLinks();
  const siteOrigin = getSiteUrl().origin;

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Redirect Admin</h1>
          <p className="mt-1 text-sm text-neutral-600">
            Create and maintain redirect codes for marketing and campaigns.
          </p>
        </div>
        <form action={logoutAction}>
          <button
            type="submit"
            className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium"
          >
            Sign out
          </button>
        </form>
      </div>

      {message ? (
        <p
          className={`mt-5 rounded-md px-3 py-2 text-sm ${
            message.type === "error"
              ? "bg-red-50 text-red-700"
              : "bg-emerald-50 text-emerald-700"
          }`}
        >
          {prettyStatus(message.text)}
        </p>
      ) : null}

      <section className="mt-8 rounded-lg border border-neutral-200 p-5">
        <h2 className="text-lg font-semibold">Create New Redirect</h2>
        <form action={createRedirectAction} className="mt-4 grid gap-4 md:grid-cols-[1fr_2fr_auto_auto]">
          <label className="block">
            <span className="mb-1 block text-sm font-medium">Code</span>
            <input
              name="code"
              type="text"
              required
              placeholder="launch-2026"
              className="w-full rounded-md border border-neutral-300 px-3 py-2"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-sm font-medium">Target URL</span>
            <input
              name="target_url"
              type="url"
              required
              placeholder="https://example.com/page"
              className="w-full rounded-md border border-neutral-300 px-3 py-2"
            />
          </label>

          <label className="mt-7 flex items-center gap-2 text-sm">
            <input name="is_active" type="checkbox" defaultChecked className="size-4" />
            Active
          </label>

          <button
            type="submit"
            className="mt-7 rounded-md bg-black px-4 py-2 text-sm font-medium text-white"
          >
            Create
          </button>
        </form>
      </section>

      <section className="mt-8 overflow-hidden rounded-lg border border-neutral-200">
        <div className="grid grid-cols-[1.3fr_2fr_0.8fr_0.8fr] gap-2 border-b border-neutral-200 bg-neutral-50 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-600">
          <span>Short URL</span>
          <span>Destination</span>
          <span>Status</span>
          <span>Actions</span>
        </div>

        {links.length === 0 ? (
          <p className="px-4 py-8 text-sm text-neutral-500">No redirect codes created yet.</p>
        ) : (
          <div className="divide-y divide-neutral-200">
            {links.map((link) => (
              <div key={link.id} className="px-4 py-4">
                <form action={updateRedirectAction} className="grid gap-3 lg:grid-cols-[1.3fr_2fr_0.8fr_0.8fr]">
                  <input name="id" type="hidden" value={link.id} />

                  <label className="block text-sm">
                    <span className="mb-1 block text-xs text-neutral-500">{siteOrigin}/r/</span>
                    <input
                      name="code"
                      type="text"
                      defaultValue={link.code}
                      required
                      className="w-full rounded-md border border-neutral-300 px-3 py-2"
                    />
                  </label>

                  <label className="block text-sm">
                    <span className="mb-1 block text-xs text-neutral-500">Target URL</span>
                    <input
                      name="target_url"
                      type="url"
                      defaultValue={link.target_url}
                      required
                      className="w-full rounded-md border border-neutral-300 px-3 py-2"
                    />
                  </label>

                  <label className="mt-7 flex items-center gap-2 text-sm">
                    <input
                      name="is_active"
                      type="checkbox"
                      defaultChecked={link.is_active}
                      className="size-4"
                    />
                    Active
                  </label>

                  <div className="mt-7 flex items-center gap-2">
                    <button
                      type="submit"
                      className="rounded-md bg-black px-3 py-2 text-sm font-medium text-white"
                    >
                      Save
                    </button>
                  </div>
                </form>

                <form action={deleteRedirectAction} className="mt-2">
                  <input name="id" type="hidden" value={link.id} />
                  <button type="submit" className="text-xs font-medium text-red-700">
                    Delete
                  </button>
                </form>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
