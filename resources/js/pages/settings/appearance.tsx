import { Head } from '@inertiajs/react';

import AppearanceTabs from '@/components/appearance-tabs';
import {
  Card,
  CardContainer,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { edit as editAppearance } from '@/routes/appearance';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Appearance settings',
    href: editAppearance().url,
  },
];

export default function Appearance() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Appearance settings" />
      <div className="mx-auto w-full max-w-5xl px-4 py-6">
        <CardContainer>
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>
                Update your account's appearance settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AppearanceTabs />
            </CardContent>
          </Card>
        </CardContainer>
      </div>
    </AppLayout>
  );
}
