# Lazy Loading — What Changed

## Files Modified
| File | Change |
|------|--------|
| `App.jsx` | Uses `React.lazy` + `Suspense` to lazy-load Desipallet |
| `Desipallet.jsx` | Internal preloader timeout removed (Suspense handles it now) |
| `PreLoader.jsx` | **NEW** — Shown by Suspense while the JS bundle downloads |

## How It Works

### Before (problem)
Browser loads → shows raw HTML shell → waits for huge JS bundle → React paints UI
User sees: blank/unstyled page flash ❌

### After (fixed)
Browser loads → `main.jsx` + tiny `App.jsx` paint instantly → Suspense shows
`<PreLoader />` with pallet animation → Desipallet bundle downloads in background
→ Suspense swaps PreLoader for the full site seamlessly ✅

## How to Use
Replace your existing `src/` files with these. No other config needed — Vite
automatically code-splits `React.lazy()` imports into separate chunks.

## Bonus: Vercel Performance Tips
Add this to your `vercel.json` to enable compression and caching:

```json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```
