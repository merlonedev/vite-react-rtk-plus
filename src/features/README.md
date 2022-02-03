# Add features slices here

- As in https://redux-toolkit.js.org/tutorials/typescript 
- And https://redux-toolkit.js.org/rtk-query/overview

As for file structure, I usually use:

```
features
└── featureNameSlice
   ├── index.tsx // where the featureSlice will be
   ├── middlewares.ts // exclusive middlewares for the features
   └── interfaces.ts // interfaces for features, such as return and args interfaces
```