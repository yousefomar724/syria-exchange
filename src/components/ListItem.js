import { Link } from "react-router-dom";

const ListItem = ({
  anchotText,
  icon,
  iconStatus,
  liClass,
  AliClass,
  link,
  linkSocial,
}) => {
  return (
    <li className={liClass}>
      <Link to={link}>
        <a className={liClass} href={linkSocial} target="_blank">
          {iconStatus && icon} {anchotText}
        </a>
      </Link>
    </li>
  );
};

ListItem.defaultProps = {
  anchotText: "",
  style: "",
  liClass: "",
  link: "#",
  linkSocial: "",
};
export default ListItem;
