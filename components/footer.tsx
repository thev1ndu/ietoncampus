import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 dark:text-gray-400">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} IET On Campus – Informatics Institute
        of Technology. All rights reserved.
      </small>
      <p className="text-xs max-w-xl mx-auto">
        IET On Campus is a student-led initiative in collaboration with the
        Institution of Engineering and Technology (IET), UK. At IIT, we aim to
        inspire innovation, foster professional growth, and bridge the gap
        between academia and industry through events, workshops, and
        collaborative projects.
      </p>
    </footer>
  );
}
