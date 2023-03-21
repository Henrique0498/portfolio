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
  }

  .icon_project {
    background: ${({ theme }) => theme.colors.gray[50]};
    border-radius: 0.5rem;
    box-shadow: ${({ theme }) => theme.shadows.md};
    height: 4rem;
    overflow: hidden;
    position: absolute;
    width: 4rem;
  }
`

export const _Body = styled.div`
  color: ${({ theme }) => theme.colors.gray[500]};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0 0;

  .body_title {
    ${({ theme }) => theme.text.heading.subtitle}
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
