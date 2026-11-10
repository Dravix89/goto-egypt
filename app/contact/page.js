import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact | GOTOEGYPT." };

export default function Contact() {
  return (
    <>
      <PageHero
        kicker="Réserver"
        title="Parlons de votre voyage"
        text={
          <>
            Dites-nous quand vous partez et ce que vous voulez voir.
            <br className="br-desktop" /> Nous répondons sous 48 heures.
          </>
        }
      />
      <section className="section">
        <div className="wrap contact">
          <ContactForm />
          <aside>
            <h3>Coordonnées</h3>
            <p>hi@gotoegypt.com</p>
            <p>+20 2 5555 0142</p>
            <p>Le Caire, Égypte</p>
            <h3>Horaires</h3>
            <p>Du Dimanche au Jeudi, de 9 h à 18 h (Heure du Caire).</p>
          </aside>
        </div>
      </section>
    </>
  );
}
