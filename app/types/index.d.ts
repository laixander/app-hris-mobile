export interface PageProps {
  title?: string
  description?: string
}

export interface CollapsibleProps {
  collapsed: boolean
}

export interface MenuItemsProps {
  items: any // You can replace `any` with a proper type if your `items` are structured.
}

export interface HeaderProps extends CollapsibleProps, MenuItemsProps {
  title: string
}

export interface SidebarProps extends CollapsibleProps, MenuItemsProps {}

export interface UserMenuProps extends CollapsibleProps {}