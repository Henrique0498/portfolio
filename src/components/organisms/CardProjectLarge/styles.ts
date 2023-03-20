import styled from 'styled-components'

export const _Container = styled.div`
  background: ${({ theme }) => theme.colors.gray[50]};
  border-radius: 0.25rem;
  padding: 0.75rem;
`

export const _Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  .header_profile {
    align-items: center;
    display: flex;

    h6 {
      padding-left: 0.75rem;
      ${({ theme }) => theme.text.heading[6]}
    }
  }
`

export const _Body = styled.div`
  padding: 1rem 0;

  .body_title {
    ${({ theme }) => theme.text.heading.subtitle}
  }

  .body_description {
    box-orient: vertical;
    display: flexbox;
    height: 3rem;
    line-clamp: 2;
    overflow: hidden;
    padding: 0.25rem 0;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`

export const _Footer = styled.div`
  display: flex;
  flex-direction: column;

  .footer_title {
    ${({ theme }) => theme.text.body.xxs}
  }

  .footer_date {
    padding-top: 0.25rem;
  }
`
