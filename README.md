# Ocean Physics Pro: product page

This is the product page and the documentation of **Ocean Physics Pro**, an add-on for Blender 5.2+ that lets you drive boats and ships on a real-time ocean.

This repository holds only the description, the documentation and their images. The add-on itself is sold on Superhive and is not included here.

- Product page: `index.html`, served with GitHub Pages at https://blenderprocedural.github.io/ocean-physics-pro/
- Documentation: `docs.html`, at https://blenderprocedural.github.io/ocean-physics-pro/docs.html
- Images: `images/`
- Style and iframe helper: `assets/`. Fonts (Inter) are bundled in `fonts/`, so the pages make no external requests apart from the video on the product page.

## Embedding

Both pages work inside an iframe:

- Links to other pages open in a new tab.
- The page posts its height to the parent window as `{type: "ocean-physics-pro-height", height}`.
- The product page hides its own video, because a store page embeds the video itself.

```html
<iframe src="https://blenderprocedural.github.io/ocean-physics-pro/"
        width="100%" height="6400" style="border:0" loading="lazy" title="Ocean Physics Pro for Blender"></iframe>
```

## License

All renders, videos, text and code in this repository are © BlenderProcedural. All rights reserved.
