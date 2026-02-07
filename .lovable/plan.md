

# Remove Orange Color & Update Logo Display

## Overview
Remove the orange accent color from the entire site and switch to a clean black/white monochrome theme. Also update the logo to display with black text on a white background (no dark container).

---

## Changes Summary

### 1. Update Color System
**File**: `src/index.css`

Replace the orange primary color (`24 95% 53%`) with black/dark color:

| Variable | Current (Orange) | New (Black) |
|----------|-----------------|-------------|
| `--primary` | `24 95% 53%` | `0 0% 10%` |
| `--primary-foreground` | `0 0% 100%` | `0 0% 100%` (stays white) |
| `--ring` | `24 95% 53%` | `0 0% 10%` |
| `--sidebar-primary` | `24 95% 53%` | `0 0% 10%` |
| `--sidebar-ring` | `24 95% 53%` | `0 0% 10%` |

This single change will automatically update all buttons, links, icons, badges, and accents across the entire site since they all use `bg-primary`, `text-primary`, etc.

### 2. Update Dark Mode Colors
Also update dark mode primary colors to maintain consistency:

| Variable | Current | New |
|----------|---------|-----|
| `--primary` | `24 95% 53%` | `0 0% 98%` (white in dark mode) |
| `--ring` | `24 95% 53%` | `0 0% 98%` |

### 3. Update Navbar Logo
**File**: `src/components/Navbar.tsx`

Remove the dark background container around the logo:

**Before:**
```jsx
<div className="h-10 px-3 rounded-lg bg-foreground flex items-center justify-center">
  <img src={frameforgelogo} alt="Frameforge.one" className="h-5 w-auto" />
</div>
```

**After:**
```jsx
<img src={frameforgelogo} alt="Frameforge.one" className="h-8 w-auto" />
```

The logo (currently white) needs to be updated to black. Since we already have the logo file, we'll apply a CSS filter to invert it to black, or the user can provide a black version of the logo.

### 4. Update Footer Logo
**File**: `src/components/Footer.tsx`

Same change as Navbar - remove dark container and display logo directly:

**Before:**
```jsx
<div className="h-10 px-3 rounded-lg bg-foreground flex items-center justify-center">
  <img src={frameforgelogo} alt="Frameforge.one" className="h-5 w-auto" />
</div>
```

**After:**
```jsx
<img src={frameforgelogo} alt="Frameforge.one" className="h-8 w-auto" />
```

Apply CSS filter `invert` to make the white logo appear black on the light background.

---

## Files to Modify

| File | Change |
|------|--------|
| `src/index.css` | Change primary color from orange to black |
| `src/components/Navbar.tsx` | Remove container, add invert filter to logo |
| `src/components/Footer.tsx` | Remove container, add invert filter to logo |

---

## Visual Impact

### Before
- Orange accent color throughout (buttons, highlights, icons, badges)
- Logo in dark container

### After
- Clean black/white monochrome theme
- All accents are now black
- Logo displays directly with black text on white/light background
- Professional, minimal aesthetic

---

## Technical Approach

### CSS Filter for Logo
Since the current logo (`frameforge-logo.png`) is white text, we can use CSS `filter: invert(1)` to make it appear black without needing a new image file:

```jsx
<img 
  src={frameforgelogo} 
  alt="Frameforge.one" 
  className="h-8 w-auto invert" 
/>
```

This is a clean solution that:
- Requires no new assets
- Works immediately
- Automatically adapts (can be toggled for dark mode if needed later)

