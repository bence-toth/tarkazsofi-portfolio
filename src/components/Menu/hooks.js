import { useState, useCallback, useEffect } from "react";

const useIsScrollPositionOnTop = ({ contentWrapper }) => {
  const [isScrollPositionOnTop, setIsScrollPositionOnTop] = useState(true);
  useEffect(() => {
    if (contentWrapper) {
      contentWrapper.addEventListener("scroll", () => {
        setIsScrollPositionOnTop(contentWrapper.scrollTop === 0);
      });
    }
    // TODO: Cleanup
  });

  return isScrollPositionOnTop;
};

const useSectionIndexInViewport = ({ contentSections, contentWrapper }) => {
  const [sectionIndexInViewport, setSectionIndexInViewport] = useState(0);

  const someF = useCallback(() => {
    const currentSectionIndex = [...contentSections].findIndex((section) => {
      return (
        section.offsetTop >=
        contentWrapper.scrollTop + contentWrapper.offsetHeight
      );
    });
    if (currentSectionIndex === -1) {
      setSectionIndexInViewport(contentSections.length - 1);
    } else {
      setSectionIndexInViewport(currentSectionIndex - 1);
    }
  }, [contentSections, contentWrapper]);

  useEffect(() => {
    if (contentWrapper) {
      contentWrapper.addEventListener("scroll", someF);
      // TODO: Cleanup
    }
  });

  return sectionIndexInViewport;
};

const useScrollToSection = ({
  contentSections,
  contentWrapper,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  const scrollToSection = useCallback(
    (index) => {
      const section = contentSections[index];
      contentWrapper.scrollTo({
        top: section.offsetTop - (isMobileMenuOpen ? 0 : 80),
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    },
    [contentSections, contentWrapper, isMobileMenuOpen, setIsMobileMenuOpen]
  );

  return scrollToSection;
};

export {
  useIsScrollPositionOnTop,
  useSectionIndexInViewport,
  useScrollToSection,
};
