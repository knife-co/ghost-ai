import type { Appearance } from "@clerk/ui"

export const authCardAppearance: Appearance = {
  elements: {
    cardBox: "w-full max-w-[440px]",
    card: "rounded-[20px] border border-[var(--border-hairline)] bg-[linear-gradient(180deg,color-mix(in_oklch,white_3%,transparent),transparent_160px)]",
    main: "px-10 py-10",
    footer:
      "rounded-b-[20px] border-t border-[var(--border-hairline)] bg-[var(--bg-elevated)] px-10 py-6",
    dividerRow: "gap-3",
    dividerLine: "bg-[var(--border-hairline)]",
    dividerText: "px-1 text-sm text-copy-muted",
    socialButtonsBlockButton:
      "h-[52px] rounded-xl border border-[var(--border-hairline-strong)] bg-[var(--bg-elevated)] transition-colors hover:border-[var(--border-default)] hover:bg-[var(--bg-subtle)]",
    socialButtonsBlockButtonText: "text-sm font-medium text-copy-primary",
    lastAuthenticationStrategyBadge:
      "rounded-full border border-[var(--border-hairline-strong)] bg-[var(--bg-surface)] px-2 py-0.5 text-[11px] text-copy-muted",
    formFieldInput:
      "h-[52px] rounded-xl border border-[var(--border-hairline-strong)] bg-[var(--bg-elevated)] placeholder:text-[color-mix(in_oklch,white_40%,transparent)] focus:shadow-[0_0_16px_var(--accent-primary-25)] focus:ring-2 focus:ring-[var(--accent-primary)]",
    formButtonPrimary:
      "h-14 rounded-[14px] bg-[linear-gradient(180deg,color-mix(in_oklch,var(--accent-primary)_100%,white_10%),var(--accent-primary))] font-semibold text-[var(--bg-base)] shadow-[0_0_32px_var(--accent-primary-25)] transition-all hover:brightness-110 hover:shadow-[0_0_40px_var(--accent-primary-25)]",
  },
  options: {
    socialButtonsVariant: "blockButton",
  },
}
