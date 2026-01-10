// import { getDefaultDashboardRoute } from "@/lib/auth-utils";
// import { getNavItemsByRole } from "@/lib/navItems.config";
// import { getUserInfo } from "@/services/auth/getUserInfo";
// import { NavSection } from "@/types/dashboard.interface";
// import { UserInfo } from "@/types/user.interface";
// import DashboardSidebarContent from "./DashboardSidebarContent";

const DashboardSidebar = async () => {
  //   const userInfo = (await getUserInfo()) as UserInfo;

  //   const navItems: NavSection[] = await getNavItemsByRole(userInfo.role);
  //   const dashboardHome = getDefaultDashboardRoute(userInfo.role);

  return (
    // <DashboardSidebarContent
    //   userInfo={userInfo}
    //   navItems={navItems}
    //   dashboardHome={dashboardHome}
    // />

    <h1 className="bg-gray-500">hello DashboardSidebar</h1>
  );
};

export default DashboardSidebar;
