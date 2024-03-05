import React from "react";

const PlayStoreButton = () => {
  return (
    <div className="border-[1px] flex text-xs px-6 py-2 rounded-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={30}
        height={30}
        viewBox="0,0,256,256"
        style={{ fill: "#000000" }}
      >
        <g
          fill="#ffffff"
          fillRule="nonzero"
          stroke="none"
          strokeWidth={1}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit={10}
          strokeDasharray=""
          strokeDashoffset={0}
          fontFamily="none"
          fontWeight="none"
          fontSize="none"
          textAnchor="none"
          style={{ mixBlendMode: "normal" }}
        >
          <g transform="scale(5.12,5.12)">
            <path d="M6.78125,2c-0.01172,0.00391 -0.01953,0.02734 -0.03125,0.03125c-0.02734,0.00391 -0.06641,-0.00781 -0.09375,0c-0.21094,0.02344 -0.40625,0.10938 -0.5625,0.25c-0.67187,0.36719 -1.09375,1.12109 -1.09375,1.9375v41.78125c0,0.62109 0.27344,1.27344 0.78125,1.65625c0.23438,0.26172 0.58984,0.37891 0.9375,0.3125c0.45703,0.02344 0.9375,-0.07812 1.34375,-0.3125c0.84766,-0.49219 18.15625,-10.5 18.15625,-10.5l9.03125,-5.21875c0.01953,-0.00781 0.04297,-0.01953 0.0625,-0.03125l0.125,-0.0625c0,0 0.12109,-0.0625 0.125,-0.0625c0.01172,-0.01172 0.01953,-0.01953 0.03125,-0.03125c0.26953,-0.15625 7.66797,-4.41406 8.6875,-5c0.70313,-0.40625 1.26172,-1.06641 1.25,-1.875c-0.01172,-0.80859 -0.58203,-1.4375 -1.21875,-1.78125c-0.35156,-0.1875 -2.63281,-1.49219 -4.75,-2.71875c-2.11719,-1.22656 -4.125,-2.40625 -4.125,-2.40625l-9.21875,-5.3125c0,0 -16.76172,-9.67969 -17.75,-10.25c-0.34766,-0.19922 -0.74219,-0.35937 -1.125,-0.40625c-0.19141,-0.02344 -0.375,-0.03125 -0.5625,0zM7,4.6875l20.375,20.21875l-20.375,20.21875zM11.75,6.59375c5.08594,2.9375 13.46875,7.78125 13.46875,7.78125l8.0625,4.65625l-4.5,4.46875zM35.0625,20.0625c0.48047,0.28125 1.70313,0.99219 3.5,2.03125c2.11719,1.22656 4.28906,2.46875 4.8125,2.75c0.05078,0.02734 0.03516,0.04297 0.0625,0.0625c-0.03906,0.02734 -0.05078,0.03516 -0.15625,0.09375c-0.96094,0.55469 -7.19141,4.17188 -8.1875,4.75l-4.90625,-4.84375zM28.78125,26.28125l4.53125,4.5l-8.09375,4.65625c0,0 -8.16406,4.71094 -13.4375,7.75z" />
          </g>
        </g>
      </svg>

      <div className="pl-2">
        <div>available on</div>
        <div className="font-semibold">Play Store</div>
      </div>
    </div>
  );
};

export default PlayStoreButton;