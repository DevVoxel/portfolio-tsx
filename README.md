# Personal Portfolio

This portfolio is built in Typescript using NextJS, and ChakraUI.  It fetches most of its data from a Headless CMS known as [Contentful](https://www.contentful.com/).  This project was built to be made into a template project that can allow Entry-Level Developers quickly and easily create their own dynamic portfolio.


![Preview Screenshot](https://images.ctfassets.net/gpz0vzuizl3q/3KMLUQQBvb2XKBLivZ1RIS/65ced3e810d7d8655d37ced65e83e6b9/Screenshot_2022-06-21_at_13-07-34_Aiden_Smith.png?h=250)


## Local Setup

Clone the project
(I recommend using SSH)

```bash
# HTTPS
  git clone https://github.com/Voxel20/portfolio-tsx.git

# SSH
  git@github.com:Voxel20/portfolio-tsx.git
```

Go to the project directory

```bash
  cd portfolio-tsx
```

Install dependencies
(This project uses yarn as a package manager.  Avoid using npm)

```bash
  yarn
```

Start Dev Server

```bash
  yarn dev

# or

  npm run dev
```


## Documentation

- [NextJS](https://nextjs.org/docs/getting-started)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [ChakraUI](https://chakra-ui.com/)
- [Contentful](https://www.contentful.com/developers/docs/)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file. (If using Vercel. There is a script setup to pull enviroment variables in package.json)
```
  npm run env
  
# or

  vercel env pull
```

These values can also be located in .env.example
```
// Common
NEXT_PUBLIC_URL=https://aidensmith.dev

// Contentful
CONTENTFUL_ACCESS_TOKEN=
CONTENTFUL_PREVIEW_ACCESS_TOKEN=
CONTENTFUL_SPACE_ID=
```
## Deployment
In order to deploy this project, it is easiest to try using a [Vercel Hobbyist](https://vercel.com/pricing) account.  This will give you access to Vercel technologies and easy deployment methods.  I personally recommend this if you 
  1. Cannot afford a host.
  or
  2. Just want easy & free hosting.
Otherwise use what you want, there are production/deployment commands to support such.  It is reccomended to deploy on your 'main' branch, or a seperate 'deployment' branch.

!!!Ensure you have defined your enviroment variables properly!!!

## Author
- [@Voxel20](https://www.github.com/voxel20)


## Contributing

Contributions are always welcome!  You can also create issues or PRs that I will individually review and add if beneficial.


## License

[MIT](https://choosealicense.com/licenses/mit/)

## Upcoming Updates

#### The Workshop

The workshop portion of this project will be built to house small cards or icons of all my components, websites, creations, small ideas, apps, etc.  There will be a navigation scroll at the top that will allow any user to sort the entries via Technology/Framework/Language.  There may also be a tyoe to search section, but that is still up for debate.  The search at the top will consistently slowly scroll right, and when you hover or click on an icon for a technology, that icon will glow with a cyan hue around it and enlarge a little increasing the margin/padding.  Then the projects that have that specific tag will be shown.  This workshop will be a small button to the right of the website logo in an attempt to make a minimal UI impact on the overall website.  

#### Freelance

The freelance section of this website will be used to house all my freelance services, and contracts.  I will use this to showcase a step by step easy process for clients to take me (or anyone using this template) on under contract.  This includes what is wanted to be built, the framework/technologies to be used, a custom task list, payout, quotas, contact information, base contracts, and other features to showcase freelance work effortlessly.

#### Backlog

The backlog will be used as well... a backlog.  Showcasing my Trello entries, as well as projects that I want to work on in the future.  This section will have resources towards each project and will look similar to a Github commit history page (I assume).  Changes are up for debate, but also this is just a simple section to show my progress as well as ideas.

#### Resume

I need to add a section that will showcase my resume and skills.  This section will give a download option for a pdf version of my resume, as well as a cleanly designed page towards my direct resume.  Fairly simple section, just is needed with some further updates.

#### Contact Form
Use Modal Popup for contact form instead of mailto.  Service needed to be used is yet to be determined.  However there should be ample options for visitors of site to send information to developer.

Currently this is being worked on with a base added. Being worked on under the feature/ContactForm branch.  Modal will be added next, as well as the validation enhancement.
