import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-medium mb-8 text-center max-w-3xl mx-auto">
      {children}
    </h2>
  );
}
