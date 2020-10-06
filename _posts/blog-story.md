---
title: "Blogging with React and Next.js"
excerpt: "I've wanted to redesign stevejoachim.com for quite a while now. I've had the domain forever and put up a landing page there 5 years ago using a template from html5up. But since I left my full-time job to pursue software engineering, I knew I could do a bit better."
date: "10/6/2020"
---

## 💡 Time for a Change

I've wanted to redesign stevejoachim.com for quite a while now. I've had the domain forever and put up a landing page there 5 years ago using a template from [html5up](https://html5up.net). But since I [left my full-time job](../about) to pursue software engineering, I knew I could do a bit better. I wanted a place where I could write things on the internet. A sort of log of my thoughts, but on the web. Like a web-log. Let's just call it a blog.

Well, I finally had the ability and time to make it happen, so here's how it went down.

## 🥞 Choosing a Stack

Web stuff changes a lot. I had made simple sites in the past so I thought I knew how it worked. I didn't. JavaScript, and the tooling around it, has changed drastically for the better. After bouncing around the web for a while, I knew I wanted to make one of those super-fast sites where you click and the page just changes. No waiting, no loading. How cool is that? Seems like the key is statically generating the content at build-time and making the page changes happen on the client side with JavaScript while prefetching any code for the linked pages in the background.

This all sounds quite challenging but actually comes for free when you pick the right stack. That's how I decided to build this site with [React](https://Reactjs.org/) and [Next.js](https://nextjs.org/) and host it on [Vercel](https://vercel.com/). This meant leveling up my JavaScript ability pretty quickly and learning a lot of new concepts.

## 🏃‍♂️ Up and Running with React, Next.js, and Vercel

The general idea was that I wanted to write in Markdown, push a button (ok, type a command), and have the blog build and deploy. The Next.js [blog starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) hit all the criteria. It uses [remark](https://github.com/remarkjs/remark) to convert Markdown to HTML, and comes with [Tailwind CSS](https://tailwindcss.com) support out of the box. Getting up and running was as easy as:

```bash
npx create-next-app --example blog-starter blog-starter-app
```

Deploying was super easy too. I created a Git repository and hooked it up to [Vercel](https://vercel.com/) so it deploys on every `git push`.

At this point, it felt great to have a live site, but I didn't really learn anything and the blog really didn't feel like my own. It took a lot more customization and learning to get there.

## 👨‍💻 Making it Mine

It quickly became clear that I'd really need to level up my JavaScript ability to customize this thing.

There are a million and one ways to learn JavaScript and React on the world wide web. After stumbling around for a bit, I found the [fullstackopen](https://fullstackopen.com/en/) course. I think it's written very clearly (great for a text-based learner like me) and has a lot of good hands on exercises. I'm actually still working through it, but just getting through Part 1 was enough React to start working on this blog. I also worked through the Next.js [tutorial](https://nextjs.org/learn/basics/create-nextjs-app) which was super helpful in understanding the framework.

I created some new pages, some new components for those pages, a navigation bar, and a nice little link button. I went through the code base and cut out anything that I didn't need and modified what was left to make it my own.

## 💅 Styling with Tailwind CSS

A lot of the new components I created looked like 💩 so it seemed like time to bite the bullet and learn about Tailwind. I knew some CSS from previous adventures in web development, but CSS-in-JS was completely new to me. I spent a lot of time wrestling with the framework, but the more I learned about it, the more it seemed to "just work" (so maybe my issue was just user error in the beginning). It's definitely a huge learning curve with all the Tailwind-specific class names. I had their documentation up the whole time and the Tailwind intellisense [extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) for VS Code was a lifesaver. I also added their [typography](https://github.com/tailwindlabs/tailwindcss-typography) plugin to style the blog posts.

## 📝 Adding Features to Text with Remark-Rehype

To be honest, at first I thought the [unified](https://unifiedjs.com) remark stuff from the blog template was a bit convoluted. The `unified().use()` pipeline syntax seemed like overkill for what I was doing. I was so wrong though. For each additional feature I wanted to add to the markdown posts, there was a corresponding remark or rehype plugin, and they all fit nicely together in one *unified* pipeline.

### 🖍 Syntax Highlighting

There will be plenty of code here so why shouldn't it be colorful? Adding syntax highlighting was pretty straightforward with the [rehype-highlight](https://github.com/rehypejs/rehype-highlight) plugin. It relies on [highlight.js](https://highlightjs.org) so I installed that and imported the style sheet in `_app.js`.

```javascript
import 'highlight.js/styles/atom-one-light.css'
```

### 🧮 Math

I'm hoping to grow my machine learning knowledge and write about it a bit here. I can anticipate having to type out an occasional mathematical equation, so I searched around for a good way to display them. I'm familiar with the [LaTeX](https://www.latex-project.org) syntax from school so I found [KaTeX](https://katex.org) and was able to integrate it into the Markdown processing pipeline with [remark-math](https://github.com/remarkjs/remark-math) and [rehype-katex](https://github.com/remarkjs/remark-math/tree/HEAD/packages/rehype-katex). I also installed the katex package and imported the style sheet in `_app.js`.

```javascript
import 'katex/dist/katex.min.css'
```

Now I can get nice looking math equations like this:
$$
\sigma (t) = \frac{1}{1 + e^{-t}}
$$

### 🔗 Links

One minor thing I noticed is that all of the external links just opened in the same window, and it seemed more natural for them to be opened in a new tab. This seemed like a tough thing to fix since the link tags were all being generated from the Markdown and I didn't have direct control over them. Luckily, I found that remark has a plugin called [remark-external-links](https://github.com/remarkjs/remark-external-links) that can take care of this in the Markdown-to-HTML pipeline.

### 🧩 The Final Unified Pipeline

At this point, my final remark-rehype pipeline looked like this:

```javascript
import unified from 'unified'
import markdown from 'remark-parse'
import externalLinks from 'remark-external-links'
import math from 'remark-math'
import remark2rehype from 'remark-rehype'
import highlight from 'rehype-highlight'
import katex from 'rehype-katex'
import stringify from 'rehype-stringify'

export default async function markdownToHtml(rawMarkdown) {
  const result = await unified()
    .use(markdown)
    .use(externalLinks)
    .use(math)
    .use(remark2rehype)
    .use(katex, { minRuleThickness: .08 })
    .use(highlight)
    .use(stringify)
    .process(rawMarkdown)
  return result.toString()
}
```

## 🚀 Going Forward

I'm really happy with the way it turned out so far. I'll probably find more things I want to change as time goes on, but I'm glad I took the time to really understand the frameworks so that making modifications will be easy. I'm looking forward to learning more React and using it to make more interactive web apps.
