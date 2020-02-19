import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .row {
    max-width: 114rem;
    margin: 0 auto;
  }
  .row:not(:last-child) {
    margin-bottom: 8rem;
  }
  .row::after {
    content: "";
    display: table;
    clear: both;
  }
  .row [class^="col-"] {
    float: left;
  }
  .row [class^="col-"]:not(:last-child) {
    margin-right: 6rem;
  }
  .row .col-1-of-2 {
    width: calc((100% - 6rem) / 2);
  }
  .row .col-1-of-3 {
    width: calc((100% - 2 * 6rem) / 3);
  }
  .row .col-1-of-4 {
    width: calc((100% - 3 * 6rem) / 4);
  }
  .row .col-2-of-3 {
    width: calc(2 * ((100% - 2 * 6rem) / 3) + 6rem);
  }
  .row .col-2-of-4 {
    width: calc(2 * ((100% - 3 * 6rem) / 4) + 6rem);
  }
  .row .col-3-of-4 {
    width: calc(3 * ((100% - 3 * 6rem) / 4) + 2 * 6rem);
  }

  @media (max-width: 56.25em) {
    .row:not(:last-child) {
      margin-bottom: 6rem;
    }
  }

  @media (max-width: 56.25em) {
    .row {
      max-width: 50rem;
      padding: 0 3rem;
    }
  }

  @media (max-width: 56.25em) {
    .row [class^="col-"]:not(:last-child) {
      margin-right: 0;
      margin-bottom: 6rem;
    }
  }

  @media (max-width: 56.25em) {
    .row [class^="col-"] {
      width: 100% !important;
    }
  }
`;
