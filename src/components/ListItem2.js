import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ListItem2 = ({
  anchotText,
  icon,
  iconStatus,
  usdClass,
  cityNameClass,
  value,
  value2,
  curr_difference,
  Lihover,
  city_curr_nameToShow,
  city_curr_Ename,
  divmargin,
}) => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <li className={Lihover}>
      <Link
        to={{
          pathname: "/syrian-pound",
          state: {
            city_curr_nameToShow: city_curr_nameToShow,
            city_curr_Ename: city_curr_Ename,
          },
        }}
        onClick={path === "/syrian-pound" && (() => window.location.reload())}
      >
        <div>
          <p className={cityNameClass}>{anchotText}</p>
          <p className={usdClass}>USD دولار</p>
        </div>
        <div className={divmargin}>
          <span className="font-number value">{value}</span>
          <span
            className={
              curr_difference >= 0
                ? "value2green font-number"
                : "value2red font-number"
            }
          >
            {value2} {iconStatus && icon}
          </span>
        </div>
      </Link>
    </li>
  );
};

ListItem2.defaultProps = {
  anchotText: "",
  style: "",
  usdClass: "",
};

export default ListItem2;
