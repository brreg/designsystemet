Theme for the Brønnøysund Register Centre for use with [@digdir/designsystemet](https://github.com/digdir/designsystemet)

## Gettings started:

### 1 Set up designsystemet
See https://github.com/digdir/designsystemet?tab=readme-ov-file#-get-started

### 2. Install theme
The package currently is not published to registry.npmjs.org, but will be eventually. For the time being the package can be installed directly from github:

````
npm install github:brreg/designsystemet#<version>
````
_(See [tags](https://github.com/brreg/designsystemet/tags) for available versions)_

### 3. Import theme-css
````ts
import '@brreg/designsystemet/css/brreg.css'
````

## Contributing

### Updating CSS
CSS-files are automatically generated whenever changes to token-files are pushed to `main`-branch.

To update manually, run ```npm run build``` in your local repository.


### Publishing a new version
To release a new version of the package, just update the version-number in [package.json](package.json).
_(For the time being, versions are only tagged, not published to registry.npmjs.org)_
