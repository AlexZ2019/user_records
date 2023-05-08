import { RouteType } from '../../common/interfaces/moduleInterfaces';
import constants from "../../../constants";

export const routes = [
  {
    path: constants.main,
    page: <div/>,
    type: RouteType.Auth,
  },

];
