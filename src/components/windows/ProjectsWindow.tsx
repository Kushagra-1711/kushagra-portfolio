"use client";

import { Project } from "@/types/project";

const projects: Project[] = [
    {
        name: "Repository Auditor",
        icon: "🛡️",
        description:
            "AI-powered GitHub repository auditing platform using a multi-agent architecture to analyze architecture, security, performance, and dependencies.",
        technologies: [
            "FastAPI",
            "Python",
            "n8n",
            "Groq",
            "PostgreSQL",
            "Azure",
            "Docker",
        ],
        github:
            "https://github.com/Kushagra-1711/Repository_Auditor",
    },

    {
        name: "Road Defect Detection System",
        icon: "🛣️",
        description:
            "A computer vision system designed to detect road defects from images using deep learning techniques.",
        technologies: [
            "Python",
            "Computer Vision",
            "Deep Learning",
            "CNN",
        ],
        github:
            "https://github.com/Kushagra-1711/Road-defect-detection-system",
    },

    {
        name: "Alphabet Classifier",
        icon: "🔤",
        description:
            "A deep learning image classification system for recognizing handwritten alphabet characters.",
        technologies: [
            "Python",
            "TensorFlow",
            "CNN",
            "EMNIST",
        ],
        github:
            "https://github.com/Kushagra-1711/Alphabet-Classifier",
    },

    {
        name: "Social Media Content Analyzer",
        icon: "📊",
        description:
            "An AI-powered system for analyzing social media content and extracting meaningful insights from textual data.",
        technologies: [
            "Python",
            "AI/ML",
            "NLP",
        ],
        github:
            "https://github.com/Kushagra-1711/Social_Media_Content_Analyzer",
    },

    {
        name: "LangGraph Customer Support Orchestration",
        icon: "🤖",
        description:
            "An agentic AI customer support system designed to orchestrate specialized agents through a structured LangGraph workflow.",
        technologies: [
            "Python",
            "LangGraph",
            "LLMs",
            "Agentic AI",
        ],
        github:
            "https://github.com/Kushagra-1711/langgraph-customer-support-orchestration",
    },
];

interface ProjectsWindowProps {
    onOpenWindow: (
        windowName: "projects" | "resume" | "terminal"
    ) => void;
}

export default function ProjectsWindow({
    onOpenWindow,
}: ProjectsWindowProps) {
    return (
        <div className="projects-explorer">

            {/* Explorer Toolbar */}
            <div className="explorer-toolbar">

                <button
                    className="explorer-nav"
                    aria-label="Back"
                >
                    ←
                </button>

                <button
                    className="explorer-nav"
                    aria-label="Forward"
                >
                    →
                </button>

                <button
                    className="explorer-nav"
                    aria-label="Up"
                >
                    ↑
                </button>

                <div className="explorer-address">
                    <span>📁</span>
                    <span>This PC</span>
                    <span>›</span>
                    <strong>Projects</strong>
                </div>

                <div className="explorer-search">
                    🔍 Search Projects
                </div>

            </div>

            {/* Explorer Body */}
            <div className="explorer-body">

                {/* Sidebar */}
                <aside className="explorer-sidebar">

                    <div className="sidebar-section">

                        <span className="sidebar-heading">
                            Quick Access
                        </span>

                        <button
                            className="sidebar-item active"
                            onClick={() => onOpenWindow("projects")}
                        >
                            ⭐ Projects
                        </button>

                        <button
                            className="sidebar-item"
                            onClick={() => onOpenWindow("resume")}
                        >
                            📄 Resume
                        </button>

                        <button
                            className="sidebar-item"
                            onClick={() => onOpenWindow("terminal")}
                        >
                            💻 Terminal
                        </button>

                    </div>

                </aside>

                {/* Projects */}
                <section className="projects-area">

                    <div className="projects-heading">

                        <div>
                            <h2>Projects</h2>

                            <p>
                                {projects.length} projects
                            </p>
                        </div>

                    </div>

                    <div className="project-grid">

                        {projects.map((project) => (
                            <button
                                key={project.name}
                                className="project-folder"
                                onDoubleClick={() => {
                                    if (project.github) {
                                        window.open(
                                            project.github,
                                            "_blank",
                                            "noopener,noreferrer"
                                        );
                                    }
                                }}
                                title={`Open ${project.name} repository`}
                            >
                                <span className="folder-icon">
                                    {project.icon}
                                </span>

                                <span className="folder-name">
                                    {project.name}
                                </span>

                                <span className="folder-type">
                                    GitHub Repository
                                </span>
                            </button>
                        ))}

                    </div>

                    <p className="explorer-hint">
                        Double-click a project to open its GitHub repository.
                    </p>

                </section>

            </div>

        </div>
    );
}