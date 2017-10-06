**NOTE:** This package is no longer being maintained. If you are interested in taking over as maintainer or are interested in the npm package name, get in touch by creating an issue.

# Synopsis

**obligate** is a library for defining obligations for functions to adhere to.

[![stability 5 - locked](http://b.repl.ca/v1/stability-5_--_locked-blue.png)
](http://nodejs.org/api/documentation.html#documentation_stability_index) [![license - Unlicense](http://b.repl.ca/v1/license-Unlicense-lightgrey.png)](http://unlicense.org/) [![Flattr this](https://api.flattr.com/button/flattr-badge-large.png)](https://flattr.com/submit/auto?user_id=pluma&url=https://github.com/pluma/obligate)

[![Build Status](https://travis-ci.org/pluma/obligate.png?branch=master)](https://travis-ci.org/pluma/obligate) [![Coverage Status](https://coveralls.io/repos/pluma/obligate/badge.png?branch=master)](https://coveralls.io/r/pluma/obligate?branch=master) [![Dependencies](https://david-dm.org/pluma/obligate.png?theme=shields.io)](https://david-dm.org/pluma/obligate)

# Features

## Transparent

If an obligation is met, it returns its input. If it is not, it throws an `ObligationError`. This allows you to just inject obligations into your control flow and mimic pre-conditions and post-conditions, e.g. using promises:

```javascript
fetchSomeData()
.then(obligate(somePredicate, 'Predicate returned false!'))
.then(doMoreStuff, handleError);
```

## Extensible

`obligate` doesn't care where you get your predicates from. You can pass it any function that returns `true` or `false` when passed input by the obligation.

If you just want to get started, try [pred](https://github.com/pluma/pred) for the most common checks.

## Error handling

The `ObligationError` thrown by failed obligations is an actual error type, so stack traces and `instanceof` checks will behave as expected.

# Install

## With NPM

```sh
npm install obligate
```

## From source

```sh
git clone https://github.com/pluma/obligate.git
cd obligate
npm install
make test
```

# API

## obligate(predicate:Function, message:String):Function

Creates an `obligation` function that returns its input if the given `predicate` returns `true` when passed the input or throws an `ObligationError` with the given `message` if the predicate returns `false`.

## new ObligationError(message)

Creates a new `ObligationError` instance with the given `message`. The `new` keyword is optional. You probably don't want to use this constructor directly.

# Unlicense

This is free and unencumbered public domain software. For more information, see http://unlicense.org/ or the accompanying [UNLICENSE](https://github.com/pluma/obligate/blob/master/UNLICENSE) file.
