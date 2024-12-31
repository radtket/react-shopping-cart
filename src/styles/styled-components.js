import styled, { css } from "styled-components";

export const TwoColumnGrid = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1200px;
  margin: 50px auto auto;

  ${({ theme: { breakpoints } }) => css`
    @media only screen and (min-width: ${breakpoints.tablet}) {
      grid-template-columns: 1fr 4fr;
      margin-top: 80px;
    }
  `}
`;

export const Side = styled.aside`
  display: grid;
  justify-content: center;
  padding: 15px;
  box-sizing: border-box;

  ${({ theme: { breakpoints } }) => css`
    @media only screen and (min-width: ${breakpoints.tablet}) {
      align-content: baseline;
    }
  `}
`;

export const MainHeader = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: end;
  padding: 0 15px;
`;

export const FilterWrapper = styled.div`
  > h4 {
    margin-top: 2px;
    margin-bottom: 20px;
  }

  /* Checkbox */
  > label {
    display: inline-block;
    position: relative;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 35px;
    height: 35px;
    font-size: 0.8em;
    margin-bottom: 8px;
    margin-right: 8px;
    border-radius: 50%;
    line-height: 35px;
    text-align: center;

    /* On mouse-over, add a border with the primary color */
    &:hover input ~ .checkmark {
      border: 1px solid ${({ theme }) => theme.colors.primary};
    }

    input:focus-visible ~ .checkmark {
      box-sizing: border-box;
      line-height: 30px;
      border: 3px solid ${({ theme }) => theme.colors.secondary};
    }

    /* When the checkbox is checked, add the primary color to background */
    & input:checked ~ .checkmark {
      background-color: ${({ theme }) => theme.colors.primary};
      color: #ececec;
    }

    /* Show the checkmark when checked */
    & input:checked ~ .checkmark:after {
      display: block;
    }

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }

    /* Create a custom checkbox */
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      width: 35px;
      height: 35px;
      font-size: 0.8em;
      border-radius: 50%;
      box-sizing: border-box;
      line-height: 35px;
      text-align: center;
      color: ${({ theme }) => theme.colors.primary};
      background-color: #ececec;

      border: 1px solid transparent;
    }
  }
`;

export const ProductsWrapper = styled.div`
  > div {
    h2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: end;
      padding: 0 15px;
    }
  }

  main {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    ${({ theme: { breakpoints } }) => css`
      @media only screen and (min-width: ${breakpoints.tablet}) {
        grid-template-columns: repeat(3, 1fr);
      }
    `}

    ${({ theme: { breakpoints } }) => css`
      @media only screen and (min-width: ${breakpoints.desktop}) {
        grid-template-columns: repeat(4, 1fr);
      }
    `}
  }
`;

export const BuyButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 15px 0;
  margin-top: 10px;
  cursor: pointer;
  width: 100%;
  border: 0;

  transition: background-color 0.2s;

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.secondary};
  }
`;

export const StyledProduct = styled.article`
  position: relative;
  text-align: center;
  box-sizing: border-box;
  padding: 10px;
  cursor: default;
  outline: none;
  margin: 0 0 30px 0;

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.secondary};
  }

  figure {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 270px;
    position: relative;

    ${({ sku }) => css`
      background-image: url("/products/${sku}-1-product.webp");

      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    `}

    ::before {
      content: "";
      display: block;
      position: absolute;
      background: #eee;
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    ${({ theme: { breakpoints } }) => css`
      @media only screen and (min-width: ${breakpoints.tablet}) {
        height: 320px;
      }
    `}
  }

  &:hover {
    figure {
      ${({ sku }) => css`
        background-image: url("/products/${sku}-2-product.webp");
      `}
    }

    ${BuyButton} {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }

  dl {
    dt {
      position: relative;
      padding: 0 20px;
      height: 45px;

      &::before {
        content: "";
        width: 20px;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.secondary};
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -10px;
      }
    }

    dd {
      height: 60px;

      .val {
        b {
          font-size: 1.5em;
          margin-left: 5px;
        }
      }
    }
  }
`;

export const Price = styled.div`
  height: 60px;

  .val {
    b {
      font-size: 1.5em;
      margin-left: 5px;
    }
  }
`;
export const Val = styled.p`
  margin: 0;
  b {
    font-size: 1.5em;
    margin-left: 5px;
  }
`;
export const Installment = styled.p`
  margin: 0;
  color: #9c9b9b;
`;

export const Stopper = styled.div`
  position: absolute;
  color: #ececec;
  top: 10px;
  right: 10px;
  padding: 5px;
  font-size: 0.6em;
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: default;
  z-index: 1;
`;
