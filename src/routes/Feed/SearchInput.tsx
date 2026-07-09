import styled from "@emotion/styled"
import React, { InputHTMLAttributes } from "react"
import { AiOutlineSearch } from "react-icons/ai"

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput: React.FC<Props> = ({ ...props }) => {
  return (
    <StyledWrapper>
      <div className="top">
        <AiOutlineSearch className="icon" />
        <span>Search</span>
      </div>
      <input
        className="mid"
        type="text"
        placeholder="Search Keyword..."
        {...props}
      />
    </StyledWrapper>
  )
}

export default SearchInput

const StyledWrapper = styled.div`
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
  > .top {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    padding: 0.25rem;
    margin-bottom: 0.75rem;

    .icon {
      font-size: 1rem;
    }
  }
  > .mid {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    border-radius: 1rem;
    outline-style: none;
    width: 100%;
    background-color: #111827;
  }
`
