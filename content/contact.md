---
layout: base
title: Contact
permalink: /contact/
---

<div class="card">
  <div class="card-content">
    <h2>Contact</h2>
    <p>This is a static form example. Wire this up to your preferred form backend (Netlify Forms, Formspree, etc.).</p>
    <form class="stacked-form" name="contact" method="POST">
      <label>
        <span class="label">Name</span>
        <input type="text" name="name" placeholder="Your name" required>
      </label>
      <label>
        <span class="label">Email</span>
        <input type="email" name="email" placeholder="Email" required>
      </label>
      <label>
        <span class="label">Message</span>
        <textarea name="message" placeholder="Your message" rows="6" required></textarea>
      </label>
      <div class="form-actions">
        <button type="submit" class="button primary">Send</button>
        <button type="reset" class="button clear">Reset</button>
      </div>
    </form>
  </div>
</div>
