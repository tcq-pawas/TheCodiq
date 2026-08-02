"use client";

type BubbleVariant = "a" | "b" | "c" | "d";

interface CodeBubblesProps {
  variant?: BubbleVariant;
}

type Tone = "kw" | "fn" | "str" | "cm" | "plain" | "num" | "tag" | "prop";

interface CodeLine {
  tokens: { text: string; tone: Tone }[];
}

type BubbleShape = "drop" | "drop-tilt" | "drop-round" | "drop-wide";
type Accent = "blue" | "cyan" | "indigo" | "emerald" | "purple" | "gold";

interface BubbleDef {
  label: string;
  lang: string;
  x: string;
  y: string;
  size: number;
  shape: BubbleShape;
  accent: Accent;
  delay: string;
  duration: string;
  rotate: string;
  lines: CodeLine[];
}

const BUBBLES: Record<BubbleVariant, BubbleDef[]> = {
  a: [
    {
      label: "Hero.tsx",
      lang: "tsx",
      x: "3%",
      y: "12%",
      size: 248,
      shape: "drop",
      accent: "blue",
      delay: "0s",
      duration: "14s",
      rotate: "-2deg",
      lines: [
        { tokens: [{ text: "const ", tone: "kw" }, { text: "Hero", tone: "fn" }, { text: " = () => {", tone: "plain" }] },
        { tokens: [{ text: "  ", tone: "plain" }, { text: "return ", tone: "kw" }, { text: "<Section />", tone: "tag" }] },
        { tokens: [{ text: "}", tone: "plain" }] },
      ],
    },
    {
      label: "api.json",
      lang: "json",
      x: "74%",
      y: "10%",
      size: 210,
      shape: "drop-round",
      accent: "cyan",
      delay: "1.5s",
      duration: "16s",
      rotate: "1.5deg",
      lines: [
        { tokens: [{ text: "{", tone: "plain" }] },
        { tokens: [{ text: '  "status"', tone: "prop" }, { text: ": ", tone: "plain" }, { text: '"ok"', tone: "str" }, { text: ",", tone: "plain" }] },
        { tokens: [{ text: '  "latency"', tone: "prop" }, { text: ": ", tone: "plain" }, { text: "42", tone: "num" }] },
        { tokens: [{ text: "}", tone: "plain" }] },
      ],
    },
    {
      label: "route.py",
      lang: "python",
      x: "68%",
      y: "58%",
      size: 236,
      shape: "drop-tilt",
      accent: "emerald",
      delay: "3s",
      duration: "15s",
      rotate: "-1deg",
      lines: [
        { tokens: [{ text: "@app.get", tone: "fn" }, { text: "(", tone: "plain" }, { text: '"/health"', tone: "str" }, { text: ")", tone: "plain" }] },
        { tokens: [{ text: "def ", tone: "kw" }, { text: "health", tone: "fn" }, { text: "():", tone: "plain" }] },
        { tokens: [{ text: "  ", tone: "plain" }, { text: "return ", tone: "kw" }, { text: '{"ok": True}', tone: "str" }] },
      ],
    },
    {
      label: "query.sql",
      lang: "sql",
      x: "5%",
      y: "62%",
      size: 200,
      shape: "drop-wide",
      accent: "purple",
      delay: "2s",
      duration: "17s",
      rotate: "1.2deg",
      lines: [
        { tokens: [{ text: "SELECT ", tone: "kw" }, { text: "id, name", tone: "plain" }] },
        { tokens: [{ text: "FROM ", tone: "kw" }, { text: "projects", tone: "fn" }] },
        { tokens: [{ text: "WHERE ", tone: "kw" }, { text: "active = ", tone: "plain" }, { text: "1", tone: "num" }] },
      ],
    },
    {
      label: "types.ts",
      lang: "ts",
      x: "42%",
      y: "78%",
      size: 168,
      shape: "drop-round",
      accent: "indigo",
      delay: "4s",
      duration: "13s",
      rotate: "-1.5deg",
      lines: [
        { tokens: [{ text: "interface ", tone: "kw" }, { text: "User ", tone: "fn" }, { text: "{", tone: "plain" }] },
        { tokens: [{ text: "  id: ", tone: "plain" }, { text: "string", tone: "kw" }] },
        { tokens: [{ text: "}", tone: "plain" }] },
      ],
    },
  ],
  b: [
    {
      label: "page.tsx",
      lang: "next",
      x: "4%",
      y: "14%",
      size: 260,
      shape: "drop",
      accent: "indigo",
      delay: "0s",
      duration: "15s",
      rotate: "1deg",
      lines: [
        { tokens: [{ text: "export ", tone: "kw" }, { text: "default ", tone: "kw" }, { text: "function ", tone: "kw" }] },
        { tokens: [{ text: "Page", tone: "fn" }, { text: "() {", tone: "plain" }] },
        { tokens: [{ text: "  ", tone: "plain" }, { text: "return ", tone: "kw" }, { text: "<main />", tone: "tag" }] },
        { tokens: [{ text: "}", tone: "plain" }] },
      ],
    },
    {
      label: "endpoint",
      lang: "http",
      x: "72%",
      y: "12%",
      size: 190,
      shape: "drop-round",
      accent: "blue",
      delay: "2s",
      duration: "14s",
      rotate: "-1.8deg",
      lines: [
        { tokens: [{ text: "POST", tone: "kw" }] },
        { tokens: [{ text: "/api/v1/deploy", tone: "str" }] },
        { tokens: [{ text: "→ 201 Created", tone: "fn" }] },
      ],
    },
    {
      label: "views.py",
      lang: "django",
      x: "70%",
      y: "55%",
      size: 228,
      shape: "drop-tilt",
      accent: "gold",
      delay: "3.5s",
      duration: "16s",
      rotate: "0.8deg",
      lines: [
        { tokens: [{ text: "@api_view", tone: "fn" }, { text: "(['GET'])", tone: "plain" }] },
        { tokens: [{ text: "def ", tone: "kw" }, { text: "list_apps", tone: "fn" }, { text: "(req):", tone: "plain" }] },
        { tokens: [{ text: "  ", tone: "plain" }, { text: "return ", tone: "kw" }, { text: "Response(data)", tone: "fn" }] },
      ],
    },
    {
      label: "shell",
      lang: "bash",
      x: "6%",
      y: "58%",
      size: 216,
      shape: "drop-wide",
      accent: "emerald",
      delay: "1s",
      duration: "13s",
      rotate: "-1deg",
      lines: [
        { tokens: [{ text: "$ ", tone: "fn" }, { text: "npm run build", tone: "plain" }] },
        { tokens: [{ text: "✓ Compiled", tone: "str" }] },
        { tokens: [{ text: "→ Ready :3000", tone: "cm" }] },
      ],
    },
    {
      label: "styles.css",
      lang: "css",
      x: "40%",
      y: "76%",
      size: 156,
      shape: "drop-round",
      accent: "cyan",
      delay: "4.5s",
      duration: "17s",
      rotate: "2deg",
      lines: [
        { tokens: [{ text: ".hero ", tone: "fn" }, { text: "{", tone: "plain" }] },
        { tokens: [{ text: "  display: ", tone: "prop" }, { text: "grid", tone: "str" }, { text: ";", tone: "plain" }] },
        { tokens: [{ text: "}", tone: "plain" }] },
      ],
    },
  ],
  c: [
    {
      label: "Card.tsx",
      lang: "react",
      x: "5%",
      y: "10%",
      size: 240,
      shape: "drop",
      accent: "cyan",
      delay: "0s",
      duration: "14s",
      rotate: "-1.2deg",
      lines: [
        { tokens: [{ text: "export ", tone: "kw" }, { text: "function ", tone: "kw" }, { text: "Card", tone: "fn" }, { text: "({", tone: "plain" }] },
        { tokens: [{ text: "  title", tone: "prop" }, { text: ",", tone: "plain" }] },
        { tokens: [{ text: "}: Props) {", tone: "plain" }] },
        { tokens: [{ text: "  ", tone: "plain" }, { text: "return ", tone: "kw" }, { text: "<div />", tone: "tag" }] },
      ],
    },
    {
      label: "model.py",
      lang: "python",
      x: "76%",
      y: "16%",
      size: 200,
      shape: "drop-round",
      accent: "purple",
      delay: "2.5s",
      duration: "15s",
      rotate: "1.4deg",
      lines: [
        { tokens: [{ text: "class ", tone: "kw" }, { text: "Project", tone: "fn" }, { text: "(", tone: "plain" }] },
        { tokens: [{ text: "  models.Model", tone: "plain" }, { text: "):", tone: "plain" }] },
        { tokens: [{ text: "  name = ", tone: "plain" }, { text: "CharField()", tone: "fn" }] },
      ],
    },
    {
      label: "fetch.ts",
      lang: "ts",
      x: "66%",
      y: "60%",
      size: 252,
      shape: "drop-tilt",
      accent: "blue",
      delay: "1.5s",
      duration: "16s",
      rotate: "-0.6deg",
      lines: [
        { tokens: [{ text: "const ", tone: "kw" }, { text: "res", tone: "plain" }, { text: " = ", tone: "plain" }, { text: "await ", tone: "kw" }] },
        { tokens: [{ text: "  fetch", tone: "fn" }, { text: "(", tone: "plain" }, { text: '"/api/ai"', tone: "str" }, { text: ")", tone: "plain" }] },
        { tokens: [{ text: "return ", tone: "kw" }, { text: "res.json()", tone: "fn" }] },
      ],
    },
    {
      label: "markup",
      lang: "html",
      x: "4%",
      y: "64%",
      size: 178,
      shape: "drop-wide",
      accent: "gold",
      delay: "3.5s",
      duration: "13s",
      rotate: "1deg",
      lines: [
        { tokens: [{ text: "<section ", tone: "tag" }] },
        { tokens: [{ text: "  class=", tone: "prop" }, { text: '"hero"', tone: "str" }] },
        { tokens: [{ text: "/>", tone: "tag" }] },
      ],
    },
    {
      label: "config",
      lang: "json",
      x: "38%",
      y: "80%",
      size: 148,
      shape: "drop-round",
      accent: "emerald",
      delay: "5s",
      duration: "18s",
      rotate: "-2deg",
      lines: [
        { tokens: [{ text: '{ "edge": ', tone: "plain" }, { text: "true", tone: "kw" }, { text: " }", tone: "plain" }] },
      ],
    },
  ],
  d: [
    {
      label: "worker.ts",
      lang: "edge",
      x: "4%",
      y: "16%",
      size: 232,
      shape: "drop",
      accent: "emerald",
      delay: "0s",
      duration: "14s",
      rotate: "1.2deg",
      lines: [
        { tokens: [{ text: "export ", tone: "kw" }, { text: "default ", tone: "kw" }, { text: "{", tone: "plain" }] },
        { tokens: [{ text: "  ", tone: "plain" }, { text: "async ", tone: "kw" }, { text: "fetch", tone: "fn" }, { text: "(req) {", tone: "plain" }] },
        { tokens: [{ text: "    ", tone: "plain" }, { text: "return ", tone: "kw" }, { text: "proxy(req)", tone: "fn" }] },
        { tokens: [{ text: "}}", tone: "plain" }] },
      ],
    },
    {
      label: "infer.py",
      lang: "ai",
      x: "74%",
      y: "12%",
      size: 220,
      shape: "drop-round",
      accent: "purple",
      delay: "2s",
      duration: "16s",
      rotate: "-1.4deg",
      lines: [
        { tokens: [{ text: "async ", tone: "kw" }, { text: "def ", tone: "kw" }, { text: "infer", tone: "fn" }, { text: "(x):", tone: "plain" }] },
        { tokens: [{ text: "  ", tone: "plain" }, { text: "return ", tone: "kw" }, { text: "model(x)", tone: "fn" }] },
        { tokens: [{ text: "# stream tokens", tone: "cm" }] },
      ],
    },
    {
      label: "schema",
      lang: "sql",
      x: "68%",
      y: "58%",
      size: 196,
      shape: "drop-tilt",
      accent: "blue",
      delay: "3s",
      duration: "15s",
      rotate: "0.5deg",
      lines: [
        { tokens: [{ text: "CREATE TABLE ", tone: "kw" }] },
        { tokens: [{ text: "users (", tone: "fn" }] },
        { tokens: [{ text: "  id UUID PK", tone: "plain" }] },
        { tokens: [{ text: ");", tone: "plain" }] },
      ],
    },
    {
      label: "cli",
      lang: "bash",
      x: "6%",
      y: "60%",
      size: 184,
      shape: "drop-wide",
      accent: "cyan",
      delay: "1.5s",
      duration: "17s",
      rotate: "-0.8deg",
      lines: [
        { tokens: [{ text: "$ ", tone: "fn" }, { text: "vercel --prod", tone: "plain" }] },
        { tokens: [{ text: "✓ Production live", tone: "str" }] },
      ],
    },
    {
      label: "Props",
      lang: "ts",
      x: "44%",
      y: "78%",
      size: 140,
      shape: "drop-round",
      accent: "indigo",
      delay: "4s",
      duration: "12s",
      rotate: "1.8deg",
      lines: [
        { tokens: [{ text: "type ", tone: "kw" }, { text: "Props", tone: "fn" }, { text: " = {", tone: "plain" }] },
        { tokens: [{ text: "  open: ", tone: "plain" }, { text: "boolean", tone: "kw" }] },
        { tokens: [{ text: "}", tone: "plain" }] },
      ],
    },
  ],
};

function Token({ text, tone }: { text: string; tone: Tone }) {
  return <span className={`dev-token dev-token--${tone}`}>{text}</span>;
}

export default function CodeBubbles({ variant = "a" }: CodeBubblesProps) {
  const bubbles = BUBBLES[variant];

  return (
    <div className="tech-bg-layer tech-bg-bubbles" aria-hidden="true">
      {bubbles.map((bubble, i) => (
        <div
          key={`${bubble.label}-${i}`}
          className={`code-bubble code-bubble--${bubble.shape} code-bubble--${bubble.accent} tech-anim-float-bubble`}
          style={{
            left: bubble.x,
            top: bubble.y,
            width: bubble.size,
            height: bubble.size,
            animationDelay: `${bubble.delay}, ${bubble.delay}`,
            animationDuration: `${bubble.duration}, 7s`,
            ["--bubble-rot" as string]: bubble.rotate,
            zIndex: i + 1,
          }}
        >
          <div className="code-bubble__shine" />
          <div className="code-bubble__header">
            <span className="code-bubble__lang">{bubble.lang}</span>
            <span className="code-bubble__label">{bubble.label}</span>
          </div>
          <div className="code-bubble__code">
            {bubble.lines.map((line, li) => (
              <div key={li} className="code-bubble__line">
                {line.tokens.map((t, ti) => (
                  <Token key={ti} text={t.text} tone={t.tone} />
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
