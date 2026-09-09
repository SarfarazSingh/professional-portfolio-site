import {
  ArrowUpRight,
  BriefcaseBusiness,
  Mail,
  MessageCircle,
  X,
} from "lucide-react";
import { profile } from "@/content/profile";
import { assetPath } from "@/lib/asset-path";
import { cn } from "@/lib/utils";

const dialogId = "contact-actions-dialog";
const whatsappMessage = encodeURIComponent(
  "Hi Sarfaraz, I found your portfolio and would like to discuss an opportunity.",
);
const emailSubject = encodeURIComponent("Portfolio conversation");
const emailBody = encodeURIComponent(
  "Hi Sarfaraz,\n\nI found your portfolio and would like to discuss an opportunity.\n\n",
);

export function ContactTrigger({
  children = "Start a conversation",
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={assetPath("/contact")}
      aria-controls={dialogId}
      aria-haspopup="dialog"
      className={cn("cursor-pointer", className)}
      data-contact-trigger
    >
      {children}
    </a>
  );
}

export function ContactActionsDialog() {
  const channels = [
    {
      label: "WhatsApp",
      detail: profile.phoneDisplay,
      href: `https://wa.me/${profile.phone.replace("+", "")}?text=${whatsappMessage}`,
      icon: MessageCircle,
    },
    {
      label: "Email",
      detail: profile.email,
      href: `mailto:${profile.email}?subject=${emailSubject}&body=${emailBody}`,
      icon: Mail,
    },
    {
      label: "LinkedIn",
      detail: "Open professional profile",
      href: profile.linkedin,
      icon: BriefcaseBusiness,
    },
  ] as const;

  return (
    <dialog
      aria-labelledby="contact-actions-title"
      className="contact-dialog"
      id={dialogId}
    >
      <div className="border-b border-line p-5 sm:p-6">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="section-label">Direct contact</p>
            <h2
              className="mt-3 [font-size:var(--type-h3)] leading-none tracking-[-0.035em]"
              id="contact-actions-title"
            >
              Choose a channel.
            </h2>
          </div>
          <form method="dialog">
            <button
              aria-label="Close contact options"
              className="grid size-11 place-items-center rounded-full border border-line-strong hover:border-signal hover:text-signal"
              type="submit"
            >
              <X className="size-4" />
            </button>
          </form>
        </div>
        <p className="mt-4 max-w-[38ch] leading-7 text-copy-muted">
          Reach Sarfaraz directly—no form, automated routing, or mailing list.
        </p>
      </div>

      <div className="divide-y divide-line">
        {channels.map((channel) => {
          const Icon = channel.icon;
          return (
            <a
              className="group grid min-h-24 grid-cols-[auto_1fr_auto] items-center gap-4 p-5 hover:bg-surface-raised sm:p-6"
              href={channel.href}
              key={channel.label}
              rel="noreferrer"
              target={channel.label === "Email" ? undefined : "_blank"}
            >
              <span className="grid size-11 place-items-center border border-line-strong text-signal">
                <Icon className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block font-semibold">{channel.label}</span>
                <span className="mt-1 block truncate text-sm text-copy-muted">
                  {channel.detail}
                </span>
              </span>
              <ArrowUpRight className="size-4 text-copy-muted group-hover:text-signal" />
            </a>
          );
        })}
      </div>
    </dialog>
  );
}
