

# Logo Update - Black Logo Without Background

## Overview
Update the logo display in both Navbar and Footer to show a black logo directly without any background container. This requires a new black version of the logo image and simplified logo markup.

---

## Changes Required

### 1. Add Black Logo Image
**File**: `src/assets/frameforge-logo-black.png`
- You'll need to provide a black version of the Frameforge.one logo
- This logo will be used on the light background without any container

### 2. Update Navbar
**File**: `src/components/Navbar.tsx`

Current (line 28-32):
```jsx
<Link to="/" className="flex items-center gap-3">
  <div className="h-10 px-3 rounded-lg bg-foreground flex items-center justify-center">
    <img src={frameforgelogo} alt="Frameforge.one" className="h-5 w-auto" />
  </div>
</Link>
```

New:
```jsx
<Link to="/" className="flex items-center">
  <img src={frameforgelogoBlack} alt="Frameforge.one" className="h-8 w-auto" />
</Link>
```

Changes:
- Remove the dark background container (`bg-foreground`)
- Import and use the black logo instead of white logo
- Increase logo size slightly for better visibility (h-5 → h-8)
- Simplify the markup

### 3. Update Footer
**File**: `src/components/Footer.tsx`

Current (line 31-35):
```jsx
<Link to="/" className="flex items-center gap-3">
  <div className="h-10 px-3 rounded-lg bg-foreground flex items-center justify-center">
    <img src={frameforgelogo} alt="Frameforge.one" className="h-5 w-auto" />
  </div>
</Link>
```

New:
```jsx
<Link to="/" className="flex items-center">
  <img src={frameforgelogoBlack} alt="Frameforge.one" className="h-8 w-auto" />
</Link>
```

Same changes as Navbar - remove background container, use black logo.

---

## Files Summary

| File | Change |
|------|--------|
| `src/assets/frameforge-logo-black.png` | Add new black logo (user to provide) |
| `src/components/Navbar.tsx` | Remove bg container, use black logo |
| `src/components/Footer.tsx` | Remove bg container, use black logo |

---

## Note
Please upload a black version of the Frameforge.one logo. If you have one ready, I can proceed with the implementation immediately after this plan is approved.

