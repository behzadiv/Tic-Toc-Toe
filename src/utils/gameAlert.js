import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "animate.css";
import ReactDOMServer from "react-dom/server";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const gameAlert = (result) => {
  const circle = <FontAwesomeIcon icon={faCircle} className="iconCircle" />;
  const xmark = <FontAwesomeIcon icon={faXmark} className="iconXmark" />;

  const MySwal = withReactContent(Swal);
  switch (result) {
    case "Draw":
      MySwal.fire({
        iconHtml: `${ReactDOMServer.renderToString(
          circle
        )} ${ReactDOMServer.renderToString(xmark)}`,
        title: "DRAW",
        customClass: {
          icon: "no-border",
          title: "title",
        },
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });

      break;

    default:
      MySwal.fire({
        title: "Winner",
        iconHtml: `${
          result === "X"
            ? ReactDOMServer.renderToString(circle)
            : ReactDOMServer.renderToString(xmark)
        }`,
        customClass: {
          icon: "no-border",
          title: "title",
        },
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      break;
  }
};
