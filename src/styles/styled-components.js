import { position, size } from "polished";
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

    &::before {
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

export const CartIconWrapper = styled.figure`
  ${({ theme, large }) => css`
    ${size(large ? "60px" : "50px")};
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin: 0 15px 0 0;
    background-image: url("/cart-icon.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-size: 50%;

    > span {
      ${size("18px")};
      line-height: 18px;
      display: inline-block;
      color: #0c0b10;
      font-weight: bold;
      font-size: 0.7em;
      text-align: center;
      border-radius: 50%;
      background-color: ${theme.colors.secondary};
      position: absolute;
      bottom: 0;
      right: 5px;
    }
  `}
`;

export const StyledCart = styled.div.withConfig({
  shouldForwardProp: prop => !["isOpen"].includes(prop),
})`
  ${({ isOpen, theme }) => css`
    ${position("fixed", 0, isOpen ? 0 : "-100%", null, null)};
    ${size("100%")};
    background-color: ${theme.colors.primary};
    box-sizing: border-box;
    z-index: 99;
    transition: right 0.2s;

    @media only screen and (min-width: ${theme.breakpoints.tablet}) {
      width: 450px;
      right: ${isOpen ? "0" : "-450px"};
    }

    > button {
      ${size("50px")};
      ${position("absolute", 0, null, null, isOpen ? "0" : "-50px")};
      border: 0;
      padding: 0;
      color: #ececec;
      background-color: ${theme.colors.primary};
      text-align: center;
      line-height: 50px;

      cursor: pointer;
      z-index: 2;

      @media only screen and (min-width: ${theme.breakpoints.tablet}) {
        left: -50px;
      }

      &:focus-visible {
        outline: 3px solid ${theme.colors.secondary};
      }

      &:hover {
        filter: brightness(85%);
      }
    }

    /* Content */
    > div {
      height: 100%;
      overflow-y: scroll;

      /* MAC scrollbar para desktop*/
      @media screen and (min-width: 640px) {
        &::-webkit-scrollbar {
          -webkit-appearance: none;
          width: 10px;
          background-color: rgba(0, 0, 0, 0.2);
          padding: 10px;
        }
        &::-webkit-scrollbar-thumb {
          border-radius: 4px;
          background-color: #0c0b10;
        }
      }

      header {
        color: #ececec;
        box-sizing: border-box;
        text-align: center;
        padding: 45px 0;

        > span {
          font-weight: bold;
          font-size: 1.2em;
          vertical-align: middle;
        }
      }

      footer {
        box-sizing: border-box;
        padding: 5%;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 200px;
        z-index: 2;
        background-color: ${theme.colors.primary};

        &::before {
          content: "";
          width: 100%;
          height: 20px;
          display: block;
          position: absolute;
          top: -20px;
          left: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent);
        }

        > p {
          width: 20%;
          color: #5b5a5e;
          vertical-align: middle;
          display: inline-block;
        }

        dl {
          width: 80%;
          text-align: right;
          color: #5b5a5e;
          vertical-align: middle;
          display: inline-block;
          margin: 0;

          dt {
            color: ${theme.colors.secondary};
            font-size: 22px;
            margin: 0;
          }

          dd {
            margin: 0;
          }
        }

        button {
          width: 100%;
          border: 0;
          color: #ececec;
          text-transform: uppercase;
          background-color: #0c0b10;
          text-align: center;
          padding: 15px 0;
          margin-top: 40px;
          cursor: pointer;
          outline: none;

          transition: background-color 0.2s;

          &:focus-visible {
            outline: 3px solid ${theme.colors.secondary};
          }

          &:hover {
            background-color: #000;
          }
        }
      }

      ul {
        position: relative;
        min-height: 280px;
        padding: 0 0 200px 0;

        > li.cart-item--empty {
          color: #ececec;
          text-align: center;
          line-height: 40px;
        }

        > li.cart-item {
          position: relative;
          box-sizing: border-box;
          padding: 5%;

          transition:
            background-color 0.2s,
            opacity 0.2s;

          &::before {
            content: "";
            width: 90%;
            height: 2px;
            background-color: rgba(0, 0, 0, 0.2);
            position: absolute;
            top: 0;
            left: 5%;
          }

          /* Delete Button */
          > button {
            width: 16px;
            height: 16px;
            top: 15px;
            right: 5%;
            border-radius: 50%;
            position: absolute;
            background-size: auto 100%;
            background-image: url("/delete-icon.png");
            background-repeat: no-repeat;
            z-index: 2;
            cursor: pointer;
            border: 0;
            background-color: transparent;

            &:focus-visible {
              outline: 3px solid ${theme.colors.secondary};
            }

            &:hover {
              background-position-x: -17px;
            }
          }

          > img {
            display: inline-block;
            vertical-align: middle;
            width: 15%;
            height: auto;
            margin-right: 3%;
          }

          > dl {
            width: 57%;
            display: inline-block;
            vertical-align: middle;

            dt {
              color: #ececec;
              margin: 0;
            }

            dd {
              color: #5b5a5e;
              margin: 0;
            }
          }

          > div {
            display: inline-block;
            vertical-align: middle;
            color: ${theme.colors.secondary};
            text-align: right;
            width: 25%;

            nav {
              button {
                color: #b7b7b7;
                border: 0;
                background-color: #000;
                width: 25px;
                height: 25px;

                &:focus-visible {
                  outline: 3px solid ${theme.colors.secondary};
                }

                &:disabled {
                  opacity: 0.2;
                }
              }
            }
          }
        }
      }
    }
  `}
`;

export const CartItems = styled.ul`
  position: relative;
  min-height: 280px;
  padding-bottom: 200px;

  > li {
    position: relative;
    box-sizing: border-box;
    padding: 5%;

    transition:
      background-color 0.2s,
      opacity 0.2s;

    &::before {
      content: "";
      width: 90%;
      height: 2px;
      background-color: rgba(0, 0, 0, 0.2);
      position: absolute;
      top: 0;
      left: 5%;
    }

    /* Delete Button */
    > button {
      width: 16px;
      height: 16px;
      top: 15px;
      right: 5%;
      border-radius: 50%;
      position: absolute;
      background-size: auto 100%;
      background-image: url("/delete-icon.png");
      background-repeat: no-repeat;
      z-index: 2;
      cursor: pointer;
      border: 0;
      background-color: transparent;

      &:focus-visible {
        outline: 3px solid ${({ theme }) => theme.colors.secondary};
      }

      &:hover {
        background-position-x: -17px;
      }
    }

    > img {
      display: inline-block;
      vertical-align: middle;
      width: 15%;
      height: auto;
      margin-right: 3%;
    }

    > dl {
      width: 57%;
      display: inline-block;
      vertical-align: middle;

      dt {
        color: #ececec;
        margin: 0;
      }

      dd {
        color: #5b5a5e;
        margin: 0;
      }
    }

    > div {
      display: inline-block;
      vertical-align: middle;
      color: ${({ theme }) => theme.colors.secondary};
      text-align: right;
      width: 25%;

      nav {
        button {
          color: #b7b7b7;
          border: 0;
          background-color: #000;
          width: 25px;
          height: 25px;

          &:focus-visible {
            outline: 3px solid ${({ theme }) => theme.colors.secondary};
          }

          &:disabled {
            opacity: 0.2;
          }
        }
      }
    }
  }
`;