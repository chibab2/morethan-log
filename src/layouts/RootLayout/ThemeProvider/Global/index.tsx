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
            radial-gradient(circle at 18% 22%, rgba(255, 255, 255, 0.12) 0 1px, transparent 3px),
            radial-gradient(circle at 72% 16%, rgba(255, 255, 255, 0.1) 0 1px, transparent 4px),
            radial-gradient(circle at 84% 54%, rgba(255, 255, 255, 0.08) 0 1px, transparent 4px),
            radial-gradient(circle at 28% 78%, rgba(255, 255, 255, 0.09) 0 1px, transparent 4px),
            linear-gradient(180deg, #050711 0%, #080b18 48%, #03040a 100%);
          background-attachment: fixed;
          min-height: 100vh;
          position: relative;
          isolation: isolate;
          font-family: ${pretendard.style.fontFamily};
          font-weight: ${pretendard.style.fontWeight};
          font-style: ${pretendard.style.fontStyle};
        }

        body::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 42% 34%, rgba(255, 255, 255, 0.16) 0 1px, transparent 5px),
            radial-gradient(circle at 64% 72%, rgba(255, 255, 255, 0.12) 0 1px, transparent 5px),
            radial-gradient(circle at 12% 58%, rgba(255, 255, 255, 0.1) 0 1px, transparent 5px);
          opacity: 0.8;
          z-index: -1;
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
