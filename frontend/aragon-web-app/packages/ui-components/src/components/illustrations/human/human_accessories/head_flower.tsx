import React from 'react';
import {IconType} from '../../../icons';

export const HeadFlower: IconType = ({height = 160, width = 160, ...props}) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 400 225"
      {...props}
    >
      <path
        d="M205.133 50.5072C205.667 50.9852 206.482 51.5195 207.551 52.0819C208.142 52.4192 208.872 52.7849 209.744 53.1785C210.053 52.5599 210.559 52.0256 211.206 51.7446C210.813 50.8729 210.447 50.1418 210.138 49.5233C209.547 48.4267 209.013 47.6395 208.507 47.1615C207.888 46.5429 207.27 46.2055 206.623 46.0649C205.948 45.9524 205.217 46.0649 204.374 46.4304C204.036 47.2176 203.924 47.9487 204.064 48.6234C204.177 49.2702 204.543 49.8888 205.133 50.5072ZM210.11 46.4585C210.166 47.1894 210.363 48.1454 210.7 49.2983C210.897 49.9451 211.15 50.7323 211.487 51.6039C211.797 51.4914 212.134 51.4351 212.5 51.4351C212.865 51.4351 213.203 51.4914 213.54 51.6039C213.877 50.7323 214.159 49.9451 214.355 49.2701C214.721 48.0612 214.89 47.1333 214.89 46.4585C214.89 45.615 214.693 44.912 214.327 44.3496C213.934 43.7872 213.315 43.3655 212.472 43C211.684 43.3092 211.094 43.7591 210.7 44.3215C210.307 44.912 210.11 45.615 210.11 46.4585ZM214.89 62.5415C214.833 61.8106 214.637 60.8546 214.299 59.7017C214.102 59.0549 213.849 58.2677 213.54 57.3961C213.231 57.5086 212.893 57.5649 212.528 57.5649C212.162 57.5649 211.825 57.5086 211.487 57.3961C211.15 58.2677 210.897 59.0549 210.672 59.7299C210.307 60.9388 210.138 61.8667 210.138 62.5415C210.138 63.385 210.335 64.088 210.7 64.6504C211.094 65.2128 211.712 65.6345 212.556 66C213.343 65.6908 213.934 65.2409 214.327 64.6785C214.693 64.088 214.89 63.385 214.89 62.5415ZM216.492 47.1334C216.014 47.6958 215.48 48.483 214.918 49.5515C214.58 50.1421 214.215 50.873 213.821 51.7446C214.44 52.0538 214.974 52.5599 215.255 53.2067C216.127 52.8131 216.858 52.4476 217.476 52.1382C218.573 51.5477 219.36 51.0134 219.838 50.5073C220.457 49.8887 220.794 49.2702 220.935 48.6235C221.047 47.9486 220.935 47.2177 220.569 46.3742C219.782 46.0369 219.051 45.9244 218.376 46.065C217.729 46.1775 217.111 46.5431 216.492 47.1334ZM208.507 61.8671C208.985 61.3047 209.519 60.5175 210.082 59.449C210.419 58.8584 210.785 58.1275 211.179 57.2559C210.56 56.9467 210.026 56.4406 209.745 55.7938C208.873 56.1874 208.142 56.5529 207.523 56.8623C206.427 57.4528 205.64 57.9871 205.162 58.4932C204.543 59.1118 204.206 59.7303 204.065 60.377C203.952 61.0519 204.065 61.7828 204.43 62.6263C205.189 62.9636 205.921 63.0761 206.595 62.9355C207.27 62.823 207.889 62.4576 208.507 61.8671ZM220.542 52.1107C219.811 52.167 218.855 52.3637 217.702 52.7013C217.055 52.8982 216.268 53.1511 215.396 53.4885C215.509 53.7977 215.565 54.1352 215.565 54.5007C215.565 54.8662 215.509 55.2037 215.396 55.5411C216.268 55.8784 217.055 56.1316 217.73 56.3564C218.939 56.7219 219.867 56.8907 220.542 56.8907C221.385 56.8907 222.088 56.6938 222.65 56.3283C223.213 55.9347 223.635 55.316 224 54.4726C223.691 53.6854 223.241 53.0948 222.679 52.7012C222.088 52.3076 221.385 52.1107 220.542 52.1107ZM204.458 56.8907C205.189 56.8344 206.145 56.6377 207.298 56.3001C207.945 56.1032 208.732 55.8503 209.604 55.5411C209.491 55.2318 209.435 54.8943 209.435 54.5288C209.435 54.1633 209.491 53.8258 209.604 53.4884C208.732 53.1511 207.945 52.8979 207.27 52.6731C206.061 52.3076 205.133 52.1388 204.458 52.1388C203.615 52.1388 202.912 52.3357 202.35 52.7012C201.787 53.0948 201.365 53.7135 201 54.5569C201.309 55.3441 201.759 55.9347 202.321 56.3283C202.912 56.6938 203.615 56.8907 204.458 56.8907ZM219.867 58.4933C219.332 58.0153 218.517 57.481 217.448 56.9186C216.858 56.5813 216.127 56.2156 215.255 55.822C214.946 56.4406 214.44 56.9749 213.793 57.256C214.187 58.1276 214.552 58.8587 214.862 59.4772C215.452 60.5738 215.987 61.361 216.493 61.839C217.111 62.4576 217.73 62.795 218.376 62.9356C219.051 63.0481 219.782 62.9356 220.626 62.5701C220.963 61.811 221.076 61.0801 220.935 60.4052C220.822 59.7305 220.457 59.1119 219.867 58.4933Z"
        fill="#3164FA"
      />
    </svg>
  );
};
