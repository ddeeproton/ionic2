# Challenges

List all our challenges for this Angular 2 course

## 01 - Introduction

No Challenge here!

## 02 - Start with beginning

Challenge is coming.

take a look at the slides.

## 03 - Introduction to Components

Challenge is coming.

take a look at the slides.

## 04 - Templates, Interpolation & Directives

*Working based on 03 source code*

`// Todo this weekend`

## 05 - Data Binding & Pipes

*Working based on 04 source code*

1. Add image into the table with `product.imageUrl` 
2. Develop the show/hide button for images
The text should be adapted to the current stage: `Show the images` or `Hide the images`
3. Develop the filter two-way binding (input text <=> display)

## 06 - More on components

*Working based on 05 source code*

1. Implement the `IProduct` interface and use it as Data Type for our products collection
2. Develop the `productFilter` pipe.
3. Use Component lifecycle to `console.log` a message into the `onInit` event
4. Add a `styleUrl` attribute to the `ProductListComponent` component declaration

## 07 - Building Nested Component

*Working based on 06 source code*

1. Create a `starComponent` which use the provided template `shared/star.component.html`
2. Use this component into our `productListComponent` and place it next to existing `product.starRating`
3. Set-up `rating` input into `starComponent`
4. Set-up `notify` output into `starComponent`
5. Listen `notify` event from `ProductListComponent`

## 08 - Services and dependency injection

*Working based on 07 source code*

1. Develop the `ProductService` with a method `getProducts`
2. `getProducts` method will now carry the product collection (which is for now into our `ProductListComponent`)
3. Inject and use this service into the `ProductListComponent` to tretrieve the products

## 09 - Retrieving data Using HTTP

*Working based on 08 source code*

1. Import the `HttpModule` into the `AppModule`
    1. Install the `@angular/http` module
    2. Add it to the `systemjs` configuration file
    3. Import the `HttpModule` into our `AppModule`
2. Inject `Http` into our `ProductService`
3. Update the `getProducts()` method to make a `get` call to our API Service `http://localhost:3000/products`
4. Use `RxJS` methods:
    1. `map` to convert the string result into a JSON Object
    2. `do` to `console.log` the JSON Object
    3. `catch` to attach a method to handle errors
5. Change into `ProductListComponent` the way we retrieve the data from our `ProductService`

## 10 - Navigation and Routing Basics

*Working based on 09 source code*

1. Create a simple `ProductDetailComponent` with a basic template 
2. Import the `RouterModule` into the `AppModule`
    1. Install the `@angular/router` module
    2. Add it to the `systemjs` configuration file
    3. Import the `RouterModule` into our `AppModule`
    4. Use the `RouterModule.forRoot([])` syntax to describe the application's routes
3. Add the `<router-outlet></router-outlet>` instead of our `nat-products` directive into `AppComponent`
4. Add a menu to navigate through Home and Product List pages using the directive `[routerLink]` directive

## 11 - Navigating and Routing Advanced

*Working based on 10 source code*

1. Implement a `back` button on the `ProductDetailComponent` to navigate to `/products` url
2. Read `id` parameter from url in `ProductDetailComponent` using `ActivatedRoute`
3. Implement a Guard to check the validity of given `id`

## 12 - Forms

*Working based on 11 source code*

1. Create a new component called `ProductEditComponent` with a basic edit form of a product
2. Use `template driven form`
    1. Use `[(ngModel)]` on each input to create a two-way binding
    2. Add the hash operator to retrieve the current `ngModel` state (eg. `#nameInput`)
    3. Display an error box below based on `nameInput.valid`
    4. Implement a `(ngSubmit)` method to execute a function when user submit
3. Use `model driven form`
    1. Update the form to use `[ngFormModel]=formName` on the `<form>` DOM node
    2. Changes all `[(ngModel)]` into a `ngControl="inputName"`
    3. Import `ReactiveFormsModule` in your current angular module
    4. Import `FormBuilder` and `Validators` from `@angular/forms` into your component
    5. Inject into the component the `FormBuilder`
    6. Create a public `formName` variable by using `FormBuilder`
    7. Describe your forms using: `ControlGroup`
    8. Add some validators (custom?)

## 13 - Angular Modules

*Working based on 12 source code*

Following slides:

1. Create a Feature module called `ProductModule`
2. Create a Shared module called `SharedModule`
3. Refactor `AppModule` if necessary
4. Create a `ProductRoutingModule` and a `AppRoutingModule` to split down routing configuration
5. Optional: Create a `CoreComponent` to handle all services once in your application

## 14 - Angular 2 set-up revisited

No challenge here!

## 15 - Unit Testing w/ Jasmine & Karma

*Working based on 13 source code*

## 16 - Reactive Programming

No challenge here!

## 17 - Data Store with @ngrx/store

*Working based on 15 source code*