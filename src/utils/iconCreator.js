import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const iconCreator = () => {
  const circle = <FontAwesomeIcon icon={faCircle} className="iconCircle" />;
  const xmark = <FontAwesomeIcon icon={faXmark} className="iconXmark" />;
  return [circle, xmark];
};
