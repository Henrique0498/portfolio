import styled from 'styled-components'

export const _Container = styled.div`
  background: ${({ theme }) => theme.colors.gray[50]};
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: 1rem;
`

export const _ContainerImage = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;

  .background_project {
    border-radius: 0.25rem;
    height: 6rem;
    opacity: 1;
    overflow: hidden;
  }

  .icon_project {
    align-items: center;
    background: ${({ theme }) => theme.colors.gray[50]};
    display: flex;
    height: 4rem;
    justify-content: center;
    position: absolute;
    width: 4rem;

    ::after,
    ::before {
      animation: BorderAnimation 4s alternate infinite;
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
      background-position: 300%;
      background-size: 300%;
      background-repeat: no-repeat;
      border-radius: 0.5rem;
      border: 2px solid ${({ theme }) => theme.colors.gray[50]};
      box-shadow: ${({ theme }) => theme.shadows.md};
      content: '';
      height: calc(100% + 1rem);
      position: absolute;
      width: calc(100% + 1rem);
      z-index: 1;
    }

    ::after {
      filter: blur(1rem);
    }

    img {
      background-color: ${({ theme }) => theme.colors.gray[50]};
      border-radius: 0.25rem;
      position: relative;
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

export const _Header = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(0, auto);
  padding: 1.5rem 0 2rem;

  .header_title {
    ${({ theme }) => theme.text.heading.subtitle};
  }

  .header_badgers {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
  }
`

export const _Body = styled.div`
  color: ${({ theme }) => theme.colors.gray[500]};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  .item_icon {
    width: 1.5rem;
  }

  .body_date {
    display: flex;
    gap: 0.5rem;
  }
`
