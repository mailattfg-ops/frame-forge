

# Frame Forge Branding Update

## Overview
Update the entire website with the new Frameforge.one logo and Geist Mono font. The logo is white text on transparent background, so it will be placed appropriately for visibility.

---

## Changes Summary

### 1. Add the Logo Image
- Copy the uploaded logo to `src/assets/frameforge-logo.png`
- This logo will be imported as an ES6 module in components

### 2. Update Font to Geist Mono
- Add Geist Mono from Google Fonts in `index.html`
- Update `tailwind.config.ts` to use "Geist Mono" as the primary font family
- Update the font-feature-settings in `src/index.css`

### 3. Update Navbar Logo
**File**: `src/components/Navbar.tsx`
- Replace the current placeholder logo (orange square with "F") with the actual Frameforge.one logo image
- Since the logo is white, add a dark/colored background container behind it for visibility on the light navbar
- Update brand text from "Frame Forge" to match the logo style

### 4. Update Footer Logo
**File**: `src/components/Footer.tsx`
- Replace the placeholder logo with the actual Frameforge.one logo image
- Add appropriate background for visibility
- Update copyright text from "Frame Forge" to "Frameforge.one"
- Update email from `hello@frameforge.ai` to use the `frameforge.one` domain

### 5. Update HTML Meta Tags
**File**: `index.html`
- Update `<title>` to "Frameforge.one"
- Update `og:title` to "Frameforge.one"
- Update meta description to reflect the Frame Forge product
- Update og:url to `https://frameforge.one`

### 6. Update All Brand References
Update text references across the site to use consistent branding:
- `src/pages/Integration.tsx` - Update API URLs from `frameforge.ai` to `frameforge.one`
- Any other files with brand/URL references

---

## Technical Details

### Files to Modify

| File | Change |
|------|--------|
| `index.html` | Add Geist Mono font link, update meta tags |
| `tailwind.config.ts` | Change fontFamily from Inter to Geist Mono |
| `src/components/Navbar.tsx` | Import and use logo image |
| `src/components/Footer.tsx` | Import and use logo image, update email |
| `src/pages/Integration.tsx` | Update API URLs to frameforge.one domain |
| `src/index.css` | Minor cleanup of font comment |

### Files to Create
| File | Purpose |
|------|---------|
| `src/assets/frameforge-logo.png` | Copy of uploaded logo |

### Logo Usage Approach
Since the logo is white text on transparent background:
- **Navbar (light background)**: Wrap logo in a dark rounded container or primary color background
- **Footer (muted background)**: Same approach with dark container for visibility

This ensures the logo is always clearly visible regardless of the page background color.

