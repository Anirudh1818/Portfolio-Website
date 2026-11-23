# Anirudh Saxena — Portfolio

My personal portfolio site. Plain HTML, CSS and JavaScript, no frameworks, no build step.

The hero uses my night photo as a full-screen background with big condensed type on top: the first line solid, the rest outlined so the photo shows through. The photo and the text drift slightly apart when you move your mouse.

## About me

- **Anirudh Saxena**, full-stack & AI developer, UI designer
- B.Tech CSE (Artificial Intelligence) at Shoolini University, Solan, HP (2026 – 2030)
- From Moradabad, Uttar Pradesh
- 1st place at HacXLerate 2026 (college level), ByteXL national Round 2 finalist (Hyderabad), co-founder of Web Brothers Digital
- Email: [saxenaanirudh59@gmail.com](mailto:saxenaanirudh59@gmail.com)
- Phone: +91 94121 42364
- GitHub: [Anirudh1818](https://github.com/Anirudh1818)
- LinkedIn: [anirudh-saxena](https://www.linkedin.com/in/anirudh-saxena-b3b7a7276)
- Instagram: [@canvasofcode_mind](https://www.instagram.com/canvasofcode_mind)

## Projects on the site

1. **KreaLink** — AI-creator marketplace with escrow payments. Won HacXLerate 2026, ByteXL Round 2 finalist. Next.js 16, React 19, TypeScript, Firebase, Razorpay (HMAC-SHA256), Gemini API. I made 44 of 47 commits, wrote 600+ lines of Firestore rules with 44 passing tests and an 8-signal ranking engine.
2. **Web Brothers Digital** — site and lead funnel for the web studio I co-founded. Next.js, TypeScript, Tailwind, Server Actions, Resend, WhatsApp hand-off.
3. **Supermarket Sales Analysis** — EDA on 1,000+ transactions in Python/Pandas. 16 business questions; Saturday is the peak day, 19:00 the busiest hour, women spend 44% more on F&B.
4. **Scientific Calculator in C** — menu-driven switch-case calculator with guards for divide by zero, bad logs and negative roots, plus a web simulator that mirrors it step by step.

Each project opens a case study drawer with more detail.

## What's in it

- Full-screen photo hero with layered solid/outline type and a small mouse parallax
- Live IST clock (header and footer)
- Project filters (all / full-stack & AI / client work / data & systems)
- Case study drawer built on `<dialog>` (Esc, close button or clicking outside closes it)
- About section with a close-up portrait
- Contact form with validation that actually emails me through FormSubmit
- Copy-email button
- Mobile menu, responsive down to small phones, respects reduced motion

Fonts: Archivo (variable width, used extra condensed for the big type) and Instrument Serif italic, both from Google Fonts.

## Structure

```text
portfolio-website/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── anirudh-portrait.png     close-up crop for the About section
    ├── anirudh-avatar.jpg       square avatar (contact section + favicon)
    ├── anirudh-full.jpg         full photo, the hero background
    ├── project-krealink.svg
    ├── project-webbrothers.svg
    ├── project-supermarket.svg
    └── project-calculator.svg
```

## Running it

From the `portfolio-website` folder:

```powershell
npx serve .
```

Then open the link it prints. You can also just double-click `index.html`, but the contact form works better when it's served.

## Contact form

The form posts to FormSubmit (`formsubmit.co/ajax/saxenaanirudh59@gmail.com`). The very first time someone submits it, FormSubmit sends an activation email to that inbox. Click the link in it once and every message after that comes straight through.
