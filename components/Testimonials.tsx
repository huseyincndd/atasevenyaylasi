import React from "react";

export const Testimonials = () => {
  return (
    <section className="py-24 md:py-40 bg-beige-200 px-4 md:px-12 flex items-center justify-center text-center">
      <div className="max-w-4xl mx-auto">
        <div className="text-forest-500 mb-8 md:mb-10">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="mx-auto opacity-40 w-8 h-8 md:w-10 md:h-10">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <h3 className="text-2xl sm:text-3xl md:text-5xl font-serif italic text-forest-900 leading-snug mb-8 md:mb-12">
          "Hayatımda tattığım en saf kımız. Geleneklere duydukları saygıyı her yudumda hissediyorsunuz. Gerçek bir başyapıt."
        </h3>
        <p className="uppercase tracking-[0.2em] text-[10px] md:text-xs font-medium text-forest-900/60">
          — Mehmet D. (Gurme)
        </p>
      </div>
    </section>
  );
};
