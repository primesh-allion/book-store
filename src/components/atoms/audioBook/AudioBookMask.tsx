import React from "react";

const AudioBookMask = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: -1,
        marginTop: "54px",
      }}
    >
      <svg
        width="296"
        height="76"
        viewBox="0 0 296 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_2613_2351"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="296"
          height="76"
        >
          <rect
            width="296"
            height="75.306"
            transform="matrix(-1 0 0 1 296 0.484375)"
            fill="#C4C4C4"
          />
        </mask>
        <g mask="url(#mask0_2613_2351)">
          <g opacity="0.1">
            <path
              d="M-11.5838 15.1367C-11.5838 15.1367 -3.32971 21.4676 58.5459 22.9812C105.372 24.1263 193.509 3.26477 246.831 4.60727C301.711 5.9761 295.816 19.8223 295.816 10.5433V24.4158C295.816 24.4158 277.489 11.3724 245.632 11.4909C198.785 11.6883 102.434 40.0915 56.3874 40.9734C11.4796 41.8289 -11.5838 24.4158 -11.5838 24.4158V15.1367Z"
              fill="#27A857"
            />
          </g>
          <g opacity="0.2">
            <path
              d="M-1.38205 14.9046C104.676 66.1621 177.39 -0.98822 233.831 0.50943C291.944 2.05962 296 28.2586 296 17.8144V33.4347C296 33.4347 276.888 26.9736 244.13 24.9947C125.271 17.8144 118.342 82.0372 63.0995 75.1759C7.85709 68.3147 -30.6158 0.775955 -1.38205 14.9046Z"
              fill="#27A857"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default AudioBookMask;
