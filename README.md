# riotjs: A React- like, 2.5K user interface library

Custom tags • Virtual DOM • Full stack • IE8

[Riot](https://muut.com/riotjs/) brings custom tags to all browsers
starting from IE8. Think React + Polymer, but squeezed into 2.5K.

With the `riot` package installed, `.tag` files in your application
are automatically compiled to JavaScript and the results are included
in the client JavaScript bundle.

We do not include the browser compiler as we have a great way to have meteor
compile all on the server, if for some reason you feel this is a mistake,
please drop me a line and we'll chat about it.

## (horrendously) hackish meteor integration

you can use the provided magic RiotMeteor.Observe method to map your meteor
collections to a flat array (that riot can use), you basically do this in
your tag code:

```js
  observe = RiotMeteor.Observe.bind(this);
  observe (this.items.find({}), 'cursor');
```

And then you get a this.cursor (note that we named it) variable in your tag
code.

you *need* to do the binding, or everything will blow up without telling you
anything, then everytime the collection is modified meteor will call
`tag.update()`.

there are a few bugs with this implementation (like update not beind defined
when tag is not yet mounted) but it 'sort of works' for the default todo
list example, so I guess it'd useful.

## Using

just add it like you'd add any other meteor package and start editing `.tag`
files in your client code.

```sh
    meteor add xaiki:riotjs
```
