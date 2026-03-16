import Link from 'next/link';
import NavLinks from '@/app/ui/nav-links';
import Image from 'next/image';
// import AcmeLogo from '@/app/ui/acme-logo';
// import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div
        className="mb-2 flex items-end justify-center rounded-md bg-blue-600 p-4 md:h-45"
      >
          <div className="flex items-center gap-3">
              <Image
                src='/profile.png'
                className="rounded-full"
                alt="Priya Dubey"
                width={150}
                height={150}
              />   
          </div>
      </div>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      </div>
    </div>
  );
}
