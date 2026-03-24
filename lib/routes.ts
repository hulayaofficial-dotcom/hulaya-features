export const ROUTE_GROUPS = {
  public: [
    "/",
    "/listing/category/workshops",
    "/listing/category/camps",
    "/listing/category/events",
    "/listing/search",
    "/explore",
    "/features",
    "/pricing",
    "/about-us",
    "/faq",
    "/contact"
  ],
  dancer: ["/dashboard", "/orders", "/wishlist", "/account/edit"],
  organizer: [
    "/sales",
    "/listing/manager",
    "/listing/new",
    "/sales/orders",
    "/sales/participants",
    "/sales/check-in",
    "/sales/analytics",
    "/organizer/settings",
    "/organizer/payouts",
    "/organizer/promocodes"
  ],
  admin: ["/admin", "/admin/users", "/admin/organizers", "/admin/listings", "/admin/orders", "/admin/promocodes"]
} as const;
