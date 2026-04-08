export default function Page() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#ffffff", color: "#0f172a", fontFamily: "Arial, sans-serif" }}>
      <header
        style={{
          borderBottom: "1px solid #e2e8f0",
          padding: "20px 24px",
          position: "sticky",
          top: 0,
          backgroundColor: "#ffffff",
          zIndex: 10,
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: "24px", fontWeight: "700" }}>Monarch Migration Software</div>
            <div style={{ fontSize: "13px", color: "#64748b", marginTop: "4px" }}>
              AWS-native data migration as a service
            </div>
          </div>
          <nav style={{ fontSize: "14px", color: "#475569" }}>
            Platform | Solutions | Why Monarch | Contact
          </nav>
        </div>
      </header>

      <main>
        <section style={{ padding: "80px 24px", background: "linear-gradient(to bottom right, #f8fafc, #ffffff, #fef3c7)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "48px" }}>
            <div>
              <div
                style={{
                  display: "inline-block",
                  backgroundColor: "#fef3c7",
                  color: "#92400e",
                  border: "1px solid #fde68a",
                  borderRadius: "999px",
                  padding: "8px 14px",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Modernize legacy data movement with less risk
              </div>

              <h1 style={{ fontSize: "56px", lineHeight: 1.1, marginTop: "24px", marginBottom: "24px" }}>
                Enterprise data migration software built for speed, control, and cloud scale.
              </h1>

              <p style={{ fontSize: "22px", lineHeight: 1.6, color: "#475569", maxWidth: "760px" }}>
                Monarch Migration Software helps enterprises move large-scale file and data estates into modern AWS
                environments with a faster path to execution, stronger governance, and less operational disruption.
              </p>

              <div style={{ marginTop: "32px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <a
                  href="mailto:info@monarchmigration.com"
                  style={{
                    backgroundColor: "#0f172a",
                    color: "#ffffff",
                    padding: "14px 22px",
                    borderRadius: "16px",
                    textDecoration: "none",
                    fontWeight: "600",
                  }}
                >
                  Request a Demo
                </a>
                <a
                  href="#platform"
                  style={{
                    border: "1px solid #cbd5e1",
                    color: "#0f172a",
                    padding: "14px 22px",
                    borderRadius: "16px",
                    textDecoration: "none",
                    fontWeight: "600",
                  }}
                >
                  Explore the Platform
                </a>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginTop: "40px" }}>
                {[
                  ["AWS-native", "Designed to run as a service in AWS."],
                  ["Lower risk", "Governed migration with visibility and control."],
                  ["Faster outcomes", "Accelerate cloud adoption without manual drag."],
                ].map(([title, desc]) => (
                  <div
                    key={title}
                    style={{
                      border: "1px solid #e2e8f0",
                      borderRadius: "18px",
                      padding: "20px",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    <div style={{ fontSize: "24px", fontWeight: "700" }}>{title}</div>
                    <div style={{ marginTop: "8px", color: "#475569", fontSize: "14px", lineHeight: 1.5 }}>{desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div
                style={{
                  border: "1px solid #e2e8f0",
                  borderRadius: "24px",
                  padding: "28px",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 10px 30px rgba(15,23,42,0.08)",
                }}
              >
                <div style={{ fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#64748b", fontWeight: "700" }}>
                  Migration control plane
                </div>

                <div style={{ marginTop: "22px", display: "grid", gap: "16px" }}>
                  {[
                    [
                      "Discovery & Assessment",
                      "Understand source environments, file estates, dependencies, and migration readiness.",
                    ],
                    [
                      "Policy-Driven Orchestration",
                      "Execute migrations with repeatable workflows, controls, and operational guardrails.",
                    ],
                    [
                      "AWS Service Alignment",
                      "Support modernization strategies aligned to cloud storage, compute, analytics, and AI initiatives.",
                    ],
                    [
                      "Operational Visibility",
                      "Track progress, exceptions, and outcomes across migrations in one place.",
                    ],
                  ].map(([title, desc]) => (
                    <div key={title} style={{ backgroundColor: "#f8fafc", borderRadius: "18px", padding: "18px" }}>
                      <div style={{ fontWeight: "700" }}>{title}</div>
                      <div style={{ marginTop: "6px", fontSize: "14px", lineHeight: 1.6, color: "#475569" }}>{desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="platform" style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ maxWidth: "760px" }}>
              <div style={{ fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#a16207", fontWeight: "700" }}>
                Platform
              </div>
              <h2 style={{ fontSize: "40px", marginTop: "16px", marginBottom: "16px" }}>
                Purpose-built for enterprise migration programs
              </h2>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "#475569" }}>
                Monarch gives enterprises a modern software layer to plan, orchestrate, and manage migration
                initiatives that are often slowed by fragmented tooling, manual effort, and inconsistent governance.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "18px", marginTop: "40px" }}>
              {[
                ["Scalable by design", "Support high-volume migration requirements without relying on brittle manual processes."],
                ["Governed execution", "Bring consistency, reporting, and operational discipline to large migration programs."],
                ["Built for modernization", "Move beyond lift-and-shift toward a cleaner cloud operating model."],
                ["Service delivery ready", "Ideal for enterprise IT teams, strategic partners, and migration-led services organizations."],
              ].map(([title, desc]) => (
                <div key={title} style={{ border: "1px solid #e2e8f0", borderRadius: "22px", padding: "24px" }}>
                  <div style={{ fontSize: "20px", fontWeight: "700" }}>{title}</div>
                  <div style={{ marginTop: "12px", fontSize: "15px", color: "#475569", lineHeight: 1.6 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "80px 24px", backgroundColor: "#020617", color: "#ffffff" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ maxWidth: "760px" }}>
              <div style={{ fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#fcd34d", fontWeight: "700" }}>
                Solutions
              </div>
              <h2 style={{ fontSize: "40px", marginTop: "16px", marginBottom: "16px" }}>Where Monarch fits</h2>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "#cbd5e1" }}>
                Built for organizations that need a smarter, more repeatable way to move data into modern cloud environments.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "18px", marginTop: "40px" }}>
              {[
                ["Enterprise Data Center Exit", "Reduce migration friction as infrastructure and storage estates move toward AWS-based operating models."],
                ["Application & File Modernization", "Support transformation initiatives where data gravity, file complexity, and legacy environments create drag."],
                ["Partner-Led Migration Services", "Enable consulting and service organizations to deliver migration programs with stronger repeatability and scale."],
                ["Healthcare & Regulated Industries", "Bring control and governance to environments where data handling, continuity, and risk management matter."],
              ].map(([title, desc]) => (
                <div key={title} style={{ border: "1px solid rgba(255,255,255,0.12)", borderRadius: "22px", padding: "24px", backgroundColor: "rgba(255,255,255,0.04)" }}>
                  <div style={{ fontSize: "22px", fontWeight: "700" }}>{title}</div>
                  <div style={{ marginTop: "10px", lineHeight: 1.7, color: "#cbd5e1" }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.2fr 0.9fr", gap: "48px" }}>
            <div>
              <div style={{ fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#a16207", fontWeight: "700" }}>
                Why Monarch
              </div>
              <h2 style={{ fontSize: "40px", marginTop: "16px", marginBottom: "16px" }}>
                A sharper migration story for AWS-focused enterprises
              </h2>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "#475569" }}>
                Monarch Migration Software is positioned for organizations that want more than one-off services or
                labor-heavy migration projects. The platform is designed to create a repeatable, software-led migration
                motion with stronger visibility, governance, and execution discipline.
              </p>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "#475569", marginTop: "20px" }}>
                For enterprise buyers, that means lower operational risk and a cleaner path to cloud outcomes. For
                strategic partners and service providers, it means a more scalable delivery model.
              </p>
            </div>

            <div style={{ border: "1px solid #e2e8f0", borderRadius: "24px", padding: "28px", backgroundColor: "#f8fafc" }}>
              <div style={{ fontSize: "24px", fontWeight: "700" }}>Executive value proposition</div>
              <div style={{ display: "grid", gap: "14px", marginTop: "22px" }}>
                {[
                  "Accelerate migration timelines without adding operational chaos",
                  "Create a more governable migration program across teams and stakeholders",
                  "Support AWS modernization initiatives with a software-led approach",
                  "Improve consistency for enterprise and partner-led delivery motions",
                ].map((item) => (
                  <div key={item} style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "16px", color: "#334155" }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: "80px 24px", backgroundColor: "#fef3c7", borderTop: "1px solid #fde68a", borderBottom: "1px solid #fde68a" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "48px", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#92400e", fontWeight: "700" }}>
                Contact
              </div>
              <h2 style={{ fontSize: "40px", marginTop: "16px", marginBottom: "16px" }}>
                Ready to modernize your migration strategy?
              </h2>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "#334155" }}>
                Let’s talk about how Monarch Migration Software can help your team execute large-scale migration
                initiatives with more speed, control, and confidence.
              </p>
            </div>

            <div style={{ border: "1px solid #fde68a", borderRadius: "24px", padding: "28px", backgroundColor: "#ffffff" }}>
              <div style={{ fontSize: "22px", fontWeight: "700" }}>Request a conversation</div>
              <div style={{ marginTop: "18px", color: "#334155", lineHeight: 1.8 }}>
                <div>Email: <strong>info@monarchmigration.com</strong></div>
                <div>Location: Greater Boston</div>
                <div>Deployment model: Software as a Service on AWS</div>
              </div>
              <a
                href="mailto:info@monarchmigration.com"
                style={{
                  display: "inline-block",
                  marginTop: "24px",
                  backgroundColor: "#0f172a",
                  color: "#ffffff",
                  padding: "14px 22px",
                  borderRadius: "16px",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                Email Monarch
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ maxWidth: "1200px", margin: "0 auto", padding: "24px", color: "#64748b", fontSize: "14px" }}>
        © 2026 Monarch Migration Software. All rights reserved.
      </footer>
    </div>
  );
}
