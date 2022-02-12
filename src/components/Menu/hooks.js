import { useState, useCallback, useEffect } from "react";

const useIsScrollPositionOnTop = () => {
  const [isScrollPositionOnTop, setIsScrollPositionOnTop] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrollPositionOnTop(window.scrollY === 0);
    });
    // TODO: Cleanup
  });

  return isScrollPositionOnTop;
};

const useSectionIndexInViewport = ({ contentSections }) => {
  const [sectionIndexInViewport, setSectionIndexInViewport] = useState(0);

  const someF = useCallback(() => {
    const currentSectionIndex = [...contentSections].findIndex(
      (section) => section.offsetTop >= window.scrollY + window.innerHeight
    );
    if (currentSectionIndex === -1) {
      setSectionIndexInViewport(contentSections.length - 1);
    } else {
      setSectionIndexInViewport(currentSectionIndex - 1);
    }
  }, [contentSections]);

  useEffect(() => {
    window.addEventListener("scroll", someF);
    // TODO: Cleanup
  });

  return sectionIndexInViewport;
};

const useScrollToSection = ({ contentSections }) => {
  const scrollToSection = useCallback(
    (index) => {
      const section = contentSections[index];
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    },
    [contentSections]
  );

  return scrollToSection;
};

export {
  useIsScrollPositionOnTop,
  useSectionIndexInViewport,
  useScrollToSection,
};
