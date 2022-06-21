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

To run this project, you will need to add the following environment variables to your .env file

These values can also be located in .env.example
```
// Common
NEXT_PUBLIC_URL=https://aidensmith.dev

// Contentful
CONTENTFUL_ACCESS_TOKEN=
CONTENTFUL_PREVIEW_ACCESS_TOKEN=
CONTENTFUL_SPACE_ID=
```
## Author
- [@Voxel20](https://www.github.com/voxel20)


## Contributing

Contributions are always welcome!  You can also create issues or PRs that I will individually review and add if beneficial.


## License

[MIT](https://choosealicense.com/licenses/mit/)