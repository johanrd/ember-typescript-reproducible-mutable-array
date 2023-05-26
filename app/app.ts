import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'ember-typescript-reproducible-mutable-array/config/environment';
import { tracked } from '@glimmer/tracking';


export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;

  @tracked list : {}[] = []

  pushObjectToList(object: {}) {
    this.list.pushObject(object)
  }

}

loadInitializers(App, config.modulePrefix);
