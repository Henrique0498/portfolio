import styled from 'styled-components'

export const _Container = styled.div``

export const _Description = styled.section`
  display: flex;
  height: 32rem;
  align-items: center;
  position: relative;
  padding: 0 1rem;
  overflow: hidden;

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
    padding: 7rem 0.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 2;

    span {
      display: block;
      font-size: 3rem;
      line-height: 3.75rem;
      color: ${({ theme }) => theme.colors.gray[800]};
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
      color: ${({ theme }) => theme.colors.gray[800]};
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
  width: 100vw;

  .technologies_decorators {
    color: ${({ theme }) => theme.colors.gray[300]};
    display: flex;
    height: 100%;
    justify-content: flex-end;
    left: 0;
    position: absolute;
    padding: 1.5rem 0;
    top: 0;
    width: 100vw;
    z-index: 1;
  }

  .technologies_main {
    z-index: 2;
    position: relative;

    .main_head {
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
    }

    .main_carousel {
      padding-top: 1rem;
    }
  }
`
