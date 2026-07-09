import styled from "@emotion/styled"
import Link from "next/link"
import usePostsQuery from "src/hooks/usePostsQuery"
import { TPost } from "src/types"

type Props = {
  currentPost: TPost
}

const PostNavigation: React.FC<Props> = ({ currentPost }) => {
  const posts = usePostsQuery()
  const currentIndex = posts.findIndex((post) => post.id === currentPost.id)

  if (currentIndex === -1) return null

  const nextPost = posts[currentIndex - 1]
  const previousPost = posts[currentIndex + 1]

  if (!previousPost && !nextPost) return null

  return (
    <StyledWrapper>
      {previousPost ? (
        <Link className="item" href={`/${previousPost.slug}`}>
          <span className="label">이전글 보기</span>
          <span className="title">{previousPost.title}</span>
        </Link>
      ) : (
        <div className="item disabled">
          <span className="label">이전글 없음</span>
        </div>
      )}
      {nextPost ? (
        <Link className="item align-right" href={`/${nextPost.slug}`}>
          <span className="label">다음글 보기</span>
          <span className="title">{nextPost.title}</span>
        </Link>
      ) : (
        <div className="item disabled align-right">
          <span className="label">다음글 없음</span>
        </div>
      )}
    </StyledWrapper>
  )
}

export default PostNavigation

const StyledWrapper = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  margin-top: 2.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }

  .item {
    display: flex;
    min-height: 4rem;
    padding: 0.875rem;
    flex-direction: column;
    justify-content: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0.75rem;
    background-color: rgba(255, 255, 255, 0.04);
    transition:
      border-color 160ms ease,
      background-color 160ms ease;
  }

  .item:hover {
    border-color: rgba(255, 255, 255, 0.22);
    background-color: rgba(255, 255, 255, 0.08);
  }

  .align-right {
    align-items: flex-end;
    text-align: right;
  }

  .disabled {
    cursor: default;
    opacity: 0.45;
  }

  .disabled:hover {
    border-color: rgba(255, 255, 255, 0.1);
    background-color: rgba(255, 255, 255, 0.04);
  }

  .label {
    margin-bottom: 0.375rem;
    color: ${({ theme }) => theme.colors.gray10};
    font-size: 0.8125rem;
    line-height: 1.125rem;
  }

  .title {
    overflow: hidden;
    color: ${({ theme }) => theme.colors.gray12};
    font-size: 0.9375rem;
    font-weight: 600;
    line-height: 1.35;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
  }
`
