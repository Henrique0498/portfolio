import styled from 'styled-components'

export const _Container = styled.main`
  align-items: center;
  display: flex;
  margin: 0 auto;
  flex-direction: column;

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

    h2 {
      position: relative;
      z-index: 2;
      ${({ theme }) => theme.text.heading[6]}
    }
  }
`

export const _Description = styled.section`
  display: flex;
  padding: 4rem 1rem;
  position: relative;
  width: 100%;
  justify-content: center;

  ::before {
    content: '';
    width: 100%;
    height: calc(100% + 16rem);
    background: ${({ theme }) => theme.colors.gray[300]};
    transform: skewY(-4deg);
    position: absolute;
    top: -8rem;
    left: 0;
  }

  .header {
    z-index: 2;
    position: relative;
    margin-bottom: 2rem;
  }

  .body {
    z-index: 4;
    position: relative;

    b {
      color: ${({ theme }) => theme.colors.violet[600]};
    }
    a {
      color: ${({ theme }) => theme.colors.blue[700]};
    }
  }
`

export const _Technologies = styled.section`
  position: relative;
  padding: 5rem 1rem;
  width: 100%;
  max-width: 1536px;
  background-color: ${({ theme }) => theme.colors.gray[600]};

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

export const _Projects = styled.section`
  background-color: ${({ theme }) => theme.colors.gray[600]};
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  .main_head,
  .secondary_head {
    color: ${({ theme }) => theme.colors.gray[200]};
  }

  .projects_main {
    padding: 2rem 1rem;
    position: relative;
    width: 100%;
    max-width: 1536px;

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
    }
  }

  .projects_secondary {
    position: relative;
    padding: 0 1rem 5rem;
    width: 100%;
    max-width: 1536px;

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
  background-color: ${({ theme }) => theme.colors.gray[925]};
  color: ${({ theme }) => theme.colors.gray[200]};
  padding: 2rem 1rem;
  width: 100%;
  display: flex;
  justify-content: center;

  .contacts_container {
    width: 100%;
    max-width: 1536px;
  }

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
