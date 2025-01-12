'use client';

import React, { useState, useEffect } from 'react';
import { TypewriterProps } from '@/lib/types';

const Typewriter = (props: TypewriterProps) => {
  const { 
    segments, 
    wrapperClassName = '', 
    speed = 80, 
    delay = 100, 
    onComplete, 
    as: Component = 'div', 
    cursorColor,
    ...restProps 
  } = props;

  const [displayedText, setDisplayedText] = useState('');
  const [currentSegmentIndex, setCurrentSegmentIndex] = useState(0);

  useEffect(() => {
    if (currentSegmentIndex >= segments.length) {
      onComplete?.();
      return;
    }

    const currentSegment = segments[currentSegmentIndex];
    const fullText = currentSegment.text;

    if (displayedText.length < fullText.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, speed);

      return () => clearTimeout(timeoutId);
    } else {
      const timeoutId = setTimeout(() => {
        setCurrentSegmentIndex(prev => prev + 1);
        setDisplayedText('');
      }, delay);

      return () => clearTimeout(timeoutId);
    }
  }, [displayedText, currentSegmentIndex, segments, speed, delay, onComplete]);

  const renderSegments = () => {
    const result = [];

    // Render completed segments
    for (let i = 0; i < currentSegmentIndex; i++) {
      result.push(
        <span key={`completed-${i}`} className={segments[i].className}>
          {segments[i].text}
        </span>
      );
    }

    // Render current segment
    if (currentSegmentIndex < segments.length) {
      result.push(
        <span 
          key={`current-${currentSegmentIndex}`} 
          className={segments[currentSegmentIndex].className}
        >
          {displayedText}
        </span>
      );
    }

    return result;
  };

  return (
    <Component 
      className={`inline-block ${wrapperClassName}`}
      {...restProps}
    >
      {renderSegments()}
    </Component>
  );
};

export default Typewriter;