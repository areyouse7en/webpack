import Vue from 'vue'
import axios from 'axios'
import httpPlugin from 'qf-vue-axios'
import config from './config'

Vue.use(httpPlugin, axios, config)
