"use client";

export function NewsletterSection() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section className="bg-primary px-page py-24 text-on-primary">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-headline mb-4 text-4xl uppercase text-on-primary">
          Join the 180PT Community
        </h2>
        <p className="mb-10 uppercase tracking-wider opacity-80">
          Be the first to hear about exclusive offers, community events, and training updates.
        </p>
        <form className="flex flex-col gap-4 md:flex-row" onSubmit={handleSubmit}>
          <input
            className="flex-grow border-2 border-on-primary bg-transparent px-8 py-5 font-label text-on-primary transition-none placeholder:text-on-primary/50 focus:bg-on-primary focus:text-primary focus:outline-none"
            placeholder="ENTER YOUR EMAIL"
            type="email"
            required
          />
          <button
            className="bg-on-primary px-12 py-5 font-label uppercase tracking-widest text-primary transition-none hover:bg-secondary hover:text-on-secondary"
            type="submit"
          >
            Get Updates
          </button>
        </form>
      </div>
    </section>
  );
}
