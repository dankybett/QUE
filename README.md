# Educational App — Design Document (v0.3)

> Working title: **Questioning Unsettling Experiences**
> Date: 8 Sep 2025
> Owner: Daniel Stevens & Alisha Jones
> Status: Draft

---

## 1) One‑page Summary

**Vision**
A simple, guided psycho‑education resource (app/website) designed to help young people (14–25) who experience unsettling perceptual experiences (e.g., voices, shadowy figures, misperceptions) understand what’s happening and learn coping strategies. The app is co‑navigated with a mental health professional.

**Target Users**
Primary: Young people (14–25) distressed by perceptual experiences.
Secondary: Mental health professionals supporting them in session.

**Primary Outcome**
Learners complete psycho‑education sections with their worker, gain understanding, and practice coping strategies.

**MVP Scope**

* 5–6 sections of explanatory material
* Text, images, and short videos for each section
* Interactive components (accordions, callouts, grounding exercise walk‑throughs)
* Accessible design (captions, transcripts, screen reader support)

---

## 2) Content Structure

**Sections**

1. Introduction & Normalization
2. What Are Perceptual Experiences?
3. Mis‑perceptions, Illusions, and Hallucinations
4. Why Do They Sometimes Feel Unsettling?
5. Strategies for Coping
6. Closing & Next Steps

Each section combines:

* **Explanatory text** (plain, validating, non‑clinical)
* **Images** (optical illusions, everyday examples)
* **Short videos** (≤90s, with captions + transcripts)
* **Interactive elements** (accordions, callouts, grounding exercise components)

---

## 3) Technology Approach

**Option A (Recommended)**: Next.js (React) + MDX + Tailwind CSS

* **React**: familiar interactive UI library
* **Next.js**: routing, SEO, image optimization, static site generation
* **MDX**: allows content in Markdown with embedded React components
* **Tailwind CSS**: accessible, responsive styling
* **Deployment**: Vercel (push → deploy)

**Why Markdown (MDX)**
Markdown = simple, readable text format with symbols for headings, bold, links, etc.
Example:

```md
# What are perceptual experiences?
Perception is your brain making sense of signals from your body and the world.

<Callout type="normalise">
Lots of people have unusual experiences. You’re not alone.
</Callout>
```

---

## 4) Example Section in Markdown (Draft)

```md
# What are perceptual experiences?

Perception is your brain making sense of signals from your body and the world. Sometimes it fills in gaps—this can lead to **mis‑perceptions**, **illusions**, or **hallucinations**.

<Callout type="normalise">
Many people have unusual experiences at times. You’re not alone, and it doesn’t mean you’re broken.
</Callout>

<Accordion title="A quick example (shadowy figure at night)">
In low light, the brain guesses. A coat on a chair can look like a person for a moment.
</Accordion>

<VideoPlayer src="/media/brain-senses.mp4" captions="/media/brain-senses.vtt" />

<Exercise title="A 60‑second grounding check‑in">
1. Breathe in for 4, out for 6 (5 times).  
2. Name 5 things you can see, 4 you can feel, 3 you can hear…
</Exercise>
```

---

## 5) Accessibility & Inclusion

* WCAG 2.1 AA targets
* Captions and transcripts for all videos
* Alt text for all images
* Keyboard + screen reader friendly interactive components
* Large tap targets; dyslexia‑friendly option

---

## 6) Roadmap

**MVP (6–8 weeks)**

* Content for Sections 1–5
* Text + images + at least 1 video per section
* Callout, Accordion, Exercise, VideoPlayer components
* Deploy to Vercel for pilot use

**v1.1 (later)**

* Offline support (PWA)
* Print/PDF export of sections
* Expanded video library

---

## 7) Open Questions

* Should coping strategies include downloadable worksheets or stay interactive‑only?
* Do professionals want a facilitator guide separate from app content?
* Should there be a “self‑study mode” for young people without a worker present?

---
