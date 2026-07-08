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
            radial-gradient(circle at 8% 18%, rgba(255, 255, 255, 0.1) 0 1px, transparent 3px),
            radial-gradient(circle at 18% 22%, rgba(255, 255, 255, 0.18) 0 1px, transparent 3px),
            radial-gradient(circle at 31% 12%, rgba(255, 255, 255, 0.08) 0 1px, transparent 3px),
            radial-gradient(circle at 46% 28%, rgba(255, 255, 255, 0.13) 0 1px, transparent 3px),
            radial-gradient(circle at 72% 16%, rgba(255, 255, 255, 0.2) 0 1px, transparent 4px),
            radial-gradient(circle at 88% 26%, rgba(255, 255, 255, 0.09) 0 1px, transparent 3px),
            radial-gradient(circle at 84% 54%, rgba(255, 255, 255, 0.15) 0 1px, transparent 4px),
            radial-gradient(circle at 9% 62%, rgba(255, 255, 255, 0.07) 0 1px, transparent 3px),
            radial-gradient(circle at 28% 78%, rgba(255, 255, 255, 0.17) 0 1px, transparent 4px),
            radial-gradient(circle at 53% 86%, rgba(255, 255, 255, 0.09) 0 1px, transparent 3px),
            radial-gradient(circle at 78% 82%, rgba(255, 255, 255, 0.12) 0 1px, transparent 3px),
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
            radial-gradient(circle at 14% 36%, rgba(255, 255, 255, 0.11) 0 1px, transparent 4px),
            radial-gradient(circle at 24% 48%, rgba(255, 255, 255, 0.07) 0 1px, transparent 4px),
            radial-gradient(circle at 42% 34%, rgba(255, 255, 255, 0.24) 0 1px, transparent 5px),
            radial-gradient(circle at 57% 44%, rgba(255, 255, 255, 0.1) 0 1px, transparent 4px),
            radial-gradient(circle at 69% 38%, rgba(255, 255, 255, 0.08) 0 1px, transparent 4px),
            radial-gradient(circle at 64% 72%, rgba(255, 255, 255, 0.2) 0 1px, transparent 5px),
            radial-gradient(circle at 12% 58%, rgba(255, 255, 255, 0.16) 0 1px, transparent 5px),
            radial-gradient(circle at 38% 66%, rgba(255, 255, 255, 0.09) 0 1px, transparent 4px),
            radial-gradient(circle at 91% 68%, rgba(255, 255, 255, 0.12) 0 1px, transparent 4px);
          opacity: 0.9;
          animation: starTwinkle 4.8s ease-in-out infinite alternate;
        }

        body::after {
          background:
            radial-gradient(circle at 6% 42%, rgba(255, 255, 255, 0.08) 0 1px, transparent 3px),
            radial-gradient(circle at 17% 72%, rgba(255, 255, 255, 0.22) 0 1px, transparent 4px),
            radial-gradient(circle at 34% 54%, rgba(255, 255, 255, 0.12) 0 1px, transparent 3px),
            radial-gradient(circle at 47% 18%, rgba(255, 255, 255, 0.18) 0 1px, transparent 4px),
            radial-gradient(circle at 59% 61%, rgba(255, 255, 255, 0.09) 0 1px, transparent 3px),
            radial-gradient(circle at 73% 47%, rgba(255, 255, 255, 0.26) 0 1px, transparent 4px),
            radial-gradient(circle at 82% 14%, rgba(255, 255, 255, 0.1) 0 1px, transparent 3px),
            radial-gradient(circle at 94% 78%, rgba(255, 255, 255, 0.18) 0 1px, transparent 4px);
          opacity: 0.56;
          animation: starPulse 7.2s ease-in-out infinite alternate;
        }

        @keyframes starTwinkle {
          0% {
            opacity: 0.38;
          }
          45% {
            opacity: 0.92;
          }
          100% {
            opacity: 0.58;
          }
        }

        @keyframes starPulse {
          0% {
            opacity: 0.18;
          }
          55% {
            opacity: 0.7;
          }
          100% {
            opacity: 0.34;
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
