import styles from "./borders.module.scss";

export const LeftTopSVG = () => {
  return (
    <span >
      <svg
        className={styles.LeftTop}
        width="10"
        height="10"
        viewBox="0 0 8 8"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 4.5C0 2.015 2.015 0 4.5 0H8v1H4.5C2.567 1 1 2.567 1 4.5V8H0V4.5z"
          fillOpacity="1"
          fill="#fff"
          stroke="none"
        ></path>
      </svg>
    </span>
  );
};

export const RightTopSVG = () => {
  return (
    <span>
      <svg
        className={styles.RightTop}
        width="10"
        height="10"
        viewBox="0 0 8 8"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 4.5C0 2.015 2.015 0 4.5 0H8v1H4.5C2.567 1 1 2.567 1 4.5V8H0V4.5z"
          fillOpacity="1"
          fill="#fff"
          stroke="none"
        ></path>
      </svg>
    </span>
  );
};

export const RightBottomSVG = () => {
  return (
    <span>
      <svg
        className={styles.RightBottom}
        width="10"
        height="10"
        viewBox="0 0 8 8"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 4.5C0 2.015 2.015 0 4.5 0H8v1H4.5C2.567 1 1 2.567 1 4.5V8H0V4.5z"
          fillOpacity="1"
          fill="#fff"
          stroke="none"
        ></path>
      </svg>
    </span>
  );
};

export const LeftBottomSVG = () => {
  return (
    <span>
      <svg
        className={styles.LeftBottom}
        width="10"
        height="10"
        viewBox="0 0 8 8"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 4.5C0 2.015 2.015 0 4.5 0H8v1H4.5C2.567 1 1 2.567 1 4.5V8H0V4.5z"
          fillOpacity="1"
          fill="#fff"
          stroke="none"
        ></path>
      </svg>
    </span>
  );
};

export const AngleSVG = () => {
  return (
    <span>
      <svg
        width="10"
        height="10"
        viewBox="0 0 8 8"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0v8h8V7H5c0-2.21-1.79-4-4-4V0H0zm1 4v3h3c0-1.657-1.343-3-3-3z"
          fillOpacity="1"
          fill="#fff"
          stroke="none"
        >
        </path>
      </svg>
    </span>
  );
};

export const AllBordersSVG = () => {
  return (
    <span>
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 0h3v1H1v2H0V0zm7 0h3v3H9V1H7V0zM1 9V7H0v3h3V9H1zm9-2v3H7V9h2V7h1z"
          fillOpacity="1"
          fill="#000"
          stroke="none">
        </path>
      </svg>
    </span>
  );
};
