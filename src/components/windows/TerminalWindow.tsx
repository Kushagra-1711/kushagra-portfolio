"use client";

import { useEffect, useRef, useState } from "react";

type TerminalWindowProps = {
    onOpenWindow: (
        windowName: "about" | "projects" | "resume"
    ) => void;
};

type CommandHistory = {
    command: string;
    output: string;
};

const HELP_TEXT = `Available commands:

  about       Open About Me
  projects    Open Projects
  skills      View technical skills
  resume      Open Resume
  contact     View contact information
  clear       Clear terminal
  help        Show available commands`;

const SKILLS_TEXT = `Technical Skills

  Languages
  Python • Java • C • C++ • JavaScript

  Frontend
  HTML • CSS • React • Next.js

  Backend
  FastAPI • Flask

  AI / ML
  Machine Learning • Deep Learning • NLP
  Agentic AI • LangGraph

  Cloud / DevOps
  AWS • Azure • Docker

  Data / Infrastructure
  PostgreSQL • n8n • Apache Airflow`;

const CONTACT_TEXT = `Contact

  GitHub    github.com/Kushagra-1711
  Email     Use the contact details provided on my resume`;

export default function TerminalWindow({
    onOpenWindow,
}: TerminalWindowProps) {
    const [command, setCommand] = useState("");
    const [history, setHistory] = useState<CommandHistory[]>([
        {
            command: "",
            output:
                'Welcome to Kushagra/\'s Developer Terminal.Type "help" to get started.',
    },
    ]);

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const executeCommand = () => {
        const trimmedCommand = command.trim();
        const normalizedCommand = trimmedCommand.toLowerCase();

        if (!trimmedCommand) {
            return;
        }

        if (normalizedCommand === "clear") {
            setHistory([]);
            setCommand("");
            return;
        }

        let output = "";

        switch (normalizedCommand) {
            case "help":
                output = HELP_TEXT;
                break;

            case "about":
                output = "Opening About Me...";
                onOpenWindow("about");
                break;

            case "projects":
                output = "Opening Projects...";
                onOpenWindow("projects");
                break;

            case "resume":
                output = "Opening Resume...";
                onOpenWindow("resume");
                break;

            case "skills":
                output = SKILLS_TEXT;
                break;

            case "contact":
                output = CONTACT_TEXT;
                break;

            default:
                output = `Command not found: ${trimmedCommand}

Type "help" to see available commands.`;
        }

        setHistory((previous) => [
            ...previous,
            {
                command: trimmedCommand,
                output,
            },
        ]);

        setCommand("");
    };

    return (
        <div
            className="terminal-window"
            onClick={() => inputRef.current?.focus()}
        >
            <div className="terminal-output">
                {history.map((entry, index) => (
                    <div className="terminal-entry" key={`${entry.command}-${index}`}>
                        {entry.command && (
                            <div className="terminal-command">
                                <span className="terminal-prompt">
                                    kushagra@desktop:~$
                                </span>{" "}
                                {entry.command}
                            </div>
                        )}

                        <div className="terminal-response">
                            {entry.output}
                        </div>
                    </div>
                ))}

                <div className="terminal-input-line">
                    <span className="terminal-prompt">
                        kushagra@desktop:~$
                    </span>

                    <input
                        ref={inputRef}
                        value={command}
                        onChange={(event) => setCommand(event.target.value)}
                        onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                executeCommand();
                            }
                        }}
                        className="terminal-input"
                        autoComplete="off"
                        spellCheck={false}
                        aria-label="Terminal command input"
                    />

                    <span className="terminal-cursor" />
                </div>
            </div>
        </div>
    );
}