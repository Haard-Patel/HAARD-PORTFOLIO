import { useEffect, useRef, useState } from "react";

function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mouse = useRef({
    x: -100,
    y: -100,
  });

  const ringPosition = useRef({
    x: -100,
    y: -100,
  });

  const animationFrame = useRef(null);

  const [cursorState, setCursorState] = useState({
    visible: false,
    hovering: false,
    project: false,
  });

  useEffect(() => {
    const isTouchDevice =
      window.matchMedia("(hover: none), (pointer: coarse)").matches;

    const prefersReducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouchDevice) {
      return undefined;
    }

    const handleMouseMove = (event) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;

      if (!cursorState.visible) {
        setCursorState((current) => ({
          ...current,
          visible: true,
        }));
      }
    };

    const handleMouseLeave = () => {
      setCursorState((current) => ({
        ...current,
        visible: false,
      }));
    };

    const handleMouseOver = (event) => {
      const interactiveElement = event.target.closest(
        "a, button, [role='button'], input, textarea, select"
      );

      if (!interactiveElement) {
        setCursorState((current) => ({
          ...current,
          hovering: false,
          project: false,
        }));

        return;
      }

      const isProject =
        interactiveElement.matches(".project-arrow") ||
        interactiveElement.closest(".project-item") !== null;

      setCursorState((current) => ({
        ...current,
        hovering: true,
        project: isProject,
      }));
    };

    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.left = `${mouse.current.x}px`;
        dotRef.current.style.top = `${mouse.current.y}px`;
      }

      if (ringRef.current) {
        const easing = prefersReducedMotion ? 1 : 0.16;

        ringPosition.current.x +=
          (mouse.current.x - ringPosition.current.x) * easing;

        ringPosition.current.y +=
          (mouse.current.y - ringPosition.current.y) * easing;

        ringRef.current.style.left = `${ringPosition.current.x}px`;
        ringRef.current.style.top = `${ringPosition.current.y}px`;
      }

      animationFrame.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    animationFrame.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);

      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [cursorState.visible]);

  return (
    <>
      <span
        ref={dotRef}
        className={`custom-cursor ${
          cursorState.visible ? "is-visible" : ""
        } ${cursorState.hovering ? "is-hovering" : ""} ${
          cursorState.project ? "is-project" : ""
        }`}
        aria-hidden="true"
      />

      <span
        ref={ringRef}
        className={`custom-cursor-ring ${
          cursorState.visible ? "is-visible" : ""
        } ${cursorState.hovering ? "is-hovering" : ""} ${
          cursorState.project ? "is-project" : ""
        }`}
        aria-hidden="true"
      />
    </>
  );
}

export default Cursor;