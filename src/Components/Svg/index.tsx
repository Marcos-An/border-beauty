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

export const CloseSVG = () => {
  return (
    <span>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 5.293l4.789-4.79.707.708-4.79 4.79 4.79 4.789-.707.707-4.79-4.79-4.789 4.79-.707-.707L5.293 6 .502 1.211 1.21.504 6 5.294z"
          fillOpacity="1"
          fill="#000"
          stroke="none"
        >
        </path>
      </svg>
    </span>
  );
};

export const CopySVG = () => {
  return (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="12"
        height="12"
        viewBox="0 0 172 172"
      >
        <g fill="none"
          stroke="none"
          strokeWidth="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray=""
          strokeDashoffset="0"
          fontFamily="none"
          fontWeight="none"
          fontSize="none"
          textAnchor="none"
        >

          <path
            d="M0,172v-172h172v172z"
            fill="none"
          >
          </path>
          <g fill="#ffffff">
            <path
              d="M28.66667,14.33333c-7.91917,0 -14.33333,6.41417 -14.33333,14.33333v100.33333h14.33333v-100.33333h100.33333v-14.33333zM57.33333,43c-7.91917,0 -14.33333,6.41417 -14.33333,14.33333v86c0,7.91917 6.41417,14.33333 14.33333,14.33333h86c7.91917,0 14.33333,-6.41417 14.33333,-14.33333v-86c0,-7.91917 -6.41417,-14.33333 -14.33333,-14.33333zM57.33333,57.33333h86v86h-86z">
            </path>
          </g>
        </g>
      </svg>
    </span>
  );
};
