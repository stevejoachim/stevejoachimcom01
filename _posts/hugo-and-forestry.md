---
title: "Static Sites with Hugo and Forestry"
excerpt: "When you're \"good with computers\", one thing you can count on is that you'll get a lot of incoming requests to help family and friends with their computer problems. But sometimes the requests are actually fun, and you can learn something in the process. This is one of those."
date: "12/01/2020"
---

When you're "good with computers", one thing you can count on is that you'll get a lot of incoming requests to help family and friends with their computer problems. Often, the requests sound like IT helpdesk tickets (to which my response is invariably to turn it off and turn it on again). But sometimes the requests are more fun, and you can learn something in the process. This is one of those.

My wife was looking to build a site to showcase some of her writing from her career as a Healthcare Analyst. She considered using a blogging platform like Medium, but ultimately wanted it to be a bit more personal and function as a kind of combination landing page, portfolio, and blog. I was glad to help since I love this stuff and figured I'd get to learn some new technologies in the process.

I knew we'd want to use some kind of static site generator. For this site, I'm using React and Next.js, but it didn't seem like the best idea for her site. I had to build out a lot of this site on my own, and it's still a pretty minimalist aesthetic. Her site would likely have a bit more color and style so it made sense to work with a framework that has a larger selection of pre-made themes.

After much deliberation, we ended up going with [Hugo](https://gohugo.io) as the static site generator, with a theme called [Kross](https://github.com/themefisher/kross-hugo).

![image-20201201200135287](/assets/blog/hugo-and-forestry/image-20201201200135287.png)

So far, I have absolutely no complaints about Hugo. I had to customize the theme a bit to add a portfolio page that consists of nicely-displayed external links and it was pretty simple to get that up and running. I had some trouble modifying things inside the double curly brackets (`{{  }}`) until I took the time to read and understand [templates](https://golang.org/pkg/text/template/) in Go. I highly recommend doing that reading ahead of working with Hugo. I had also previously worked through the Go [tour](https://tour.golang.org/welcome/1) so the syntax wasn't too surprising. Of course, if the theme already does most of what you need, you can just modify regular old HTML and CSS and avoid the actual Go code.

That said, I enjoyed the excuse to read up on Go. I know it's usage is growing and it's very relevant for some of the distributed systems topics that I'm interested in, like Kubernetes.

To make the site more customizable for the actual content creator, you can consolidate a lot of the parameters of the site into a `.yaml` file and set up the Hugo templates to pull content from it or conditionally display sections of the site. Still, as I started explaining markdown, `.yaml`, and how to use the command line to my wife, I could tell that this wasn't going to cut it.

So probably the most exciting thing I learned was how to use [Forestry](https://forestry.io) to give non-technical content creators a way to modify the site. I had never heard of it before but the instructions with the Kross theme actually recommended using it. With Forestry, you can connect it to your project's Git repo and set it up to expose certain `.yaml` files and folders of markdown files for blog posts. It provides a nice interface to edit that content without it actually *feeling* like you're editing a text file. Whenever you save, the changes are automatically pushed to Git. Since I set up deployments to be triggered on every commit, each edit in Forestry will cause the site to redeploy with the latest content.

All in all, it's a pretty great system for setting up small sites for friends and family, especially if you don't want to be personally responsible for managing all future content changes. Two thumbs up for Hugo and Forestry - a lot more fun than setting up a password manager or figuring out why "X doesn't do Y when I click Z".
