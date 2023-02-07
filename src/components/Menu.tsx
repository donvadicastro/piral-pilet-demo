import * as React from "react";
import { Link } from "react-router-dom";

export const Menu: React.FC<any> = () => {
  return (
    <div className="react-sanfona">
      <div className="react-sanfona-item">
        <div className="_3IKuotsDlpH-583LjcH3nr">
          <div className="_2lrtPStxYh1YKZNi4haTNu"></div>
        </div>
        <div
          className="_2665Qsz7I31DBocB9bV3uy js-nav-area _2Xe7C4dQU3pFhyuuntP9iT _2UTX_B7CSn0fZ5F_dVcxQv"
          id="react-sanfona-item-title-3a2eec5f-c5d7-49d7-afd9-69fddcaa75e8">
          <div className="_3AnfWeg1U5f7qmlrW5zylI">
            <div className="_1OoegQ9nDseU5emo1uKHMW">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
              >
                <g clip-path="url(#send-mail_svg__clip0_1181_185473)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.525.1A1.851 1.851 0 0115.9 2.476l-4.088 12.253a1.852 1.852 0 01-1.335 1.222 1.829 1.829 0 01-1.739-.496L6.544 13.27 4.24 14.462a.571.571 0 01-.834-.523l.096-3.72L.545 7.261a1.829 1.829 0 01-.5-1.655A1.851 1.851 0 011.267 4.19l.004-.002L13.525.101zm-8.88 10.162l-.072 2.74 1.816-.938a.572.572 0 01.666.102l2.491 2.48.006.006a.685.685 0 00.654.187l.008-.001a.708.708 0 00.512-.468v-.002l4.092-12.263a.708.708 0 00.044-.36L4.645 10.262zm9.013-9.001L1.636 5.272h-.002a.709.709 0 00-.466.544l-.002.014a.686.686 0 00.186.623l2.763 2.762 9.543-7.954z"
                    fill="currentColor"
                  ></path>
                </g>
                <defs>
                  <clipPath id="send-mail_svg__clip0_1181_185473">
                    <path fill="currentColor" d="M0 0h16v16H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <Link to={"/users"}><span>Users</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
};
