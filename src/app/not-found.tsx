import { LinkButton } from "@/components/ui/GoldButton";

export default function NotFound() {
  return (
    <section className="spotlight grain relative flex min-h-[80svh] items-center justify-center overflow-hidden px-6 text-center">
      <div className="relative">
        <p className="font-serif text-[7rem] font-semibold leading-none text-gold-gradient sm:text-[10rem]">
          404
        </p>
        <h1 className="mt-2 font-serif text-2xl text-ink sm:text-3xl">
          This scene isn&rsquo;t on the run-sheet.
        </h1>
        <p className="mx-auto mt-3 max-w-md text-ink-soft">
          The page you&rsquo;re looking for has left the stage. Let&rsquo;s get you back to the show.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <LinkButton href="/" size="lg">
            Back to home
          </LinkButton>
          <LinkButton href="/contact" variant="outline" size="lg">
            Book Me
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
