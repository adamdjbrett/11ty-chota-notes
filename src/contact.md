---
layout: base
title: Contact
permalink: /contact/
---

<div class="card">
  <div class="card-content">
    <h2>Contact</h2>
    <p>This is a static form example. Wire this up to your preferred form backend (Netlify Forms, Formspree, etc.).</p>
    <form class="is-center" name="contact" method="POST">
      <div class="grouped">
        <input type="text" name="name" placeholder="Your name" required>
        <input type="email" name="email" placeholder="Email" required>
      </div>
      <textarea name="message" placeholder="Your message" rows="6" required></textarea>
      <div class="row">
        <div class="col">
          <button type="submit" class="button primary">Send</button>
          <button type="reset" class="button clear">Reset</button>
        </div>
      </div>
    </form>
  </div>
</div>
