// @/types/menu/menu.ts
export interface MenuItem {
    menu: string;
    icon?: string;
    child?: MenuItem[];
    show?: boolean;
}

export interface IMenuChildDropDown {
    item: MenuItem;
    parent?: boolean;
    position?: string;
}
