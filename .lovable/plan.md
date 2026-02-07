

# Visual Showcase & Animation Update

## Overview
Add sample frame images and engaging animations to help users instantly understand what Frameforge.one offers without reading text. The focus is on visual storytelling and interactive demonstrations.

---

## Key Changes

### 1. Add Sample Frame Images
Copy the uploaded sample frame image to use as a real example of Frameforge.one's output:
- Save to `src/assets/sample-frame-1.jpg`
- This shows a real event frame with speaker info, event branding, and photo

### 2. Create New Frame Showcase Section
**New File**: `src/components/home/FrameShowcaseSection.tsx`

A dedicated section that displays sample frames in an interactive carousel/gallery:
- Show 3-4 different frame examples (we can use the uploaded image and create placeholder variations)
- Animated entrance with staggered reveals
- Hover effects to show frame details
- Mobile-friendly swipeable carousel

### 3. Add Frame Creation Animation to Hero Section
**File**: `src/components/home/HeroSection.tsx`

Add a visual demonstration right in the hero:
- Animated mockup showing the frame creation process
- Photo appears -> Frame overlays -> Badge generates
- Looping animation that runs automatically
- Uses the sample frame image as the end result

### 4. Enhance How It Works with Visual Animation
**File**: `src/components/home/HowItWorksSection.tsx`

Replace text-heavy steps with animated visual flow:
- Animated phone/device mockup showing each step
- Visual transition between steps
- Progress indicator showing the flow
- Sample frame appearing at the end

---

## Files to Create

| File | Purpose |
|------|---------|
| `src/assets/sample-frame-1.jpg` | Uploaded sample frame image |
| `src/components/home/FrameShowcaseSection.tsx` | New visual gallery section |
| `src/components/home/FrameAnimationDemo.tsx` | Reusable frame creation animation component |

## Files to Modify

| File | Change |
|------|--------|
| `src/pages/Index.tsx` | Add FrameShowcaseSection after HeroSection |
| `src/components/home/HeroSection.tsx` | Add animated frame demo alongside text |
| `src/components/home/HowItWorksSection.tsx` | Add visual animation component |

---

## Animation Details

### Frame Creation Animation (Hero)
A looping animation sequence:
1. **Photo Stage** (0-1.5s): Blank photo placeholder fades in
2. **Upload Stage** (1.5-2.5s): Photo "uploads" with progress animation
3. **Processing Stage** (2.5-3.5s): Sparkle/magic effect around photo
4. **Frame Stage** (3.5-5s): Event frame slides in from edges and applies
5. **Complete Stage** (5-7s): Final framed image with badge, slight bounce
6. **Reset** (7-8s): Fade out and restart

Uses Framer Motion for smooth, performant animations.

### Showcase Carousel
- Auto-scrolling carousel of sample frames
- Pause on hover for better viewing
- Dot indicators for navigation
- Smooth transitions between frames

---

## Technical Approach

1. **Framer Motion**: Already installed, will use for all animations
2. **Embla Carousel**: Already installed (`embla-carousel-react`), will use for frame gallery
3. **Layered Composition**: Build frame animation using positioned layers (photo, frame overlay, badge)
4. **Responsive Design**: Animations work on mobile with reduced motion for accessibility

---

## Visual Impact

**Before**: Text-heavy homepage that requires reading to understand the product
**After**: Instantly visual - users see sample frames and watch the creation process in action within seconds of landing

