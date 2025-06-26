<div align="center">
  <h1>🚀 React Native Retro Grid 👾 </h1>
</div>

> **react-native-retro-grid** is a pixel-based animation grid for React Native that brings retro vibes to your app. Use it to render animated pixel effects, visual patterns, and nostalgic UI elements in a modern React Native workflow.
> Supports **iOS**, **Android**, **Web**, and **Expo**, with a lightweight and customizable API.

<div align="center">
  <img alt="NPM downloads" src="https://img.shields.io/npm/dw/@symbiot.dev/react-native-retro-grid?logo=npm&label=npm&cacheSeconds=3600"/>
  <img alt="NPM version" src="https://img.shields.io/npm/v/@symbiot.dev/react-native-retro-grid?logo=npm&label=npm&cacheSeconds=3600"/>
  <img alt="Bundle size" src="https://img.shields.io/bundlephobia/minzip/@symbiot.dev/react-native-retro-grid?label=size&cacheSeconds=3600"/>
  <img alt="Typescript" src="https://img.shields.io/static/v1?label=&message=TS&color=blue"/>
</div>

---

## [🎮 Demo](#demo)

<div>
  <h3>Example 5x5</h3>
  <img alt="Pixel Demo 1" src="https://github.com/symbiotdev/react-native-retro-grid/blob/main/assets/demo.gif" width="200px" height="400px" />
</div>

___

## [✨ Key Features](#features)

👾 **Pixel Grid Renderer** – Create matrix-based animation effects  
🌀 **Custom Animations** – Animate colors, patterns, and transitions  
🎮 **Retro Feel** – Bring 8-bit pixel art and arcade style to life  
🎨 **Flexible Design** – Choose grid size, pixel shape, speed & more  
📱 **Cross-Platform** – Works on:

- iOS & Android
- Web via React Native Web
- Expo & Expo Go

💡 **Use Cases**

- Retro games & mini experiences
- Animated background patterns
- Loading indicators or visual cues
- Gamified dashboards or onboarding flows
- Creative UI & pixel-art branding

---

## [👩🏿‍💻 Installation](#installation)

```bash
npm install @symbiot.dev/react-native-retro-grid
# or
yarn add @symbiot.dev/react-native-retro-grid
```

--- 

## 🎨 `RetroGridThemeProps` – [Theme Configuration](#theme)

Configure the colors and color scheme of the retro pixel grid.  
Supports defining active/inactive pixel colors and separate light/dark mode schemes.

| Property             | Type                        | Description                                                                                                                   | 🌐 Web | 🍏 iOS | 🤖 Android |
|----------------------|-----------------------------|-------------------------------------------------------------------------------------------------------------------------------|:------:|:------:|:----------:|
| `pixelActiveColor`   | `string`                    | Color used for active (lit) pixels in the grid.                                                                               |   ✅    |   ✅    |     ✅      |
| `pixelInactiveColor` | `string`                    | Color used for inactive (dimmed) pixels in the grid.                                                                          |   ✅    |   ✅    |     ✅      |
| `scheme`             | `'light'` \| `'dark'`       | Optional base color scheme to apply theme defaults for light or dark modes.                                                   |   ✅    |   ✅    |     ✅      |
| `light`              | `RetroGridColor` (optional) | Optional override colors for the light scheme (overrides `pixelActiveColor`/`pixelInactiveColor` when `scheme` is `'light'`). |   ✅    |   ✅    |     ✅      |
| `dark`               | `RetroGridColor` (optional) | Optional override colors for the dark scheme (overrides `pixelActiveColor`/`pixelInactiveColor` when `scheme` is `'dark'`).   |   ✅    |   ✅    |     ✅      |

---

## 📐 `RetroGridDimensionsProps` – [Grid Size and Layout](#dimensions)

Configure the size and layout of the pixel grid, including dimensions, pixel size, spacing, and corner radius.

| Property             | Type                | Description                                                                                             | 🌐 Web | 🍏 iOS | 🤖 Android |
|----------------------|---------------------|---------------------------------------------------------------------------------------------------------|:------:|:------:|:----------:|
| `gridSize`           | `[number, number]`  | Required tuple specifying the number of columns and rows in the grid.                                   |   ✅    |   ✅    |     ✅      |
| `pixelSize`          | `number` (optional) | Size (width and height) of each pixel square in pixels. Defaults to a reasonable size if not specified. |   ✅    |   ✅    |     ✅      |
| `pixelsGap`          | `number` (optional) | Space (gap) between pixels in the grid, in pixels.                                                      |   ✅    |   ✅    |     ✅      |
| `pixelsBorderRadius` | `number` (optional) | Border radius for pixels to control rounding of corners.                                                |   ✅    |   ✅    |     ✅      |

---

## 🎞️ `RetroGridAnimationProps` – [Animation Configuration](#animation)

Control pixel animation sequences, timing, and looping behavior for the retro grid.

| Property          | Type                | Description                                                                                                                              | 🌐 Web | 🍏 iOS | 🤖 Android |
|-------------------|---------------------|------------------------------------------------------------------------------------------------------------------------------------------|:------:|:------:|:----------:|
| `animate`         | `AnimatePixels`     | Required array of animation frames. Each frame is an array of tuples `[x, y, color?]` representing pixel coordinates and optional color. |   ✅    |   ✅    |     ✅      |
| `animateInterval` | `number` (optional) | Time interval between frames in milliseconds. Defaults to a sensible value if omitted.                                                   |   ✅    |   ✅    |     ✅      |
| `loopCount`       | `number` (optional) | Number of times the animation sequence should repeat. Use `0` or omit for infinite looping.                                              |   ✅    |   ✅    |     ✅      |

---

## 🧩 `RetroGridProps` – [Main Component Props](#retrogridprops)

Combines grid layout, animation, theming, and pixel rendering options for the Retro Grid component.
Includes `RetroGridDimensionsProps` and `RetroGridAnimationProps`.

| Property    | Type                                               | Description                                                                           | 🌐 Web | 🍏 iOS | 🤖 Android |
|-------------|----------------------------------------------------|---------------------------------------------------------------------------------------|:------:|:------:|:----------:|
| `theme`     | `RetroGridThemeProps` (optional)                   | Color scheme and pixel colors configuration.                                          |   ✅    |   ✅    |     ✅      |
| `pixelType` | `'static'` \| `'animated'` \| `'debug'` (optional) | Defines pixel rendering mode: static pixels, animated pixels, or debug visualization. |   ✅    |   ✅    |     ✅      |


## 🧩 `Example` – [Simple 5X5 uploading animation](#retrogridprops)


```tsx
const gridSize: GridSize = [5, 5];

export const UploadRetroGrid5x5 = memo((props: Props) => {
  const animate = useMemo(
    () =>
      [
        [[2, 4]],
        [
          [2, 3],
          [1, 4],
          [2, 4],
          [3, 4]
        ],
        [
          [2, 2],
          [1, 3],
          [2, 3],
          [3, 3],
          [0, 4],
          [1, 4],
          [2, 4],
          [3, 4],
          [4, 4]
        ],
        [
          [2, 1],
          [1, 2],
          [2, 2],
          [3, 2],
          [0, 3],
          [1, 3],
          [2, 3],
          [3, 3],
          [4, 3],
          [1, 4],
          [2, 4],
          [3, 4]
        ],
        [
          [2, 0],
          [1, 1],
          [2, 1],
          [3, 1],
          [0, 2],
          [1, 2],
          [2, 2],
          [3, 2],
          [4, 2],
          [1, 3],
          [2, 3],
          [3, 3],
          [1, 4],
          [2, 4],
          [3, 4]
        ],
        [
          [1, 0],
          [2, 0],
          [3, 0],
          [0, 1],
          [1, 1],
          [2, 1],
          [3, 1],
          [4, 1],
          [1, 2],
          [2, 2],
          [3, 2],
          [1, 3],
          [2, 3],
          [3, 3],
          [1, 4],
          [2, 4],
          [3, 4]
        ],
        [
          [0, 0],
          [1, 0],
          [2, 0],
          [3, 0],
          [4, 0],
          [1, 1],
          [2, 1],
          [3, 1],
          [1, 2],
          [2, 2],
          [3, 2],
          [1, 3],
          [2, 3],
          [3, 3]
        ],
        [
          [1, 0],
          [2, 0],
          [3, 0],
          [1, 1],
          [2, 1],
          [3, 1],
          [1, 2],
          [2, 2],
          [3, 2]
        ],
        [
          [1, 0],
          [2, 0],
          [3, 0],
          [1, 1],
          [2, 1],
          [3, 1]
        ],
        [
          [1, 0],
          [2, 0],
          [3, 0]
        ],
        []
      ] as AnimatePixels,
    []
  );

  return (
    <RetroGrid
      animateInterval={150}
      {...props}
      gridSize={gridSize}
      animate={animate}
    />
  );
});
```

---


### [🌐 **Platform Support**](#support)

- ✅ iOS
- ✅ Android
- ✅ Web
- ✅ Expo & Expo Go

---

### [📦 **Bundle Size**](#size)

Lightweight and fast — see actual size on [Bundlephobia](https://bundlephobia.com/package/@symbiot.dev/react-native-retro-grid).

---

### [💬 Contributing](#contributing)

Contributions welcome! Feel free to open issues, discussions, or suggestions.

---

### [🌟 Who's Using This?](#usage)

Using `react-native-retro-grid` in your app or product?  
Feel free to share your project — it might be featured in this section!

> ✉️ Open pull request, or reach out directly to get included.

___

### [🚀 Got Ideas or Gaps to Fill?](#ideas)

Know of existing libraries or functionality that could be improved?  
Have an idea for something completely new?

**Symbiot** is ready to take on the challenge — feedback, feature requests, or collaboration ideas are always welcome!

> 🧠 Let’s build better tools together. Start the conversation or contact via [email](mailto:info@symbiot.dev).

___

### [🧾 License](#license)

MIT — Made with ❤️ by [Symbiot](https://symbiot.dev)

