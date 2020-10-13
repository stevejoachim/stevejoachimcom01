---
title: "Managing Changes with Git"
excerpt: "I've been using Git for a few years now on my own projects and schoolwork. I learned just enough to track changes on my own projects and push those changes to GitHub so I wouldn't lose any work. I knew at some point, I'd have to take the time to learn it from the ground up and practice on some real collaborative projects."
date: "10/13/2020"
---

I've been using Git for a few years now on my own projects and schoolwork. I learned just enough to track changes on my own projects and push those changes to GitHub so I wouldn't lose any work. A few times, I tried to dig a bit deeper only to get frustrated with it. Git is incredibly powerful but that also makes it fairly complex. It's not something you can learn easily on the fly. And the great irony of Git is that if you don't know it well, you're more likely to get your project into a messed-up state, and that will eventually require an even deeper knowledge of Git to recover it. At some point, you'll have to take the time to learn it from the ground up and practice on some real collaborative projects.

This past week, I started on a longtime goal of mine to contribute to an open source project. I actually had two changes merged into two separate projects - [numpy](https://github.com/numpy/numpy) and [electron](https://github.com/electron/electronjs.org). The changes themselves are almost embarrassingly small - I was really just interested in learning about the process of contributing. I found GitHub's communication tools around issues and pull requests to be pretty intuitive. Still, the entire pull request process is based off of branches. I knew how to create a branch but that was about it. It gets more complicated when you want to keep that branch up to date with a project that moves quickly, or squash a few of your changes into a single commit so the entire team doesn't need to see every typo you made along the way. Here's a quick recap of a few things I learned that may be useful to anyone else learning Git or contributing to open source. It assumes some familiarity with the basics of Git, like adding and committing changes.

## 👨‍💻 Overview of the Contribution Process

Let's say you want to contribute to a project. You can't actually modify that project directly (open source can be chaotic, but it's not *that* chaotic). Instead, you'll need to make your own copy of the project, called a **fork**, and make all of your changes to a new **branch** on the forked project. When you're finished, you can submit a request that your changes get pulled into the main project, called a **pull request**. The pull request is a process that allows project maintainers to review and accept changes from contributors. Once it has been opened, any further commits to your new feature branch will show up in the pull request for others to review, and eventually merge into the main project.

## 🍴 Forking and Setting Up Remotes

Every project has a fork button on the top left in GitHub. All it takes is a single click to set up your own copy of that project. Next, you'll want to pull those files down to your working directory:

```bash
git clone https://github.com/<your-github-name>/<project>.git
cd <project>
```

So at this point you have a working copy of the project on your machine and a **remote** copy on your GitHub. This remote is linked to in your project and referred to as the *origin*. You can confirm this by running `git remote -v`, which lists all of the remotes that have been established so far.

You may have noticed that there's no reference to the original project in the output of `git remote -v`. Somewhat inconveniently, you need to manually setup this link back to the original project.

```bash
git remote add upstream https://github.com/<project-owner>/<project>.git
```

This adds the original project as a remote called *upstream*. Again, you can confirm with `git remote -v`.

## 🕑 Visualizing the History Tree

When you start modifying things, making commits and branches, and pushing and pulling between remotes it gets hard to mentally keep track of the state of your project. Just typing `git log` will show the recent commit history, but can be woefully unhelpful when you want to visualize the project's different branches. Luckily, there is a command to output a tree-like view of your Git history:

```bash
git log --graph --oneline --all
```

At least in the beginning, it's really helpful to run this after almost any Git operation you perform. You can verify that your Git command actually worked the way you thought it would.

## 🌲 Branches

Since the entire pull request process is based off of the concept of branches, the first thing you'll want to do is create a new branch to track your contribution:

```bash
git checkout -b <branch-name>
```

This creates a new branch with the name you pass as `<branch-name>`. You can switch back and forth between different branches with `git checkout <branch-name>`, list all of the existing branches with `git branch --all`, and figure out which branch you're currently on with `git branch --show-current`.

When you stage and commit changes, they will be added to the branch you are currently working on. So anytime you start working on something new, you want to make sure you're starting out on the correct branch. If you mess this part up (as I did at least once...), you can certainly fix it by moving commits around, but it just requires a bit more knowledge about [cherry picking](https://www.atlassian.com/git/tutorials/cherry-pick).

## 🧼 Keeping a Clean Commit History

One thing that terrified me about working on public projects with an incredible change-tracking tool was the thought of everyone seeing every little typo and dumb error that I might make along the way to writing more decent share-able code. Luckily, there are ways to amend your Git history and group several commits together. This way you can still save your work frequently with many commits, but clean it up before you share it.

If you recently committed a change and want to roll your newest changes into that one you can amend the previous commit. This is great for when you find a small typo or just want to add comments to a commit that you just made.

```bash
git commit --amend
```

You can also compress several previous commits into one by *squashing* them together. It's a bit more involved, so I'll just link to a great [stack overflow response](https://stackoverflow.com/questions/5189560/squash-my-last-x-commits-together-using-git) that explains the process.

If you've modified any commit history that was already pushed to your remote repository, then the next push to your repository will have to be forced:

```bash
git push --force origin <branch-name>
```

Keep in mind that it's often better to keep the commit history intact for things that you've already shared with other people. It can be confusing for teammates to discuss or review something and then later on find out that it disappeared.

## ⎌ Undoing a Change

This was maybe the most frustrating thing about learning Git. For a change management tool, undoing a change seems like it should be one of the simplest operations. In reality, Git has many different ways you can undo changes and the appropriate one really depends on the context. [This article](https://github.blog/2015-06-08-how-to-undo-almost-anything-with-git/) does a great job walking though each of these possible scenarios so I'll just highlight a few common ones.

If you've made some local, uncommitted changes and you just want to get back to the most recent commit, you can do a hard reset. You can optionally provide the hash for a specific commit if you want to rewind even further. This will remove all of the undone commits from your history and clear out any pending changes from your working directory.

```bash
git reset --hard <commit-hash-to-go-back-to>
```

If you want to undo a change that you've already shared with teammates, you won't want to rewrite your commit history. You're better off with a `revert` operation. This will still undo your changes, but will not alter any of the existing commit history. Instead, it records the undo operation as a new commit.

```bash
git revert <commit-hash-to-go-back-to>
```

## 📨 Submitting a Pull Request

When you're happy with the changes you've made to your new branch, you can push them to your forked repository and open a pull request.

```bash
git push origin <branch-name>
```

After pushing the change, you go to the GitHub site and click the green "Pull Request" button to actually submit the changes for review.

If you need to make any changes to the pull request while it is under review, you can simply add commits to the same feature branch and push them back to your repository. They will automatically show up in the pull request discussion thread.

## 🤝 Syncing with an Upstream Remote

Once you fork a project, GitHub doesn't automatically keep your forked copy in sync with the original *upstream* project. Instead, you need to pull new changes down to your local machine from the upstream, merge them with your local working files, and push the changes back to your forked repository, which we've been referring to as the *origin*.

### Before Submitting the Pull Request

When you create a new branch for your feature, it's based off of the latest commit to master at the time. But as time goes on, the upstream project will add new commits to master, and you'll want to make sure that your branch gets updated so that it is based off of these newer commits. This is called *rebasing*.

First, you can fetch the latest from the upstream project. Then, you'll rebase your feature branch off of the latest master commit from the upstream project, referred to as `upstream/master`. Lastly, you may want to push your changes back to your forked repository on GitHub, which you'll need to do with the `--forced` flag since you've revised the commit history a bit. All together, it looks like this:

```bash
git fetch upstream master
git checkout <branch-name>
git rebase upstream/master
git push --force origin <branch-name>
```

### After Your Changes Have Been Merged

After your changes are merged, the main project's master branch will look a bit different than your forked repository. You can update your master branch to be in sync with the upstream project's master branch with a fetch and merge. This is equivalent to a `git pull` but I think it helps to separate them out so you can understand what's happening at each step.

```bash
git checkout master
git fetch upstream master
git rebase upstream/master
git push --force origin master
```

You don't actually need to keep your feature branch around after it has been merged. If you want, you can delete it locally and in the origin repository with:

```bash
git branch -D <branch-name>
git push origin --delete <branch-name>
```

Alternately, you skip the entire sync process and just delete your forked repository if you're tired of seeing it on your GitHub page. The option to delete everything is buried in the repository settings on GitHub.

## 📚 Useful Resources

* [Visualizing Git](http://git-school.github.io/visualizing-git/)  
  No matter how much you read about using Git, you might still be terrified of messing something up. This app allows you to try out almost any Git command and see a visual representation of how it modifies the history tree. You can even work with a simulated remote branch to practice `fetch`ing and `push`ing changes.
* [Atlassian Git Guide](https://www.atlassian.com/git/tutorials/setting-up-a-repository)  
  There are many guides to Git on the web, but a lot of them either just skim the surface or go way too deep. I think Atlassian's guide does a good job walking the line between the two. It's detailed enough to use as a reference but you won't get lost in it.
* [Digital Ocean Pull Request Guide](https://www.digitalocean.com/community/tutorials/how-to-rebase-and-update-a-pull-request)  
  A super practical step-by-step guide for contributing to an open source project. It walks you through the entire pull request process.
* [First Contributions Project](https://github.com/firstcontributions/first-contributions)  
  This is a simple overview of the pull request process, but the [additional material](https://github.com/firstcontributions/first-contributions/tree/master/additional-material/git_workflow_scenarios) section has more specific Git walkthroughs for various scenarios that you may find yourself in in.
* [How to undo (almost) anything with Git](https://github.blog/2015-06-08-how-to-undo-almost-anything-with-git/)  
  This is a great article enumerating all of the different undo scenarios you could find yourself in, with specific instructions on how to handle each one.
