import { useCallback, useState } from "react";

const useContentSections = () => {
  const [contentSections, setContentSections] = useState([]);
  const contentRef = useCallback((node) => {
    const sections = [...node.querySelectorAll("[data-menu-title]")];
    setContentSections(sections);
  }, []);

  return [contentSections, contentRef];
};

export { useContentSections };
