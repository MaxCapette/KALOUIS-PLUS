

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { SheetTrigger, SheetContent, Sheet, SheetClose } from "@/components/ui/sheet"
import ContactPage from "../contact/contact"

export function MainPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="w-[90%] p-[15px] rounded-[5px] fixed top-[5%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-90 z-10 px-4 lg:px-6 h-14 flex items-center bg-[#005f8f]  ">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <img src="/logo.png" width={40} height={40} alt="KALOUIS PLUS" />
          <span className=" p-2 font-bold text-xl">KALOUIS PLUS</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center ">
          
          <div className="hidden lg:flex">
           
          
            <Link className="text-sm font-medium hover:underline underline-offset-4 mx-5" href="#services">
              Services
            </Link>
         
        
            <Link className="text-sm font-medium hover:underline underline-offset- mx-5" href="#contact">
              Contact
            </Link> 
              <Link className="text-sm font-medium hover:underline underline-offset-4 mx-5" href="#faq">
              FAQ
            </Link>
          </div>
        </nav>
        <Sheet>
            <SheetTrigger asChild>
              <Button className="md:hidden" size="icon" variant="ghost">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only  ">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full max-w-xs bg-gray-100 dark:bg-gray-800 p-6 backgroundCustom" side="right">
              <div className="flex flex-col gap-6">
                
                <SheetClose asChild>
                <Link className="font-medium hover:text-gray-900 dark:hover:text-gray-50" href="#services">
                  Services
                </Link>
                </SheetClose>
                
                <SheetClose asChild>
                <Link className="font-medium hover:text-gray-900 dark:hover:text-gray-50" href="#contact">
                  Contact
                </Link>
                </SheetClose>
                <SheetClose asChild>
                <Link className="font-medium hover:text-gray-900 dark:hover:text-gray-50" href="#faq">
                  FAQ
                </Link>
                </SheetClose>

              </div>
            </SheetContent>
          </Sheet>
      </header>
      <main className="flex-1">
        <section className=" pt-40 flex justify-center bg-background py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className=" text-primary-foreground text-3xl font-bold mb-4">
                  Votre partenaire de confiance pour la réparation informatique
                </h2>
                <p className="text-muted-foreground mb-6">
                  Chez KALOUIS PLUS, nous sommes passionnés par la résolution de problèmes informatiques. Nos techniciens
                  expérimentés interviennent rapidement pour vous dépanner et vous permettre de retrouver un
                  fonctionnement optimal de vos équipements.
                </p>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  prefetch={false}
                >
                  Demander une intervention
                </Link>
              </div>
              <div className="">
                <img src="/fixingguy.jpeg" width={500} height={400} alt="KALOUIS PLUS" className="rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="flex justify-center py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Nos services</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2">
                <LaptopIcon className="h-12 w-12 text-primary-foreground " />
                <h3 className="text-2xl font-bold">Réparation d&apos;ordinateurs</h3>
                <p className="text-muted-foreground">
                  Nous réparons tous types d&apos;ordinateurs, des problèmes de matériel aux logiciels.
                </p>
              </div>
              <div className="space-y-2">
                <TabletIcon className="h-12 w-12 text-primary-foreground " />
                <h3 className="text-2xl font-bold">Installation de logiciels</h3>
                <p className="text-muted-foreground">
                  Nous installons et configurons tous vos logiciels pour un fonctionnement optimal.
                </p>
              </div>
              <div className="space-y-2">
                <ServerIcon className="h-12 w-12 text-primary-foreground " />
                <h3 className="text-2xl font-bold">Maintenance informatique</h3>
                <p className="text-muted-foreground">
                  Nous assurons la maintenance de votre système informatique pour éviter les pannes.
                </p>
              </div>
              <div className="space-y-2">
                <DatabaseIcon className="h-12 w-12 text-primary-foreground " />
                <h3 className="text-2xl font-bold">Sauvegarde de données</h3>
                <p className="text-muted-foreground">
                  Nous sécurisons vos données en mettant en place des solutions de sauvegarde fiables.
                </p>
              </div>
              <div className="space-y-2">
                <CodeIcon className="h-12 w-12 text-primary-foreground " />
                <h3 className="text-2xl font-bold">Développement web</h3>
                <p className="text-muted-foreground">
                  Nous créons des sites web sur-mesure pour répondre à vos besoins.
                </p>
              </div>
              <div className="space-y-2">
                <NetworkIcon className="h-12 w-12 text-primary-foreground " />
                <h3 className="text-2xl font-bold">Réseau et connectivité</h3>
                <p className="text-muted-foreground">
                  Nous assurons la mise en place et la gestion de votre réseau informatique.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="flex justify-center  py-12 md:py-20">
          <ContactPage />
        </section>
        <section id="faq" className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Questions fréquentes</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Vous avez une question ? Consultez nos réponses aux questions les plus fréquentes.
                </p>
              </div>
              <div className="w-full max-w-2xl">
                <Accordion type="single" collapsible>
                  <AccordionItem value="question1">
                    <AccordionTrigger className="text-base">Combien coûte le dépannage ?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        Le coût du dépannage dépend de la nature du problème et du temps nécessaire pour le résoudre.
                        Nos tarifs sont compétitifs et transparents. Nous vous fournirons une estimation détaillée avant
                        de commencer le travail.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="question2">
                    <AccordionTrigger className="text-base">Combien de temps prend le dépannage ?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        La durée du dépannage varie selon la complexité du problème. Nous nous efforçons de résoudre les
                        problèmes rapidement, généralement dans la journée. Cependant, certains cas peuvent nécessiter
                        plus de temps, en fonction des pièces à remplacer ou des tests approfondis à effectuer.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="question3">
                    <AccordionTrigger className="text-base">Quelles garanties offrez-vous ?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        Nous offrons une garantie de 3 mois sur tous nos services de dépannage. Si le problème persiste
                        ou réapparaît dans ce délai, nous reviendrons gratuitement pour le résoudre à nouveau. Nous
                        sommes fiers de notre travail et nous nous engageons à vous satisfaire pleinement.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="question4">
                    <AccordionTrigger className="text-base">Pouvez-vous récupérer mes données ?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        Oui, nous disposons de l&apos;expertise et des outils nécessaires pour récupérer vos données en cas
                        de problème de disque dur ou d&apos;autre défaillance matérielle. Nous ferons de notre mieux pour
                        sauvegarder et restaurer vos fichiers importants.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-4 px-6">
      <div className=" mx-auto px-4 md:px-6 flex flex-col md:flex-column items-center justify-between">
          <p className="  mt-4 ">© 2024 KALOUIS PLUS.</p>
          <p className="  "> Tous droits réservés.</p>
          </div>
          <div className=" mx-auto px-4 md:px-6 flex flex-col md:flex-column items-center justify-between">
          <p className="  mt-4 ">24 RUE PASCAL</p>
          <p className="   "> 69003 LYON</p>
          <p className="  mt-4 ">contact@sauvage-com.fr</p>

          <p className="  mt-4 ">TEL: 04 22 13 02 90 </p>
          </div>
       
      </footer>
    </div>
  )
}

function LaptopIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </svg>
  )
}


function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function ServerIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  )
}


function TabletIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <line x1="12" x2="12.01" y1="18" y2="18" />
    </svg>
  )
}
function CodeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function DatabaseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}








function NetworkIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  )
}


