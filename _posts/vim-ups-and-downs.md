---
title: "The Ups and Downs of Learning Vim"
excerpt: "Last week, I spent some time tweaking my Vim setup. It was simultaneously really fun and a huge exercise in frustration. So I thought it might be useful to share some of my thoughts on Vim."
date: "10/22/2020"
---

Last week, I spent some time tweaking my Vim setup. It was simultaneously really fun and a huge exercise in frustration. So I thought it might be useful to share some of my thoughts on Vim.

## ⌨️ It's All About the Keys

In my opinion, Vim's greatest strength is also its biggest weakness. Your hands never leave the keyboard! But also... almost the whole UI is keyboard mappings! It's so enticing to want to get better at editing with Vim because when you've put in the time to learn it, it feels almost magical how much you can do without your fingers ever leaving the home position on the keyboard. There's an efficiency there, for sure, but it's hard-earned and it takes a while to get used to.

## 🔧 Infinite Customization

There's no GUI that presents common settings to you. Instead, you'll be digging around the documentation (or resources across the web) to figure out how to modify even basic settings. It notably lacks some [sensible](https://github.com/tpope/vim-sensible) defaults that most people agree should be set. And since some of the default keyboard mappings are cumbersome, most people need to add at least a few custom mappings to get up to speed with it. For example, if you don't feel like reaching for `<esc>` whenever you're done inserting text, a lot of people end up remapping this to `jk`. Even Vim's main leader key is often remapped to `<Space>` or `,` to make it easier to reach.

A lot of useful features have been delegated to outside developers in form of plugins. The plugin ecosystem for Vim is enormous. It's amazing that you can make Vim do whatever you can dream of, but it does feel less stable the further you drift from the base configuration. Plugins offer a lot of functionality, but some don't play well together, and it's a bit of a trial and error process to get a clean, stable setup that does everything you want.

All of this customization is, again, both a superpower of Vim and a bit of an annoyance. Working on your `.vimrc` file feels a lot like writing software (that's why it's so fun!). At the end of the process, you feel more like you **built** something than just set it up. But I would imagine that if it just had a few more sensible key mappings, defaults, and features built-in, then fewer people would need to modify them. In that case, we could all have a more consistent text editing experience. I'm not saying there's any harm in customizing a text editor by *adding* useful features, but when the *core* features need to be remapped and modified by all users, it makes it hard for one person to ever use anyone else's Vim setup.

## 🧗‍♂️ Climbing the Vim Learning Curve

Despite all of these complaints, the actual editing experience is addicting. I'm starting to find myself desperately missing some of its features when I'm in other editors.

I've read that Vim can take a lifetime to learn well and I definitely believe it. The fact my knowledge of it is such a work-in-progress just makes me want to use it more. It always feels like there's something new to discover (or a weird bug to fix!). Besides just providing a fantastic editing experience, I think that sense of discovery is key to its enduring popularity and part of the reason developers keep coming back to it year after year.