import { useCallback, useState } from "react";

const useContentSections = () => {
  const [contentSections, setContentSections] = useState([]);
  const [contentWrapper, setContentWrapper] = useState(null);

  const contentRef = useCallback((node) => {
    const sections = [...node.querySelectorAll("[data-menu-title]")];
    setContentWrapper(node);
    setContentSections(sections);
  }, []);

  return [contentSections, contentWrapper, contentRef];
};

export { useContentSections };
