# DTD 2019
website for 2019 data through design event


## Commands
Command                | Description                                      |
-----------------------|--------------------------------------------------|
`$ npm start`          | Start the development server
`$ npm test`           | Lint, validate deps & run tests
`$ npm run build`      | Compile all files into `dist/`
`$ npm run create`     | Generate a scaffold file
`$ npm run inspect`    | Inspect the bundle's dependencies

## To push to gh-pages only dist

make sure you're in gh-pages branch

```
git checkout gh-pages
```

then:
```
npm run build

git add . 

git commit -am "added latest build"

git push origin `git subtree split --prefix dist gh-pages`:gh-pages --force
```