## The Walking Tours

These instructions will get you a copy of The Walking Tours up and running on your local machine for development and testing purposes. 

### System Requirements

Below is a list of software and its versions that are needed to setup The Walking Tours locally. The links will direct you to installation of named software. If you are working with a brand new computer follow [this guide](http://installrails.com/) to get other technologies configured

* [Ruby](https://www.ruby-lang.org/en/documentation/installation/) - v2.6.2
* [Ruby on Rails](http://guides.rubyonrails.org/getting_started.html) - Rails v5.2.3
* [PostgreSQL](https://www.postgresql.org/download/) - 10 +
* [Yarn](https://yarnpkg.com/en/docs/install) - Yarn v0.27.5

### Installing

After all system requirment versions are set, follow steps to install The Walking Tours on your computer

First clone this repository to your project directory:

```sh
$ git clone git@github.com:alessandrostein/TheWalkingTours.git
```

Then change into The Walking Tours directory and install gems from Gemfile and packages from package.json

```sh
cd TheWalkingTours
bundle install
yarn install
```

Create and setup your database:

```sh
$ rails db:setup & rails db:migrate
```

Start rails server and navigate to localhost:3000.

```
$ rails server
```
## Author

 **Alessandro Stein** - [GitHub](https://github.com/alessandrostein)

See also the list of [contributors](https://github.com/alessandrostein/TheWalkingTours/graphs/contributors/) who participated in this project.

## License

This project is licensed under the MIT License
