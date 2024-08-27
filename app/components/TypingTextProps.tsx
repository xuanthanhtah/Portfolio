import React, { useEffect, useState } from 'react';

interface TypingTextProps {
  text: string;
  typingSpeed?: number;
  className?: string;
}

const TypingText: React.FC<TypingTextProps> = ({
  text,
  typingSpeed = 100,
  className = '',
}) => {
  const [displayText, setDisplayText] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    let index = 0;
    const splitText = text.split(/(<br\s*\/?>)/g); // Splits text by <br /> tags, keeping them intact
    let output: React.ReactNode[] = [];

    const type = () => {
      if (index < splitText.length) {
        if (splitText[index].startsWith('<br')) {
          output.push(<br key={index} />);
          index++; // Move to the next part of the text after a <br />
        } else {
          const currentChar = splitText[index].charAt(0);
          output.push(
            <span key={`${index}-${output.length}`}>{currentChar}</span>
          );
          splitText[index] = splitText[index].substring(1);
          if (splitText[index].length === 0) {
            index++;
          }
        }
        setDisplayText([...output]);
        setTimeout(type, typingSpeed);
      }
    };

    type();

    return () => {
      setDisplayText([]);
    };
  }, [text, typingSpeed]);

  return <span className={className}>{displayText}</span>;
};

export default TypingText;
