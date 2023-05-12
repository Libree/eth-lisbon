import React from 'react';
import {IconType} from '..';

export const IconBold: IconType = ({height = 16, width = 16, ...props}) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <g clipPath="url(#clip0_165_145)">
        <path
          d="M11.9776 7.42882C12.5743 6.80745 12.975 6.0242 13.1297 5.17669C13.2843 4.32918 13.1861 3.45489 12.8473 2.6628C12.5085 1.87071 11.9441 1.19585 11.2244 0.722346C10.5047 0.248839 9.66151 -0.00237464 8.8 1.6918e-05H4.8C4.05765 0.000863863 3.34595 0.296135 2.82104 0.821053C2.29612 1.34597 2.00085 2.05767 2 2.80002V13.36C2.01035 13.7173 2.09101 14.069 2.23735 14.395C2.3837 14.7211 2.59287 15.0151 2.8529 15.2603C3.11294 15.5054 3.41874 15.697 3.75284 15.8239C4.08693 15.9508 4.44277 16.0107 4.8 16H8.8C10.1251 16.0494 11.4159 15.5723 12.3903 14.6729C13.3647 13.7734 13.9434 12.5249 14 11.2C13.9887 10.4556 13.7992 9.72464 13.4474 9.0685C13.0955 8.41236 12.5915 7.85009 11.9776 7.42882ZM4.4 2.80002C4.4 2.69393 4.44214 2.59219 4.51716 2.51717C4.59217 2.44216 4.69391 2.40002 4.8 2.40002H8.8C9.33043 2.40002 9.83914 2.61073 10.2142 2.9858C10.5893 3.36088 10.8 3.86958 10.8 4.40002C10.8 4.93045 10.5893 5.43916 10.2142 5.81423C9.83914 6.1893 9.33043 6.40002 8.8 6.40002H4.8C4.69391 6.40002 4.59217 6.35787 4.51716 6.28286C4.44214 6.20784 4.4 6.1061 4.4 6.00002V2.80002ZM8.8 13.6H4.8C4.56 13.6 4.4 13.456 4.4 13.36V9.20002C4.4 9.09393 4.44214 8.99219 4.51716 8.91717C4.59217 8.84216 4.69391 8.80002 4.8 8.80002H8.8C9.48848 8.75177 10.1683 8.97653 10.6923 9.42569C11.2163 9.87484 11.5424 10.5123 11.6 11.2C11.5424 11.8878 11.2163 12.5252 10.6923 12.9743C10.1683 13.4235 9.48848 13.6483 8.8 13.6V13.6Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_165_145">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
