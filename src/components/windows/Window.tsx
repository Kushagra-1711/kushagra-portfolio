"use client";

import { ReactNode, useRef, useState } from "react";

interface WindowProps {
  title: string;
  icon: string;
  children: ReactNode;
  onClose: () => void;
  onMinimize?: () => void;
}

export default function Window({
  title,
  icon,
  children,
  onClose,
  onMinimize,
}: WindowProps) {
  const [position, setPosition] = useState({
    x: 300,
    y: 100,
  });

  const [isMaximized, setIsMaximized] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const dragOffset = useRef({
    x: 0,
    y: 0,
  });

  const handlePointerDown = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    if (isMaximized) return;

    setIsDragging(true);

    dragOffset.current = {
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    };

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    if (!isDragging || isMaximized) return;

    setPosition({
      x: event.clientX - dragOffset.current.x,
      y: event.clientY - dragOffset.current.y,
    });
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={`window ${isMaximized ? "window-maximized" : ""
        }`}
      style={
        isMaximized
          ? undefined
          : {
            position: "absolute",
            left: `${position.x}px`,
            top: `${position.y}px`,
          }
      }
    >
      {/* Title Bar */}
      <div
        className="window-header"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <div className="window-title">
          <span className="window-icon">{icon}</span>
          <span>{title}</span>
        </div>

        <div className="window-controls">
          <button
            className="window-control"
            onPointerDown={(event) =>
              event.stopPropagation()
            }
            onClick={onMinimize}
            aria-label="Minimize"
          >
            −
          </button>

          <button
            className="window-control"
            onPointerDown={(event) =>
              event.stopPropagation()
            }
            onClick={() =>
              setIsMaximized((current) => !current)
            }
            aria-label="Maximize"
          >
            □
          </button>

          <button
            className="window-control window-close"
            onPointerDown={(event) =>
              event.stopPropagation()
            }
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="window-content">
        {children}
      </div>
    </div>
  );
}