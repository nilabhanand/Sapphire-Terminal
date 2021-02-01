import React  from "react";
import { Icon } from "semantic-ui-react";
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CreateIcon from '@material-ui/icons/Create';

export const SidebarData = [
    {
        title: "New Entry",
        icon: <CreateIcon/>,
        role:"dw yet",
    },

    {
        title: "Favourites",
        icon: <FavoriteIcon/>,
        role:"dw yet",
    },

    {
        title: "See All",
        icon: <CollectionsBookmarkIcon/>,
        role:"dw yet",
    },
]