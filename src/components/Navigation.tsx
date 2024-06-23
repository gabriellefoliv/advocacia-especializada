import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  BriefcaseIcon,
  UsersIcon,
  BanknotesIcon,
  BuildingOffice2Icon,
  BuildingStorefrontIcon,
  FlagIcon
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

import Logo from "../img/balanca.png";
import Wpp from "../img/whatsapp.png";

const products = [
  {
    name: "Direito do Trabalho",
    description: "Seus direitos no trabalho, protegidos",
    href: "/areasdeatuacao/trabalhista",
    icon: BriefcaseIcon,
  },
  {
    name: "Direito Civil",
    description: "Questões civis resolvidas com precisão",
    href: "/areasdeatuacao/civel",
    icon: BuildingOffice2Icon,
  },
  {
    name: "Direito do Consumidor",
    description: "Defesa eficaz dos seus direitos como consumidor",
    href: "/areasdeatuacao/consumidor",
    icon: BuildingStorefrontIcon,
  },
  {
    name: "Direito Previdenciário",
    description: "Segurança nos seus direitos previdenciários",
    href: "/areasdeatuacao/previdenciario",
    icon: SquaresPlusIcon,
  },
  {
    name: "Direito Criminal",
    description: "Defesa legal com expertise",
    href: "/areasdeatuacao/criminal",
    icon: FingerPrintIcon,
  },
  {
    name: "Direito de Família e Sucessões",
    description: "Assessoria familiar especializada",
    href: "/areasdeatuacao/familia",
    icon: UsersIcon,
  },
  {
    name: "Direito Militar",
    description: "Proteção jurídica na área militar",
    href: "/areasdeatuacao/militar",
    icon: FlagIcon,
  },
  {
    name: "Direito do Consumidor Bancário",
    description: "Soluções eficientes no direito bancário",
    href: "/areasdeatuacao/consumidor",
    icon: BanknotesIcon,
  },
];

const callsToAction = [
  { name: "Todas as áreas", href: "/areasdeatuacao", icon: PlayCircleIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Thamiris Ferreira</span>
            <img className="h-8 w-auto" src={Logo} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex outline-none items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Áreas de Atuação
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon
                      className="h-5 w-5 flex-none text-gray-400"
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a
            href="/equipe"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Equipe
          </a>

          <a
            href="/contato"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Contato
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="https://wa.me/message/V72SURNAJ3EKD1" target="_blank" className="bg-lime-600 flex items-center justify-center gap-x-2.5 p-1.5 px-3 rounded-full text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
            <img
              className="h-5 w-5 flex-none text-white"
              aria-hidden="true"
              src={Wpp}
            />
            <p className="text-white">Entre em contato!</p>
          </a>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Thamiris Ferreira</span>
              <img className="h-8 w-auto" src={Logo} alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Áreas de Atuação
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="/equipe"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Equipe
                </a>

                <a
                  href="/contato"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contato
                </a>
              </div>
              <div className="py-6">
                <a href="https://wa.me/message/V72SURNAJ3EKD1" target="_blank" className="bg-lime-600 flex items-center justify-center gap-x-2.5 p-1.5 px-3 rounded-full text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                  <img
                    className="h-5 w-5 flex-none text-white"
                    aria-hidden="true"
                    src={Wpp}
                  />
                  <p className="text-white">Entre em contato!</p>
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Navigation() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   return (
//     <header className="overflow-hidden z-20 top-0">
//       <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
//         <div className="flex lg:flex-1">
//           <a href="#" className="-m-1.5">
//             <span className="sr-only">Thamiris Ferreira</span>
//             <img className="h-12 w-auto" src={Logo} alt="" />
//           </a>
//         </div>
//         <div className="flex lg:hidden">
//           <button
//             type="button"
//             className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
//             onClick={() => setMobileMenuOpen(true)}
//           >
//             <span className="sr-only">Open main menu</span>
//             <Bars3Icon className="h-6 w-6" aria-hidden="true" />
//           </button>
//         </div>
//         <PopoverGroup className="hidden lg:flex lg:gap-x-12 z-50 relative">
//           <Popover className="relative">
//             <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
//               Áreas de Atuação
//               <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
//             </PopoverButton>

//             <PopoverPanel
//               transition
//               className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
//             >
//               <div className="p-4">
//                 {products.map((item) => (
//                   <div
//                     key={item.name}
//                     className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
//                   >
//                     <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
//                       <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
//                     </div>
//                     <div className="flex-auto">
//                       <a href={item.href} className="block font-semibold text-gray-900">
//                         {item.name}
//                         <span className="absolute inset-0" />
//                       </a>
//                       <p className="mt-1 text-gray-600">{item.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//             </PopoverPanel>
//           </Popover>

//           <a href="/equipe" className="text-sm font-semibold leading-6 text-gray-900">
//             Equipe
//           </a>

//           <a href="/contato" className="text-sm font-semibold leading-6 text-gray-900">
//             Contato
//           </a>
//         </PopoverGroup>
//         <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//  <a
//    className="bg-lime-600 flex items-center justify-center gap-x-2.5 p-1.5 px-3 rounded-full text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
//  >
//    <img className="h-5 w-5 flex-none text-white" aria-hidden="true" src={Wpp} />
//    <p className='text-white'>Entre em contato!</p>
//  </a>
//         </div>
//       </nav>
//       <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
//         <div className="fixed inset-0 z-10" />
//         <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//           <div className="flex items-center justify-between">
//             <a href="#" className="-m-1.5 p-1.5">
//               <span className="sr-only">Your Company</span>
//               <img className="h-12 w-auto" src={Logo} alt="" />
//             </a>
//             <button
//               type="button"
//               className="-m-2.5 rounded-md p-2.5 text-gray-700"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               <span className="sr-only">Close menu</span>
//               <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//             </button>
//           </div>
//           <div className="mt-6 flow-root">
//             <div className="-my-6 divide-y divide-gray-500/10">
//               <div className="space-y-2 py-6">
//                 <Disclosure as="div" className="-mx-3">
//                   {({ open }) => (
//                     <>
//                       <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
//                         Áreas de Atuação
//                         <ChevronDownIcon
//                           className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
//                           aria-hidden="true"
//                         />
//                       </DisclosureButton>
//                       <DisclosurePanel className="mt-2 space-y-2">
//                         {[...products].map((item) => (
//                           <DisclosureButton
//                             key={item.name}
//                             as="a"
//                             href={item.href}
//                             className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                           >
//                             {item.name}
//                           </DisclosureButton>
//                         ))}
//                       </DisclosurePanel>
//                     </>
//                   )}
//                 </Disclosure>
//                 <a
//                   href="/equipe"
//                   className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                 >
//                   Equipe
//                 </a>
//                 <a
//                   href="/contato"
//                   className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                 >
//                   Contato
//                 </a>
//               </div>
//               <div className="py-6">
//                 <a
//                   className="bg-lime-600 flex items-center justify-center gap-x-2.5 p-1.5 px-3 rounded-full text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
//                   href="https://wa.me/message/V72SURNAJ3EKD1"
//                 >
//                   <img className="h-5 w-5 flex-none text-white" aria-hidden="true" src={Wpp} />
//                   <p className='text-white'>Entre em contato!</p>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </DialogPanel>
//       </Dialog>
//     </header>
//   )
// }
