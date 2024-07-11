interface MenuItem {
    menu: string;
    icon?: string;
    child?: MenuItem[];
    show?: boolean;
}

declare module '@/data/menu.js' {
    const menu: MenuItem[];
    export default menu;
  }