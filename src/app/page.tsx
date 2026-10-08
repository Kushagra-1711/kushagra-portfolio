"use client";

import { useEffect, useState } from "react";
import Window from "@/components/windows/Window";
import ProjectsWindow from "@/components/windows/ProjectsWindow";
import ResumeWindow from "@/components/windows/ResumeWindow";
import TerminalWindow from "@/components/windows/TerminalWindow";
import SettingsWindow from "@/components/windows/SettingsWindow";

export default function Home() {
  const [time, setTime] = useState("");
  const [activeWindow, setActiveWindow] = useState<string | null>(null);

  const [isAboutMinimized, setIsAboutMinimized] = useState(false);
  const [isProjectsMinimized, setIsProjectsMinimized] = useState(false);
  const [isResumeMinimized, setIsResumeMinimized] = useState(false);
  const [isTerminalMinimized, setIsTerminalMinimized] = useState(false);
  const [isSettingsMinimized, setIsSettingsMinimized] = useState(false);

  const [showGrid, setShowGrid] = useState(true);
  const [showGlow, setShowGlow] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className={`desktop
    ${showGrid ? "desktop-grid-visible" : "desktop-grid-hidden"}
    ${showGlow ? "desktop-glow-visible" : "desktop-glow-hidden"}
    ${reducedMotion ? "reduced-motion" : ""}
  `}>

      {/* ================================
          Desktop Icons
      ================================= */}

      <div>

        <DesktopIcon
          icon="👤"
          label="About Me"
          onClick={() => {
            setActiveWindow("about");
            setIsAboutMinimized(false);
          }}
        />

        <DesktopIcon
          icon="📁"
          label="Projects"
          onClick={() => {
            setActiveWindow("projects");
            setIsProjectsMinimized(false);
          }}
        />

        <DesktopIcon
          icon="💻"
          label="Terminal"
          onClick={() => {
            setActiveWindow("terminal");
            setIsTerminalMinimized(false);
          }}
        />

        <DesktopIcon
          icon="📄"
          label="Resume"
          onClick={() => {
            setActiveWindow("resume");
            setIsResumeMinimized(false);
          }}
        />

        <DesktopIcon
          icon="⚙️"
          label="Settings"
          onClick={() => {
            setActiveWindow("settings");
            setIsSettingsMinimized(false);
          }}
        />

      </div>


      {/* ================================
          About Me Window
      ================================= */}

      {activeWindow === "about" && !isAboutMinimized && (
        <Window
          title="About Me"
          icon="👤"
          onClose={() => {
            setActiveWindow(null);
            setIsAboutMinimized(false);
          }}
          onMinimize={() => setIsAboutMinimized(true)}
        >
          <h2>
            Hello there!
          </h2>

          <p>
            It&apos;s Kushagra here. Nice to meet you!
          </p>

          <p>
            I am a passionate software developer with a
            strong focus on building systems that people
            can use and that can scale efficiently while
            handling large volumes of users.
          </p>

          <p>
            Nevertheless, I am also interested in building
            AI solutions for real-world, day-to-day problems.
          </p>

          <p>
            Go check out one of my projects:
          </p>

          <a
            href="https://github.com/Kushagra-1711/Repository_Auditor"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Repository Auditor →
          </a>
        </Window>
      )}


      {/* ================================
          Projects Window
      ================================= */}

      {activeWindow === "projects" && !isProjectsMinimized && (
        <Window
          title="Projects"
          icon="📁"
          onClose={() => {
            setActiveWindow(null);
            setIsProjectsMinimized(false);
          }}
          onMinimize={() => setIsProjectsMinimized(true)}
        >
          <ProjectsWindow
            onOpenWindow={(windowName) => {
              if (windowName === "projects") {
                setActiveWindow("projects");
                setIsProjectsMinimized(false);
              }

              if (windowName === "resume") {
                setActiveWindow("resume");
                setIsResumeMinimized(false);
              }

              if (windowName === "terminal") {
                setActiveWindow("terminal");
                setIsTerminalMinimized(false);
              }
            }}
          />
        </Window>
      )}


      {/* ================================
          Resume Window
      ================================= */}

      {activeWindow === "resume" && !isResumeMinimized && (
        <Window
          title="Resume"
          icon="📄"
          onClose={() => {
            setActiveWindow(null);
            setIsResumeMinimized(false);
          }}
          onMinimize={() => setIsResumeMinimized(true)}
        >
          <ResumeWindow />
        </Window>
      )}


      {/* ================================
          Terminal Window
      ================================= */}

      {activeWindow === "terminal" && !isTerminalMinimized && (
        <Window
          title="Terminal"
          icon="💻"
          onClose={() => {
            setActiveWindow(null);
            setIsTerminalMinimized(false);
          }}
          onMinimize={() => setIsTerminalMinimized(true)}
        >
          <TerminalWindow
            onOpenWindow={(windowName) => {
              if (windowName === "about") {
                setActiveWindow("about");
                setIsAboutMinimized(false);
              }

              if (windowName === "projects") {
                setActiveWindow("projects");
                setIsProjectsMinimized(false);
              }

              if (windowName === "resume") {
                setActiveWindow("resume");
                setIsResumeMinimized(false);
              }
            }}
          />
        </Window>
      )}

      {/* Settings Window */}
      {activeWindow === "settings" && !isSettingsMinimized && (
        <Window
          title="Settings"
          icon="⚙️"
          onClose={() => {
            setActiveWindow(null);
            setIsSettingsMinimized(false);
          }}
          onMinimize={() => setIsSettingsMinimized(true)}
        >
          <SettingsWindow
            showGrid={showGrid}
            showGlow={showGlow}
            reducedMotion={reducedMotion}
            onToggleGrid={() => setShowGrid((value) => !value)}
            onToggleGlow={() => setShowGlow((value) => !value)}
            onToggleReducedMotion={() =>
              setReducedMotion((value) => !value)
            }
          />
        </Window>
      )}


      {/* ================================
          Center Branding
      ================================= */}

      <div className="hero">

        <p className="hero-greeting">
          WELCOME TO MY DESKTOP
        </p>

        <h1>
          Kushagra Dwivedi
        </h1>

        <p className="hero-role">
          Software Engineer
          <span>•</span>
          AI/ML
          <span>•</span>
          Backend
        </p>

        <div className="hero-status">
          <span className="status-dot" />
          Available for opportunities
        </div>

      </div>


      {/* ================================
          Taskbar
      ================================= */}

      <div className="taskbar">

        <div className="taskbar-left">

          <button className="start-button">
            ⊞
          </button>

          <button className="taskbar-icon">
            ⌕
          </button>

          <button className="taskbar-icon">
            📁
          </button>

          <button className="taskbar-icon">
            🌐
          </button>

          {/* Terminal */}
          <button
            className="taskbar-icon"
            onClick={() => {
              setActiveWindow("terminal");
              setIsTerminalMinimized(false);
            }}
            aria-label="Open Terminal"
          >
            💻
          </button>




          {/* About Me */}
          {activeWindow === "about" && (
            <button
              className="taskbar-icon taskbar-window"
              onClick={() => setIsAboutMinimized(false)}
              aria-label="Restore About Me"
            >
              👤
            </button>
          )}


          {/* Projects */}
          {activeWindow === "projects" && (
            <button
              className="taskbar-icon taskbar-window"
              onClick={() => setIsProjectsMinimized(false)}
              aria-label="Restore Projects"
            >
              📁
            </button>
          )}


          {/* Resume */}
          {activeWindow === "resume" && (
            <button
              className="taskbar-icon taskbar-window"
              onClick={() => setIsResumeMinimized(false)}
              aria-label="Restore Resume"
            >
              📄
            </button>
          )}


          {/* Terminal Restore */}
          {activeWindow === "terminal" && (
            <button
              className="taskbar-icon taskbar-window"
              onClick={() => setIsTerminalMinimized(false)}
              aria-label="Restore Terminal"
            >
              💻
            </button>
          )}

        </div>



        {/* Settings Restore */}
        {activeWindow === "settings" && (
          <button
            className="taskbar-icon taskbar-window"
            onClick={() => setIsSettingsMinimized(false)}
            aria-label="Restore Settings"
          >
            ⚙️
          </button>
        )}


        {/* System Tray */}

        <div className="system-tray">

          <span>⌃</span>
          <span>◉</span>
          <span>🔊</span>
          <span>⌁</span>

          <span className="clock">
            {time}
          </span>

        </div>

      </div>

    </main>
  );
}


/* ================================
   Desktop Icon Component
================================ */

function DesktopIcon({
  icon,
  label,
  onClick,
}: {
  icon: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      className="desktop-icon"
      onClick={onClick}
    >
      <span className="desktop-icon-image">
        {icon}
      </span>

      <span className="desktop-icon-label">
        {label}
      </span>
    </button>
  );
}
