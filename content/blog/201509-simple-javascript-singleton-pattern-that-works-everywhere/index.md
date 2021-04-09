---
date: 2015-09-22 20:19:37+00:00
title: Simple javascript singleton pattern that works everywhere
slug: simple-javascript-singleton-pattern-that-works-everywhere
excerpt: How to make a real Singleton object prototype in javascript and make it really unique. What is object prototype and how the hell primitive object use extended properties.
categories: [Development]
tags: [javascript, singleton, software patterns]
---

## What's singleton and when to use it?

### Object prototypes and instances

Before describing the singleton pattern and getting in to examples how to use it in Javascript, it's good to repeat how the objects are created in javascript.

### Types, instances and object

Some say all "things" in javascript are objects, and this is almost true, even if there are some exceptions for "primitive types" like \_Number, Bolean _etc.

As *[Nick Morgan](http://skilldrick.co.uk/2011/09/understanding-typeof-instanceof-and-constructor-in-javascript/)* pointed out, javascript makes our lives better and is able to "wrap" the primitive values to an object on demand when developer tries to access the public methods or properties.

Thanks to this, instead of creating new string like this

```javascript
var foo = new String('foo');
```

we can just use this:

```javascript
var foo = 'foo';
```

If the result is almost the same, how to check if javascript doesn't really created the object when we just use foo = 'foo' method? Well, you check the "type" of both variables. For first case the type will be "object". For the second one, "string" (primitive value).

However if you'll check what is the constructor of variable *foo* from this example (foo.constructor), for both cases it would be *String* **function.**

Function because javascript objects are created by executing the functions.

Thanks to this we can simulate the traditional behavior  of classes enhancing our code with public or private properties, do something on object creation the same way as php _\_\_construct() _do or implementing the software patterns like _**Singleton**\_.

OK, so what is **type, instance and object?**

Long story short, when you ask javascript what is the type of variable foo (typeof foo) it will return the name of **primitive** type of the variable. If you created foo using second method, it will return the "string" type. If you created it using the function String, it will return "object" type.

#### Shouldn't it be "String" from a name of the class?

No, because compiler when asked to create *new String('foo') \_creates the **object** using **String function** (native in this case).* \_

### Sometimes it's good to have the one - Singleton

Singleton is a pattern of creating object that **forbids to create more than one instance**. Even if there would be a try to create another instance within same runtime, constructor should return the previously created instance.

#### When to use it?

You should create singleton class only when you are positive that there should be one and only one object. The object you create is unique at least for a runtime and also, **is meant to be used by "others"**.

To get an example use case, let's take a _user_ object. For most cases *user* **is unique for the runtime** (you can be logged to single account at a time), *user properties* are meant to be shared with entire environment and it's better to not read data from anywhere every time some algorithm wan't to know what is the logged user ID. Also, if we are dealing with a client side app, it's should be also ok to keep the user object in memory all the time, instead of creating one on demand.

## User Singleton javascript object

In many sources all over the internet you can find numbers of different solutions. However, most of then have some defects. Some of them are not Singleton at all, some only works when developer uses it in a right way. I call it singleton and it happens when developer can get already created instance using something like getInstance method, but is also still able to create new object with "new FunctionName".

To make it really good and bullet proof, I often use following pattern.

```javascript
/**
 * User object prototype is evaluated
 * right after read, so everything what's
 * inside is both local and stored in memory
 * forever.
 *
 * If this function is used to create an object
 * there's a guarantee that UserSingleton will
 * be executed just once per runtime.
 *
 * There's no way to change the User.prototype.instance
 * property, or remove the object from memory without
 * removing whole object constructor.
 */
var User = (function () {
  function UserWrapper() {
    var created = null;

    function UserSingleton() {
      this.getCreated = function () {
        return created;
      };
    }

    if (!User.prototype.instance) {
      created = new Date();
      UserWrapper.prototype.instance = new UserSingleton();
    }

    return UserWrapper.prototype.instance;
  }

  UserWrapper.prototype.instance;

  return UserWrapper;
})();
```

Above pattern guarantees that nobody will be able to create another User object within the same runtime (idiot-proof). Of course if developer wants this to be possible it can still be done by extending the UserWrapper with public method which. Since everything inside self-executing function is in the same local scope, it can still be done, but only intentionally and internally.
