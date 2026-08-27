import { FileText, Share2, Sparkles } from "lucide-react"

const FEATURES = [
  {
    icon: Sparkles,
    title: "AI Architecture Generation",
    description:
      "Describe your system, AI maps it to nodes and edges on a live canvas.",
  },
  {
    icon: Share2,
    title: "Real-time Collaboration",
    description:
      "Live cursors, presence indicators, and shared node editing across your team.",
  },
  {
    icon: FileText,
    title: "Instant Spec Generation",
    description:
      "Export a complete Markdown technical spec directly from the canvas graph.",
  },
]

export function AuthSplitLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full">
      <div className="relative hidden w-1/2 border-r border-[var(--border-hairline)] bg-base lg:flex">
        <div className="absolute top-8 left-8 flex items-center gap-2.5">
          <span className="h-9 w-9 rounded-lg bg-brand" />
          <span className="text-lg font-semibold text-copy-primary">
            Ghost AI
          </span>
        </div>

        <div className="flex h-full w-full flex-col justify-center px-16">
          <h1 className="max-w-md text-[clamp(2.25rem,4vw,3rem)] leading-[1.1] font-semibold tracking-[-0.02em] text-copy-primary">
            Design systems at the speed of thought.
          </h1>
          <p className="mt-4 max-w-md text-base leading-[1.6] text-copy-secondary">
            Describe your architecture in plain English. Ghost AI maps it to a
            shared canvas your whole team can refine in real time.
          </p>

          <div className="mt-10 space-y-7">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-primary-10)] ring-1 ring-[var(--accent-primary-20)]">
                  <Icon className="h-[18px] w-[18px] text-brand" />
                </span>
                <div>
                  <p className="text-[1.0625rem] font-medium text-copy-primary">
                    {title}
                  </p>
                  <p className="mt-1 text-[0.9375rem] text-copy-muted">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-center bg-base px-6 lg:w-1/2">
        {children}
      </div>
    </div>
  )
}
