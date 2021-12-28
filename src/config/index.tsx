// icons
import HomeIcon from '@material-ui/icons/Home';
// components
import CashFlow from '../pages/CashFlow';

// interface
import RouteItem from '../model/RouteItem.model';
// define app routes
export const routes: Array<RouteItem> = [
    {
        key: "router-home",
        title: "Home",
        tooltip: "Home",
        path: "/",
        enabled: true,
        component: CashFlow,
        icon: HomeIcon,
        appendDivider: true
    }
]