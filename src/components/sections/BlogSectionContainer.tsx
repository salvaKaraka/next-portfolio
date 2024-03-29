import React from 'react';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  title: string;
  subtitle: string;
};

export default function SectionContainer({ children, className, title, subtitle }: SectionProps) {
  return (
    <section className={`my-5 md:my-8 mx-auto w-full md:max-w-6xl p-4 md:p-0 text-black/90 dark:text-white/90 divide-slate-300 dark:divide-neutral-700 ${className}`}>

      <div className="mb-20 text-center w-full md:max-w-4xl mx-auto h-20">

        <h1 className="text-5xl font-medium text-neutral-900 dark:text-neutral-100 ">{title}</h1>
        <p className="text-lg font-medium text-neutral-600 dark:text-neutral-400 mt-4">{subtitle}</p>
      </div>

      <hr className="mb-8" />

      {children}
    </section>
  );
};

