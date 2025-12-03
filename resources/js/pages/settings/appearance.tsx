import { Head } from '@inertiajs/react';

import AppearanceTabs from '@/components/appearance-tabs';
import Heading from '@/components/heading';
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

      <div className="px-4 py-6">
        <Heading
          title="Appearance"
          description="Update your account's appearance settings"
        />

        <div className="flex-1 md:max-w-2xl">
          <section className="max-w-xl space-y-12">
            <div className="space-y-6">
              <AppearanceTabs />
            </div>
          </section>
        </div>
      </div>
    </AppLayout>
  );
}
