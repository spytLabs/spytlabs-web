import Link from 'next/link'

export const metadata = {
  title: 'Sanity Studio | spytLabs',
  description: 'spytLabs content studio is hosted separately from the Cloudflare app.',
}

const studioUrl = process.env.NEXT_PUBLIC_SANITY_STUDIO_URL

export default function StudioPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center px-6 py-16 text-[#111216]">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#6f6f7a]">
        Sanity Studio
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
        The embedded Studio has been moved off the Cloudflare worker.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-[#4a4a57]">
        This keeps the Worker under Cloudflare&apos;s free size limit. Use the hosted Sanity Studio
        for editing content, or set NEXT_PUBLIC_SANITY_STUDIO_URL to point this route at your
        deployed studio.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        {studioUrl ? (
          <Link
            href={studioUrl}
            className="inline-flex items-center justify-center rounded-full bg-[#111216] px-6 py-3 text-sm font-medium text-white transition-transform hover:translate-y-[-1px]"
          >
            Open hosted Studio
          </Link>
        ) : null}
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full border border-[#111216]/15 px-6 py-3 text-sm font-medium text-[#111216] transition-colors hover:bg-[#111216]/5"
        >
          Return home
        </Link>
      </div>
    </main>
  )
}
