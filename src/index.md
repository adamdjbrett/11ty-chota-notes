---
layout: base
title: Home
---

<section class="row">
  <div class="col-12 col-8-md">
    <div class="card post-card">
      <header class="card-header">
        <h2>Welcome to {{ site.title }}</h2>
      </header>
      <div class="card-content">
        <p>A lightweight Eleventy blog using the <a href="https://jenil.github.io/chota/">Chota</a> CSS microframework.</p>
        <p>Features include pagination, dark mode, cards, buttons, and a tables page.</p>
        <a class="button primary" href="/blog/">Read the blog</a>
        <a class="button outline" href="/documentation/">View docs</a>
      </div>
    </div>

    <div class="card post-card">
      <header class="card-header">
        <strong>Latest Posts</strong>
      </header>
      <div class="card-content">
        <div class="row">
          {% for post in collections.posts | slice(0,3) %}
            <div class="col-12 col-4-md">
              <div class="card">
                <div class="card-content">
                  <h4><a href="{{ post.url }}">{{ post.data.title }}</a></h4>
                  <p><small>{{ post.date | date("LLL d, yyyy") }}</small></p>
                  <p>{{ post.data.description or post.templateContent | striptags | truncate(120) }}</p>
                  <a class="button clear" href="{{ post.url }}">Read more →</a>
                </div>
              </div>
            </div>
          {% endfor %}
        </div>
      </div>
    </div>
  </div>
  <div class="col-12 col-4-md">
    <div class="card">
      <div class="card-content">
        <h4>About this site</h4>
        <p>Built with Eleventy 3.1.2 (ESM) and Chota. Edit content in <code>src/</code>. Posts live in <code>src/blog/</code>.</p>
        <a class="button secondary" href="/about/">About</a>
      </div>
    </div>
  </div>
</section>
