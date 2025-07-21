import { useState, useEffect } from "react";

interface UseTypingEffectOptions {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  delayBetweenTexts?: number;
}

export const useTypingEffect = ({
  texts,
  speed = 100,
  deleteSpeed = 50,
  delayBetweenTexts = 2000,
}: UseTypingEffectOptions) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;

    const currentFullText = texts[currentTextIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentFullText) {
        // Finished typing, wait then start deleting
        setTimeout(() => setIsDeleting(true), delayBetweenTexts);
      } else if (isDeleting && currentText === "") {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      } else if (isDeleting) {
        // Continue deleting
        setCurrentText(currentFullText.substring(0, currentText.length - 1));
      } else {
        // Continue typing
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, speed, deleteSpeed, delayBetweenTexts]);

  return { currentText, isTyping: !isDeleting };
};