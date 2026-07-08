import React, { ReactNode, useEffect } from "react"
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
  useGtagEffect()
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <ThemeProvider scheme={scheme}>
      <Scripts />
      {/* // TODO: replace react query */}
      {/* {metaConfig.type !== "Paper" && <Header />} */}
      <StyledSky aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} />
        ))}
      </StyledSky>
      <StyledContent>
        <Header fullWidth={false} />
        <StyledMain>{children}</StyledMain>
      </StyledContent>
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

  span {
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 9999px;
    background-color: rgba(255, 255, 255, 0.85);
    box-shadow: 0 0 2px rgba(255, 255, 255, 0.70);
    opacity: 0;
    transform: translate3d(0, 0, 0) rotate(35deg);
    animation-timing-function: ease-out;
    animation-iteration-count: infinite;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 4px;
      width: 96px;
      height: 1px;
      transform: translateY(-50%);
      background: linear-gradient(
        270deg,
        transparent,
        rgba(255, 255, 255, 0.50)
      );
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
      width: 6px;
      height: 6px;
      animation-name: shootingStarSecond;
      animation-duration: 29s;
      animation-delay: 7.4s;
    }

    &:nth-of-type(3) {
      top: 44%;
      left: 92%;
      width: 8px;
      height: 8px;
      animation-name: shootingStarThird;
      animation-duration: 37s;
      animation-delay: 13.6s;
    }

    &:nth-of-type(4) {
      top: 8%;
      left: 64%;
      width: 6px;
      height: 6px;
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
      transform: translate3d(0, 0, 0) rotate(35deg);
    }
    1% {
      opacity: 0.85;
    }
    10% {
      opacity: 0;
      transform: translate3d(-54vw, 38vh, 0) rotate(35deg);
    }
    100% {
      opacity: 0;
      transform: translate3d(-54vw, 38vh, 0) rotate(35deg);
    }
  }

  @keyframes shootingStarSecond {
    0% {
      opacity: 0;
      transform: translate3d(0, 0, 0) rotate(35deg);
    }
    1% {
      opacity: 0.85;
    }
    9% {
      opacity: 0;
      transform: translate3d(-54vw, 38vh, 0) rotate(35deg);
    }
    100% {
      opacity: 0;
      transform: translate3d(-54vw, 38vh, 0) rotate(35deg);
    }
  }

  @keyframes shootingStarThird {
    0% {
      opacity: 0;
      transform: translate3d(0, 0, 0) rotate(35deg);
    }
    1% {
      opacity: 0.85;
    }
    7.6% {
      opacity: 0;
      transform: translate3d(-54vw, 38vh, 0) rotate(35deg);
    }
    100% {
      opacity: 0;
      transform: translate3d(-54vw, 38vh, 0) rotate(35deg);
    }
  }

  @keyframes shootingStarFourth {
    0% {
      opacity: 0;
      transform: translate3d(0, 0, 0) rotate(35deg);
    }
    1% {
      opacity: 0.85;
    }
    6% {
      opacity: 0;
      transform: translate3d(-54vw, 38vh, 0) rotate(35deg);
    }
    100% {
      opacity: 0;
      transform: translate3d(-54vw, 38vh, 0) rotate(35deg);
    }
  }

  @keyframes shootingStarFifth {
    0% {
      opacity: 0;
      transform: translate3d(0, 0, 0) rotate(35deg);
    }
    1% {
      opacity: 0.85;
    }
    5.8% {
      opacity: 0;
      transform: translate3d(-54vw, 38vh, 0) rotate(35deg);
    }
    100% {
      opacity: 0;
      transform: translate3d(-54vw, 38vh, 0) rotate(35deg);
    }
  }
`

const StyledContent = styled.div`
  position: relative;
  z-index: 1;
`

const StyledMain = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 1120px;
  padding: 0 1rem;
`
