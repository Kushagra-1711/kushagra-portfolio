"use client";

export default function ResumeWindow() {
    return (
        <div className="resume-window">

            {/* Resume Toolbar */}
            <div className="resume-toolbar">

                <div className="resume-toolbar-title">
                    <span>📄</span>
                    <span>Resume</span>
                </div>

                <div className="resume-actions">

                    <a
                        href="/Kushagra_Dwivedi_Resume_V3.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-action"
                    >
                        ↗ Open
                    </a>

                    <a
                        href="/Kushagra_Dwivedi_Resume_V3.pdf"
                        download="Kushagra_Dwivedi_Resume.pdf"
                        className="resume-action"
                    >
                        ↓ Download
                    </a>

                </div>

            </div>

            {/* Resume Preview */}
            <div className="resume-preview">

                <iframe
                    src="/Kushagra_Dwivedi_Resume_V3.pdf"
                    title="Kushagra Dwivedi Resume"
                />

            </div>

        </div>
    );
}