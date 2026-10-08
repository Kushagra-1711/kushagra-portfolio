"use client";

interface SettingsWindowProps {
    showGrid: boolean;
    showGlow: boolean;
    reducedMotion: boolean;
    onToggleGrid: () => void;
    onToggleGlow: () => void;
    onToggleReducedMotion: () => void;
}

export default function SettingsWindow({
    showGrid,
    showGlow,
    reducedMotion,
    onToggleGrid,
    onToggleGlow,
    onToggleReducedMotion,
}: SettingsWindowProps) {
    return (
        <div className="settings-window">

            {/* Appearance */}
            <section className="settings-section">

                <div className="settings-section-title">
                    Appearance
                </div>

                <SettingRow
                    title="Desktop Grid"
                    description="Display the subtle desktop grid."
                    enabled={showGrid}
                    onToggle={onToggleGrid}
                />

                <SettingRow
                    title="Background Glow"
                    description="Display ambient radial lighting."
                    enabled={showGlow}
                    onToggle={onToggleGlow}
                />

                <SettingRow
                    title="Reduced Motion"
                    description="Reduce interface animations."
                    enabled={reducedMotion}
                    onToggle={onToggleReducedMotion}
                />

            </section>


            {/* System */}
            <section className="settings-section">

                <div className="settings-section-title">
                    System
                </div>

                <div className="settings-info-row">
                    <span>Platform</span>
                    <strong>Web</strong>
                </div>

                <div className="settings-info-row">
                    <span>Framework</span>
                    <strong>Next.js</strong>
                </div>

                <div className="settings-info-row">
                    <span>Environment</span>
                    <strong className="settings-online">
                        ● Online
                    </strong>
                </div>

            </section>


            {/* About */}
            <section className="settings-section">

                <div className="settings-section-title">
                    About this Desktop
                </div>

                <p className="settings-about">
                    A Windows-inspired developer workstation
                    built as Kushagra Dwivedi&apos;s interactive
                    portfolio.
                </p>

            </section>

        </div>
    );
}


function SettingRow({
    title,
    description,
    enabled,
    onToggle,
}: {
    title: string;
    description: string;
    enabled: boolean;
    onToggle: () => void;
}) {
    return (
        <div className="setting-row">

            <div className="setting-information">
                <div className="setting-title">
                    {title}
                </div>

                <div className="setting-description">
                    {description}
                </div>
            </div>

            <button
                className={`setting-toggle ${enabled ? "setting-toggle-active" : ""
                    }`}
                onClick={onToggle}
                aria-label={`Toggle ${title}`}
                aria-pressed={enabled}
            >
                <span className="setting-toggle-knob" />
            </button>

        </div>
    );
}