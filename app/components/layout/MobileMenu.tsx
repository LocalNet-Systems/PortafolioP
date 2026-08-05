"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

interface Contact {
  label: string;
  href: string;
}

interface ContactOption {
  label: string;
  href?: string;
  contacts?: Contact[];
  icon: React.ReactNode;
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
  contactOptions: ContactOption[];
  message: string;
}

export default function MobileMenu({
  open,
  onClose,
  navItems,
  contactOptions,
  message,
}: MobileMenuProps) {

  const [selectedContact, setSelectedContact] = useState<number | null>(null);


  const buildHref = (href: string) => {

    if (href.startsWith("https://wa.me")) {
      return `${href}?text=${encodeURIComponent(message)}`;
    }

    if (href.startsWith("mailto:")) {
      return `${href}?subject=${encodeURIComponent(
        "Consulta Legal"
      )}&body=${encodeURIComponent(message)}`;
    }

    return href;
  };


  const handleClose = () => {
    setSelectedContact(null);
    onClose();
  };


  return (
    <AnimatePresence>

      {open && (

        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-40"
            onClick={handleClose}
          />


          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "tween",
              duration: 0.3,
            }}
            className="fixed top-0 right-0 w-80 h-full bg-zinc-950/98 border-l border-white/10 shadow-2xl z-50 p-6 overflow-hidden"
          >

            <button
              onClick={handleClose}
              className="text-white mb-8"
            >
              <X className="w-6 h-6" />
            </button>


            <AnimatePresence mode="wait" initial={false}>

            {selectedContact === null ? (

              <motion.div
                key="main"
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -20,
                }}
                transition={{
                  duration: 0.25,
                }}
              >

                <div className="flex flex-col gap-4">

                  {navItems.map((item) => (

                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={handleClose}
                      className="text-white text-lg font-medium"
                    >
                      {item.label}
                    </Link>

                  ))}

                </div>



                <div className="mt-8 border-t border-white/10 pt-5">

                  <p className="text-xs uppercase tracking-wider text-zinc-500 mb-3">
                    Contacto
                  </p>


                  <div className="space-y-1">

                  {contactOptions.map((contact,index)=> (

                    <button
                      key={contact.label}
                      onClick={() => {

                        if(contact.contacts?.length){

                          if(contact.contacts.length === 1){

                            window.location.href =
                              buildHref(
                                contact.contacts[0].href
                              );

                          }else{

                            setSelectedContact(index);

                          }

                          return;
                        }


                        if(contact.href){

                          window.location.href =
                            buildHref(contact.href);

                        }

                      }}
                      className="w-full flex items-center justify-between gap-3 rounded-xl px-3 py-3 text-zinc-300 hover:text-white hover:bg-white/10 transition-all"
                    >

                      <span className="flex items-center gap-3">
                        {contact.icon}
                        {contact.label}
                      </span>


                      {contact.contacts && (
                        <ChevronRight
                          size={16}
                          className="text-zinc-500"
                        />
                      )}

                    </button>

                  ))}

                  </div>

                </div>

              </motion.div>


            ) : (


              <motion.div
                key="contacts"
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: 20,
                }}
                transition={{
                  duration: 0.25,
                }}
              >


                <button
                  onClick={() => setSelectedContact(null)}
                  className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors mb-6"
                >

                  <ArrowLeft size={16}/>
                  Volver

                </button>



                <h3 className="text-white font-semibold text-lg mb-4">
                  {contactOptions[selectedContact].label}
                </h3>



                <div className="space-y-2">

                {contactOptions[selectedContact].contacts?.map(
                  (contact)=> (

                    <a
                      key={contact.label}
                      href={buildHref(contact.href)}
                      className="flex items-center justify-between rounded-xl px-4 py-3 bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-white hover:bg-white/[0.08] transition-all"
                    >

                      {contact.label}

                      <ChevronRight size={16}/>

                    </a>

                  )
                )}

                </div>


              </motion.div>

            )}

            </AnimatePresence>


          </motion.div>

        </>

      )}

    </AnimatePresence>
  );
}