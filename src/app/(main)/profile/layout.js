import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileSidebar from "@/components/profile/ProfileSidebar/ProfileSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }) {
  return (
    <SidebarProvider className="relative bg-[#FAFAFA]">
      <ProfileSidebar />
      <SidebarInset>
        <ProfileHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
