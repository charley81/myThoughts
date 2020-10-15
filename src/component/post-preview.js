import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import ReadLink from "../component/read-link"
import Image from "gatsby-image"

const PostPreview = ({ post }) => {
  return (
    <article
      css={css`
        border-bottom: 1px dotted var(--green);
        display: flex;
        margin-top: 0;
        padding-bottom: 1rem;

        &:first-of-type {
          margin-top: 1rem;
        }
      `}
    >
      <Link
        to={post.slug}
        css={css`
          margin: 1rem 1rem 0 0;
          width: 100%;
        `}
      >
        <Image
          fluid={post.image.sharp.fluid}
          css={css`
            * {
              margin-top: 0;
            }
            alt={post.title}
          `}
        />
      </Link>
      <div>
        <h3>
          <Link to={post.slug}>{post.title}</Link>
        </h3>
        <p>{post.excerpt}</p>
        <ReadLink to={post.slug}>Read Mo</ReadLink>
      </div>
    </article>
  )
}

export default PostPreview