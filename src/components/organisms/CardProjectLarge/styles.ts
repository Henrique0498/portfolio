import styled from 'styled-components'

export const _Container = styled.div`
  background: ${({ theme }) => theme.colors.gray[50]};
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.md};
`

export const _Header = styled.div``

export const _ContainerImage = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;

  .background_project {
    border-radius: 0.25rem;
    height: 6rem;
    overflow: hidden;
    opacity: 1;
  }

  .icon_project {
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${({ theme }) => theme.colors.gray[50]};
    height: 4rem;
    position: absolute;
    width: 4rem;

    ::after,
    ::before {
      content: '';
      position: absolute;
      z-index: 1;
      border-radius: 0.5rem;
      width: calc(100% + 1rem);
      height: calc(100% + 1rem);
      background: linear-gradient(
        45deg,
        ${({ theme }) => theme.colors.violet[500]},
        ${({ theme }) => theme.colors.blue[500]},
        ${({ theme }) => theme.colors.pink[500]},
        ${({ theme }) => theme.colors.violet[500]},
        ${({ theme }) => theme.colors.blue[500]},
        ${({ theme }) => theme.colors.pink[500]},
        ${({ theme }) => theme.colors.violet[500]},
        ${({ theme }) => theme.colors.blue[500]}
      );
      background-size: 300%;
      box-shadow: ${({ theme }) => theme.shadows.md};
      background-repeat: no-repeat;
      background-position: 300%;
      animation: BorderAnimation 4s alternate infinite;

      border: 2px solid ${({ theme }) => theme.colors.gray[50]};
    }

    ::after {
      filter: blur(1rem);
    }

    img {
      border-radius: 0.25rem;
      overflow: hidden;
      z-index: 2;
    }
  }

  @keyframes BorderAnimation {
    0% {
      background-position: 0;
    }
    100% {
      background-position: 100%;
    }
  }
`

export const _Body = styled.div`
  color: ${({ theme }) => theme.colors.gray[500]};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0 0;

  .body_title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h6 {
      ${({ theme }) => theme.text.heading.subtitle}
    }
  }

  .body_description {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    flex-wrap: wrap;

    .description_item {
      &,
      span {
        display: flex;
        gap: 0.25rem;
      }

      .item_icon {
        width: 1.5rem;
      }
    }
  }
`
