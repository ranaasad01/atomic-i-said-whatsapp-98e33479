import { MessageCircle } from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/10000000000?text=Hello!";

export default function Page() {
  return (
    <main className="min-h-screen bg-[hsl(var(--card))]">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-[hsl(var(--foreground))] sm:text-5xl">
            Hello from Atomic Builder
          </h1>
          <p className="max-w-md text-pretty leading-relaxed text-[hsl(var(--muted-foreground))]">
            We&apos;re here to help. Reach out anytime and we&apos;ll get back to you fast.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#128C3E] px-6 py-3 font-semibold text-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#128C3E]"
          >
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp
          </a>
        </div>
      </section>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#128C3E] text-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#128C3E]"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </main>
  );
}
