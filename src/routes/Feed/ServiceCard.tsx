import { CONFIG } from "site.config"
import React from "react"
import { AiFillCodeSandboxCircle, AiOutlineAppstore } from "react-icons/ai"
import styled from "@emotion/styled"

const ServiceCard: React.FC = () => {
  if (!CONFIG.projects) return null
  return (
    <>
      <StyledTitle>
        <AiOutlineAppstore className="title-icon" />
        <span>Service</span>
      </StyledTitle>
      <StyledWrapper>
        {CONFIG.projects.map((project, idx) => (
          <a
            key={idx}
            href={`${project.href}`}
            rel="noreferrer"
            target="_blank"
          >
            <AiFillCodeSandboxCircle className="icon" />
            <div className="name">{project.name}</div>
          </a>
        ))}
      </StyledWrapper>
    </>
  )
}

export default ServiceCard

const StyledTitle = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.25rem;
  margin-bottom: 0.75rem;

  .title-icon {
    font-size: 1rem;
  }
`

const StyledWrapper = styled.div`
  display: flex;
  padding: 0.25rem;
  margin-bottom: 2.25rem;
  flex-direction: column;
  border-radius: 1rem;
  background-color: #111827;
  > a {
    display: flex;
    padding: 0.75rem;
    gap: 0.75rem;
    align-items: center;
    border-radius: 1rem;
    color: ${({ theme }) => theme.colors.gray11};
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.colors.gray12};
      background-color: rgba(255, 255, 255, 0.08);
    }
    .icon {
      font-size: 1.5rem;
      line-height: 2rem;
    }
    .name {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`
