import {
  DollarSign,
  Home,
  Info,
  LayoutDashboard,
  MessageSquare,
  Phone,
  Settings,
  ShoppingBag,
  ShoppingCart,
  Users,
} from "lucide-react";

export const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: DollarSign, label: "Payment", href: "/dashboard/payments" },
  { icon: ShoppingBag, label: "Transactions", href: "/dashboard/transactions" },
  { icon: ShoppingBag, label: "Products", href: "/dashboard/products" },
  { icon: Users, label: "Customer", href: "/dashboard/customers" },
  { icon: MessageSquare, label: "Messages", href: "/dashboard/messages" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

// Header navigation items
export const headerNavItems = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Products",
    href: "/products",
    icon: ShoppingCart,
  },
  {
    label: "About",
    href: "/about",
    icon: Info,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Phone,
  },
];
