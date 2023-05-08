import { RouteType } from '../../common/interfaces/moduleInterfaces';
import constants from "../../../constants";
import Users from "../pages/Users";

export const routes = [
  {
    path: constants.main,
    page: <Users/>,
    type: RouteType.Auth,
  },

];
