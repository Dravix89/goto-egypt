"use client";
import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    // Branchez ici votre API (Resend, Formspree, route /api...).
    setSent(true);
  }

  if (sent) {
    return (
      <div className="sent" role="status">
        <h3>Message envoyé</h3>
        <p>Merci, nous revenons vers vous sous 48 heures.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="form">
      <label>Nom<input name="nom" required autoComplete="name" /></label>
      <label>E-mail<input name="email" type="email" required autoComplete="email" /></label>
      <label>
        Destination
        <select name="dest" defaultValue="Gizeh">
          <option>Gizeh</option><option>Dahchour</option><option>Louxor</option><option>Croisière sur le Nil</option>
        </select>
      </label>
      <label>Message<textarea name="msg" rows="5" required /></label>
      <button className="btn" type="submit">Envoyer la demande</button>
    </form>
  );
}
