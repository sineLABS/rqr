# rqr.js

App root-resolving convenience wrapper for `require` in NodeJS apps.

We have found this simple wrapper around the default require statement to be
extremely helpful in building our NodeJS apps. The simple premise is to allow
require statements to be based on your app's root directory rather than relative
to the current module. By virtue of the fact that the node_modules folder sits
directly underneath your app root, we can easily wrap require with this base
path and allow you to specify only a top-level directory and subpath to the
desired module you want to require.

## Simplest example...

```
var rqr = require('rqr'),
    Author = rqr('schemas/author');
```

This statement would work inside any module no matter how deeply nested within
your app's folder structure if the schemas folder exists (as in this example)
at the top/root level within your app.

## Using withPrefix()
If your project folder tree goes several levels deep, use withPrefix() to create
an `rqr` object based at a prefixed lower level...

```
var rqrSchemas = require('rqr').withPrefix('schemas'),
    Author = rqrSchemas('author');
```

## Using withRoot()
If you need to include a parallel project outside of your project folder tree,
use withRoot() to set a full base path for your `rqr` object...

```
var rqrProjectB = require('rqr').withRoot('~/node-apps/project-b/'),
    ModelB = rqrProjectB('schemas/model-b');
```

## Contributing

We aim to keep this module extremely simple and free of dependencies but if you
have a super cool idea to extend the capabilities with elegant, dependency-free
improvements, feel free to fork and submit your pull request.

Enjoy!
