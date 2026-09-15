import { useEffect, useRef, useState } from "react";
import "./Cursor.css";

function Cursor() {
  const cursorRef = useRef(null);
  const mousePosition = useRef({
    x: -100,
    y: -100,
  });

  const animationFrame = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const isTouchDevice = window.matchMedia(
      "(hover: none), (pointer: coarse)"
    ).matches;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isTouchDevice) {
      return undefined;
    }

    const handleMouseMove = (event) => {
      mousePosition.current.x = event.clientX;
      mousePosition.current.y = event.clientY;

      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (event) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const clickableElement = target.closest(
        "a, button, [role='button'], input, textarea, select, summary"
      );

      setIsHovering(Boolean(clickableElement));
    };

    const animate = () => {
      if (cursorRef.current) {
        const cursor = cursorRef.current;

        cursor.style.transform = `translate3d(
          ${mousePosition.current.x}px,
          ${mousePosition.current.y}px,
          0
        ) translate(-50%, -50%)`;
      }

      animationFrame.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    if (prefersReducedMotion) {
      if (cursorRef.current) {
        cursorRef.current.style.transition = "none";
      }
    }

    animationFrame.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      document.removeEventListener(
        "mouseover",
        handleMouseOver
      );

      document.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return (
    <span
      ref={cursorRef}
      className={`custom-cursor ${
        isVisible ? "is-visible" : ""
      } ${isHovering ? "is-hovering" : ""}`}
      aria-hidden="true"
    />
  );
}

export default Cursor;