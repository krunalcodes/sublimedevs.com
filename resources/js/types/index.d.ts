import { InertiaLinkProps } from '@inertiajs/react';
import { LucideIcon } from 'lucide-react';

export interface Auth {
  user: User;
}

export interface BreadcrumbItem {
  title: string;
  href: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export interface NavItem {
  title: string;
  href: NonNullable<InertiaLinkProps['href']>;
  icon?: LucideIcon | null;
  isActive?: boolean;
}

export interface SharedData {
  name: string;
  quote: { message: string; author: string };
  auth: Auth;
  sidebarOpen: boolean;
  [key: string]: unknown;
}

export interface Country {
  id: number;
  name: string;
  code: string;
  flag: string;
}

export interface Timezone {
  id: number;
  name: string;
  zone: string;
}

export interface Language {
  id: number;
  name: string;
  code: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string | null;
  email_verified_at: string | null;
  two_factor_enabled?: boolean;
  summary?: string | null;
  bio?: string | null;
  city?: string | null;
  country_id?: number | null;
  timezone_id?: number | null;
  country?: Country | null;
  timezone?: Timezone | null;
  languages?: Language[];
  created_at: string;
  updated_at: string;
  [key: string]: unknown; // This allows for additional properties...
}
