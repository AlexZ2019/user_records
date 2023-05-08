import { mergeArrays } from '../utils/reduceArrays';
import { IModule } from './common/interfaces/moduleInterfaces';
import user from "./user";

const routes = mergeArrays(user.routes);
const module: IModule = { routes };
export default module;
