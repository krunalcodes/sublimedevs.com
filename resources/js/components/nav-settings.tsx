import { Link, usePage } from '@inertiajs/react';
import {
  ChevronRight,
  Lock,
  Palette,
  Settings,
  Shield,
  Sliders,
  User,
} from 'lucide-react';
import { useState } from 'react';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { resolveUrl } from '@/lib/utils';
import { edit as editAppearance } from '@/routes/appearance';
import { edit as editPreferences } from '@/routes/preferences/index';
import { edit as editProfile } from '@/routes/profile';
import { show as showTwoFactor } from '@/routes/two-factor';
import { edit as editPassword } from '@/routes/user-password';

const settingsItems = [
  {
    title: 'Profile',
    href: editProfile(),
    icon: User,
  },
  {
    title: 'Preferences',
    href: editPreferences(),
    icon: Sliders,
  },
  {
    title: 'Password',
    href: editPassword(),
    icon: Lock,
  },
  {
    title: 'Two-Factor Auth',
    href: showTwoFactor(),
    icon: Shield,
  },
  {
    title: 'Appearance',
    href: editAppearance(),
    icon: Palette,
  },
];

export function NavSettings() {
  const page = usePage();
  const currentPath = page.url;
  const isSettingsPage = currentPath.startsWith('/settings');
  const [isOpen, setIsOpen] = useState(isSettingsPage);

  return (
    <SidebarMenuItem>
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="group/collapsible"
      >
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            tooltip={{ children: 'Settings' }}
            isActive={isSettingsPage}
          >
            <Settings />
            <span>Settings</span>
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {settingsItems.map((item) => {
              const itemUrl = resolveUrl(item.href);
              const isActive = currentPath === itemUrl;

              return (
                <SidebarMenuSubItem key={item.title}>
                  <SidebarMenuSubButton asChild isActive={isActive}>
                    <Link href={item.href} prefetch>
                      {item.icon && <item.icon className="h-4 w-4" />}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              );
            })}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  );
}
