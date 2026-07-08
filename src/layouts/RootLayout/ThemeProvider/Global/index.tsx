import { Global as _Global, css, useTheme } from "@emotion/react"

import { ThemeProvider as _ThemeProvider } from "@emotion/react"
import { pretendard } from "src/assets"

export const Global = () => {
  const theme = useTheme()

  return (
    <_Global
      styles={css`
        html,
        body {
          min-height: 100%;
        }

        body {
          margin: 0;
          padding: 0;
          color: ${theme.colors.gray12};
          background:
            radial-gradient(circle at 4% 12%, rgba(255, 255, 255, 0.70) 0 0.4px, transparent 1px),
            radial-gradient(circle at 8% 18%, rgba(255, 255, 255, 0.50) 0 0.2px, transparent 1px),
            radial-gradient(circle at 18% 22%, rgba(255, 255, 255, 0.85) 0 0.8px, transparent 2px),
            radial-gradient(circle at 24% 8%, rgba(255, 255, 255, 0.50) 0 0.2px, transparent 1px),
            radial-gradient(circle at 31% 12%, rgba(255, 255, 255, 0.70) 0 0.4px, transparent 1px),
            radial-gradient(circle at 39% 24%, rgba(255, 255, 255, 0.70) 0 0.6px, transparent 2px),
            radial-gradient(circle at 46% 28%, rgba(255, 255, 255, 0.85) 0 0.8px, transparent 2px),
            radial-gradient(circle at 58% 10%, rgba(255, 255, 255, 0.50) 0 0.2px, transparent 1px),
            radial-gradient(circle at 72% 16%, rgba(255, 255, 255, 0.85) 0 0.8px, transparent 2px),
            radial-gradient(circle at 88% 26%, rgba(255, 255, 255, 0.70) 0 0.4px, transparent 1px),
            radial-gradient(circle at 95% 11%, rgba(255, 255, 255, 0.70) 0 0.6px, transparent 2px),
            radial-gradient(circle at 84% 54%, rgba(255, 255, 255, 0.85) 0 0.8px, transparent 2px),
            radial-gradient(circle at 9% 62%, rgba(255, 255, 255, 0.50) 0 0.2px, transparent 1px),
            radial-gradient(circle at 19% 88%, rgba(255, 255, 255, 0.70) 0 0.4px, transparent 1px),
            radial-gradient(circle at 28% 78%, rgba(255, 255, 255, 0.85) 0 0.8px, transparent 2px),
            radial-gradient(circle at 41% 92%, rgba(255, 255, 255, 0.70) 0 0.6px, transparent 2px),
            radial-gradient(circle at 53% 86%, rgba(255, 255, 255, 0.70) 0 0.4px, transparent 1px),
            radial-gradient(circle at 66% 93%, rgba(255, 255, 255, 0.50) 0 0.2px, transparent 1px),
            radial-gradient(circle at 78% 82%, rgba(255, 255, 255, 0.85) 0 0.8px, transparent 2px),
            radial-gradient(circle at 93% 91%, rgba(255, 255, 255, 0.70) 0 0.4px, transparent 1px),
            linear-gradient(180deg, #050711 0%, #080b18 48%, #03040a 100%);
          background-attachment: fixed;
          min-height: 100vh;
          position: relative;
          isolation: isolate;
          font-family: ${pretendard.style.fontFamily};
          font-weight: ${pretendard.style.fontWeight};
          font-style: ${pretendard.style.fontStyle};
        }

        #__next {
          position: relative;
          z-index: 1;
        }

        body::before,
        body::after {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        body::before {
          background:
            radial-gradient(circle at 14% 36%, rgba(255, 255, 255, 0.85) 0 0.8px, transparent 2px),
            radial-gradient(circle at 24% 48%, rgba(255, 255, 255, 0.50) 0 0.2px, transparent 1px),
            radial-gradient(circle at 33% 39%, rgba(255, 255, 255, 0.70) 0 0.4px, transparent 1px),
            radial-gradient(circle at 42% 34%, rgba(255, 255, 255, 0.85) 0 0.8px, transparent 2px),
            radial-gradient(circle at 51% 51%, rgba(255, 255, 255, 0.70) 0 0.4px, transparent 1px),
            radial-gradient(circle at 57% 44%, rgba(255, 255, 255, 0.70) 0 0.6px, transparent 2px),
            radial-gradient(circle at 69% 38%, rgba(255, 255, 255, 0.50) 0 0.2px, transparent 1px),
            radial-gradient(circle at 79% 34%, rgba(255, 255, 255, 0.85) 0 0.8px, transparent 2px),
            radial-gradient(circle at 64% 72%, rgba(255, 255, 255, 0.85) 0 0.8px, transparent 2px),
            radial-gradient(circle at 12% 58%, rgba(255, 255, 255, 0.85) 0 0.8px, transparent 2px),
            radial-gradient(circle at 26% 69%, rgba(255, 255, 255, 0.70) 0 0.4px, transparent 1px),
            radial-gradient(circle at 38% 66%, rgba(255, 255, 255, 0.70) 0 0.6px, transparent 2px),
            radial-gradient(circle at 49% 74%, rgba(255, 255, 255, 0.50) 0 0.2px, transparent 1px),
            radial-gradient(circle at 84% 63%, rgba(255, 255, 255, 0.70) 0 0.4px, transparent 1px),
            radial-gradient(circle at 91% 68%, rgba(255, 255, 255, 0.85) 0 0.8px, transparent 2px);
          opacity: 0.85;
          animation: starTwinkle 8s ease-in-out infinite;
        }

        body::after {
          background:
            radial-gradient(circle at 6% 42%, rgba(255, 255, 255, 0.50) 0 0.2px, transparent 1px),
            radial-gradient(circle at 17% 72%, rgba(255, 255, 255, 0.85) 0 0.8px, transparent 2px),
            radial-gradient(circle at 29% 31%, rgba(255, 255, 255, 0.70) 0 0.4px, transparent 1px),
            radial-gradient(circle at 34% 54%, rgba(255, 255, 255, 0.85) 0 0.6px, transparent 2px),
            radial-gradient(circle at 47% 18%, rgba(255, 255, 255, 0.85) 0 0.8px, transparent 2px),
            radial-gradient(circle at 59% 61%, rgba(255, 255, 255, 0.70) 0 0.4px, transparent 1px),
            radial-gradient(circle at 68% 26%, rgba(255, 255, 255, 0.50) 0 0.2px, transparent 1px),
            radial-gradient(circle at 73% 47%, rgba(255, 255, 255, 0.85) 0 0.8px, transparent 2px),
            radial-gradient(circle at 82% 14%, rgba(255, 255, 255, 0.70) 0 0.4px, transparent 1px),
            radial-gradient(circle at 89% 43%, rgba(255, 255, 255, 0.85) 0 0.6px, transparent 2px),
            radial-gradient(circle at 94% 78%, rgba(255, 255, 255, 0.85) 0 0.8px, transparent 2px);
          opacity: 0.70;
          animation: starPulse 8s ease-in-out infinite;
        }

        @keyframes starTwinkle {
          0% {
            opacity: 0.85;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 0.85;
          }
        }

        @keyframes starPulse {
          0% {
            opacity: 0.70;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 0.70;
          }
        }

        * {
          color-scheme: ${theme.scheme};
          box-sizing: border-box;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
          font-weight: inherit;
          font-style: inherit;
        }

        a {
          all: unset;
          cursor: pointer;
        }

        ul {
          padding: 0;
        }

        // init button
        button {
          all: unset;
          cursor: pointer;
        }

        // init input
        input {
          all: unset;
          box-sizing: border-box;
        }

        // init textarea
        textarea {
          border: none;
          background-color: transparent;
          font-family: inherit;
          padding: 0;
          outline: none;
          resize: none;
          color: inherit;
        }

        hr {
          width: 100%;
          border: none;
          margin: 0;
          border-top: 1px solid ${theme.colors.gray6};
        }
      `}
    />
  )
}
