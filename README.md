# Synopsis

**obligate** is a library for defining obligations for functions to adhere to.

[![Build Status](https://travis-ci.org/pluma/obligate.png?branch=master)](https://travis-ci.org/pluma/obligate) [![Coverage Status](https://coveralls.io/repos/pluma/obligate/badge.png?branch=master)](https://coveralls.io/r/pluma/obligate?branch=master) [![NPM version](https://badge.fury.io/js/obligate.png)](http://badge.fury.io/js/obligate) [![Dependencies](https://david-dm.org/pluma/obligate.png)](https://david-dm.org/pluma/obligate)

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
