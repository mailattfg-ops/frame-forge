

# Generate Unique AI Images for All Sections

## Overview
Use Lovable AI's image generation capability (Nano banana model) to create 8 unique, relevant images for the website sections - 4 for "What Frame Forge Does" and 4 for "See What You Can Create" carousel.

---

## Images to Generate

### "What Frame Forge Does" Section (4 images)

| Feature | Image Description |
|---------|-------------------|
| **AI Event Frames** | A professional photo frame mockup showing a person's headshot with elegant event branding, decorative borders, and event logo overlay - conference/corporate style |
| **Smart Badges** | A digital badge design with a professional photo, name, title, QR code, and social sharing icons - modern and shareable design |
| **AI Visuals** | Abstract AI-generated artistic graphics with vibrant colors, geometric patterns, and event-themed elements like confetti and lighting |
| **Custom Design** | A collage showing various branded materials - banners, posters, social media templates - demonstrating full-service design capabilities |

### "See What You Can Create" Carousel (4 images)

| Frame Type | Image Description |
|------------|-------------------|
| **Conference Speaker Frame** | A speaker presentation frame with a professional headshot, speaker name, job title, company logo, and conference branding - stage-ready design |
| **Summit Attendee Badge** | An elegant attendee badge with photo, name, and VIP/attendee status, featuring summit branding and networking QR code |
| **Workshop Certificate** | A certificate-style frame showing workshop completion, with decorative borders, achievement badge, and organizer branding |
| **Virtual Event Frame** | A digital frame optimized for video calls/streaming with webcam-friendly overlay, event hashtag, and online event branding |

---

## Technical Implementation

### 1. Create Image Generation Edge Function
**New File**: `supabase/functions/generate-image/index.ts`

Edge function that calls Lovable AI Gateway with the Nano banana model to generate images:
- Accepts prompt and returns base64 image
- Uses `google/gemini-2.5-flash-image` model
- Handles errors gracefully

### 2. Create Image Generator Admin Component
**New File**: `src/components/admin/ImageGenerator.tsx`

A temporary admin component to:
- Generate all 8 images with predefined prompts
- Display generated images for review
- Provide download functionality to save as assets

### 3. Create Admin Page
**New File**: `src/pages/AdminImages.tsx`

Hidden admin page at `/admin/images` to:
- Trigger image generation
- Preview all generated images
- Download them for saving as project assets

### 4. Update Router
**File**: `src/App.tsx`

Add route for the admin image generator page.

### 5. Save Generated Images as Assets
After generation, save the images to:
- `src/assets/feature-ai-frames.jpg`
- `src/assets/feature-smart-badges.jpg`
- `src/assets/feature-ai-visuals.jpg`
- `src/assets/feature-custom-design.jpg`
- `src/assets/showcase-speaker-frame.jpg`
- `src/assets/showcase-attendee-badge.jpg`
- `src/assets/showcase-workshop-certificate.jpg`
- `src/assets/showcase-virtual-event.jpg`

### 6. Update Components to Use New Images
**Files**: 
- `src/components/home/FeaturesSection.tsx`
- `src/components/home/FrameShowcaseSection.tsx`

Import and use the new unique images for each section.

---

## Files to Create

| File | Purpose |
|------|---------|
| `supabase/functions/generate-image/index.ts` | Edge function for AI image generation |
| `src/components/admin/ImageGenerator.tsx` | Image generation UI component |
| `src/pages/AdminImages.tsx` | Admin page to generate/preview images |

## Files to Modify

| File | Change |
|------|--------|
| `src/App.tsx` | Add admin route |
| `supabase/config.toml` | Add function configuration |
| `src/components/home/FeaturesSection.tsx` | Use unique images |
| `src/components/home/FrameShowcaseSection.tsx` | Use unique images |

---

## Image Generation Prompts

### Feature Section Prompts

1. **AI Event Frames**: "A professional event photo frame mockup, showing a business person's professional headshot photo inside an elegant decorative frame with corporate event branding, gold and black color scheme, conference logo overlay, modern minimalist design, high quality marketing material"

2. **Smart Badges**: "A modern digital event badge design mockup, featuring a professional photo, person's name and title, QR code, social media sharing icons, sleek black and white design with accent colors, shareable social media format, professional networking badge"

3. **AI Visuals**: "Abstract AI-generated artistic event graphics, vibrant gradient colors, geometric patterns, celebration elements like confetti and stage lighting, futuristic tech conference aesthetic, creative marketing visual design"

4. **Custom Design**: "A collage of branded event marketing materials including banners, posters, social media templates, and promotional graphics, cohesive brand identity design, professional marketing suite, multiple design elements arranged aesthetically"

### Showcase Carousel Prompts

1. **Conference Speaker Frame**: "A conference speaker presentation frame, professional headshot with name title and company, stage-ready speaker card design, keynote speaker badge with microphone icon, corporate event branding, premium design"

2. **Summit Attendee Badge**: "An elegant summit attendee badge, VIP event pass design with professional photo, participant name and role, networking QR code, premium gold accents on black background, exclusive event branding"

3. **Workshop Certificate**: "A workshop completion certificate frame design, achievement badge with decorative borders, certification seal, workshop title and organizer branding, accomplishment recognition design, elegant certificate style"

4. **Virtual Event Frame**: "A digital frame overlay for video calls and live streaming, webcam-friendly design with event branding, hashtag display, online event frame for virtual conferences, modern streaming overlay design"

---

## Workflow

1. Create the edge function for image generation
2. Create the admin UI to generate and preview images
3. Generate all 8 images using the admin page
4. Save the generated images as static assets
5. Update both sections to use the unique images
6. Optionally remove the admin page after images are saved

