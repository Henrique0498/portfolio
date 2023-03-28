import styled from 'styled-components'

export const _Container = styled.div`
  .head_title {
    display: block;
    position: relative;
    width: fit-content;

    ::before {
      content: '';
      background-color: ${({ theme }) => theme.colors.blue[500]};
      bottom: -0.25rem;
      border-radius: 0.25rem;
      display: block;
      height: 1rem;
      position: absolute;
      right: -0.25rem;
      width: 1rem;
      z-index: 1;
    }

    h6 {
      position: relative;
      z-index: 2;
      ${({ theme }) => theme.text.heading[6]}
    }
  }
`

export const _Description = styled.section`
  display: flex;
  align-items: center;
  position: relative;
  padding: 13rem 1rem;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.gray[1000]};
  transform: skewY(-4deg);

  & > * {
    transform: skewY(4deg);
  }

  .description_background {
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100vw;
    z-index: 1;

    svg {
      height: 100%;
      min-width: 100vw;
      position: absolute;
      width: fit-content;
    }
  }

  .description_decorators {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    padding: 5rem 0.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 2;

    span {
      display: block;
      font-size: 3rem;
      line-height: 3.75rem;
      color: ${({ theme }) => theme.colors.gray[500]};
      background: ${({ theme }) => theme.colors.gray[1000]};
      font-weight: 500;

      :first-child {
        align-self: flex-end;
      }

      :last-child {
        align-self: flex-start;
      }
    }
  }

  .description_container {
    z-index: 3;
    position: relative;

    .container_quotationMarks {
      left: -0.25rem;
      position: absolute;
      top: -0.5rem;
      z-index: 1;
      color: ${({ theme }) => theme.colors.gray[700]};
    }

    p {
      color: #fff;
      z-index: 2;
      position: relative;

      b {
        color: ${({ theme }) => theme.colors.violet[400]};
      }
      a {
        color: ${({ theme }) => theme.colors.blue[400]};
      }
    }
  }
`

export const _Technologies = styled.div`
  position: relative;
  padding: 5rem 1rem;

  .technologies_decorators {
    color: ${({ theme }) => theme.colors.gray[300]};
    display: flex;
    height: 100%;
    justify-content: flex-end;
    left: 0;
    position: absolute;
    padding: 1.5rem 0;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  .technologies_main {
    position: relative;
    z-index: 2;

    .main_carousel {
      padding-top: 1rem;
    }
  }
`

export const _Projects = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[600]};

  .main_head,
  .secondary_head {
    color: ${({ theme }) => theme.colors.gray[200]};
  }

  .projects_main {
    padding: 2rem 1rem;
    position: relative;

    .main_decorator_tape {
      color: ${({ theme }) => theme.colors.pink[500]};
      height: 1.5rem;
      left: 3rem;
      position: absolute;
      top: -0.75rem;
      width: 1.5rem;
    }

    .main_decorator {
      position: absolute;
      color: ${({ theme }) => theme.colors.gray[700]};
      height: 4rem;
      top: 2rem;
      right: 1rem;
      z-index: 1;
    }

    .main_head,
    .main_cards {
      position: relative;
      z-index: 2;
    }

    .main_cards {
      padding-top: 2.25rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }

  .projects_secondary {
    position: relative;
    padding: 0 1rem 5rem;

    .secondary_decorator {
      position: absolute;
      top: -2rem;
      right: 1rem;
      z-index: 1;

      svg {
        width: 7.75rem;
        height: 7.75rem;
        color: ${({ theme }) => theme.colors.gray[700]};
      }
    }

    & > * {
      position: relative;
      z-index: 2;
    }

    .secondary_head {
      padding-bottom: 1rem;
    }
  }
`

export const _Contacts = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[1000]};
  color: ${({ theme }) => theme.colors.gray[200]};
  padding: 2rem 1rem;

  .contacts_title {
    align-items: center;
    display: flex;
    justify-content: center;
    ${({ theme }) => theme.text.heading.subtitle}
  }

  .contacts_links {
    ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      a {
        display: flex;
        align-items: center;

        .link_icon {
          width: 1.5rem;
          height: 1.5rem;
          margin-right: 0.25rem;
        }
      }
    }
  }
`
