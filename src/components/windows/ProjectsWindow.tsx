"use client";

import type { Project } from "@/types/project";

const projects: Project[] = [
    {
        name: "Career Conversation Agent",
        icon: "🤖",
        description:
            "A chatbot agent designed to explain my career journey, projects, and technical accomplishments.",
        technologies: [
            "Groq",
            "LLMs",
            "Hugging Face",
            "Gradio",
            "LangChain",
        ],
        huggingFace:
            "https://huggingface.co/spaces/kushagra1711/carrier-conversation-kushagra",
    },

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
];

interface ProjectsWindowProps {
    onOpenWindow: (
        windowName: "projects" | "resume" | "terminal"
    ) => void;
}

function getProjectDestination(project: Project) {
    return project.huggingFace ?? project.github ?? project.live;
}

function getProjectPlatform(project: Project) {
    if (project.huggingFace) return "Hugging Face";
    if (project.github) return "GitHub Repository";
    if (project.live) return "Live Demo";
    return "Coming Soon";
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
                    type="button"
                >
                    ←
                </button>

                <button
                    className="explorer-nav"
                    aria-label="Forward"
                    type="button"
                >
                    →
                </button>

                <button
                    className="explorer-nav"
                    aria-label="Up"
                    type="button"
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

                {/* Quick Access Sidebar */}
                <aside className="explorer-sidebar">

                    <div className="sidebar-section">

                        <span className="sidebar-heading">
                            Quick Access
                        </span>

                        <button
                            type="button"
                            className="sidebar-item active"
                            onClick={() => onOpenWindow("projects")}
                        >
                            ⭐ Projects
                        </button>

                        <button
                            type="button"
                            className="sidebar-item"
                            onClick={() => onOpenWindow("resume")}
                        >
                            📄 Resume
                        </button>

                        <button
                            type="button"
                            className="sidebar-item"
                            onClick={() => onOpenWindow("terminal")}
                        >
                            💻 Terminal
                        </button>

                    </div>

                </aside>

                {/* Projects Grid */}
                <section className="projects-area">

                    <div className="projects-heading">
                        <div>
                            <h2>Projects</h2>
                            <p>{projects.length} projects</p>
                        </div>
                    </div>

                    <div className="project-grid">

                        {projects.map((project) => {
                            const destination = getProjectDestination(project);
                            const platform = getProjectPlatform(project);

                            return (
                                <button
                                    key={project.name}
                                    type="button"
                                    className="project-folder"
                                    disabled={!destination}
                                    onDoubleClick={() => {
                                        if (destination) {
                                            window.open(
                                                destination,
                                                "_blank",
                                                "noopener,noreferrer"
                                            );
                                        }
                                    }}
                                    title={
                                        destination
                                            ? `Double-click to open ${project.name}`
                                            : `${project.name} link coming soon`
                                    }
                                >
                                    <span className="folder-icon">
                                        {project.icon}
                                    </span>

                                    <span className="folder-name">
                                        {project.name}
                                    </span>

                                    <span className="folder-type">
                                        {platform}
                                    </span>
                                </button>
                            );
                        })}

                    </div>

                    <p className="explorer-hint">
                        Double-click a project to open its repository or live demo.
                    </p>

                </section>

            </div>

        </div>
    );
}