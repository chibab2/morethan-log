import React, { ReactNode, useEffect, useState } from "react"
import { ThemeProvider } from "./ThemeProvider"
import useScheme from "src/hooks/useScheme"
import Header from "./Header"
import styled from "@emotion/styled"
import Scripts from "src/layouts/RootLayout/Scripts"
import useGtagEffect from "./useGtagEffect"
import Prism from "prismjs/prism"
import 'prismjs/components/prism-markup-templating.js'
import 'prismjs/components/prism-markup.js'
import 'prismjs/components/prism-bash.js'
import 'prismjs/components/prism-c.js'
import 'prismjs/components/prism-cpp.js'
import 'prismjs/components/prism-csharp.js'
import 'prismjs/components/prism-docker.js'
import 'prismjs/components/prism-java.js'
import 'prismjs/components/prism-js-templates.js'
import 'prismjs/components/prism-coffeescript.js'
import 'prismjs/components/prism-diff.js'
import 'prismjs/components/prism-git.js'
import 'prismjs/components/prism-go.js'
import 'prismjs/components/prism-kotlin.js'
import 'prismjs/components/prism-graphql.js'
import 'prismjs/components/prism-handlebars.js'
import 'prismjs/components/prism-less.js'
import 'prismjs/components/prism-makefile.js'
import 'prismjs/components/prism-markdown.js'
import 'prismjs/components/prism-objectivec.js'
import 'prismjs/components/prism-ocaml.js'
import 'prismjs/components/prism-python.js'
import 'prismjs/components/prism-reason.js'
import 'prismjs/components/prism-rust.js'
import 'prismjs/components/prism-sass.js'
import 'prismjs/components/prism-scss.js'
import 'prismjs/components/prism-solidity.js'
import 'prismjs/components/prism-sql.js'
import 'prismjs/components/prism-stylus.js'
import 'prismjs/components/prism-swift.js'
import 'prismjs/components/prism-wasm.js'
import 'prismjs/components/prism-yaml.js'
import "prismjs/components/prism-go.js"

type Props = {
  children: ReactNode
}

const RootLayout = ({ children }: Props) => {
  const [scheme] = useScheme()
  const [hasLetter, setHasLetter] = useState(false)
  useGtagEffect()
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <ThemeProvider scheme={scheme}>
      <Scripts />
      {/* // TODO: replace react query */}
      {/* {metaConfig.type !== "Paper" && <Header />} */}
      <StyledSky>
        {Array.from({ length: 5 }).map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label="별똥별 편지 열기"
            data-wish={index === 2 ? "소원을 빌어보자" : undefined}
            onClick={() => setHasLetter(true)}
          />
        ))}
      </StyledSky>
      <StyledContent>
        <Header fullWidth={false} />
        <StyledMain>{children}</StyledMain>
      </StyledContent>
      {hasLetter && (
        <StyledLetterDialog role="dialog" aria-modal="true">
          <div className="panel">
            <p>별똥별이 편지를 전해 줬습니다. 열어 보시겠습니까?</p>
            <div className="actions">
              <button type="button" onClick={() => setHasLetter(false)}>
                열어보기
              </button>
              <button type="button" onClick={() => setHasLetter(false)}>
                지나가기
              </button>
            </div>
          </div>
        </StyledLetterDialog>
      )}
    </ThemeProvider>
  )
}

export default RootLayout

const StyledSky = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;

  button {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 9999px;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.98) 0%,
      rgba(255, 255, 255, 0.92) 38%,
      rgba(255, 255, 255, 0.52) 72%,
      rgba(255, 255, 255, 0) 100%
    );
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.45);
    opacity: 0;
    pointer-events: auto;
    transform: translate3d(0, 0, 0);
    animation-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);
    animation-iteration-count: infinite;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 1px;
      width: 88px;
      height: 5px;
      transform: translateY(-50%) rotate(-18deg);
      transform-origin: left center;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.92) 0%,
        rgba(255, 255, 255, 0.58) 18%,
        rgba(255, 255, 255, 0.22) 58%,
        rgba(255, 255, 255, 0) 100%
      );
      border-radius: 9999px;
      filter: blur(0.3px);
    }

    &[data-wish]::after {
      content: attr(data-wish);
      position: absolute;
      left: 50%;
      bottom: calc(100% + 0.5rem);
      min-width: max-content;
      padding: 0.35rem 0.55rem;
      border: 1px solid rgba(255, 255, 255, 0.22);
      border-radius: 8px;
      background-color: rgba(8, 11, 24, 0.86);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.28);
      color: rgba(248, 250, 252, 0.94);
      font-size: 0.75rem;
      line-height: 1rem;
      transform: translateX(-50%);
      animation: wishBubble 296s ease-in-out infinite;
      pointer-events: none;
    }

    &:nth-of-type(1) {
      top: 12%;
      left: 86%;
      animation-name: shootingStarFirst;
      animation-duration: 23s;
      animation-delay: 1.2s;
    }

    &:nth-of-type(2) {
      top: 26%;
      left: 104%;
      width: 3px;
      height: 3px;
      animation-name: shootingStarSecond;
      animation-duration: 29s;
      animation-delay: 7.4s;
    }

    &:nth-of-type(3) {
      top: 44%;
      left: 92%;
      width: 4px;
      height: 4px;
      animation-name: shootingStarThird;
      animation-duration: 37s;
      animation-delay: 13.6s;
    }

    &:nth-of-type(4) {
      top: 8%;
      left: 64%;
      width: 3px;
      height: 3px;
      animation-name: shootingStarFourth;
      animation-duration: 43s;
      animation-delay: 18.8s;
    }

    &:nth-of-type(5) {
      top: 62%;
      left: 98%;
      animation-name: shootingStarFifth;
      animation-duration: 49s;
      animation-delay: 24.2s;
    }
  }

  @keyframes shootingStarFirst {
    0% {
      opacity: 0;
      transform: translate3d(0, 0, 0);
    }
    1% {
      opacity: 0.85;
    }
    7.6% {
      opacity: 0;
      transform: translate3d(-80vw, 26vh, 0);
    }
    100% {
      opacity: 0;
      transform: translate3d(-80vw, 26vh, 0);
    }
  }

  @keyframes shootingStarSecond {
    0% {
      opacity: 0;
      transform: translate3d(0, 0, 0);
    }
    1% {
      opacity: 0.85;
    }
    6.1% {
      opacity: 0;
      transform: translate3d(-80vw, 26vh, 0);
    }
    100% {
      opacity: 0;
      transform: translate3d(-80vw, 26vh, 0);
    }
  }

  @keyframes shootingStarThird {
    0% {
      opacity: 0;
      transform: translate3d(0, 0, 0);
    }
    1% {
      opacity: 0.85;
    }
    4.7% {
      opacity: 0;
      transform: translate3d(-80vw, 26vh, 0);
    }
    100% {
      opacity: 0;
      transform: translate3d(-80vw, 26vh, 0);
    }
  }

  @keyframes shootingStarFourth {
    0% {
      opacity: 0;
      transform: translate3d(0, 0, 0);
    }
    1% {
      opacity: 0.85;
    }
    4.1% {
      opacity: 0;
      transform: translate3d(-80vw, 26vh, 0);
    }
    100% {
      opacity: 0;
      transform: translate3d(-80vw, 26vh, 0);
    }
  }

  @keyframes shootingStarFifth {
    0% {
      opacity: 0;
      transform: translate3d(0, 0, 0);
    }
    1% {
      opacity: 0.85;
    }
    3.6% {
      opacity: 0;
      transform: translate3d(-80vw, 26vh, 0);
    }
    100% {
      opacity: 0;
      transform: translate3d(-80vw, 26vh, 0);
    }
  }

  @keyframes wishBubble {
    0%,
    87%,
    100% {
      opacity: 0;
    }
    88%,
    89.8% {
      opacity: 1;
    }
  }
`

const StyledContent = styled.div`
  position: relative;
  z-index: 1;
`

const StyledLetterDialog = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: rgba(3, 4, 10, 0.54);
  backdrop-filter: blur(8px);

  .panel {
    width: min(100%, 360px);
    padding: 1.25rem;
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 12px;
    background-color: rgba(8, 11, 24, 0.94);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.38);
    color: rgba(248, 250, 252, 0.94);
  }

  p {
    margin: 0 0 1rem;
    line-height: 1.6;
  }

  .actions {
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;
  }

  button {
    padding: 0.5rem 0.75rem;
    border-radius: 8px;
    font-size: 0.875rem;
    line-height: 1.25rem;
    background-color: rgba(255, 255, 255, 0.1);
    color: rgba(248, 250, 252, 0.94);
  }

  button:hover {
    background-color: rgba(255, 255, 255, 0.18);
  }
`

const StyledMain = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 1120px;
  padding: 0 1rem;
`
