export default function MonarchMigrationSite() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div>
            <div className="text-xl font-bold tracking-tight">Monarch Migration Software</div>
            <div className="text-xs text-slate-500">AWS-native data migration as a service</div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#platform" className="hover:text-slate-900">Platform</a>
            <a href="#solutions" className="hover:text-slate-900">Solutions</a>
            <a href="#why-monarch" className="hover:text-slate-900">Why Monarch</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-amber-50" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-4 py-1 text-sm font-medium text-amber-800">
                  Modernize legacy data movement with less risk
                </div>
                <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                  Enterprise data migration software built for speed, control, and cloud scale.
                </h1>
                <p className="mt-6 max-w-2xl text-lg md:text-xl text-slate-600 leading-8">
                  Monarch Migration Software helps enterprises move large-scale file and data estates into modern AWS environments with a faster path to execution, stronger governance, and less operational disruption.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90"
                  >
                    Request a Demo
                  </a>
                  <a
                    href="#platform"
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    Explore the Platform
                  </a>
                </div>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="text-2xl font-bold">AWS-native</div>
                    <div className="mt-1 text-slate-600">Designed to run as a service in AWS.</div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="text-2xl font-bold">Lower risk</div>
                    <div className="mt-1 text-slate-600">Governed migration with visibility and control.</div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="text-2xl font-bold">Faster outcomes</div>
                    <div className="mt-1 text-slate-600">Accelerate cloud adoption without manual drag.</div>
                  </div>
                </div>
              </div>

              <div className="lg:pl-10">
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-200/50">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Migration control plane</div>
                  <div className="mt-6 space-y-5">
                    {[
                      ['Discovery & Assessment', 'Understand source environments, file estates, dependencies, and migration readiness.'],
                      ['Policy-Driven Orchestration', 'Execute migrations with repeatable workflows, controls, and operational guardrails.'],
                      ['AWS Service Alignment', 'Support modernization strategies aligned to cloud storage, compute, analytics, and AI initiatives.'],
                      ['Operational Visibility', 'Track progress, exceptions, and outcomes across migrations in one place.'],
                    ].map(([title, desc]) => (
                      <div key={title} className="rounded-2xl bg-slate-50 p-5">
                        <div className="font-semibold text-slate-900">{title}</div>
                        <div className="mt-1 text-sm leading-6 text-slate-600">{desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="platform" className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Platform</div>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">Purpose-built for enterprise migration programs</h2>
            <p className="mt-4 text-lg text-slate-600 leading-8">
              Monarch gives enterprises a modern software layer to plan, orchestrate, and manage migration initiatives that are often slowed by fragmented tooling, manual effort, and inconsistent governance.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              ['Scalable by design', 'Support high-volume migration requirements without relying on brittle manual processes.'],
              ['Governed execution', 'Bring consistency, reporting, and operational discipline to large migration programs.'],
              ['Built for modernization', 'Move beyond lift-and-shift toward a cleaner cloud operating model.'],
              ['Service delivery ready', 'Ideal for enterprise IT teams, strategic partners, and migration-led services organizations.'],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-3xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="solutions" className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Solutions</div>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">Where Monarch fits</h2>
              <p className="mt-4 text-lg text-slate-300 leading-8">
                Built for organizations that need a smarter, more repeatable way to move data into modern cloud environments.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {[
                ['Enterprise Data Center Exit', 'Reduce migration friction as infrastructure and storage estates move toward AWS-based operating models.'],
                ['Application & File Modernization', 'Support transformation initiatives where data gravity, file complexity, and legacy environments create drag.'],
                ['Partner-Led Migration Services', 'Enable consulting and service organizations to deliver migration programs with stronger repeatability and scale.'],
                ['Healthcare & Regulated Industries', 'Bring control and governance to environments where data handling, continuity, and risk management matter.'],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-slate-300 leading-7">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why-monarch" className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Why Monarch</div>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">A sharper migration story for AWS-focused enterprises</h2>
              <div className="mt-6 space-y-6 text-lg text-slate-600 leading-8">
                <p>
                  Monarch Migration Software is positioned for organizations that want more than one-off services or labor-heavy migration projects. The platform is designed to create a repeatable, software-led migration motion with stronger visibility, governance, and execution discipline.
                </p>
                <p>
                  For enterprise buyers, that means lower operational risk and a cleaner path to cloud outcomes. For strategic partners and service providers, it means a more scalable delivery model.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="text-xl font-semibold">Executive value proposition</div>
              <ul className="mt-6 space-y-4 text-slate-700">
                <li className="rounded-2xl bg-white p-4">Accelerate migration timelines without adding operational chaos</li>
                <li className="rounded-2xl bg-white p-4">Create a more governable migration program across teams and stakeholders</li>
                <li className="rounded-2xl bg-white p-4">Support AWS modernization initiatives with a software-led approach</li>
                <li className="rounded-2xl bg-white p-4">Improve consistency for enterprise and partner-led delivery motions</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-amber-50 border-y border-amber-100">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-800">Contact</div>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">Ready to modernize your migration strategy?</h2>
                <p className="mt-4 text-lg text-slate-700 leading-8">
                  Let’s talk about how Monarch Migration Software can help your team execute large-scale migration initiatives with more speed, control, and confidence.
                </p>
              </div>
              <div className="rounded-3xl border border-amber-200 bg-white p-8 shadow-sm">
                <div className="text-lg font-semibold">Request a conversation</div>
                <div className="mt-4 space-y-4 text-slate-700">
                  <p>Email: <span className="font-medium">info@monarchmigration.com</span></p>
                  <p>Location: Greater Boston</p>
                  <p>Deployment model: Software as a Service on AWS</p>
                </div>
                <a
                  href="mailto:info@monarchmigration.com"
                  className="mt-8 inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
                >
                  Email Monarch
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-7xl px-6 py-8 text-sm text-slate-500">
        © 2026 Monarch Migration Software. All rights reserved.
      </footer>
    </div>
  );
}
